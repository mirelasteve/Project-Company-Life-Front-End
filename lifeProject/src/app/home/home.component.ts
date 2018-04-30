import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environment.variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public backgroundImage: string;
  public homePageText: string;
  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
    this.backgroundImage = environment.homePageImage;
    this.homePageText = environment.homePageTextArea;
  }
}
