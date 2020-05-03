import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInLeftPartFooterComponent } from './sign-in-left-part-footer.component';

describe('SignInLeftPartFooterComponent', () => {
  let component: SignInLeftPartFooterComponent;
  let fixture: ComponentFixture<SignInLeftPartFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInLeftPartFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInLeftPartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
