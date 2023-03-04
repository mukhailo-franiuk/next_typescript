let getInputs = selector => document.querySelector(selector);
let getButtons = selector => document.querySelector(selector);
getInputs('#login').addEventListener('input', function () {
    if (/^[a-zA-Z0-9\-]{3,}$/g.test(getInputs('#login').value)) {
        getInputs('#login').style.borderColor = "#1ec01e";
        getInputs('#login').setAttribute("name", "check-login");
    }
    else {
        getInputs('#login').style.borderColor = "red";
        getInputs('#login').removeAttribute("name");
    }
});
getInputs('#pass').addEventListener('input', function () {
    if (/^[a-zA-Z0-9\-]{3,}$/g.test(getInputs('#pass').value)) {
        getInputs('#pass').style.borderColor = "#1ec01e";
        getInputs('#pass').setAttribute("name", "check-password");
    }
    else {
        getInputs('#pass').style.borderColor = "red";
        getInputs('#pass').removeAttribute("name");
    }
});
getInputs('#email').addEventListener('input', function () {
    if (/^[a-zA-Z0-9\-\_]{3,}\@[a-zA-Z0-9\-\_]{2,}\.[a-zA-Z0-9\-\_]{2,}$/g.test(getInputs('#email').value)) {
        getInputs('#email').style.borderColor = "#1ec01e";
        getInputs('#email').setAttribute("name", "check-email");
    }
    else {
        getInputs('#email').style.borderColor = "red";
        getInputs('#email').removeAttribute("name");
    }
});
let listUsers = selector => document.querySelector(selector);
let allBTN = selector => document.querySelectorAll(selector);
let count = 1;
getButtons('.add_btn').addEventListener('click', function () {
    if (getInputs('#login').getAttribute('name') == "check-login" && getInputs('#pass').getAttribute("name") == "check-password" && getInputs('#email').getAttribute("name") == "check-email") {
        listUsers('.info_users').innerHTML +=
            `
  <tr class="users">
                        <td>${count}</td>
                        <td>${getInputs('#login').value}</td>
                        <td>${getInputs('#pass').value}</td>
                        <td>${getInputs('#email').value}</td>
                        <td><button class="edit_btn">Edit</button></td>
                        <td><button class="delete_btn">Delete</button></td>
                    </tr>
  `;
        if (count >= 1) {
            count++;
        }
        if (document.querySelectorAll(".users").length == 0) {
            count = 1;
        }
        getInputs('#login').value = "";
        getInputs('#login').style.borderColor = "#363434";
        getInputs('#login').removeAttribute('name');
        getInputs('#pass').value = "";
        getInputs('#pass').style.borderColor = "#363434";
        getInputs('#pass').removeAttribute("name");
        getInputs('#email').value = "";
        getInputs('#email').style.borderColor = "#363434";
        getInputs('#email').removeAttribute("name");
    }
    for (let i = 0; i < allBTN(".delete_btn").length; i++) {
        allBTN(".delete_btn")[i].addEventListener('click', function (event) {
            let users = document.querySelectorAll(".users");
            let parent = event.target.parentElement;
            let upParent = parent.parentElement;
            upParent.remove();
            for (let j = 0; j < users.length; j++) {
                if (users[j].children[0].textContent != "1") {
                    users[j].children[0].textContent = `${Number(users[j].children[0].textContent) - 1}`;
                }
            }
        });
    }
    for (let e = 0; e < allBTN(".edit_btn").length; e++) {
        allBTN(".edit_btn")[e].addEventListener('click', function (event) {
            let parent = event.target.parentElement;
            let upParent = parent.parentElement;
            let numCount = upParent.children[0].textContent;
            getInputs('#login').value = upParent.children[1].textContent;
            getInputs('#pass').value = upParent.children[2].textContent;
            getInputs('#email').value = upParent.children[3].textContent;
            getButtons('.add_btn').classList.add("add_btn_02");
            getButtons(".add_btn_02").classList.remove("add_btn");
            getButtons('.add_btn_02').addEventListener('click', function () {
                if (getInputs('#login').getAttribute('name') == "check-login" || getInputs('#pass').getAttribute("name") == "check-password" || getInputs('#email').getAttribute("name") == "check-email") {
                    upParent.children[1].textContent = getInputs('#login').value;
                    getInputs('#login').value = "";
                    getInputs('#login').style.borderColor = "#363434";
                    getInputs('#login').removeAttribute('name');
                    upParent.children[2].textContent = getInputs('#pass').value;
                    getInputs('#pass').value = "";
                    getInputs('#pass').style.borderColor = "#363434";
                    getInputs('#pass').removeAttribute("name");
                    upParent.children[3].textContent = getInputs('#email').value;
                    getInputs('#email').value = "";
                    getInputs('#email').style.borderColor = "#363434";
                    getInputs('#email').removeAttribute("name");
                }
            });
        });
    }
});
