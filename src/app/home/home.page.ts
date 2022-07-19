import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router
  ) {}

  signIn(){
    // TODO: Add database link to store user email and password
    this.router.navigate(['/directory']),
    console.log('directing')
  }
}
