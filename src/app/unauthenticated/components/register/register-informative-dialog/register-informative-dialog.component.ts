import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-informative-dialog',
  templateUrl: './register-informative-dialog.component.html',
  styleUrls: ['./register-informative-dialog.component.scss']
})
export class RegisterInformativeDialogComponent {

  constructor(private dialogRef: MatDialogRef<RegisterInformativeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


    onNoClick(): void {
      this.dialogRef.close();
    }
}
