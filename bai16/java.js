let list = document.getElementById('task-list');
let input = document.getElementById('task-input');

function updateCount() {
    document.getElementById('remaining').textContent =
        list.querySelectorAll('input:not(:checked)').length;
}

function addTask(text, completed = false) {
    let item = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.onchange = updateCount;

    let name = document.createElement('span');
    name.textContent = text;
    label.appendChild(checkbox);
    label.appendChild(name);

    let remove = document.createElement('button');
    remove.className = 'delete';
    remove.textContent = 'Xoá';
    remove.onclick = function () {
        item.remove();
        updateCount();
    };
    item.appendChild(label);
    item.appendChild(remove);
    list.appendChild(item);
    updateCount();
}

document.getElementById('task-form').onsubmit = function (event) {
    event.preventDefault();
    if (input.value.trim() == '') return;
    addTask(input.value.trim());
    input.value = '';
    input.focus();
};