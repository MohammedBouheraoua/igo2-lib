import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { CapabilitiesService } from './capabilities.service';
import { DataSourceService } from './datasource.service';
import { WFSService } from './datasources/wfs.service';

describe('DataSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientJsonpModule],
      providers: [CapabilitiesService, DataSourceService, WFSService]
    });
  });

  it('should ...', inject([DataSourceService], (service: DataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
