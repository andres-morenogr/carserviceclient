import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any> = [];
  cars: Array<any>;
  ownersToDelete: Array<any> = [];
  ownersDni: Array<String>;

  constructor(private ownerService: OwnerService,
              private carService: CarService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      for (let owner of data._embedded.owners) {
        owner.id = owner._links.self.href.split('/')[4]
      }
    });
  }

  setOwnerToDelete(selected: boolean, owner: any) {
    if (selected) {
      this.ownersToDelete.push(owner);
    } else {
      this.ownersToDelete = this.ownersToDelete.filter(ownerToDelete => ownerToDelete.dni != owner.dni);
    }
  }

  deleteSelectedOwners() {
    this.deleteCarAssociationsWithOwnersToDelete();
    for (const owner of this.ownersToDelete) {
      this.deleteOwner(owner);
    }
  }

  deleteOwner(owner: any) {
    console.log(owner);
    let ownerUrl = owner._links.self.href
    this.ownerService.remove(ownerUrl).subscribe(response => {
      console.log(`Deleted owner ${owner.name}`);
    }, error => console.error(error))
  }

  deleteCarAssociationsWithOwnersToDelete() {
    this.ownersDni = this.ownersToDelete.map(owner => owner.dni);
    this.carService.getAll().subscribe(
      data => {
        this.cars = data;
        for (let car of this.cars) {
          console.log(`${car.ownerDni}`);
          console.log(`${car.name}`);
          if (this.ownersDni.includes(car.ownerDni)) {
            this.deleteCarAssociationWithOwner(car);
          }
        }
      }
    )
  }

  deleteCarAssociationWithOwner(car: any) {
    car.ownerDni = null;
    this.carService.save(car).subscribe(() => {
      console.log(`Modified car ${car.name}`);
      this.ngOnInit();
    });
  }

}
