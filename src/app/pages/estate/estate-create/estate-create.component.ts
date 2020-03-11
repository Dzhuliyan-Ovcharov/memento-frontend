import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstateService } from 'src/app/data/services/estate.service';
import { ActivatedRoute } from '@angular/router';
import { Floor } from 'src/app/data/models/floor.model';
import { EstateType } from 'src/app/data/models/estate-type.model';
import { AdType } from 'src/app/data/models/ad-type.model';

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
    this.floors = this.activatedRoute.snapshot.data.estateCreateData.floors;
    this.estateTypes = this.activatedRoute.snapshot.data.estateCreateData.estateTypes;
    this.adTypes = this.activatedRoute.snapshot.data.estateCreateData.adTypes;
    
    this.estateForm = this.fb.group({
      price: ['', Validators.compose([Validators.min(50), Validators.required])],
      builtUpArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      pureArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      description: ['', Validators.compose([Validators.required,])],
      floorNumber: ['', Validators.required],
      estateType: ['', Validators.required],
      adType: ['', Validators.required]
    });
  }

  onSubmit(): void {

  }
}
