$( document ).ready(function() {
//  tooltip
$('[data-toggle="tooltip"]').tooltip();   
// grid view image
$('.flex-images').flexImages({rowHeight: 280});
});
// small view menu toggle btn
$(".menu2toggle button, .headmn2 button").click(function(){
    $(".toggle-menu-area .togglemenu-box").toggleClass("active");
  });

  // filter area btn
$(".btn_type2.filter, .filter_main_area .flt-head .fltbtn").click(function(){
  $(".filter-main-sec").toggleClass("active");
});

// fixed header 
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// forgot password

$('.log-sign-modal .forgot-link a').on('click',function () {
  $('#log-signModal').modal('hide');
  })

   // user profile
$("header li.user-pfl-pic .login-pic").click(function(){
  $("header .user-profile-area").toggleClass("active");
});

$(".modal").on("shown.bs.modal", function(){
  $('.flex-images').flexImages({rowHeight: 280});
});

// dashboard left menu
$(".dashboard-left-panel ul.nav .nav-area2").click(function(){
  $(".dashboard-left-panel ul.nav .nav-area2 .right-icon").toggleClass("active");
});

// dashboard
$('a[data-toggle="tab"]').on('shown.bs.tab', function(){
  $('.flex-images').flexImages({rowHeight: 280});
});



// hide and show play button in music page with audio player
$("button.play").click(function(){
  $(this).parent().find(".pause").show();
$(".audioarea").show();
  $(this).parent().find(".play").hide();
});

$("button.pause").click(function(){
  $(this).parent().find(".pause").hide();
 $(".audioarea").hide();
  $(this).parent().find(".play").show();
});

// player
const player = new Plyr('#player',{
  controls:[
    "restart", "play", "progress", "current-time", "duration", "mute", "volume"
  ]
});
