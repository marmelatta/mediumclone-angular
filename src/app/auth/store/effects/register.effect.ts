import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/register.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authService: AuthService,
              private persistanceService: PersistanceService,
              private router: Router) {}

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction), //фильтруем сводя до нескольких экшнов или до одного
    switchMap(({request}) => this.authService.register(request).pipe(
      map((currentUser: CurrentUserInterface) => {
        this.persistanceService.set('accessToken', currentUser.token);
        return registerSuccessAction({currentUser});
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(registerFailureAction({errors: errorResponse.error.errors}));
      })
    ))
  ))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  ),
    {dispatch: false} // не возвращает action
  )
}
