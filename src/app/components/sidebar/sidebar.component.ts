import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() currentUser?: User;
  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter()
  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.showSidebar.emit(true);
  }

}
