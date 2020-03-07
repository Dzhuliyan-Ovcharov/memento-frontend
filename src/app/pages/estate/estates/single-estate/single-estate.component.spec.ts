import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEstateComponent } from './single-estate.component';

describe('SingleEstateComponent', () => {
  let component: SingleEstateComponent;
  let fixture: ComponentFixture<SingleEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
