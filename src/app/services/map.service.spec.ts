import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';

describe('MapService', () => {
  let mapService: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapService],
    });
    mapService = TestBed.inject(MapService);
  });

  it('should be created', () => {
    expect(mapService).toBeTruthy();
  });

  describe('test for getCurrentPosition', () => {
    it('should save the center', () => {
      // Arrange
      spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(
        (success) => {
          const mockGeolocation = {
            coords: {
              accuracy: 0,
              altitude: 0,
              altitudeAccuracy: 0,
              heading: 0,
              latitude: 1000,
              longitude: 2000,
              speed: 0,
            },
            timestamp: 0,
          };
          success(mockGeolocation);
        }
      );
      //Act
      mapService.getCurrentPosition();
      // Assert
      expect(mapService.center.lat).toEqual(1000);
      expect(mapService.center.lng).toEqual(2000);
    });
  });
});
