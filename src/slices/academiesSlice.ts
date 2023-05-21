import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Academies } from '../types/batteries';

type AcademiesState = Record<string, Academies>;

const initialState: AcademiesState = {
  academies: {},
};

const academiesSlice = createSlice({
  name: 'academies',
  initialState,
  reducers: {
    academiesAdded(state: AcademiesState, action: PayloadAction<Academies>) {
      state.academies = action.payload;
    },
  },
});

export const { academiesAdded } = academiesSlice.actions;
export default academiesSlice.reducer;