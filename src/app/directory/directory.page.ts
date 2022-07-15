import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  constructor(
    public router: Router,
    public http: HttpClient,
  ) {}

  ngOnInit() {
  }

  toGiftSelector(){
    async(){
      this.http.post('').profileName;
      this.http.get('').profileInformation;}
    // TODO: Add database URL and confirm profile information name - make sure sending profile information
    this.router.navigate(['/gift-selector']);
    console.log('directing')
  }

}
