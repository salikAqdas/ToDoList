let inp = document.getElementById("taskinp");
let btn = document.getElementById("submit-btn");
let list = document.getElementById("task-list");
btn.addEventListener('click',()=>{
    if(inp.value == ''){
        alert("Please enter your task!");
        return;
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inp.value;
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        list.appendChild(li);
        saveData();
    }
    inp.value = '';
})
list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , list.innerHTML);
}
function loadData(){
    list.innerHTML = localStorage.getItem("data");
}
loadData();