// JavaScript Document


$(document).ready(function() {
	$("#enquiry").on("shown.bs.modal",function(){
		//document.location.reload();
		$("#enqu_from").attr('src','enquiry.html');
	});
	$("#enquiry").on("hidden.bs.modal",function(){
		//window.location.reload();
		$("#enqu_from").attr('src','');
	});
	
	
    $(".navigation li").on("mouseenter",function(){
		$(this).children("ul").stop().slideDown('fast');
	});
	$(".navigation li").on("mouseleave",function(){
		$(this).children("ul").stop().slideUp('fast');
	});


	function bann_height(){
		var winHeight = $(window).height();
		$('.swiper-wrapper').css('height',winHeight);
	}bann_height();
	$(window).resize(function(){
		bann_height();
	});


	var headers = $('.header').height();
	$(window).scroll(function() {
		if($(this).scrollTop() > (headers / 2)){
			$('.header').addClass('hed_fix');
		}else{
			$('.header').removeClass('hed_fix');
		}
	});





//popup
$('.in_pro_list li .pro_cont a.read_btn').click(function(e) {
	e.preventDefault();
	var pro_title = $(this).parent('p').siblings('h1').text();
	$('#myModal').modal('show');
	$('.modal-body .pop_body_slider').load($(this).attr('href'));
	$('.pro_pop_title').text(pro_title);
	
});
$('#myModal').on('hidden.bs.modal' ,function(){
	$('.pop_body_slider').unload();	
});


	
	
	
	var press = 0;
	$(".resp_nav_btn").on("click",function(){
        if(press == 0){
			$(".main_nav").animate({left:'0'},'fast');
			press = 1;
		}else{
			$(".main_nav").animate({left:'-200%'},'fast');
			press = 0;
		}
    });
	
	$(window).load(function(){
       setTimeout(
	   	function(){
			$(".hm_pop_cont").fadeIn("slow");
		},2000
	   )
    });
	
	$(".cross_btn").click(function() {
        $(this).parents(".close_parent").fadeOut('fast');
    });
	


	
	$("#enquiry").validate({
		rules: {
			name: "required",
			mobile: {
				required:true,
				minlength:10,
				number:true,
				maxlength:10,
			},
			email: "required",
			email: {
				required: true,
				email: true
			},
			check_in:"required",
			check_out:"required",
			requirement:"required",
		   // agree: "required"
		},
		messages: {
			name: "Please enter your name",
			mobile: {
				required: "Please provide a Phone Number",
				minlength: "Please provide a valid Number"
			},
			email: "Please enter a valid email address",
			check_in:"Select Check In Date",
			check_out:"Select Check Out Date"
		   // agree: "Please accept our policy"
		},
		submitHandler: function(form) {
			form.submit();
		}
	});
	
	
	
	
});

    var myVar = setInterval(function(){
  var x = 0;
  if(x == 0){
    if(jQuery('#enqu_from').contents().find('h5:contains("Thanks for reaching out to us. Our ")').length > 0)    {
ga('send','event','form','submit','enquiry');
    clearInterval(myVar);
    x = 1;
    }
  }
}, 1000);