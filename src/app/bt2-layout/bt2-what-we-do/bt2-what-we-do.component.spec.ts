import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2WhatWeDoComponent } from './bt2-what-we-do.component';

describe('Bt2WhatWeDoComponent', () => {
  let component: Bt2WhatWeDoComponent;
  let fixture: ComponentFixture<Bt2WhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2WhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2WhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
