var welcomeMassage =document.getElementById("welcomeMassage");
var logOutBtn = document.getElementById("logOutBtn");



if(localStorage.getItem('userName') !=null){

welcomeMassage.innerHTML=`Welcom
${localStorage.getItem('userName')}`
}


function logOut(){
    window.location.href='index.html';
    localStorage.removeItem('userName');

}

logOutBtn.addEventListener('click',function(){
    logOut();
 })






