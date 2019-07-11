import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../app.module';
import { UsersAdmComponent } from './users-adm.component';
import { DebugElement } from '@angular/core';

describe('UsersAdmComponent', () => {
  let component: UsersAdmComponent;
  let fixture: ComponentFixture<UsersAdmComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UsersAdmComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
