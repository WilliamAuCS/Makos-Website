import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  content1 = [];
  content2 = [];

  constructor(private _galleryService: GalleryService, 
              private _router: Router) { }

  ngOnInit(): void {
    this._galleryService.getGallery().subscribe(
      res => 
      {
        this.content1 = res.first; 
        this.content2 = res.second;
      },
      err => 
      {
        if(err instanceof HttpErrorResponse) {
          if(err.status == 401) {
            this._router.navigate(['/register'])
          }
        }
      }
    )
  }

}
