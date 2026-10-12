"use strict";

let buttonts = document.querySelectorAll("#header-section .buttons button")

buttonts.forEach(btn => {
    btn.addEventListener("click",function(e){       
        if (!this.classList.contains("active")) {
            let elem = document.querySelector("#header-section .buttons .active")
            elem.classList.remove("active");
            this.classList.add("active");



            let content = document.querySelector("#"+e.currentTarget.dataset.target)
            document.querySelector("#main-section .content-div .content:not(.d-none)").classList.add("d-none")
            content.classList.remove("d-none")
        }
    })
});
