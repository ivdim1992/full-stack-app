import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInLeftPartComponent } from './sign-in-left-part.component';

describe('SignInLeftPartComponent', () => {
  let component: SignInLeftPartComponent;
  let fixture: ComponentFixture<SignInLeftPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInLeftPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInLeftPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
