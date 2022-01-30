import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {BackendErrorsInteface} from "../../shared/types/backendErrors.inteface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInteface | null;
}
