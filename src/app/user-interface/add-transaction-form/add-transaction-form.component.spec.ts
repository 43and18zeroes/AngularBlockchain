import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionFormComponent } from './add-transaction-form.component';

describe('AddTransactionFormComponent', () => {
  let component: AddTransactionFormComponent;
  let fixture: ComponentFixture<AddTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransactionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
