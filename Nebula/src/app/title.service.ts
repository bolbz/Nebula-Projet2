import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private service:Http;

  constructor(p_service:Http) { 
    this.service = p_service;
  }
  public getPlanetTitre(param_search:string):Observable<Array<string>> {

    let url: string = "https://images-api.nasa.gov/search";
    url += "?q=" + param_search + "";
    url += "&media_type=image";
    url += "&year_start=2010";

    const obs7:Observable<Response>= this.service.get(url);

    return obs7.pipe(
      map(
        (data:Response):string[] => {
          let raw:any = data.json();
          let items:Array<any> = raw.collection.items;
          let i:number = items.length;
          let titre: Array<string> = new Array<string>();

          console.log(items[0].data);

          while (--i > -1) {
            titre.push(items[i].data[0].title);
          }
          return titre;  
        }
      )
    );
   }
}
