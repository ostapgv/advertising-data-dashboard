import { ChartConfiguration } from 'chart.js/auto';

export const chartConfiguration: ChartConfiguration<'line', number[], string> = {
  type: 'line',
  options: {
    animation: false,
    responsive: true,
    plugins: { title: { display: true, text: 'Advertising Data ETL-V' } },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        ticks: { sampleSize: 200 },
        title: { text: 'Clicks', align: 'center', display: true },
      },
      y1: {
        type: 'linear',
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: { sampleSize: 200 },
        title: { text: 'Impressions', align: 'center', display: true },
      },
    },
  },
  data: {
    labels: [],
    datasets: [
      {
        label: 'Clicks',
        backgroundColor: 'red',
        borderColor: 'red',
        data: [],
        yAxisID: 'y',
      },
      {
        label: 'Impressions',
        backgroundColor: 'blue',
        borderColor: 'blue',
        data: [],
        yAxisID: 'y1',
      },
    ],
  },
};
