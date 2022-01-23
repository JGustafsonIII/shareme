import { Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { SanityService } from 'src/app/shared/sanity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges, OnInit {

  @ViewChild('scrollRef')
  public scrollRef!: TemplateRef<any>;

  showSidebar: boolean = false;
  constructor(public authService: AuthService, public sanityService: SanityService, private router: Router) { }
  
  ngOnInit(): void {
    console.warn(this.router.url);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.scrollRef) {
      this.scrollRef.elementRef.nativeElement.scrollIntoView();
    }
  }

  public toggleSidebar(show: boolean): void {
    this.showSidebar = show;
  }
}
