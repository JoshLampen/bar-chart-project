const elementHeights = [];
const chartOptions = {};

function drawBarChart(data) {
  for (let i = 0; i < data.length; i++) {
    let object = {};
    object.height = data[i];
    elementHeights.push(object);
  }
  return elementHeights;
};

drawBarChart([95, 80, 90]);

function makeBar(bar) {
  return `
  <div style="background-color:#ff4136; border-radius:5px 5px 0 0; grid-row-start:${101 - bar.height}; grid-row-end:101;">
  </div>
  `
}

document.getElementById("chart").innerHTML = `
${elementHeights.map(makeBar).join('')}
`
