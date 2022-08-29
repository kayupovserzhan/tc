import calculator from 'app/modules/calculator/calculatorSlice';
import { authApi } from 'app/services/authApi';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  [authApi.reducerPath]: authApi.reducer,
  calculator,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
