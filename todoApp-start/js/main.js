const form = document.querySelector(`#form`);
const taskInput = document.querySelector(`#taskInput`);
const tasksList = document.querySelector(`#tasksList`);
const emptyList = document.querySelector(`#emptyList`);

let mainArray = [];


form.addEventListener(`submit`, addTask);
tasksList.addEventListener(`click`, delTask);
tasksList.addEventListener(`click`, doneTask);


//Function


function addTask(event){

    let taskText = taskInput.value;
    event.preventDefault();
    taskInput.focus();





    const objectForTasks = {
        id: Date.now(),
        name: taskInput.value,
        status: false
    };

    mainArray.push(objectForTasks);


    let templateForTask = `<li id='${objectForTasks.id}' class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${objectForTasks.name}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
</li> `;


tasksList.insertAdjacentHTML(`beforeend`, templateForTask);

taskInput.value = ``;
if(tasksList.children.length > 1){

    emptyList.classList.add(`none`);
}

};

function delTask (event){

if(event.target.dataset.action === `delete`){


    const taskForDelete = event.target.closest(`.list-group-item`);
    taskForDelete.remove();

    if(tasksList.children.length === 1){
        emptyList.classList.remove(`none`);
    }


}

};

function doneTask (event){

    if(event.target.dataset.action === `done`){

        const currentTaskStatusParent = event.target.closest(`.list-group-item`);

        const currentTaskStatus = currentTaskStatusParent.querySelector(`.task-title`);

        currentTaskStatus.classList.toggle(`task-title--done`);
    }

};


