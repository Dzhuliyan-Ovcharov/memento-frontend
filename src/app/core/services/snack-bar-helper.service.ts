import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable({
    providedIn: 'root'
})
export class SnackBarHelperService {

    constructor(private snackBar: MatSnackBar,
                private bottomSheet: MatBottomSheet) { }

    show(message: string, action: string, matSnackBarConfig: MatSnackBarConfig<any>): void {
        this.snackBar.open(message, action, matSnackBarConfig);
    }

    showDefaultSuccess(message: string, action: string): void {
        this.snackBar.open(message, action, {
            verticalPosition: 'bottom',
            horizontalPosition: 'end',
            panelClass: 'snack-success'
        });
    }

    showDefaultError(message: string, action: string): void {
        this.snackBar.open(message, action, {
            verticalPosition: 'bottom',
            horizontalPosition: 'end',
            panelClass: 'snack-error'
        });
    }
}
