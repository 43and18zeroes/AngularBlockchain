import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChoiceFormComponent } from './user-choice-form.component';

describe('UserChoiceFormComponent', () => {
  let component: UserChoiceFormComponent;
  let fixture: ComponentFixture<UserChoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChoiceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserChoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
