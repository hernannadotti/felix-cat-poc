import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { EMPTY, Observable, Subscription, switchMap } from 'rxjs';
import { currentImagePet, selectedCurrentBreed } from '../store/selectors/pets.selector';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { clearSelectedBreed, clearSelectedImage, getPetImage } from '../store/actions';
import { IBreed } from '../models/breed';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  selectedBreed$: Observable<any> = new Observable<any[]>();
  currentImagePet$: Observable<any> = new Observable<any[]>();
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectedBreed$ = this.store.select(selectedCurrentBreed);
    this.currentImagePet$ = this.store.select(currentImagePet);
    this.checkNavigation();
  }

  ngOnDestroy() {
    this.store.dispatch(clearSelectedBreed());
    this.store.dispatch(clearSelectedImage());
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  checkNavigation() {
    this.selectedBreed$.pipe(switchMap((breed: IBreed) => {
      let imageReference = breed?.reference_image_id;
      if(imageReference) {
        this.store.dispatch(getPetImage({payload: { imageReference}}));
        return EMPTY;
      } else {
        this.goBack();
        return EMPTY;
      }
    })).subscribe(breed => {
      if (!Object.keys(breed).length) this.goBack();
    })
  }

  goBack(): void {
    this.router.navigate(['pets']);
  }
}
