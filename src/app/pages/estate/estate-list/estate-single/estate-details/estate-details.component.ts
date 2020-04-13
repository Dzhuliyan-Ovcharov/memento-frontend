import { Component, OnInit } from '@angular/core';
import { Estate } from 'src/app/data/models/estate.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';
import { NgxGalleryOptions, NgxGalleryImage } from '@kolkov/ngx-gallery';
import { UserProfile } from 'src/app/data/models/user-profile.model';
import { defaultImgUrl } from 'src/app/shared/constants';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss']
})
export class EstateDetailsComponent implements OnInit {

  estate: Estate;
  userProfile$: Observable<UserProfile>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  defaultImageUrl: string = defaultImgUrl;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.estate = this.route.snapshot.data.estate;
    this.userProfile$ = this.userService.getUserProfileByEmail(this.estate.email);
    this.setUpGalleryOptions();
    this.setUpGalleryImages();
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
}
