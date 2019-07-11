import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { AppModule } from '../app.module';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppModule ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
