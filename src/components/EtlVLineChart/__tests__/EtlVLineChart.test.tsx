import { render, screen } from '@testing-library/react';
import React from 'react';
import EtlVLineChart from '../EtlVLineChart';

jest.mock('../../sdk/ChartWrapper/ChartWrapper');

describe('EtlVLineChart', () => {
  it('renders chart in canvas', () => {
    render(<EtlVLineChart clicks={[]} dates={[]} impressions={[]} />);

    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });
});
