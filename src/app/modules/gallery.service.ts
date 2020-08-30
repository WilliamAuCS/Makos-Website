import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  // private _galleryURL = "https://server.makosusa.com/api/gallery";

  // FOR TESTING PURPOSES ONLY
  private _galleryURL = "http://localhost:8080/api/gallery";

  constructor(private http: HttpClient) { }

  // Returns array of gallery contents
  getGallery() {
    return this.http.get<any>(this._galleryURL);
  }

}
