import { AbstractControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export function createPromoRangeValidator(): ValidatorFn {
    return (form: AbstractControl): Validators | null => {
        const start = form.get('promoStartAt')?.value;
        const end = form.get('promoEndAt')?.value;

        if (start && end) {
            const isValid = (end?.getTime() - start?.getTime()) > 0;

            return isValid ? null : { promoPeriod: true };
        }
        return null;
    }
}
