import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;
  isImagShown: boolean = true;
  constructor() {
    this.storeInfo = new StoreData("ITI Store", "https://picsum.photos/500/200", ["Cairo", "Alexandria", "Aswan"]);
   }

  ngOnInit(): void {
  }

}
