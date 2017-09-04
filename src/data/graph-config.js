export function graphConfig() {
  return (
      {
      title: "Pressure Transient(s)",
      xlabel: "Time",
      ylabel: "Pressure (meters)",
      gridLineWidth: 0.1,
      labels: [
        "Date",
        "Tampines Ave10 (Stn 40)"
      ],
      connectSeparatedPoints: true,
      axes: {
        x:{
          axisLabelFontSize:9,
          axisLabelFormatter: function(ms) {
            return new Date(ms).toTimeString().split(' ')[0];
          },
          valueFormatter: function(ms) {
            return new Date(ms).toTimeString().split(' ')[0];
          }
        }
      },
      width: 1000,
      height: 400,
      legend: "always",
      labelsDiv: document.querySelector(".graph__legend"),
      underlayCallback: function(canvas, area, g) {
        const highlightStart = new Date(1468578256163);
        const highlightEnd = new Date(1468578272074);
        const bottomLeft = g.toDomCoords(highlightStart, 0);
        const topRight = g.toDomCoords(highlightEnd, 2500);
        const left = bottomLeft[0];
        const right = topRight[0];

        canvas.fillStyle = "rgba(255, 160, 0, 1)";
        canvas.fillRect(left, area.y, right - left, area.h);
      }
    }
  );
}
