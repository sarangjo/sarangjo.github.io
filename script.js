var classes = {
  '15sp': 143,
  '15au': 143,
  '16wi': 351,
  '16sp': 351,
  '16au': 311,
  '17wi': 351,
  '17sp': 451,
  '17au': 451,
  '18wi': 451,
  '18sp': 452,
};

var table = document.getElementById("ta");
for (var q in classes) {
  var row = document.createElement("tr");
  var qCell = document.createElement("td");
  qCell.textContent = q;
  row.appendChild(qCell);
  var cCell = document.createElement("td");
  var a = document.createElement("a");
  a.setAttribute('href', 'https://courses.cs.washington.edu/courses/cse' + classes[q] + '/' + q + '/');
  a.setAttribute('target', 'blank');
  a.textContent = classes[q];
  cCell.appendChild(a);
  row.appendChild(cCell);
  table.appendChild(row);
}
