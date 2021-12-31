import { Component, OnInit } from '@angular/core';
import {staff} from "../data";

@Component({
  selector: 'ormanel-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.scss']
})
export class StaffProfileComponent implements OnInit {
  staffs = staff;
  constructor() { }

  ngOnInit(): void {
  }

}
