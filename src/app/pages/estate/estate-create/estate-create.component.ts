import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstateService } from 'src/app/data/services/estate.service';
import { ActivatedRoute } from '@angular/router';
import { Floor } from 'src/app/data/models/floor.model';
import { EstateType } from 'src/app/data/models/estate-type.model';
import { AdType } from 'src/app/data/models/ad-type.model';
import { EstateCreate } from 'src/app/data/models/estate-create.model';

@Component({
  selector: 'app-estate-create',
  templateUrl: './estate-create.component.html',
  styleUrls: ['./estate-create.component.scss']
})
export class EstateCreateComponent implements OnInit {

  estateForm: FormGroup;
  floors: Floor[];
  estateTypes: EstateType[];
  adTypes: AdType[];

  constructor(
    private fb: FormBuilder,
    private estateService: EstateService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const resolvedEstateCreateData = this.activatedRoute.snapshot.data.estateCreateData;

    this.floors = resolvedEstateCreateData.floors;
    this.estateTypes = resolvedEstateCreateData.estateTypes;
    this.adTypes = resolvedEstateCreateData.adTypes;

    this.estateForm = this.fb.group({
      price: ['', Validators.compose([Validators.min(50), Validators.required])],
      builtUpArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      pureArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      description: ['', Validators.compose([Validators.required,])],
      floorNumber: ['', Validators.required],
      estateType: ['', Validators.required],
      adType: ['', Validators.required],
      floors: ['', Validators.required]
    });
  }

  onSubmit(): void {
    let estate: EstateCreate = {
      price: this.estateForm.value.price,
      quadrature: {
        builtUpArea: this.estateForm.value.builtUpArea,
        pureArea: this.estateForm.value.pureArea
      },
      floor: {
        number: this.estateForm.value.floorNumber
      },
      adType: {
        type: this.estateForm.value.adType
      },
      estateType: {
        type: this.estateForm.value.estateType
      },
      description: this.estateForm.value.description,
      email: ''
    }

  }
}
