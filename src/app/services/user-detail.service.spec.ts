import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailService } from './user-detail.service';

describe('UserDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
      providers: [UserDetailService]
    });
  });

  it('should be created', inject([UserDetailService], (service: UserDetailService) => {
    expect(service).toBeTruthy();
  }));

  it('should have updatePoints function',
  inject([UserDetailService], (service: UserDetailService) => {
    expect(service.updatePoints).toBeTruthy();
  }));
});
