import { Component, OnInit } from '@angular/core';
import { getPetList } from '../store/actions';
import { Store } from '@ngrx/store';
import { selectBreeds } from '../store/selectors/pets.selector';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../store/app.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.scss'
})
export class PetListComponent implements OnInit {
  breeds$: Observable<any> = new Observable<any[]>;
  breeds: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>
  ) {}
  
  ngOnInit() {
    this.breeds$ = this.store.select(selectBreeds);
    this.store.dispatch(getPetList());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  clickBreed(event: Event) {
    event.preventDefault();
  }
}
