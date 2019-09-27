import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  faFacebook  = faFacebookF;
  faTwitter   = faTwitter;
  faInstagram = faInstagram;
  faSnapchat  = faSnapchat;
  faGlobe     = faGlobe;

  constructor() { }

  ngOnInit() {
  }

}
