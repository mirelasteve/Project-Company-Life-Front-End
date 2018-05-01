import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../../environment.variables';
import { MainPageLinksService } from '../core/links/links.service';
import { ILinks } from '../models/links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public backgroundImageUrl: string;
  public homePageBackgroundImage: string;
  public homePageText: string;
  public socialLinks: ILinks[];
  public actionLinks: ILinks[];
  private facebookLatestPosts: SafeResourceUrl;

  constructor(private mainPageLinksService: MainPageLinksService,
              private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.backgroundImageUrl = environment.homePageImage;
    this.homePageBackgroundImage = `url(${this.backgroundImageUrl})`;
    this.homePageText = environment.homePageTextArea;
    this.facebookLatestPosts = this.sanitizer.bypassSecurityTrustResourceUrl(environment.homePageLatestPosts);

    this.mainPageLinksService.getSocialLinks().subscribe((data) => {
      this.socialLinks = data;
    });

    this.mainPageLinksService.getActionLinks().subscribe((data) => {
      this.actionLinks = data;
    });
  }
}
