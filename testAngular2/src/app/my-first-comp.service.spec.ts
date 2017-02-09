/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyFirstCompService } from './my-first-comp.service';

describe('Service: MyFirstComp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyFirstCompService]
    });
  });

  it('should ...', inject([MyFirstCompService], (service: MyFirstCompService) => {
    expect(service).toBeTruthy();
  }));
});
