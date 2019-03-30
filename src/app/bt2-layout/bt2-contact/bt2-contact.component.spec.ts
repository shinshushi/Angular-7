import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2ContactComponent } from './bt2-contact.component';

describe('Bt2ContactComponent', () => {
  let component: Bt2ContactComponent;
  let fixture: ComponentFixture<Bt2ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
