$(".dropdown-button").dropdown();

$(document).ready(function(){
  $('.slider').slider({indicators: false});
});

$(document).ready(function(){
  $('.carousel').carousel({indicators: true, dist: 0, shift: 100, padding: 1, noWrap: true,});
  $('.carousel').carousel('set', 1);
});

$('form').on('submit', (e) => {
  const $valid = $('form');
  const $email = $('input[type="email"]').val();
    if($email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null){
      Materialize.toast($email + ' Signup successful', 5000);
    }else {
      $('input[type="email"]').addClass('validate invalid');
      Materialize.toast('email invaild', 5000);
    }
});

$('#arrowforward').on('click', (e) => {
  $('.slider').slider('pause');
  $('.slider').slider('next');
  $('.slider').slider('start');
})
$('#arrowback').on('click', (e) => {
  $('.slider').slider('pause');
  $('.slider').slider('prev');
  $('.slider').slider('start');
})
