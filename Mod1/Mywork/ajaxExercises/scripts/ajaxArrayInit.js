/*Description: window onload Init script to assign event handler and other supporting functions
 *Author: HartCode Programmer
 *Date:08/12/2019
 */

/* This function is called during window onload of Ajax Exercise 1 and 
 * assign function to event handler dropdown
 * No parameters
 * Calls: function getUserList()
 */
"Use Strict";
window.onload = function() {
    getUserList();
};

/* This function is to get the list of users during load event 
 * No parameters
 * Calls: function showUserList-()
 */
function getUserList() {
    let errorMsgIdField = document.getElementById("errorMsgId");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let userResponse = JSON.parse(this.responseText);
            showUserList(userResponse);
            errorMsgIdField.innerHTML = " ";
        } else {
            console.log("Failure");
            let errorMsg = "Sorry! there is an error";
            errorMsgIdField.innerHTML = errorMsg;
            $(errorMsgIdField).addClass("badInput");
        }
    }
    let url = "https://jsonplaceholder.typicode.com/users";
    xhr.open("GET", url, true);
    xhr.send(null);
}

/* This function is to get the list of users during load event 
 * @param userResponse - data retrieved from server through AJAX request
 * Calls: None
 */
function showUserList(userResponse) {
    let userListTable = document.getElementById("userList");
    let row;
    let thead = document.querySelectorAll("thead");
    if (thead.length == 0) {
        let head = userListTable.createTHead();
        head.className = "bg-info text-white";
        row = head.insertRow(0);
        let cellIdTitle = row.insertCell(0);
        cellIdTitle.innerHTML = "Id";
        let cellNameTitle = row.insertCell(1);
        cellNameTitle.innerHTML = "Name";
        let cellUserNameTitle = row.insertCell(2);
        cellUserNameTitle.innerHTML = "User Name";
        let cellEmailTitle = row.insertCell(3);
        cellEmailTitle.innerHTML = "Email";
        let cellAddressTitle = row.insertCell(4);
        cellAddressTitle.innerHTML = "Address";
        let cellPhoneTitle = row.insertCell(5);
        cellPhoneTitle.innerHTML = "Phone";
        let cellWebsiteTitle = row.insertCell(6);
        cellWebsiteTitle.innerHTML = "Website";
        let cellCompanyTitle = row.insertCell(7);
        cellCompanyTitle.innerHTML = "Company";
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

    for (let i = 0; i < userResponse.length; i++) {
        let cellId = row.insertCell(0);
        cellId.innerHTML = userResponse[i].id;
        let cellName = row.insertCell(1);
        cellName.innerHTML = userResponse[i].name;
        let cellUsername = row.insertCell(2);
        cellUsername.innerHTML = userResponse[i].username;
        let cellEmail = row.insertCell(3);
        cellEmail.innerHTML = userResponse[i].email;
        let cellAddress = row.insertCell(4);
        cellAddress.innerHTML = userResponse[i].address.street + "\n" + userResponse[i].address.suite + "\n" +
            userResponse[i].address.city + " " + userResponse[i].address.zipcode;
        cellPhone = row.insertCell(5);
        cellPhone.innerHTML = userResponse[i].phone;
        cellWebsite = row.insertCell(6);
        website = document.createElement("a");
        website.href = userResponse[i].website;
        website.id = userResponse[i].website;
        website.target = i;
        website.innerHTML = userResponse[i].website;
        cellWebsite.appendChild(website);
        cellCompany = row.insertCell(7);
        cellCompany.innerHTML = userResponse[i].company.name + "\n" + userResponse[i].company.catchPhrase + "\n" +
            userResponse[i].company.bs;
        row = userListTable.insertRow(userListTable.rows.length);
    }

}