import { createSlice } from '@reduxjs/toolkit';

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState: { sections: null },
  reducers: {
    setSections: (state, action) => {
      state.sections = action.payload.sections;
    },
    deleteSections: (state) => {
      state.sections = null;
    },
  },
});

export const { setSections, deleteSections } = sectionsSlice.actions;

export default sectionsSlice.reducer;
