var allPromises = [];
for (const element of htmlData) {
  var input = document.getElementById(element);
  if (input.toLowerCase().startsWith('<img')) {
    allPromises.push(html2canvas(input));
  } else {
    allPromises.push(Promise.resolve(input));
  }
}

Promise.all(allPromises).then(response => {
  response.forEach(input => {
    if (input instanceof String) {
      doc.setFont(fontName, 'bold');
      var isH3 = input.toLowerCase().startsWith('<h3>');
      writeText(input, isH3 ? h3_fontSize : h5_fontSize, isH3 ? 5 : 3);
    } else {
      imgData = input.toDataURL('image/jpeg', 1.0);
      doc.addImage(imgData, 'PNG', left_edge_distance, position_mm, 100, 100);
    }
  });
  doc.save('download.pdf');
});
