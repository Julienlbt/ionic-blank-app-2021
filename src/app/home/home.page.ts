import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = 'Jull';

  public preferedColor = 'warning';

  public isListHidden = true;

  public countryList = [
    {name: 'France', mainCity: 'Paris', flag: 'french-flag.jpg', population : 67},
    {name: 'Irelande', mainCity: 'Dublin', flag: 'ireland-flag.jpg', population : 5},
    {name: 'Allemagne', mainCity: 'Berlin', flag: null, population : 85}
  ]

  constructor() {}

  public showHideList(){

    // if(this.isListHidden){
    //   this.isListHidden = false;
    // }else{
    //   this.isListHidden = true;
    // }
    this.isListHidden = !this.isListHidden;
    
  }

}
