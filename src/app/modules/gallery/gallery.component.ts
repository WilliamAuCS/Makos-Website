import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  content1 = [];
  content2 = [];

  constructor(private _galleryService: GalleryService) { }

  ngOnInit(): void {
    this._galleryService.getGallery().subscribe(
      res => 
      {
        this.content1 = res.first; 
        this.content2 = res.second;
      },
      err => console.log(err)
    )
  }

}
