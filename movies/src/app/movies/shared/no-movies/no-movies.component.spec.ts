import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMoviesComponent } from './no-movies.component';

describe('NoMoviesComponent', () => {
  let component: NoMoviesComponent;
  let fixture: ComponentFixture<NoMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
