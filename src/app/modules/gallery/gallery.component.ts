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

  // Array of json object containing product information
  content = [];
  // Array containing link to content primary image in respect to index
  content_link = [];
  // Array containing amount of secondary images in respect to index
  content_amount = [];

  constructor(private _galleryService: GalleryService, 
              private _router: Router) { }

  ngOnInit(): void {
    this._galleryService.getGallery().subscribe(
      res => 
      {
        this.content = res; 
        for(let i = 0; i < this.content.length; i++)
        {
          this.content_link.push(this.content[i].img_link);
          this.content_amount.push(this.content[i].img_amount);
        }
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
