function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTexElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}



function calculateSubTotal() {
    //calculate total amount
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

    // calculate Tax
    const taxAmountStirng = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountStirng);
    setTexElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTexElementValueById('final-total', finalAmount);
}