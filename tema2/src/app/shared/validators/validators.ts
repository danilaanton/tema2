import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function EyeValidator(
  control: AbstractControl
): ValidationErrors | null {
  const eyes = control.value;
  if (!eyes || !Array.isArray(eyes) || eyes.length < 1 || eyes.length > 3) {
    return { invalidEyeColorInput: true };
  }

  switch (eyes.length) {
    case 1:
      if (eyes[0] != 'Mismatched') {
        return null;
      }
      return { unspecifiedMismatch: true };
    case 2:
      return { unspecifiedMismatch: true };
    case 3:
      if (eyes.includes('Mismatched')) {
        return null;
      }
      return { unspecifiedMismatch: true };
    default:
      return { invalidEyeColorInput: true };
  }
}
