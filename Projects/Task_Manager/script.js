// initialize with blank array and name Tasks
let tasks=[];


// Add Tasks to the list
function addTask()
{
const input= document.getElementById(`taskInput`);
const task= input.value.trim();
console.log(task);
if(task!=='')
{
    tasks.push(task);
    console.log(task);
    input.value='';
    displayTasks();
}
}

function editTask(index)
{
    const newTask=prompt(`Edit Task`, tasks[index]);
    //console.log(tasks[index]);
    if(newTask!==null && newTask!== '')
    {

    
    tasks[index]=newTask.trim();
    console.log(tasks[index]);
    displayTasks();
    }
}

// function remove button
function removeTask(index)
{
    tasks.splice(index,1);
    displayTasks();
}

// Display Task list
function displayTasks()
{
    const taskList = document.getElementById('taskList');
    let html=``;

    for(let i=0; i<tasks.length; i++)
    {
        html += `
        <div class="task-item">
            <span class="task-text">
                ${i+1}. ${tasks[i]}
            </span>

        </div>

        <div class="button-group">
            <button class="edit-btn" onclick="editTask(${i})">Edit</button>
        </div>
        <div class="button-group">
            <button class="delete-btn" onclick="removeTask(${i})">Delete</button>
        </div>
        `
    }
    taskList.innerHTML= html;
}