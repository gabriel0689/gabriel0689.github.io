

$(document).scroll(function() {
	console.log($(document).scrollTop());
	var top = $(document).scrollTop();

	if ($("body").scrollTop() >= 1576 && $("body").scrollTop() <= 3484 || $("body").scrollTop() >= 5096 && $("body").scrollTop() <= 5876 || $("body").scrollTop() >= 5704 && $("body").scrollTop() <= 6211 || $("body").scrollTop() >= 7113 && $("body").scrollTop() <= 7949) {
		$(".main-menu-trigger").addClass("black");
	}
	else {
		$(".main-menu-trigger").removeClass("black");
	}
	// else if(){

	// }
    // if (  document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight )
    // { 


    // }
});