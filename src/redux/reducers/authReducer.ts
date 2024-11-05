import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, AuthActionTypes } from '../actions/authActions';

interface AuthState {
  loading: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
