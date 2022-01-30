import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/register.action";
import {catchError, map, of, switchMap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction), //фильтруем сводя до нескольких экшнов или до одного
    switchMap(({request}) => this.authService.register(request).pipe(
      map((currentUser: CurrentUserInterface) => {
        return registerSuccessAction({currentUser});
      }),
      catchError(() => {
        return of(registerFailureAction());
      })
    ))
  ))
}
