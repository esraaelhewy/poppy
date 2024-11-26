let btn = document.getElementById('dark');
let body = document.body;
btn.onclick = function(){
    // body.classList.toggle("dark");
    if(body.classList.toggle("dark")){
        btn.innerText = "Light Mode"
    }else{
        btn.innerText = "Dark Mode";
    }
}

