window.updateChartData = function() {
    var newData = data.map(function(item) {
      var newValue = parseInt(document.getElementById(item.name.replace(/\s+/g, '') + 'Steps').value);
      // Ajuste del valor para que esté dentro del rango de 10 a 100
      newValue = Math.min(100, Math.max(10, newValue));
      return { ...item, steps: newValue };
    });
    series.data.setAll(newData);
  };
  