import calculator from 'app/modules/calculator/calculatorSlice';
import { authApi } from 'app/services/authApi';
import authReducer from '../features/authSlice';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  calculator,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
