import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'wasted bytes',
    },
  ],
  width: 500,
  height: 200,
};


const valueFormatter = (value) => `${value} bytes`;

export default function HorizontalBars({data}) {
  return (
    <BarChart
      dataset={[{image: data, label: 'image'}]}
      yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
      series={[{ dataKey: 'image', valueFormatter, color: '#9c27b0' }]}
      layout="horizontal"
      {...chartSetting}

    />
  );
}