/*Description: window onload Init script to assign event handler and other supporting functions
 *Author: HartCode Programmer
 *Date:08/12/2019
 */

/* This function is called during window onload of Ajax Exercise 1 and 
 * assign function to event handler dropdown
 * No parameters
 * Calls: function 
 */
"Use Strict";
window.onload = function() {
    const submitBtnField = document.getElementById("submitBtn");
    submitBtnField.onclick = getUserList;

};

function getUserList() {
    let inputIdField = document.getElementById("inputId");

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let userResponse = JSON.parse(this.responseText);
            showUserList(userResponse);
        }
    }
    let url = "https://jsonplaceholder.typicode.com/todos/" + inputIdField.value;
    xhr.open("GET", url, true);
    xhr.send(null);
}

function showUserList(userResponse) {
    let userListTable = document.getElementById("userList");
    let row;
    let thead = document.querySelectorAll("thead");
    if (thead.length == 0) {
        let head = userListTable.createTHead();
    }
    let tbody = document.getElementById("tableBodyList");
    if (tbody != null) {
        tbody.innerHTML = " ";
        row = tbody.insertRow(0);
    } else {
        tableBody = userListTable.createTBody();
        tableBody.id = "tableBodyList";
        row = tableBody.insertRow(0);
        tableBody.classList.add("tableBorder");
    }

    // for (let i = 0; i < userResponse.length; i++) {
    let cellUserIdTitle = row.insertCell(0);
    cellUserIdTitle.innerHTML = "UserId";
    let cellUserId = row.insertCell(1);
    cellUserId.innerHTML = userResponse.userId;
    row = userListTable.insertRow(userListTable.rows.length);
    let cellIdTitle = row.insertCell(0);
    cellIdTitle.innerHTML = "Id";
    let cellId = row.insertCell(1);
    cellId.innerHTML = userResponse.id;
    row = userListTable.insertRow(userListTable.rows.length);
    let cellTitleOfTitle = row.insertCell(0);
    cellTitleOfTitle.innerHTML = "Title";
    let cellTitle = row.insertCell(1);
    cellTitle.innerHTML = userResponse.title;
    row = userListTable.insertRow(userListTable.rows.length);
    let cellCompletedTitle = row.insertCell(0);
    cellCompletedTitle.innerHTML = "Completed";
    let cellCompleted = row.insertCell(1);
    cellCompleted.innerHTML = "Completed";
    // }

}