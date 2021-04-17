let floatingIcon = document.getElementsByClassName("float-phone-icon-container")[0];

let phoneNumber = document.getElementsByClassName("float-span-link")[0];

let showHide; 

floatingIcon.onclick = function(){
    showHide = window.getComputedStyle(phoneNumber).display;
        if(showHide === "none") {
    phoneNumber.style.display = "inline"; 
  } else if (showHide === "inline"){
      phoneNumber.style.display = "none";
  }
    
};