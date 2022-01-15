import { Component, Input, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() currentUser?: User;
  ngOnInit(): void {
  }

}
