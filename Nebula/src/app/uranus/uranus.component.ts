import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { AstreInfo } from '../astre-info';
import { Description } from '../description';
import { DescribeService } from '../describe.service';
import { TitleService } from '../title.service';
import { TitleInfo } from '../title-info';


@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.component.html',
  styleUrls: ['./uranus.component.css']
})
export class UranusComponent implements OnInit {

 
  
  public travelTitle:TitleInfo = null;
  public mainTitre:string = "";
  public maintitle:string[];
  private servicesTitre:TitleService;

  public travelDescrip:Description = null;
  public desck:string = "";
  public description:string[];
  private services:DescribeService;

  public travelInfo:AstreInfo = null;
  public img:string = "";
  public images:string[];
  private service:ApiService;

  constructor(param_nasa_service:ApiService, param_api_service:DescribeService, param_titre_service:TitleService) {
    
    this.travelTitle = new TitleInfo("uranus");
    this.servicesTitre = param_titre_service;
    this.mainTitre = "";
    this.maintitle = [];
    
    this.travelDescrip = new Description("uranus", "uranus");
    this.services = param_api_service;
    this.desck = "";
    this.description = [];

    this.travelInfo = new AstreInfo("uranus");
    this.service = param_nasa_service;
    this.img = "";
    this.images = [];
   }

  ngOnInit() {

    const obs6:Observable<string[]> = this.services.getPlanetDescrib(this.travelDescrip.planet);
    obs6.subscribe(
      (param_imag_urls:string[]) => {
        this.description = param_imag_urls;
        console.log(this.description);
        
      }
    );

    const obs7:Observable<string[]> = this.servicesTitre.getPlanetTitre(this.travelTitle.planet);
    obs7.subscribe(
      (param_tiTre_urls:string[]) => {
        this.maintitle = param_tiTre_urls;
        console.log(this.maintitle);
        
      }
    );


    

    const obs:Observable<string[]> = this.service.getPlanetImages(this.travelInfo.planet);
    obs.subscribe(
      (param_images_urls:string[]) => {
        this.images = param_images_urls;
        console.log(this.images);
      }
    );
  }

}

