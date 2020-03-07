import { Component, OnInit } from '@angular/core';
import { EstateService } from 'src/app/data/services/estate.service';
import { EstateCreate } from 'src/app/data/models/estate-create.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-estate-create',
  templateUrl: './estate-create.component.html',
  styleUrls: ['./estate-create.component.scss']
})
export class EstateCreateComponent implements OnInit {

  estateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private estateService: EstateService
  ) { }

  ngOnInit(): void {
    this.estateForm = this.fb.group({
      price: ['',  Validators.compose([Validators.min(50), Validators.required])],
      builtUpArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      pureArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      description: ['', Validators.compose([Validators.required, ])],
      floorNumber: [''],
      estateType: ['', ],
      adType: ['']
    })
  }

  onSubmit(): void {
    
  }
}
