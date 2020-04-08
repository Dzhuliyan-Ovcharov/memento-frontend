import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

    transform(value: any, sortCriteria: any): any {
        if (sortCriteria == 'floors') {
            value.sort((valueOne, valueTwo) => valueOne.number - valueTwo.number);
            value[0].number = 'Партер';
        } else if (sortCriteria == 'estateTypes') {
            value.sort(function (a, b) {
                const firstType: string = a.type.toUpperCase();
                const secontType: string = b.type.toUpperCase();
                return firstType.localeCompare(secontType);
            });
        }

        return value;
    }
}
