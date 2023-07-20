import { createCanvas } from '@napi-rs/canvas';
import { EChartsVisualizationConfig, VisualizeFunction } from '@ossinsight/widgets-types';
import { init } from 'echarts';
import * as colors from 'tailwindcss/colors';

export default function renderEcharts (width: number, height: number, visualizer: VisualizeFunction<EChartsVisualizationConfig, any, any>, data: any, parameters: any) {
  const canvas = createCanvas(width, height);

  const option = visualizer(data, {
    parameters,
    theme: { colors },
    runtime: 'server',
  });

  const echarts = init(canvas as any, undefined, {
    width,
    height,
  });

  echarts.setOption({ ...option, animation: false });

  return canvas.toBuffer('image/png');
}