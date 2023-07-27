function loadPieChart() {
  return new Promise(() => {
    setTimeout(() => {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);
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
    }, 2000);
  })
}
loadPieChart()