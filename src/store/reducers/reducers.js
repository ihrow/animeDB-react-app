export const fetchReducer = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

export const fetchSuccessReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.data = state.data.concat(action.payload);
};

export const fetchErrorReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};