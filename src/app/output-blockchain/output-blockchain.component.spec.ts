import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBlockchainComponent } from './output-blockchain.component';

describe('OutputBlockchainComponent', () => {
  let component: OutputBlockchainComponent;
  let fixture: ComponentFixture<OutputBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputBlockchainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
