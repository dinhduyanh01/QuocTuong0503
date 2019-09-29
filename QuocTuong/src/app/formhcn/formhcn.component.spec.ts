import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhcnComponent } from './formhcn.component';

describe('FormhcnComponent', () => {
  let component: FormhcnComponent;
  let fixture: ComponentFixture<FormhcnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormhcnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
