import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2LayoutComponent } from './bt2-layout.component';

describe('Bt2LayoutComponent', () => {
  let component: Bt2LayoutComponent;
  let fixture: ComponentFixture<Bt2LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
