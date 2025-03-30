import {refs} from './refs';

const tasks = [];

export function createCard(obj){
    tasks.push(obj);
    const markUp = tasks.map(({title, description}) => {
        return `<li class= "task-list-item">
        <buton class="task-list-item-btn">Delete</buton>
        <h3>${title}</h3>
        <p>${description}</p>
      </li>`
    });
    refs.list.innerHTML = markUp;
}