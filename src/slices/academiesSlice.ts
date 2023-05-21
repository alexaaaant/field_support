import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Academies, BatteriesRaw } from '../types/batteries';
import { batteriesParser } from '../common/helpers/batteriesParser';

type AcademiesState = Record<string, Academies>;

const initialState: AcademiesState = {
  academies: {},
};

const academiesSlice = createSlice({
  name: 'academies',
  initialState,
  reducers: {
    academiesAdded(state: AcademiesState, action: PayloadAction<BatteriesRaw>) {
      const academies = batteriesParser(action.payload);
      state.academies = academies;
    },
  },
});

export const { academiesAdded } = academiesSlice.actions;
export default academiesSlice.reducer;