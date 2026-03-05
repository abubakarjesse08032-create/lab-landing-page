// form modal logic
const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModal");

form.addEventListener("submit", function(e){
  e.preventDefault();          // stop real submit
  modal.style.display="flex"; // show modal
  form.reset();
}); 

closeBtn.addEventListener("click", function(){
  modal.style.display="none";
});


// services toggle logic
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn=>{
  btn.addEventListener("click",function(){

    const more = this.nextElementSibling; 
    // gets the hidden section belonging to THIS card

    if(more.style.display==="block"){
      more.style.display="none";
      this.textContent="Show more";
    }else{
      more.style.display="block";
      this.textContent="Less info";
    }
  });
});