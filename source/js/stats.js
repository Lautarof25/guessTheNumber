function loadPieChart() {
  return new Promise(() => {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        const data = google.visualization.arrayToDataTable([
          ['Total games', 'Total'],
          ['Won', winCounts],
          ['Lost', loseCounts]
        ]);
    
        // Set Options
        const options = {
          title: 'Total games',
          colors: ['#fb441c', '#d3d3d3'],
          is3D: true
        };
    
        // Draw

        const chart = new google.visualization.PieChart(document.getElementById('myStats'));
        if(winCounts != 0 || loseCounts != 0) {
          chart.draw(data, options);
        }
      }
  })
}
loadPieChart()