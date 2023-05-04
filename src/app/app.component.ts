import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',]
})
export class AppComponent {
  title = 'my-portfolio';
  faBars = faBars;
  faXmark = faXmark;
  isMenuOpen = false;

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/Jhune-Melvin-Karunungan.pdf');
    link.setAttribute('download', 'Jhune-Melvin-Karunungan.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    console.log('Download started');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
