"use strict";

let buttonAdd = document.querySelector("main button");
let input = document.querySelector("main input");
let ulList = document.querySelector("main ul");
let deleteBtn = document.querySelectorAll("main ul li i");

let datas = JSON.parse(localStorage.getItem("datas")) || [];


buttonAdd.disabled = true;

input.addEventListener("keyup", function () {
    if (input.value === "") {
        buttonAdd.disabled = true;
    }
    else{
        buttonAdd.disabled = false;
    }
});

datas.forEach((element) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let iconDel = document.createElement("i");
    let iconEdit = document.createElement("i");
    iconDel.classList.add("fa-solid");
    iconDel.classList.add("fa-trash-can");
    iconDel.classList.add("delete-icon");
    iconEdit.classList.add("fa-solid");
    iconEdit.classList.add("fa-pen");
    iconEdit.classList.add("edit-icon");

    iconDel.addEventListener("click", function () {
        iconDel.parentElement.remove();
        let index = datas.indexOf(
            this.parentElement.querySelector("p").innerText,
        );

        if (index !== -1) {
            datas.splice(index, 1);
            localStorage.setItem("datas", JSON.stringify(datas));
        }
    });

    iconEdit.addEventListener("click", function () {
        let input = document.createElement("input");
        let oldP = li.querySelector("p");
        input.classList.add("input-desing");
        input.value = oldP.innerText;

        oldP.remove();
        li.prepend(input);

        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                let p = document.createElement("p");
                p.innerHTML = `<p>${input.value}</p>`;
                input.remove();
                li.prepend(p);

                let index = datas.indexOf(oldP.innerText);
                if (index !== -1) {
                    datas[index] = input.value;
                    localStorage.setItem("datas", JSON.stringify(datas));
                }
            }
        });
    });

    p.innerText = element;
    li.classList.add("list-group-item");
    li.classList.add("li-desing");
    li.append(p);
    li.append(iconDel);
    li.append(iconEdit);
    ulList.append(li);
});

buttonAdd.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerHTML = `<p>${input.value}</p>`;
    li.classList.add("list-group-item");
    li.classList.add("li-desing");

    let iconDel = document.createElement("i");
    iconDel.classList.add("fa-solid");
    iconDel.classList.add("fa-trash-can");
    iconDel.classList.add("delete-icon");

    let iconEdit = document.createElement("i");
    iconEdit.classList.add("fa-solid");
    iconEdit.classList.add("fa-pen");
    iconEdit.classList.add("edit-icon");

    iconDel.addEventListener("click", function () {
        iconDel.parentElement.remove();
        let index = datas.indexOf(
            this.parentElement.querySelector("p").innerText,
        );

        if (index !== -1) {
            datas.splice(index, 1);
            localStorage.setItem("datas", JSON.stringify(datas));
        }
    });

    iconEdit.addEventListener("click", function () {
        let input = document.createElement("input");
        let oldP = li.querySelector("p");
        input.classList.add("input-desing");
        input.value = oldP.innerText;

        oldP.remove();
        li.prepend(input);

        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                let p = document.createElement("p");
                p.innerHTML = `<p>${input.value}</p>`;
                input.remove();
                li.prepend(p);

                let index = datas.indexOf(oldP.innerText);
                if (index !== -1) {
                    datas[index] = input.value;
                    localStorage.setItem("datas", JSON.stringify(datas));
                }
            }
        });
    });

    li.append(iconDel);
    li.append(iconEdit);
    ulList.append(li);
    datas.push(li.innerText);
    localStorage.setItem("datas", JSON.stringify(datas));
    input.value = "";
});
