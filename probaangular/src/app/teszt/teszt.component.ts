import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../_models/car';

@Component({
  selector: 'app-teszt',
  templateUrl: './teszt.component.html',
  styleUrl: './teszt.component.scss',
})
export class TesztComponent implements OnInit {
  http: HttpClient;
  testdata: Array<Car>;

  constructor(http: HttpClient) {
    this.http = http;
    this.testdata = [];
  }
  ngOnInit(): void {
    this.http.get<Array<Car>>('http://localhost:5217/Car').subscribe((resp) => {
      resp.map((x) => {
        let c = new Car();
        c.id = x.id;
        c.manufacturer = x.manufacturer;
        c.modelYear = x.modelYear;
        c.pictureURL = x.pictureURL;
        c.plateNumber = x.plateNumber;
        c.price = x.price;
        c.type = x.type;
        this.testdata.push(c);
      });
      console.log(this.testdata);
    });
  }
}
