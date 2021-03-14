import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {faAngular} from '@fortawesome/free-brands-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {DialogInfoComponent, DialogInfoData} from '../../../dialog-info/dialog-info.component';


@Component({
  selector: 'app-angular-first-app',
  templateUrl: './angular-first-app.component.html',
  styleUrls: ['./angular-first-app.component.scss'],
})
export class AngularFirstAppComponent {
  public faAngular = faAngular;

  constructor(private router: Router, private viewportScroller: ViewportScroller, public dialog: MatDialog) {
  }

  public back(): void {
    if (document.referrer.indexOf(window.location.host) !== -1) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  public onClickLocationDetailsInfo(): void {
    const data: DialogInfoData = {
      heading: 'Lokalizacja szkolenia',
      text: 'Dokładny adres szkolenia uzależniony jest od liczny uczestników jaka zapisze się na kurs, ponieważ staramy się dopasować ' +
        'rozmiar sali to ilości osób. Dlatego poinformujemy każdego zapisanego uczestnika z osobna o dokładnym adresie najpóźniej na ' +
        'tydzień przed datą rozpoczęcia kursu.'
    };
    this.dialog.open(DialogInfoComponent, {data});
  }

  public onClickScrollBtn(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
