/*Description: window onload Init script to assign event handler and other supporting functions
 *Author: HartCode Programmer
 *Date:08/13/2019
 */

/* This function is called during window onload of keyup / keypress / mouseover mouseout events Exercise and 
 * No parameters
 * Calls: None
 */

window.onload = function() {
    let inputTextField = document.getElementById("inputText");
    let errorMsgIdField = document.getElementById("errorMsgId");
    let allImgs = document.querySelectorAll("img");

    // keypress event - Enter characters only and limit the number of characters 
    inputTextField.onkeypress = function(event) {
        let key = event.charCode ? event.charCode : event.keyCode;

        // validate if entered key is within one of alphabets (A - Z or a - z)
        if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
            //keypress event would not have added the entered character, as a result, had to add 1 to length
            length = this.value.length + 1;
            let maxFieldLength = 50;
            if (length <= maxFieldLength) {
                let errorMsgIdField = document.getElementById("errorMsgId");
                errorMsgIdField.innerHTML = "Number of Characters left is: " + (maxFieldLength - length);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // Deletion of character in the above entered field and calculate the remaining number of characters
    inputTextField.onkeyup = function(event) {
        // keyup event will happen upon completion of user entered data in the screen
        let key = event.charCode ? event.charCode : event.keyCode;
        //key value 8 represents backspace
        if (key == 8) {
            length = this.value.length;
            let maxFieldLength = 50;
            let errorMsgIdField = document.getElementById("errorMsgId");
            errorMsgIdField.innerHTML = "Number of Characters left is: " + (maxFieldLength - length);
            return true
        }
    }

    // Exercise some jquery selectors

    let allHeaders = $(":header");
    let allHeadersJs = document.querySelectorAll("header");
    let allImages = $("img");
    let allImgDiv = $("#imgDiv > img");


    // onmouseover and onmouseout functions 
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].onmouseover = function() {
            allImgs[i].style.height = "300px";
        }
        allImgs[i].onmouseout = function() {
            allImgs[i].style.height = "initial";
        }
    }
};