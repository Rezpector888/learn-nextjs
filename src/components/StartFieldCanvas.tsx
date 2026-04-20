"use client";

import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let canvas = canvasRef.current!;
    let context = canvas.getContext("2d")!;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let x = w / 2;
    let y = h / 2;
    let z = (w + h) / 2;

    let n = 512;
    let star: number[][] = [];
    let star_ratio = 256;
    let star_speed = 5;
    let star_color_ratio = 1 / z;

    let cursor_x = x;
    let cursor_y = y;

    // init stars
    for (let i = 0; i < n; i++) {
      star[i] = [
        Math.random() * w * 2 - x * 2,
        Math.random() * h * 2 - y * 2,
        Math.random() * z,
        0,
        0,
      ];
    }

    function animate() {
      context.fillStyle = "black";
      context.fillRect(0, 0, w, h);


      for (let i = 0; i < n; i++) {
        let test = true;

        let star_x_save = star[i][3];
        let star_y_save = star[i][4];

        star[i][2] -= star_speed;

        if (star[i][2] <= 0) star[i][2] = z;

        star[i][3] = x + (star[i][0] / star[i][2]) * star_ratio;
        star[i][4] = y + (star[i][1] / star[i][2]) * star_ratio;

        if (
          star_x_save > 0 &&
          star_x_save < w &&
          star_y_save > 0 &&
          star_y_save < h &&
          test
        ) {
          context.strokeStyle = "white";
          context.lineWidth = (1 - star_color_ratio * star[i][2]) * 2;

          context.beginPath();
          context.moveTo(star_x_save, star_y_save);
          context.lineTo(star[i][3], star[i][4]);
          context.stroke();
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    // mouse move
    function handleMouseMove(e: MouseEvent) {
      cursor_x = e.clientX;
      cursor_y = e.clientY;
    }


    // resize
    function handleResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

//   return <canvas ref={canvasRef} />;
  return (
  <canvas
    ref={canvasRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
    }}
  />
);

}
