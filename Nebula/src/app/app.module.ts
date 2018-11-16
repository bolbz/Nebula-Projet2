import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteplanComponent } from './siteplan/siteplan.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForumComponent } from './forum/forum.component';
import { ActualityComponent } from './actuality/actuality.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { TitleService } from './title.service';
import { DescribeService } from './describe.service';
import { ApiService } from './api.service';
import { MercuryComponent } from './mercury/mercury.component';
import { VenusComponent } from './venus/venus.component';
import { EarthComponent } from './earth/earth.component';
import { MoonComponent } from './moon/moon.component';
import { MarchComponent } from './march/march.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';
import { UranusComponent } from './uranus/uranus.component';
import { NeptuneComponent } from './neptune/neptune.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteplanComponent,
    ConnexionComponent,
    InscriptionComponent,
    HomePageComponent,
    ForumComponent,
    ActualityComponent,
    WelcomeComponent,
    MercuryComponent,
    VenusComponent,
    EarthComponent,
    MoonComponent,
    MarchComponent,
    JupiterComponent,
    SaturnComponent,
    UranusComponent,
    NeptuneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      [
      {
        "path": "siteplan",
        "component": SiteplanComponent,
        "pathMatch": 'full'
      },
      {
        "path": "homepage",
        "component": HomePageComponent,
        "pathMatch": 'full' 
      },
      {
        "path": "connexion",
        "component": ConnexionComponent,
        "pathMatch": 'full'
      },
      {
        "path": "inscription",
        "component": InscriptionComponent,
        "pathMatch" : 'full'
      },
      {
        "path": "forum",
        "component": ForumComponent,
        "pathMatch": 'full'
      },
      {
        "path": "actuality",
        "component": ActualityComponent,
        "pathMatch": 'full'
      },
      {
        "path": "",
        "component": HomePageComponent,
        "pathMatch": 'full'
      },
      {
        "path": "mercury",
        "component": MercuryComponent,
        "pathMatch": 'full' 
      },
      {
        "path": "venus",
        "component": VenusComponent,
        "pathMatch": 'full'
      },
      {
        "path": "earth",
        "component": EarthComponent,
        "pathMatch": 'full'
      },
      {
        "path": "moon",
        "component": MoonComponent,
        "pathMatch": 'full'
      },
      {
        "path": "march",
        "component": MarchComponent,
        "pathMatch": 'full'
      },
      {
        "path": "jupiter",
        "component": JupiterComponent,
        "pathMatch": 'full'
      },{
        "path": "saturn",
        "component": SaturnComponent,
        "pathMatch": 'full'
      },
      {
        "path": "uranus",
        "component": UranusComponent,
        "pathMatch": 'full'
      },
      {
        "path": "neptune",
        "component": NeptuneComponent,
        "pathMatch": 'full'
      },

    ],
    {
      'useHash': true
    }
    )
  ],
  providers: [ApiService,DescribeService,TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
