import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private service:Http;

  constructor(p_service:Http) {
    this.service = p_service;
   }

   public getPlanetImages(param_search:string):Observable<Array<string>> {

    let url: string = "https://images-api.nasa.gov/search";
    url += "?q=" + param_search + "";
    url += "&media_type=image";
    url += "&year_start=2010";

    const obs1:Observable<Response>= this.service.get(url);

    return obs1.pipe(
      map(
        (data:Response):string[] => {
          let raw:any = data.json();
          let items:Array<any> = raw.collection.items;
          let i:number = items.length;
          let images: Array<string> = new Array<string>();

          console.log(items[0].data);

          while (--i > -1) {
            images.push(items[i].links[0].href);
          }
          return images;  
        }
      )
    );
   }
}
