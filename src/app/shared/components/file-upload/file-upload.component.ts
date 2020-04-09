import { Component, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;

  @Output()
  files = new EventEmitter();

  @Output()
  isFilesDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.uploader = new FileUploader({itemAlias: 'file'});

    // This should get called everytime you drag/upload a new file
    this.uploader.onAfterAddingFile = item => {
      this.files.emit(item.file);
      item.withCredentials = true
    }

    this.hasBaseDropZoneOver = false;
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileSelectedHandler(file: any) {
    console.log('file', file)
  }

  onClearQueue() {
    this.uploader.clearQueue();
    this.isFilesDeleted.emit(true);
  }
}
