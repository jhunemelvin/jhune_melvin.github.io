import { Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-servs',
  templateUrl: './servs.component.html',
  styleUrls: ['./servs.component.scss']
})
export class ServsComponent {
  faCode = faCode;
  penIcon = faPen;
}
