/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PouchdbService } from './pouchdb.service';

describe('PouchdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PouchdbService]
    });
  });

  it('should ...', inject([PouchdbService], (service: PouchdbService) => {
    expect(service).toBeTruthy();
  }));
});
