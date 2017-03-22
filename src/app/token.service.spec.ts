import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService]
    });

    service = TestBed.get(TokenService);
  });

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  describe('setAccessToken', () => {
    it('should store the token in localStorage',
      () => {
        service.setAccessToken('sometoken');
        expect(localStorage.getItem('id_token')).toEqual('sometoken');
    });
  });

  describe('getAccessToken', () => {
    it('should return stored token from localStorage',
      () => {
        localStorage.setItem('id_token', 'anothertoken');
        expect(service.getAccessToken()).toEqual('anothertoken');
    });
  });
});
