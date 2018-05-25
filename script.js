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

var classes2 = {
  '143': ['15sp', '15au'],
  '351': ['16wi', '16sp', '17wi'],
  '311': ['16au'],
  '451': ['17sp', '17au', '18wi'],
  '452': ['18sp']
};

if (true) {
  var list = document.getElementById("ta2");
  for (var c in classes2) {
    var el = document.createElement("li");
    var cCell = document.createElement("span");
    cCell.textContent = `${c}: `;
    el.appendChild(cCell);

    var quarters = classes2[c];
    for (var i = 0; i < quarters.length; i++) {
      var a = document.createElement("a");
      a.setAttribute('href', 'https://courses.cs.washington.edu/courses/cse' + c + '/' + quarters[i] + '/');
      a.setAttribute('target', 'blank');
      a.textContent = quarters[i];
      el.appendChild(a);
      el.innerHTML += ' ';
    }
    list.appendChild(el);
  }
} else {
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
}
