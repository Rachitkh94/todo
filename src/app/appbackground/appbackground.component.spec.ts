import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbackgroundComponent } from './appbackground.component';

describe('AppbackgroundComponent', () => {
  let component: AppbackgroundComponent;
  let fixture: ComponentFixture<AppbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
