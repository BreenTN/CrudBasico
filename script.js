let idCounter = 0;
const form = document.getElementById('crud-form');
const tableBody = document.getElementById('crud-table');

// Manejar el evento de envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  addRow(name, age);

  form.reset();
});

// Añadir una fila a la tabla
function addRow(name, age) {
  idCounter++;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${idCounter}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>
      <button class="edit" onclick="editRow(this)">Editar</button>
      <button class="delete" onclick="deleteRow(this)">Eliminar</button>
    </td>
  `;

  tableBody.appendChild(row);
}

// Editar una fila
function editRow(button) {
  const row = button.parentElement.parentElement;
  const name = row.children[1].textContent;
  const age = row.children[2].textContent;

  document.getElementById('name').value = name;
  document.getElementById('age').value = age;

  tableBody.removeChild(row);
}

// Eliminar una fila
function deleteRow(button) {
  const row = button.parentElement.parentElement;
  tableBody.removeChild(row);
}
