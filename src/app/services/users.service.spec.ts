import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { AppModule } from '../app.module';

describe('UsersService', () => {

  let service: UsersService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  })
    .compileComponents()
    .then(() => {
      service = TestBed.get(UsersService);
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
