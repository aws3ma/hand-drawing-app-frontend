import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  image:any;
  imageUrl:any;
  fileSelected:any;
  onFileSelected(event: any) {
    this.image = event.files[0];
    this.imageUrl = event.files[0].objectURL;
    this.fileSelected = true;
  }
  clearImage() {
    this.imageUrl = undefined;
  }
}
