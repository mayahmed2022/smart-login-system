var signupNameInput=document.getElementById("signupNameInput");
var signupEmailInput =document.getElementById("signupEmailInput");
var signupPasswordInput =document.getElementById("signupPasswordInput");
var signupBtn =document.getElementById("signupBtn");
var alertMessage =document.getElementById("alertMessage");


var usersList=[];

if(localStorage.getItem('uers')!=null){
    usersList = JSON.parse(localStorage.getItem('uers'))

}


function signup(){
    var userData={
        name:signupNameInput.value,
        email:signupEmailInput.value,
        password:signupPasswordInput.value,
    }
    if(checkInputsEmpty()){
        getAlertMessagr('All Inputs is required','red');

    }
    else{
        if(checkEmailExist()){
            getAlertMessagr('the email is already exsist please try again','red'); 

        }
        else{
            usersList.push(userData);
            localStorage.setItem("uers",JSON.stringify(usersList))
            getAlertMessagr('Success','green');
            clearForm();
            console.log(usersList);
        
        }


    
        
    }    
}


function clearForm(){
    signupNameInput.value="";
    signupEmailInput.value="";
    signupPasswordInput.value="";
}



function getAlertMessagr(text,color){
    alertMessage.classList.replace('d-none','d-block');
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
    alertMessage.style.fontSize='25px';
    
}


function checkInputsEmpty(){
    if(signupNameInput.value == "" ||  signupEmailInput.value == ""  ||    signupPasswordInput.value == ""){
        return true;

    }
    else{
        return false;
    }

}


function checkEmailExist(){
    for( var i=0 ; i<usersList.length ; i++){
        if(usersList[i].email ==  signupEmailInput.value){
            return true;

        }

    }
}



signupBtn.addEventListener('click',function(){
    signup()

})



