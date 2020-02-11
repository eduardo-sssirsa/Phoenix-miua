import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgebrandComponent } from './fridgebrand.component';

describe('FridgebrandComponent', () => {
  let component: FridgebrandComponent;
  let fixture: ComponentFixture<FridgebrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgebrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgebrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
