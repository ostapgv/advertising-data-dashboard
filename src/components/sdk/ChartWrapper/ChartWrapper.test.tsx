import { render } from '@testing-library/react';
import ChartWrapper from './ChartWrapper';
import React from 'react';
import { chartConfiguration } from '../../EtlVLineChart/chart.config';

jest.mock('chart.js/auto');

describe('ChartWrapper', () => {
  it('renders chart in <canvas> using passed chart configuration', () => {
    const chartComponent = <ChartWrapper chartConfiguration={chartConfiguration} />;
    const wrapper = render(chartComponent);
    wrapper.rerender(chartComponent);

    expect(wrapper.container.querySelector('canvas')).toBeDefined();
  });
});
