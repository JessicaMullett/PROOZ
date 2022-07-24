import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gift-selector',
  templateUrl: './gift-selector.page.html',
  styleUrls: ['./gift-selector.page.scss'],
})

export class GiftSelectorPage implements OnInit {

  drawerOptions: any;

  constructor(
    public navCtrl: NavController
  ) {
      this.drawerOptions = {
          handleHeight: 80,
          thresholdFromBottom: 200,
          thresholdFromTop: 200,
          bounceBack: true,
      };
    }

  ngOnInit() {
  }

}
