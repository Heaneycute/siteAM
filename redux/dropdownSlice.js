import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDropdownOpen: false,
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    openDropdown(state) {
      state.isDropdownOpen = true;
    },
    closeDropdown(state) {
      state.isDropdownOpen = false;
    },
    toggleDropdown(state) {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
  },
});

export const { openDropdown, closeDropdown, toggleDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
