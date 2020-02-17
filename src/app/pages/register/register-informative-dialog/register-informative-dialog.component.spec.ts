import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInformativeDialogComponent } from './register-informative-dialog.component';

describe('RegisterInformativeDialogComponent', () => {
  let component: RegisterInformativeDialogComponent;
  let fixture: ComponentFixture<RegisterInformativeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInformativeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInformativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
