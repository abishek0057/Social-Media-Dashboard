const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("change",(e)=>{
    if(e.target.checked){
        e.target.style.backgroundImage = "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
        document.documentElement.setAttribute("data-theme","dark")
    }
    else{
        e.target.style.backgroundImage = ""
        document.documentElement.setAttribute('data-theme', 'light');
    }
});