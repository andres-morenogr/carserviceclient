import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-and-owner-list',
  templateUrl: './car-and-owner-list.component.html',
  styleUrls: ['./car-and-owner-list.component.css']
})
export class CarAndOwnerListComponent implements OnInit {
  cars: Array<any>;
  owner: any;

  constructor(private carService: CarService, private giphyService: GiphyService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (let car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        if (car.ownerDni) {
          this.ownerService.getByDni(car.ownerDni).subscribe((data) => {
            this.owner = data;
            car.ownerName = this.owner.name;
            car.ownerProfession = this.owner.profession;
          });
        }
      }
    });
  }
}
