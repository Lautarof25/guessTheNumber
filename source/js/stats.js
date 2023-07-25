google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

winCounts = localStorage.getItem("win") === "" ? 0 : Number(localStorage.getItem("win"))
loseCounts = localStorage.getItem("lost") === "" ? 0 : Number(localStorage.getItem("lost"))

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Partidos', 'Total'],
    ['Ganados', winCounts],
    ['Perdidos', loseCounts]
  ]);

  // Set Options
  const options = {
    title: 'Partidas'
  };

  // Draw
  const chart = new google.visualization.PieChart(document.getElementById('myStats'));
  chart.draw(data, options);
}