$(function() {
$(document).scroll(function() {
  var distancefromtop = $(this).scrollTop();
  if (distancefromtop > $(window).height()*0.4) {
    $('.col-md-12').fadeIn(500);
  } else {
    $('.col-md-12').fadeOut(300);
  }
});
 /*/ 
  $(document).scroll(function() {
  var distancefromtop = $(this).scrollTop();
  if (distancefromtop > $(window).height()*1.2) {
    $('li').fadeIn(800);
  } else {
    $('li').fadeOut(300);
  }
});
  /*/
function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 500)
}
  function hideText(tag, delay) {
 var elem = document.getElementByTagName(tag);
    setTimeout(function () {
        elem.style.opacity = 0;
    }, delay * 500)
}
  $(document).scroll(function() {
  var distancefromtop = $(this).scrollTop();
  if (distancefromtop > $(window).height()*1.2) {
    showText('delayedText1', 1);
    showText('delayedText2', 1.2);
    showText('delayedText3', 1.4);
    showText('delayedText4', 1.6);
   showText('delayedText5', 1.8);
   showText('delayedText6', 2);
   showText('delayedText7', 2.2);
   showText('delayedText8', 2.4);
  showText('delayedText9', 2.6);
  showText('delayedText10', 2.8);
  showText('delayedText11', 3);
  showText('delayedText12', 3.2);
  showText('delayedText13', 3.4);
  showText('delayedText14', 3.6);
  showText('delayedText15', 3.8);
   showText('delayedText16', 4);
   showText('delayedText17', 4.2);
   showText('delayedText18', 4.4);
   showText('delayedText19', 4.6);
   showText('delayedText20', 4.8);
   showText('delayedText21', 5);
   showText('delayedText22', 5.2);
   showText('delayedText23', 5.4);
    showText('delayedText24', 5.6);
    showText('delayedText25', 5.8);
   showText('delayedText26', 6);
   showText('delayedText27', 6.2);
   showText('delayedText28', 6.4);
   showText('delayedText29', 6.6);
    showText('delayedText30', 6.8);
     showText('delayedText31', 7);
   showText('delayedText32', 7.2);
    showText('delayedText33', 7.4);
      showText('delayedText34', 7.6);
   showText('delayedText35', 7.8);
    showText('delayedText36', 8);
} 
else {
     hideText('p', 0);
}
  });
  
  
  
  
  
});