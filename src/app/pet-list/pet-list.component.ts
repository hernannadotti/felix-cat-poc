import { Component, OnInit } from '@angular/core';
import { getPetList, selectBreed } from '../store/actions';
import { Store } from '@ngrx/store';
import { selectBreeds } from '../store/selectors/pets.selector';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../store/app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IBreed } from '../models/breed';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.scss'
})
export class PetListComponent implements OnInit {
  breeds$: Observable<any> = new Observable<any[]>;
  breeds: any[] = [];
  itemsQty: number = 0;
  colQty: number = 10;

  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private router:Router
  ) {}

  ngOnInit() {
    this.breeds$ = this.store.select(selectBreeds);
    this.store.dispatch(getPetList());
    this.breeds$.subscribe(breeds => {
      this.itemsQty = breeds?.length;
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  clickBreed(event: Event, selectedBreed: IBreed) {
    event.preventDefault();
    this.store.dispatch(selectBreed( {payload: {selectedBreed} }));
    this.router.navigate(['pets', selectedBreed?.id]);
  }
}
