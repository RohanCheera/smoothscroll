import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Default data
    const data = [
      { letter: 'A', frequency: 0.45 },
      { letter: 'B', frequency: 0.30 },
      { letter: 'C', frequency: 0.60 },
      { letter: 'D', frequency: 0.50 },
      { letter: 'E', frequency: 0.40 },
      { letter: 'F', frequency: 0.80 },
      { letter: 'G', frequency: 0.70 },
    ];

    const width = 1500;
    const height = 500;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    // Sort data by frequency in descending order
    const sortedData = data.sort((a, b) => b.frequency - a.frequency);

    // Define the scales
    const x = d3.scaleBand()
      .domain(sortedData.map(d => d.letter)) // Use sorted data letters
      .range([marginLeft, width - marginRight])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 1])  // Max oscillation value (1 is the max height)
      .range([0, height - marginBottom - marginTop]);

    // Select the SVG element (from the ref)
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto;");

    // Remove any existing chart elements
    svg.selectAll("*").remove();

    // Create bars with black color, starting from the base
    const bars = svg.append("g")
      .attr("fill", "black")  // Set bar color to black
    .selectAll("rect")
    .data(sortedData)
    .join("rect")
      .attr("x", (d) => x(d.letter))
      .attr("y", height - marginBottom)  // Fixed y-position at the base
      .attr("width", x.bandwidth())
      .attr("height", 0); // Set initial height to 0

    // Function to animate the bars (rising and falling)
    function animateBars() {
      bars.transition()
        .duration(1000)  // Duration for the rise/fall effect
        .attr("height", (d) => y(Math.random()))  // Animate height based on random value
        .attr("y", (d) => height - marginBottom - y(Math.random()))  // Keep bars anchored to the baseline
        .ease(d3.easeSinInOut)  // Smooth easing for the transition
        .on("end", animateBars);  // Repeat the animation
    }

    // Start the animation
    animateBars();

    // Add x-axis (with no labels or ticks)
    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickSize(0))  // Hide x-axis labels
      .style("opacity", 0);  // Hide x-axis

    // Add y-axis (with no labels or ticks)
    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickSize(0))  // Hide y-axis labels
      .style("opacity", 0);  // Hide y-axis
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
