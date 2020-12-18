
function Switch(){
    const slider = document.querySelector(".slider");
    const basic = document.querySelector("#basic");
    const professional = document.querySelector("#professional");
    const master = document.querySelector("#master");

    slider.classList.toggle("transition");

    if(slider.classList.contains("transition")){
       basic.innerText = "19.99";
       professional.innerText = "24.99";
       master.innerText = "39.99";
    }
    else {
        basic.innerText = "199.99";
        professional.innerText = "249.99";
        master.innerText = "399.99";
    }
}

