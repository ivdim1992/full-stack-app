import { Component, ChangeDetectionStrategy, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SnackBarService } from '@app/shared/services';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { SnackTypes } from '@app/shared/enums';

@Component({
  selector: 'app-poster-upload',
  templateUrl: './poster-upload.component.html',
  styleUrls: ['./poster-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PosterUploadComponent),
      multi: true
    }
  ]
})
export class PosterUploadComponent implements ControlValueAccessor {
  public imgPath: string | ArrayBuffer;
  private imageTypes = ['jpg', 'jpeg', 'png'];
  public imageName: string;
  public formData = new FormData();

  @Input() public description: string;

  constructor(private cd: ChangeDetectorRef, private snackBar: SnackBarService) {}

  // tslint:disable-next-line: no-any
  public onChange: (value: any) => void;

  public onFileInput(image: NgxFileDropEntry) {
    const fileFormat = image.fileEntry.name.split('.').slice(-1)[0];
    const isImage = this.imageTypes.find((el) => el === fileFormat);
    const fileEntry = image.fileEntry as FileSystemFileEntry;
    this.imageName = image.fileEntry.name;

    if (!isImage) {
      return this.snackBar.open({
        message: `Please upload a valid image format!`,
        action: 'OK!',
        type: SnackTypes.INFO
      });
    }

    this.imgPath = image.relativePath;
    fileEntry.file((file: File) => {
      this.onChange(file);
    });
  }

  // tslint:disable-next-line: no-any

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched() {
    //
  }

  public writeValue(value: string | ArrayBuffer) {
    if (value === '' || !value) return;
    this.imgPath = value;
    this.cd.markForCheck();
  }
}
