import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  facebookIcon = faFacebookF;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
  github = faGithub;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const options = {
      strings: ['Front-End Developer'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typed = new Typed(
      this.el.nativeElement.querySelector('.typewriter'),
      options
    );
  }
}
