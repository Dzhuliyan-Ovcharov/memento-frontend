import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstateService } from 'src/app/data/services/estate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Floor } from 'src/app/data/models/floor.model';
import { EstateType } from 'src/app/data/models/estate-type.model';
import { AdType } from 'src/app/data/models/ad-type.model';
import { Estate } from 'src/app/data/models/estate.model';
import { UserService } from 'src/app/core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstateFeature } from 'src/app/data/models/estate-feature.model';
import { ImageService } from 'src/app/data/services/image.service';

@Component({
  selector: 'app-estate-create',
  templateUrl: './estate-create.component.html',
  styleUrls: ['./estate-create.component.scss']
})
export class EstateCreateComponent implements OnInit {

  private email: string;

  estateForm: FormGroup;
  floors: Floor[];
  estateTypes: EstateType[];
  adTypes: AdType[];
  estateFeatures: EstateFeature[];
  files: any[] = [];

  constructor(
    private fb: FormBuilder,
    private estateService: EstateService,
    private userService: UserService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const resolvedEstateCreateData = this.activatedRoute.snapshot.data.estateCreateData;

    this.floors = resolvedEstateCreateData.floors;
    this.estateTypes = resolvedEstateCreateData.estateTypes;
    this.adTypes = resolvedEstateCreateData.adTypes;
    this.estateFeatures = resolvedEstateCreateData.estateFeatures;

    this.estateFeatures.forEach(feature => feature.isChecked = false);

    this.estateForm = this.fb.group({
      price: ['', Validators.compose([Validators.min(50), Validators.required])],
      builtUpArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      pureArea: ['', Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      description: ['', Validators.required],
      floor: ['', Validators.required],
      estateType: ['', Validators.required],
      adType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.userService.getCurrentUser().subscribe(user => this.email = user.email);

    const checkedEstateFeatures: string[] = this.estateFeatures
      .filter(estateFeature => estateFeature.isChecked)
      .map(estateFeature => estateFeature.feature);

    const floor: number = this.estateForm.value.floor === 'Партер' ? 0 : this.estateForm.value.floor;

    const estate: Estate = {
      price: {
        currency: 'BGN',
        amount: this.estateForm.value.price
      },
      quadrature: {
        builtUpArea: this.estateForm.value.builtUpArea,
        pureArea: this.estateForm.value.pureArea
      },
      floor: floor,
      adType: this.estateForm.value.adType,
      estateType: this.estateForm.value.estateType,
      features: checkedEstateFeatures,
      description: this.estateForm.value.description,
      email: this.email
    };

    console.log(estate);
    this.estateService.create(estate).subscribe(estate => {
      this.snackBar.open("Успешно добавен имот.", "", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'end',
        panelClass: 'snack-success'
      });

      if (this.files.length) {
        let imageData = new FormData();
        for (let i = 0; i < this.files.length; i++)
          imageData.set('file', this.files[i].rawFile);
          console.log(imageData);
          this.imageService.save(imageData, estate.id).subscribe(() => {
            this.snackBar.open("Успешно добавена снимка.", "", {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'end',
              panelClass: 'snack-success'
            });
          });
      }

      this.router.navigateByUrl('/estates')
    });
  }

  onFileUpload(files) {
    this.files.push(files);
  }

  onDeleteFiles() {
    this.files = [];
  }
}
