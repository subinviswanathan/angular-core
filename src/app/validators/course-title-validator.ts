import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { PostsService } from "../services/posts.service";
import { map } from 'rxjs/operators';

export function cousrseTitleValidator(course: PostsService): AsyncValidatorFn {
    console.log(course);
    return (control: AbstractControl) => {
        return course.loadPosts()
            .pipe(
                map(course => {
                    return course ? null : { titleExists: true };
                })
            )
        // return of('2').pipe(
        //     map(result => result ? { invalid: true } : null)
        // );
    }

}
