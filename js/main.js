var emailLoginInput =document.getElementById("emailLoginInput");
var passwordLoginInput = document.getElementById("passwordLoginInput");
var loginBtn =document.getElementById("loginBtn");
var aleartMessage =document.getElementById("aleartMessage");


var usersList=[];

if(localStorage.getItem('uers')!=null){
    usersList = JSON.parse(localStorage.getItem('uers'))

}




function login(){
if(checkInputsEmpty()){

    getAlertMessagr('All Input Is Required','red')
}
else{

    if( checkEmailAndPassword()){
        window.location.href='home.html'
    
    }
    else{
        getAlertMessagr('the email or password is not exist','red')
    }
}



}

function checkEmailAndPassword(){
    for( var i=0 ; i< usersList.length ; i++){
        if( usersList[i].email == emailLoginInput.value && usersList[i].password ==  passwordLoginInput.value){
            localStorage.setItem('userName',usersList[i].name)
            return true;

        }


    }
}


function getAlertMessagr(text,color){
    aleartMessage.classList.replace('d-none','d-block');
    aleartMessage.innerHTML=text;
    aleartMessage.style.color=color;
    aleartMessage.style.fontSize='25px';
    
}




function checkInputsEmpty(){
    if( emailLoginInput.value == ""  ||    passwordLoginInput.value == ""){
        return true;

    }
    else{
        return false;
    }

}


loginBtn.addEventListener('click',function(){
   
    login();
})
