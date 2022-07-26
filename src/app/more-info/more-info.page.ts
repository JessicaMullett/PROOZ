import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.page.html',
  styleUrls: ['./more-info.page.scss'],
})
export class MoreInfoPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  giftSelect(){
    // TODO: Add database link to store user email and password
    this.router.navigate(['/gift-selector']),
    console.log('directing')
  }
}
