$("#reg_page_but").click(function(){  //ГЛАВНАЯ СТРАНИЦА
  $("#mpb").removeClass("active");
  $("#rpb").addClass("active");
  $("#lpb").removeClass("active");
  $("#reg_div").show("slow");
  $("#login_div").hide("slow");
  $("#search").hide("slow");
		});	
$("#main_page_but").click(function(){  //ГЛАВНАЯ СТРАНИЦА
  $("#mpb").addClass("active");
  $("#lpb").removeClass("active");
  $("#rpb").removeClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").hide("slow");
  $("#search").show("slow");
		});	
$("#login_page_but").click(function(){  //ГЛАВНАЯ СТРАНИЦА
  $("#mpb").removeClass("active");
  $("#lpb").addClass("active");
  $("#rpb").removeClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").show("slow");
  $("#search").hide("slow");
		});	