document.getElementById('recordForm').addEventListener('submit', añadirRecord);

function añadirRecord(e) {
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;
  console.log(descripcion)

  let recordatorio = {
    titulo,
    descripcion
  };

  if(localStorage.getItem('records') === null) {
    let records = [];
    records.push(recordatorio);
    localStorage.setItem('records', JSON.stringify(records));
  } else {
    let records = JSON.parse(localStorage.getItem('records'));
    records.push(recordatorio);
    localStorage.setItem('records', JSON.stringify(records));
  }

  obtenRecords();
  document.getElementById('recordForm').reset();
  e.preventDefault();
}

function borrarRecord(titulo) {
  console.log(titulo)
  let records = JSON.parse(localStorage.getItem('records'));
  for(let i = 0; i < records.length; i++) {
    if(records[i].titulo == titulo) {
      records.splice(i, 1);
    }
  }
  
  localStorage.setItem('records', JSON.stringify(records));
  obtenRecords();
}

function obtenRecords() {
  let records = JSON.parse(localStorage.getItem('records'));
  let tasksView = document.getElementById('records');
  tasksView.innerHTML = '';
  for(let i = 0; i < records.length; i++) {
    let titulo = records[i].title;
    let descripcion = records[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${titulo} - ${descripcion}
          <a href="#" onclick="borrarRecord('${titulo}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

obtenRecords();
