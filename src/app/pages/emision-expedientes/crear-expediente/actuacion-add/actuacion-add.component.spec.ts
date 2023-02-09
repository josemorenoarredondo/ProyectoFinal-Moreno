import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionAddComponent } from './actuacion-add.component';

describe('ActuacionAddComponent', () => {
  let component: ActuacionAddComponent;
  let fixture: ComponentFixture<ActuacionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuacionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuacionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
