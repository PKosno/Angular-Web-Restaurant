import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  minDate = new Date();
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Wpisz wartość' :
      this.email.hasError('email') ? 'Niezgodny email' :
        '';
  }
  constructor() { }
  ngOnInit() {
  }

}
