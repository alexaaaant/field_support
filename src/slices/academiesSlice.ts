import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Academies, BatteriesRaw } from '../types/batteries';
import { batteriesParser } from '../common/helpers/batteriesParser';

interface AcademiesState {
  academiesPrioritized: number[];
  academies: Academies;
}

const initialState: AcademiesState = {
  academiesPrioritized: [],
  academies: {},
};

const academiesSlice = createSlice({
  name: 'academies',
  initialState,
  reducers: {
    academiesAdded(state: AcademiesState, action: PayloadAction<BatteriesRaw>) {
      const { academies, academiesPrioritized } = batteriesParser(action.payload);
      state.academies = academies;
      state.academiesPrioritized = academiesPrioritized;
    },
  },
});

export const { academiesAdded } = academiesSlice.actions;
export default academiesSlice.reducer;