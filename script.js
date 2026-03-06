// ================= CONTACT FORM TOAST =================
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e){
  e.preventDefault();
  toast.style.display = "block";
  form.reset();
  setTimeout(()=>{ toast.style.display="none"; }, 4000); // hide after 3s
});

// ================= SERVICES TOGGLE =================
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn=>{
  btn.addEventListener("click", function(){
    const more = this.nextElementSibling;
    if(more.style.display==="block"){
      more.style.display="none";
      this.textContent="Show more";
    }else{
      more.style.display="block";
      this.textContent="Less info";
    }
  });
});