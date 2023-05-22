import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import academiesSlice from '../../slices/academiesSlice';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = configureStore({
    reducer: {
        academies: academiesSlice
    }
  });

  return <Provider store={store}> {children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };