import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeXeBusComponent } from './dat-ve-xe-bus.component';

describe('DatVeXeBusComponent', () => {
  let component: DatVeXeBusComponent;
  let fixture: ComponentFixture<DatVeXeBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeXeBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeXeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
