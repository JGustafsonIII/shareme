import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public router: Router) { }
  categories = [
    { name: 'Animals' },
    { name: 'Wallpapers' },
    { name: 'Photography' },
    { name: 'Gaming' },
    { name: 'Coding' },
  ]
  isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'.split(' ');
  isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize'.split(' ');

  @Input() currentUser?: User;
  @Input() allowSidebarToggle: boolean = false;
  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter();
  // ngOnInit(): void {
  //   console.warn(this.router.url);

  // }

  public toggleSidebar(show: boolean): void {
    if (this.allowSidebarToggle) {
      this.showSidebar.emit(show);
    }
  }
}
