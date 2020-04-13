import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estate } from 'src/app/data/models/estate.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Floor } from 'src/app/data/models/floor.model';
import { EstateType } from 'src/app/data/models/estate-type.model';
import { AdType } from 'src/app/data/models/ad-type.model';
import { EstateFeature } from 'src/app/data/models/estate-feature.model';
import { UserService } from 'src/app/core/services/user.service';
import { EstateService } from 'src/app/data/services/estate.service';
import { SnackBarHelperService } from 'src/app/core/services/snack-bar-helper.service';
import { defaultImgUrl } from 'src/app/shared/constants';
import { NgxGalleryOptions, NgxGalleryImage } from '@kolkov/ngx-gallery';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/shared/components/dialog/dialog-delete/dialog-delete.component';
import { ImageService } from 'src/app/data/services/image.service';

@Component({
  selector: 'app-estate-update',
  templateUrl: './estate-update.component.html',
  styleUrls: ['./estate-update.component.scss']
})
export class EstateUpdateComponent implements OnInit {

  private email: string;

  estate: Estate;
  estateForm: FormGroup;
  floors: Floor[];
  estateTypes: EstateType[];
  adTypes: AdType[];
  estateFeatures: EstateFeature[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  files: any[] = [];
  defaultImageUrl: string = defaultImgUrl;

  constructor(
    private userService: UserService,
    private estateService: EstateService,
    private imageService: ImageService,
    private snackBarHelperService: SnackBarHelperService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.estate = this.activatedRoute.snapshot.data.estate;

    const resolvedEstateCreateData = this.activatedRoute.snapshot.data.estateCreateData;
    this.floors = resolvedEstateCreateData.floors;
    this.estateTypes = resolvedEstateCreateData.estateTypes;
    this.adTypes = resolvedEstateCreateData.adTypes;
    this.estateFeatures = resolvedEstateCreateData.estateFeatures;
    this.estateFeatures.forEach(estateFeature => {
      this.estate.features.includes(estateFeature.feature) ?
        estateFeature.isChecked = true :
        estateFeature.isChecked = false;
    });

    this.setUpGalleryOptions();
    this.setUpGalleryImages();

    console.log(this.estate);
    this.estateForm = this.fb.group({
      price: [this.estate.price.amount, Validators.compose([Validators.min(50), Validators.required])],
      builtUpArea: [this.estate.quadrature.builtUpArea, Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      pureArea: [this.estate.quadrature.pureArea, Validators.compose([Validators.min(10), Validators.max(500), Validators.required])],
      description: [this.estate.description, Validators.required],
      floor: [this.estate.floor, Validators.required],
      estateType: [this.estate.estateType, Validators.required],
      adType: [this.estate.adType, Validators.required]
    });
  }

  onUpdate() {
    this.userService.getCurrentUser().subscribe(user => this.email = user.email);

    const checkedEstateFeatures: string[] = this.estateFeatures
      .filter(estateFeature => estateFeature.isChecked)
      .map(estateFeature => estateFeature.feature);

    const floor: number = this.estateForm.value.floor === 'Партер' ? 0 : this.estateForm.value.floor;

    const estate: Estate = {
      id: this.estate.id,
      price: {
        currency: 'EUR',
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

    this.estateService.update(estate.id, estate).subscribe(() => {
      this.snackBarHelperService.showDefaultSuccess("Успешно редактиран имот.", 'Потвърди');


      if (this.files.length) {
        let imageData = new FormData();

        this.files.forEach(file => {
          imageData.append('files', file.rawFile);
        });

        this.imageService.save(imageData, estate.id)
          .subscribe(data => {
            this.snackBarHelperService.showDefaultSuccess('Успешно добавени снимки', 'Потвърди')
          }, error => {
            console.log(error);
          }, () => this.router.navigateByUrl('/estates'));
      } else {
        this.router.navigateByUrl('/estates');
      }
    });
  }


  private setUpGalleryOptions(): void {
    this.galleryOptions = [
      {
        "thumbnailsColumns": 3,
        "thumbnailsRows": 2,
        "thumbnailsPercent": 40,
        "imagePercent": 60,
        "thumbnailMargin": 2,
        "thumbnailsMargin": 2,
        "imageArrows": true,
        "imageBullets": true,
        "previewArrows": true,
        "previewSwipe": true,
        "previewCloseOnClick": true,
        "previewCloseOnEsc": true,
        "previewKeyboardNavigation": true,
        "previewBullets": true,
        "closeIcon": "fa fa-times-circle",
        "fullscreenIcon": "fa fa-arrows-alt",
        "imageActions": [{
          icon: 'fa fa-trash delete-estate-button',
          disabled: false,
          titleText: 'Изтрий',
          onClick: this.removeImage.bind(this)
        }],
        "thumbnailActions": [{
          icon: 'fa fa-trash delete-estate-button',
          disabled: false,
          titleText: 'Изтрий',
          onClick: this.removeImage.bind(this)
        }]
      },
      { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
    ];
  }

  private setUpGalleryImages(): void {
    if (this.estate.images.length > 0) {
      console.log(this.estate.images);
      this.galleryImages = this.estate.images.map(image => {
        return {
          small: `${this.defaultImageUrl}${image}`,
          medium: `${this.defaultImageUrl}${image}`,
          big: `${this.defaultImageUrl}${image}`
        }
      });
    } else {
      this.galleryImages = [
        {
          small: this.defaultImageUrl + 'nophoto.png',
          medium: this.defaultImageUrl + 'nophoto.png',
          big: this.defaultImageUrl + 'nophoto.png'
        }
      ]
    }
  }

  removeImage(event: Event, index: number) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const imageName: string = this.galleryImages[index].big.toString().substr(defaultImgUrl.length);
        this.imageService.delete(imageName).subscribe(() => {
          this.snackBarHelperService.showDefaultSuccess('Успешно изтрита снимка', 'Потвърди');
          
          this.galleryImages.splice(index, 1);
          console.log(this.galleryImages);
        })
      }
    });
  }

  onFileUpload(files) {
    this.files.push(files);
  }

  onDeleteFiles() {
    this.files = [];
  }
}
