function loadPieChart() {
  return new Promise(() => {
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
          title: 'Partidas',
          colors: ['#fb441c', '#d3d3d3'],
          is3D: true
        };
    
        // Draw
        const chart = new google.visualization.PieChart(document.getElementById('myStats'));
        chart.draw(data, options);
      }
  })
}
loadPieChart()