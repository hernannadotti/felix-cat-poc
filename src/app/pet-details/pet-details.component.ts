import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { EMPTY, Observable, Subscription, switchMap } from 'rxjs';
import { currentImagePet, selectBreeds, selectedCurrentBreed } from '../store/selectors/pets.selector';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { clearSelectedBreed, clearSelectedImage, getPetImage, getPetList, selectBreed } from '../store/actions';
import { IBreed } from '../models/breed';
import { PetsService } from '../services/pets.service';

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
  breeds$: Observable<any> = new Observable<any[]>;
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private petService: PetsService
  ) {}

  ngOnInit() {
    this.selectedBreed$ = this.store.select(selectedCurrentBreed);
    this.currentImagePet$ = this.store.select(currentImagePet);
    this.breeds$ = this.store.select(selectBreeds);
    let breedId = this.activatedRoute.snapshot.paramMap.get('id');
    if(breedId) {
      this.initSubscriptions(breedId);
      this.store.dispatch(getPetList());
    }

  }

  ngOnDestroy() {
    this.store.dispatch(clearSelectedBreed());
    this.store.dispatch(clearSelectedImage());
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  checkNavigation() {
    const currentBreed: IBreed = {} as IBreed;
    this.subscriptions.push(
      this.selectedBreed$.pipe(switchMap((breed: IBreed) => {
        let currentBreed = breed;
        let imageReference = breed?.reference_image_id;
        if(breed && currentBreed) {
          this.store.dispatch(getPetImage({payload: { imageReference }}));
          return EMPTY;
        } else {
          this.goBack();
          return EMPTY;
        }
      })).subscribe(imageReference => {
        if (!Object.keys(currentBreed).length) this.goBack();
      })
    )
  }

  goBack(): void {
    this.router.navigate(['pets']);
  }

  initSubscriptions(breedId: string): void {
    this.subscriptions.push(
    this.breeds$.pipe(switchMap((breeds: IBreed[]) => {
      const breed = breeds.find((breed: IBreed) => breed.id === breedId);
      let imageReference = breed?.reference_image_id;
      if(breed) {
        this.store.dispatch(selectBreed({payload: { selectedBreed: breed }}));
        this.store.dispatch(getPetImage({payload: { imageReference }}));
        return EMPTY;
      }
      this.goBack();
      return EMPTY;
    }))
    .subscribe(imgReference => {
      this.checkNavigation();
    })
  )
  }
}
