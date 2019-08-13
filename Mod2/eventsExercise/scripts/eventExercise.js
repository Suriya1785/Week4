/*Description: window onload Init script to assign event handler and other supporting functions
 *Author: HartCode Programmer
 *Date:08/13/2019
 */

/* This function is called during window onload of Event Exercise 1 and 
 * assign function to event handler dropdown
 * No parameters
 * Calls: 
 */
"Use Strict";
window.onload = function() {
    let allInputs = document.querySelectorAll("input[type='text']");
    let selectBillAddrTypeField = document.getElementById("selectBillAddrType");
    let billingAddrDivField = document.getElementById("billingAddrDiv");
    let userProfileDivField = document.getElementById("userProfileDiv");
    let inputStateField = document.getElementById("inputState");
    let inputBillStateField = document.getElementById("inputBillState");
    let userProfileFormRef = document.getElementById("userProfileForm");

    userProfileFormRef.onsubmit = validateForm;

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].onfocus = function() {
            console.log("success")
                // Adding a class with the same background color impacts the size of the input box
            this.style.backgroundColor = "tan";
        }

        allInputs[i].onblur = function() {
            this.style.backgroundColor = "white";
        }
    }

    inputBillStateField.oninput = function() {
        this.value = this.value.toUpperCase();
    }

    inputStateField.oninput = function() {
        this.value = this.value.toUpperCase();
    }



    selectBillAddrTypeField.onchange = function() {

        if (this.options[this.selectedIndex].value == "BillToSameAddr") {
            billingAddrDivField.style.display = "none";
        } else {
            billingAddrDivField.style.display = "block";
            // pull Div under inputs and set required attribute if billing address is required
            let allDivInputs = billingAddrDivField.querySelectorAll("input[type=text]");
            for (let i = 0; i < allDivInputs.length; i++) {
                // allDivInputs[i].setAttribute("required", "true");
                allDivInputs[i].required = "true";
            }
        }
    }

    billingAddrDivField.style.display = "none";

};

function validateForm() {
    let inputCreditNumField = document.getElementById("inputCreditNum");
    let inputSecCodeField = document.getElementById("inputSecCode");
    //inputCreditNumField.validity.tooLong

    if (inputCreditNumField.validity.patternMismatch) {
        let errorMsgIdField = document.getElementById("errorMsgId");
        let errorMsg = "Please correct the allowable number of digits (13-16)";
        errorMsgIdField.innerHTML = errorMsg;
        return false;
    }

    if (inputSecCodeField.validity.rangeOverflow) {
        let errorMsgIdField = document.getElementById("errorMsgId");
        let errorMsg = "Please correct the entered range for security code";
        errorMsgIdField.innerHTML = errorMsg;
        return false;
    }
}