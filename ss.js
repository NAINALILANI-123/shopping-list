const itemInput = document.querySelector('#item-input');
const itemForm = document.querySelector('#item-form');
const formBtn = document.querySelector('.btn');
const itemList = document.querySelector('#item-list');




function init() {
    itemForm.addEventListener('submit', addItem);
    itemList.addEventListener('click', onItemClick);
}


init();


function addItem(e) {
    e.preventDefault();

    if (itemInput.value === "") {
        alert('Plaese enter an item');
        return;
    }

}
function createListItem(value) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(value));
    const theBtn = createListItemBtn();

    li.appendChild(theBtn);
    itemList.appendChild(li);

}
function createListItemBtn() {
    const btn = document.createElement('button');
    btn.className = 'remove-item btn-link text-red';
    const theIcon = createListItemBtnIcon;
    btn.appendChild(theIcon);

    return icon;
}
function createListItemBtnIcon() {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    return icon;
}
function onItemClick(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        const itemToBeRemoved = e.target.parentElement.parentElement;
        removeItemFromUI(itemToBeRemoved);
        removeItemFromStorage(itemToBeRemoved);
        checkUI();
    } else {
        editMode = true;
        const item-
    }
}

