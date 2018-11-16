import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  IsHidden= true;

onSelect(){
 this.IsHidden= !this.IsHidden;

}

IsHidden1= false;

onSelect1(){
 this.IsHidden1= !this.IsHidden1;
}

  constructor() { }

  ngOnInit() {
  }

}
