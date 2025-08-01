// JavaScript Part

const todoList = [
    {
      name: 'Make dinner',
      dueDate: '2022-12-25'
    },
    {
      name: 'Wash clothes',
      dueDate: '2022-12-30' // Fixed invalid date
    }
  ];
  
  function renderTodoList() {
    let todoListHTML = '';
  
    todoList.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject;
  
      const html = `
        <div class="todo-grid">
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="delete js-delete-todo-button">DELETE</button>
        </div>
      `;
  
      todoListHTML += html;
    });
  
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
  }
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
  
    const name = inputElement.value.trim();
    const dueDate = dateInputElement.value;
  
    if (name === '' || dueDate === '') {
      alert('Please fill in both fields');
      return;
    }
  
    todoList.push({ name, dueDate });
  
    inputElement.value = '';
    dateInputElement.value = '';
  
    renderTodoList();
  }
  
  // Event listener for Add button
  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    });
  
  // Event listener for Enter key
  document.querySelector('.js-name-input')
    .addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTodo();
      }
    });
  
  // Initial render
  renderTodoList();
  