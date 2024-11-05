export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: { username: string; password: string };
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string; // JWT token
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Error message
}

// Union type for all auth actions
export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

export const loginRequest = (credentials: { username: string; password: string }): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (token: string): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});
