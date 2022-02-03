import React from 'react';
import Dashboard from './Dashboard';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as csvUtils from '../../utils/csvUtils';
import { ParseMeta, ParseResult } from 'papaparse';

jest.mock('../sdk/ChartWrapper/ChartWrapper');

const rawData = [
  ['Dates', 'DataSources', 'Campaigns', 'Clicks', 'Impressions'],
  ['01.01.2019', 'Facebook Ads', 'Like Ads', '274', '1979'],
  ['01.01.2019', 'Facebook Ads', 'Offer Campaigns - Conversions', '10245', '764627'],
  ['01.01.2019', 'Google Adwords', 'B2B - Leads', '7', '444'],
  ['01.01.2019', 'Google Adwords', 'GDN Prospecting - App - Prio 1 Offer', '16', '12535'],
  ['01.01.2019', 'Google Adwords', 'GDN Prospecting - App - Prio 2 Offer', '93', '18866'],
];

describe('Dashboard', () => {
  beforeEach(async () => {
    jest
      .spyOn(csvUtils, 'parseRemoteCsvFile')
      .mockResolvedValue({ data: rawData, errors: [], meta: {} as ParseMeta } as ParseResult<string[]>);
    await act(async () => {
      render(<Dashboard />);
    });
  });

  it('renders info block', () => {
    expect(screen.getByText('- Select zero to N Datasources')).toBeInTheDocument();
    expect(screen.getByText('- Select zero to N Campaigns')).toBeInTheDocument();
    expect(screen.getByText('(Where zero means all)')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Hitting apply, filters the chart to show a timeseries for both Clicks and Impressions for given Datasources and Campaigns - logical AND',
      ),
    ).toBeInTheDocument();
  });

  it('renders chart filters', async () => {
    await waitFor(() => expect(screen.queryByText('Facebook Ads')).toBeInTheDocument());
    expect(screen.queryByText('B2B - Leads')).toBeInTheDocument();
  });

  it('renders chart', async () => {
    await waitFor(() => expect(screen.queryByTestId('chart-wrapper')).toBeInTheDocument());
  });

  it('re-renders the chart on apply button click', async () => {
    await waitFor(() => expect(screen.queryByText('Facebook Ads')).toBeInTheDocument());
    const applyButton = screen.getByText('Apply');
    const canvasRenderIndex = screen.getByTestId('canvas-render-index').textContent;

    act(() => {
      fireEvent.click(applyButton, {});
    });

    await waitFor(() => {
      expect(screen.getByTestId('canvas-render-index').textContent).not.toEqual(canvasRenderIndex);
    });
  });
});
