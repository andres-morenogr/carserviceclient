import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAndOwnerListComponent } from './car-and-owner-list.component';

describe('CarAndOwnerListComponent', () => {
  let component: CarAndOwnerListComponent;
  let fixture: ComponentFixture<CarAndOwnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAndOwnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAndOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
