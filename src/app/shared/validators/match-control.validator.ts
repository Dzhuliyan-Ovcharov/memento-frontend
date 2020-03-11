import { FormGroup } from '@angular/forms';

export function MatchControlValidator(firstControlName: string, secondControlName: string, message: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[firstControlName];
        const matchingControl = formGroup.controls[secondControlName];

        // return if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        
        let matchObj = {
            match: true,
            message: message
        }
        // set error on matchingControl if validation fails
        control.value !== matchingControl ?
            matchingControl.setErrors(matchObj) :
            matchingControl.setErrors(null);
    }
}
