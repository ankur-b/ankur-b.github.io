$(document).ready(function(){
    $('#about').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	},{
		offset: '60px;'
	});
  $('.jsnavicon').click(function(){
  	var nav = $('.jsmainnav');
  	var icon = $('.jsnavicon i ');
  	nav.slideToggle(200);
  	if(icon.hasClass('ion-navicon-round')){
  		icon.addClass('ion-close-round');
  		icon.removeClass('ion-navicon-round');
  	}else{
  		icon.addClass('ion-navicon-round');
  		icon.removeClass('ion-close-round');
  	}
});

  var myskills = ['Web Developer','iOS Developer','Graphic Designer'];
  var skill_id = document.getElementById('skill');
  var counter = 0;
  setInterval(change, 2500);
function change() {
    $('#skill').fadeOut(1000, function(){
      skill_id.textContent = myskills[counter];
    }).fadeIn(1000);
    counter++;
    if (counter>=myskills.length) {
      counter = 0;
    }
  }
});
