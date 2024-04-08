import { TestBed } from '@angular/core/testing';

import { BlockchainDataService } from './blockchain-data.service';

describe('BlockchainDataService', () => {
  let service: BlockchainDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockchainDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
