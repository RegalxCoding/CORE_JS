const todoList=[
    {
    name:'make dinner ',
    dueDate:'2022-12-25'
},
{
    name:'waash clothes',
    dueDate:'2022-12-43'
}];

//renderTodoList();

function renderTodoList(){
    let todoListHTML='';

    todoList.forEach((todoObject,index)=>{
        const{name,dueDate}=todoObject;
        
       const html = `
        <div class="todo-grid">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        " class="delete">DELETE</button>
        </div>
        `;
        todoListHTML+=html;
    })
    

    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const dateinputElement=document.querySelector('.js-due-date-input');

    const name=inputElement.value;
    const dueDate=dateinputElement.value;
    

    todoList.push({ name,dueDate });

    inputElement.value='';
    dateinputElement.value='';
    renderTodoList();
}

function handlekeydown(event){
    if(event.key=='Enter'){
        addTodo();
    }
}