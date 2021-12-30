document.addEventListener("DOMContentLoaded", function() {
  console.log();
}

document.querySelector('form').addEventListener('click', function(event)) {
  document.getElementByID('post').event.preventDefault();
}, false);

document.querySelector('create-task-form').addEventListener
('click', () => console.log(Success!))

function handDelete(t){
  t.target.parentNode.remove()
}

function addEventListenerToDeleteButtons(){
  let buttons = document.getElementsByClassName
  ('delete_btn')
  for(let btn of buttons){
    btn.addEventListener('click', handDelete)
  }
}
addEventListenerToDeleteButtons()
