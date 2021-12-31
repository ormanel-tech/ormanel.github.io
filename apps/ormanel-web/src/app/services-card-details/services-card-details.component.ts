import { Component, OnInit } from '@angular/core';
import { services, staff } from "../data";

@Component({
  selector: 'ormanel-services-card-details',
  templateUrl: './services-card-details.component.html',
  styleUrls: ['./services-card-details.component.scss']
})
export class ServicesCardDetailsComponent implements OnInit {
  service = services;
  constructor() { }

  ngOnInit(): void {
  }

}
