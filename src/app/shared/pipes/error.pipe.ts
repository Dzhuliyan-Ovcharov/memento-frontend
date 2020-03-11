import { Pipe, PipeTransform } from '@angular/core';

const validationMsgs: any = {
  required: 'Задължително поле.',
  email: 'Невалиден имейл.',
  matchObj: data => `${data.message}`,
  minlength: data => `Моля добавете най-малко ${data.requiredLength} символа.`,
  maxlength: data => `Максималната дължина е ${data.requiredLength} символа.`
};

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {

  transform(errors: any): string[] {

    let errorMsgs = [];
    for (const key in errors) {
      console.log(errors[key]);
      const message =
        typeof validationMsgs[key] === 'string' ?
          validationMsgs[key] :
          validationMsgs[key](errors[key]);

      errorMsgs.push(message);
    }

    return errorMsgs;
  }

}
