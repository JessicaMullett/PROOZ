import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gift-selector',
  templateUrl: './gift-selector.page.html',
  styleUrls: ['./gift-selector.page.scss'],
})

export class GiftSelectorPage implements OnInit {

  drawerOptions: any;

  constructor(
    public navCtrl: NavController,
    public router: Router,
  ) {
      this.drawerOptions = {
          handleHeight: 90,
          thresholdFromBottom: 200,
          thresholdFromTop: 200,
          bounceBack: true,
      };
    }

  ngOnInit() {
  }

  moreInfo(){
    this.router.navigate(['/more-info']),
    console.log('directing')
  }

}
