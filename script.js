 window.addEventListener("load", () => {
   const preloader = document.getElementById("preloader");
   const mainContent = document.getElementById("mainContent");
  preloader.style.display = "none";
   mainContent.style.display = "block";
 });

 const video = document.getElementById("bgVideo");
 const toggleBtn = document.getElementById("toggleBtn");

 toggleBtn.addEventListener("click", () => {
   if (video.paused) {
     video.play();
     toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
   } else {
     video.pause();
    toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
   }
 });
