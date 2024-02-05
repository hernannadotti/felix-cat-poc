import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { selectedCurrentBreed } from '../store/selectors/pets.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  selectedBreed$: Observable<any> = new Observable<any[]>();

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.selectedBreed$ = this.store.select(selectedCurrentBreed);
  }
}
