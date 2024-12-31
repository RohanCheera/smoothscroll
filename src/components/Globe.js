import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature, mesh } from "topojson-client";

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Setup Canvas and Context
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set smaller dimensions for the globe
    const width = 300; // Smaller width
    const height = 300; // Smaller height

    // Adjust projection scale to make the globe smaller
    const projection = d3
      .geoOrthographic()
      .scale(90) // Smaller scale value for smaller globe
      .translate([width / 2, height / 2]) // Center the globe
      .precision(0.1);

    const path = d3.geoPath().projection(projection).context(context);

    // Load GeoJSON Data
    d3.json("https://d3js.org/world-110m.v1.json").then((world) => {
      const land = feature(world, world.objects.land);
      const countriesMesh = mesh(
        world,
        world.objects.countries,
        (a, b) => a !== b
      );

      // Render Animation
      d3.timer((t) => {
        projection.rotate([360 * ((t % 10000) / 10000)]);

        context.clearRect(0, 0, width, height); // Clear the canvas

        context.lineWidth = 1;

        context.fillStyle = "#fff"; // Background color
        context.fillRect(0, 0, width, height);

        context.strokeStyle = "#222"; // Outline of the globe
        context.beginPath();
        path({ type: "Sphere" });
        context.stroke();

        context.fillStyle = "#222"; // Land color
        context.beginPath();
        path(land);
        context.fill();

        context.strokeStyle = "#fff"; // Country borders
        context.beginPath();
        path(countriesMesh);
        context.stroke();
      });
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <canvas ref={canvasRef} width="350" height="350" /> {/* Adjusted canvas size */}
    </div>
  );
};

export default Globe;
