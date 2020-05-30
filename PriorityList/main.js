const priorityList = function() {
  let number = 1;
  let temp = 0;
  const list = [];

  const button = document.getElementById('button');
  const input = document.getElementById('input');
  const taskPriority = document.getElementById('priority');
  const ul = document.getElementById('ul');

  function addTask() {
    button.addEventListener('click', function() {

      let text = input.value;

      if (input.value === '' || taskPriority.value === '') {
        return
      }

      newTask(text);
      prov();
      input.value = '';
      priority.value = '';
      input.focus();

    })
  }

  function newTask() {

    const task = {
      id: number++,
      text: input.value,
      taskPriority: taskPriority.value

    }

    const li = document.createElement('li');
    li.textContent = task.text;
    li.classList.add('list__task');

    const span = document.createElement('span');
    span.textContent = ` (Приоритет ${task.taskPriority})`;
    span.classList.add('list__span');

    const buttonLike = document.createElement('button');
    buttonLike.textContent = ' + ';

    const buttonDislike = document.createElement('button');
    buttonDislike.textContent = ' - ';

    buttonLike.addEventListener('click', function() {
      task.taskPriority++;
      span.textContent = ` (Приоритет ${task.taskPriority})`;
      prov();
    })

    buttonDislike.addEventListener('click', function() {
      task.taskPriority--;
      span.textContent = ` (Приоритет ${task.taskPriority})`;
      prov();
    })

    li.appendChild(span)
    li.appendChild(buttonLike);
    li.appendChild(buttonDislike);
    ul.appendChild(li)

    list.push(task);
    console.log(list)

  }
  let sp1, sp2;

  function prov() {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i].taskPriority < list[j].taskPriority) {
          let sp1 = i;
          let sp2 = j;
          temp = list[j];
          list[j] = list[i];
          list[i] = temp;
          ul.insertBefore (list[sp1], list[sp2])
        }
      }
    }
    console.log(list)
  }

  return {
    addTask: addTask
  }
}()
