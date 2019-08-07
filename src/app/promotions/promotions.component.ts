import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  constructor() { }
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
    }
  }

  promotions = [
    {
      text: "W poniedziałki każda pizza z karty menu w cenie 27,99 do godz.16:00",
    },
    {
      text: "Podczas zamówienia druga pizza 50% taniej!",
    },
    {
      text: "Przy zamówieniach powyżej 50 PLN, otrzymujesz rabat 10% na następne zamówienie!",
    },
  ]
  ngOnInit() {

  }

}
