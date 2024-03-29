import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsComponent } from './pet-details.component';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from '../store/reducers';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';

describe('PetDetailsComponent', () => {
  let component: PetDetailsComponent;
  let fixture: ComponentFixture<PetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetDetailsComponent],
      providers: [provideHttpClient(), provideStore(reducers, { metaReducers }), provideRouter(routes) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
