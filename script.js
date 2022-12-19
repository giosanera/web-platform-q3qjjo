// membuat sebuah funtion untuk menangkap value dari input form

// state penampung data dalam bentuk array
let taskData = [];

function handleSubmit(event) {
  // mencegah form untuk reload page / default form action
  event.preventDefault();

  //  kita tangkap element input field dengan id = "task"
  let inputElement = document.getElementById('task');

  // push data input user ke dalam array "taskData"
  taskData.push(inputElement);
}
