import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {LoginRequestInterface} from "../../types/loginRequestInterface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {BackendErrorsInteface} from "../../../shared/types/backendErrors.inteface";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorsInteface}>()
)
