import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Book } from '../_models/book';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from '../_services/file-upload.service';

interface genreOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-library-list-admin-add-book-dialog-box',
  templateUrl: './library-list-admin-add-book-dialog-box.component.html',
  styleUrls: ['./library-list-admin-add-book-dialog-box.component.css']
})
export class LibraryListAdminAddBookDialogBox implements OnInit {
  local_data: Book;
  selectedValue: any;
  action: string;

  addNewBookForm: FormGroup;

  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  genres: genreOptions[] = [
    {value: "Fiction", viewValue: "Fiction"},
    {value: "Non-Fiction", viewValue: "Non-Fiction"},
    {value: "Historical", viewValue: "Historical"},
    {value: "Young Adult", viewValue: "Young Adult"},
    {value: "Kids", viewValue: "Kids"}
  ]

  constructor( 
    public dialogRef: MatDialogRef<LibraryListAdminAddBookDialogBox>,
    @Optional() @Inject(MAT_DIALOG_DATA) public book: Book, private uploadService: FileUploadService) { 
      this.local_data = {...book};      
    }

  ngOnInit() {
    this.addNewBookForm = new FormGroup({
      bookName: new FormControl('', [Validators.required]),
      authorLastName: new FormControl('', [Validators.required]), 
      authorFirstName: new FormControl('', [Validators.required]), 
      isbn: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.max(9999999999)]), 
      genre: new FormControl('', [Validators.required]), 
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]), 
      numInStock: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.max(50)]), 
      imagePath: new FormControl('')
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addNewBookForm.controls[controlName].hasError(errorName);
  }

  doAction() {
    
    this.dialogRef.close({
      data:this.local_data,
    });
  }

  closeDialog() {
    this.dialogRef.close({
      event:'Cancel'
    });
  }

  onChange(ev: any) {
    this.selectedValue = ev.source.selected.viewValue;
    //console.log('User selected option -> ' + this.selectedValue);

    this.local_data.genre = this.selectedValue;
    //console.log(this.local_data);
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }
  
  uploadFiles(): void {
    this.message = [];
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

 upload(idx: number, file: File): void {
  this.progressInfos[idx] = { value: 0, fileName: file.name };

  if (file) {
    this.uploadService.upload(file).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          const msg = 'Uploaded the file successfully: ' + file.name;
          this.message.push(msg);
          this.imageInfos = this.uploadService.getFiles();
        }
      },
      error: (err: any) => {
        this.progressInfos[idx].value = 0;
        const msg = 'Could not upload the file: ' + file.name;
        this.message.push(msg);
      }});
  }
}

}
