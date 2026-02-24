input = document.getElementById('num-form');

input.onkeydown = (Event) => {
    if(isNaN(Event.key)){
        Event.preventDefault();
    }
}