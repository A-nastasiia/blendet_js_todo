import { refs } from "./refs";
import { createCard } from "./render-tasks";

refs.form.addEventListener('submit', submitHandler);

function submitHandler(event){
    event.preventDefult();
    const title = this.elements.taskName.value.trim();
    const description = this.elements.taskDescription.value.trim();
    if (title && description){
        createCard({});
        this.reset();
    }
}