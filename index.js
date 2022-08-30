function fName(){
    let firstNameInput = document.getElementById('first-name').value
    if(firstNameInput.length>=3){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }
}

function lName(){
    let lastNameInput = document.getElementById('last-name').value
    if(lastNameInput.length>=3){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }
}

function emailf(){
    let emailInput = document.getElementById('email').value
    if(emailInput.length && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length - 3 && 
        emailInput.indexOf('@') !==0){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
    }
}

function phoneNumberf(){
    let phoneNumberInput = document.getElementById('phone-number').value
    if( phoneNumberInput.length == 10 && !isNaN(phoneNumberInput)){
        document.getElementById('phone-number-valid').style.display = 'block'
        document.getElementById('phone-number-invalid').style.display = 'none'
    }
    else{
        document.getElementById('phone-number-invalid').style.display = 'block'
        document.getElementById('phone-number-valid').style.display = 'none'
    }
}

function batchf(){
    let batchNoInput = document.getElementById('batch-no').value
    if(batchNoInput !== 'None' && batchNoInput !== ''){
        document.getElementById('batch-no-valid').style.display = 'block'
        document.getElementById('batch-no-invalid').style.display = 'none'
    }
    else{
        document.getElementById('batch-no-invalid').style.display = 'block'
        document.getElementById('batch-no-valid').style.display = 'none'
    }
}

function currentModulef(){
    let currentModuleInput = document.getElementById('current-module').value
    if(currentModuleInput !== 'None' && currentModuleInput !== ''){
        document.getElementById('current-module-valid').style.display = 'block'
        document.getElementById('current-module-invalid').style.display = 'none'
    }
    else{
        document.getElementById('current-module-invalid').style.display = 'block'
        document.getElementById('current-module-valid').style.display = 'none'
    }
}

function tickf(){
    let tncInput = document.getElementById('tnc').checked
    if(tncInput){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
    }
}

function validate(){  
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneNumberInput = document.getElementById('phone-number').value
    let batchNoInput = document.getElementById('batch-no').value
    let currentModuleInput = document.getElementById('current-module').value
    let tncInput = document.getElementById('tnc').checked

    let error = false;

    if(firstNameInput.length>=3){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error=true
    }

    if(lastNameInput.length>=3){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error=true
    }

    if(emailInput.length && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length - 3 && 
        emailInput.indexOf('@') !==0){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error=true
    }

    if( phoneNumberInput.length == 10 && !isNaN(phoneNumberInput)){
        document.getElementById('phone-number-valid').style.display = 'block'
        document.getElementById('phone-number-invalid').style.display = 'none'
    }
    else{
        document.getElementById('phone-number-invalid').style.display = 'block'
        document.getElementById('phone-number-valid').style.display = 'none'
        error=true
    }

    if(batchNoInput !== 'None' && batchNoInput !== ''){
        document.getElementById('batch-no-valid').style.display = 'block'
        document.getElementById('batch-no-invalid').style.display = 'none'
    }
    else{
        document.getElementById('batch-no-invalid').style.display = 'block'
        document.getElementById('batch-no-valid').style.display = 'none'
        error=true
    }

    if(currentModuleInput !== 'None' && currentModuleInput !== ''){
        document.getElementById('current-module-valid').style.display = 'block'
        document.getElementById('current-module-invalid').style.display = 'none'
    }
    else{
        document.getElementById('current-module-invalid').style.display = 'block'
        document.getElementById('current-module-valid').style.display = 'none'
        error=true
    }

    if(tncInput){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
        error=true
    }

    if(!error){
        alert('Your details have been saved successfully!')
        firstNameInput = document.getElementById('first-name').value=''
        lastNameInput = document.getElementById('last-name').value=''
        emailInput = document.getElementById('email').value=''
        phoneNumberInput = document.getElementById('phone-number').value=''
        batchNoInput = document.getElementById('batch-no').value=''
        currentModuleInput = document.getElementById('current-module').value=''
        tncInput = document.getElementById('tnc').checked=''

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-number-valid').style.display = 'none'
        document.getElementById('batch-no-valid').style.display = 'none'
        document.getElementById('current-module-valid').style.display = 'none'
        document.getElementById('tnc-invalid').style.display = 'none'
    }

}