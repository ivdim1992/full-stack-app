import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRightPartComponent } from './sign-in-right-part.component';

describe('SignInRightPartComponent', () => {
  let component: SignInRightPartComponent;
  let fixture: ComponentFixture<SignInRightPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInRightPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInRightPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
