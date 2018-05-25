var classes = [
  {
    'num': '143',
    'quarters': ['15sp', '15au']
  }, {
    'num': '351',
    'quarters': ['16wi', '16sp', '17wi']
  }, {
    'num': '311',
    'quarters': ['16au']
  }, {
    'num': '451',
    'quarters': ['17sp', '17au', '18wi']
  }, {
    'num': '452',
    'quarters': ['18sp']
  }
];

var list = document.getElementById("ta");
for (var i = 0; i < classes.length; i++) {
  var classData = classes[i];

  var el = document.createElement("li");
  var cCell = document.createElement("span");
  cCell.textContent = `${classData.num}: `;
  el.appendChild(cCell);

  var quarters = classData.quarters;
  for (var j = 0; j < quarters.length; j++) {
    var a = document.createElement("a");
    a.setAttribute('href', 'https://courses.cs.washington.edu/courses/cse' + classData.num + '/' + quarters[j] + '/');
    a.setAttribute('target', 'blank');
    a.textContent = quarters[j];
    el.appendChild(a);
    el.innerHTML += ' ';
  }
  list.appendChild(el);
}
