import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService],
    });
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getValue', () => {
    it('should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Test for setValue', () => {
    it('should change the value', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('newValue');
      expect(service.getValue()).toBe('newValue');
    });
  });

  describe('Test for getPromiseValue', () => {
    it('should change the value with doneFn', (doneFn) => {
      service.getPromiseValue().then((value) => {
        //assert
        expect(value).toBe('promise value');
        doneFn();
      });
    });

    it('should change the value with async', async () => {
      const rta = await service.getPromiseValue();
      expect(rta).toBe('promise value');
    });

    it('should return "observable value"', (doneFn) => {
      service.getObservableValue().subscribe((value) => {
        expect(value).toBe('observable value');
        doneFn();
      });
    });
  });
});
