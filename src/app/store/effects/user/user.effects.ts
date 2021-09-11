import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';



@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[User] Load Users'),
    mergeMap(() => this.usersService.getAll()
      .pipe(
        map(users => ({ type: '[User] Load Users Success', payload: users })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}

}
