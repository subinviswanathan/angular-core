import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  @Input('requiredFileType') requiredFileType: string | undefined;

  fileName = '';
  uploadProgress: number | null = null;
  fileUploadError = false;
  disabled = false;
  onChange: any;
  onTouched: any;

  constructor(private http: HttpClient) { }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  onFileSelected(ev: any) {
    const file: File = ev.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);

      this.fileUploadError = false;

      this.http.post('https://jsonplaceholder.typicode.com/posts', formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          catchError(error => {
            this.fileUploadError = true;
            return of(error);
          }),
          finalize(() => {
            this.uploadProgress = null;
          })
        ).subscribe(events => {
          if (events.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (events.loaded / events.total));
          }
        })

      console.log(this.fileName);
    }
  }



}
