import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApp1Component } from './my-app1.component';

describe('MyApp1Component', () => {
  let component: MyApp1Component;
  let fixture: ComponentFixture<MyApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyApp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
