const clock = document.getElementById('clock');
//this two are same 
//const clock = document.querySelector('#clock') 

let date = new Date();
console.log(date.toLocaleTimeString());

//main logic
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString());
}, 1000)
