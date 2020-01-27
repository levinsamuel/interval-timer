import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Timer from '../src';

it('Label changes depending on started state.', () => {
  const {queryByLabelText, getByLabelText } = render(
    <Timer seconds={100} />,
  );

});