import { Component, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SanityService } from 'src/app/shared/sanity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  @ViewChild('scrollRef')
  public scrollRef!: TemplateRef<any>;

  showSidebar: boolean = false;
  constructor(public authService: AuthService, public sanityService: SanityService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.scrollRef) {
    //   this.scrollRef.elementRef.nativeElement.scrollIntoView();
    // }
  }

  public toggleSidebar(show: boolean): void {
    this.showSidebar = show;
  }
}
