import { Component, Input, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {
  @Input() currentUser?: User;
  constructor() { }

  ngOnInit(): void {
  }

}
