import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true
    }
  ]
})
export class ConfirmEqualValidatorDirective implements Validator {
  constructor() {}

  // Until lesson 29
  // @Input('appConfirmEqualValidator') confirmPassword: string;
  // validate(control: AbstractControl): {[key: string]: any } | null {
  //   const controlToCompare = control.parent.get(this.confirmPassword);
  //   if (controlToCompare && controlToCompare.value !== control.value ) {
  //     return { 'notEqual': true };
  //   }
  //   return null;
  // }

  validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
    const passwordField = passwordGroup.get('password');
    const confirmPasswordField = passwordGroup.get('confirmPassword');
    if (
      passwordField &&
      confirmPasswordField &&
      passwordField.value !== confirmPasswordField.value
    ) {
      return { notEqual: true };
    }
    return null;
  }
}
