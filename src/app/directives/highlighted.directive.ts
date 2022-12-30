import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {
  @Input('highlight') isHighligh = false;

  @Output() toggleHighlig = new EventEmitter<boolean>();

  constructor() { }

  @HostBinding('className')
  get cssClass() {
    return 'highlight'
  }

  @HostBinding('class.highlig')
  get css2Class() {
    return this.isHighligh;
  }

  @HostBinding('style.border')
  get styleClass() {
    return '1px solid red';
  }

  @HostListener('mouseover', ['$event'])
  mouseOver(_e: any) {
    this.isHighligh = true;
    this.toggleHighlig.emit(this.isHighligh);
  }

}
