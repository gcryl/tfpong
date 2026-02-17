import { useEffect, useMemo, useRef } from "react";
import * as d3 from 'd3';
import './ScoreChart.css';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type LineChartProps = {
  width: number;
  height: number;
  data: number[];
  title?: string;
};

export const ScoreChart = ({ width, height, data, title }: LineChartProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([-21, 21])
      .range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const xMax = data.length
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, xMax || 0])
      .range([0, boundsWidth]);
  }, [data, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale).ticks(5);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale).tickValues([-20, -10, 0, 10, 20])
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  // Build the line
  const lineBuilder = d3
    .line<number>()
    .x((_, i, __) => xScale(i))
    .y((d, _, __) => yScale(d))
  const linePath = lineBuilder(data);
  if (!linePath) {
    return null;
  }


  return (
    <div>
      <svg width={width} height={height}>
        {title && <title>{title}</title>}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <path
            d={linePath}
            stroke="#9a6fb0"
            fill="none"
            className="solid"
          />
          <line
            x1={0}
            x2={xScale(data.length)}
            y1={yScale(0)}
            y2={yScale(0)}
            stroke="#048d68"
            className="dashed"
          />
          <line
            x1={0}
            x2={xScale(data.length)}
            y1={yScale(21)}
            y2={yScale(21)}

            className="dashed"
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};
