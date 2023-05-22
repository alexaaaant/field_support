import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Academies, BatteriesRaw } from '../types/batteries';
import { batteriesParser } from '../common/helpers/batteriesParser';

interface AcademiesState {
  academiesPrioritized: number[];
  academies: Academies;
  selectedAcademy: number | null;
}

const initialState: AcademiesState = {
  academiesPrioritized: [],
  academies: {},
  selectedAcademy: null,
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

    academySelected(state: AcademiesState, action: PayloadAction<number>) {
      state.selectedAcademy = action.payload;
    },
  },
});

export const { academiesAdded, academySelected } = academiesSlice.actions;
export default academiesSlice.reducer;