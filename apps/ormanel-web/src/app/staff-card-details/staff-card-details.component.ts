import { Component, OnInit } from '@angular/core';
import { staff } from "../data"; 

@Component({
  selector: 'ormanel-staff-card-details',
  templateUrl: './staff-card-details.component.html',
  styleUrls: ['./staff-card-details.component.scss']
})
export class StaffCardDetailsComponent implements OnInit {
  staff = staff;
  constructor() { }

  ngOnInit(): void {
  }

}
