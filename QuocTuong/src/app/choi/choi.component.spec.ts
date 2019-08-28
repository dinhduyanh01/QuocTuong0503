import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiComponent } from './choi.component';

describe('ChoiComponent', () => {
  let component: ChoiComponent;
  let fixture: ComponentFixture<ChoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
