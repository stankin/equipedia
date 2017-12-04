$("#reg_page_but").click(function(){  //РЕГИСТРАЦИЯ
  $("#mpb").removeClass("active");
  $("#rpb").addClass("active");
  $("#lpb").removeClass("active");
  $("#pcb").removeClass("active");
  $("#ccb").removeClass("active");
  $("#mcb").removeClass("active");
  $("#reg_div").show("slow");
  $("#login_div").hide("slow");
  $("#search").hide("slow");
  $("#catalog_div").hide("slow");
		});	
$("#main_page_but").click(function(){  //ГЛАВНАЯ СТРАНИЦА
  $("#mpb").addClass("active");
  $("#lpb").removeClass("active");
  $("#rpb").removeClass("active");
  $("#pcb").removeClass("active");
  $("#ccb").removeClass("active");
  $("#mcb").removeClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").hide("slow");
  $("#search").show("slow");
  $("#catalog_div").hide("slow");
		});	
$("#login_page_but").click(function(){  //АВТОРИЗАЦИЯ
  $("#mpb").removeClass("active");
  $("#lpb").addClass("active");
  $("#rpb").removeClass("active");
  $("#pcb").removeClass("active");
  $("#ccb").removeClass("active");
  $("#mcb").removeClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").show("slow");
  $("#search").hide("slow");
  $("#catalog_div").hide("slow");
		});	
$("#category_catalog_but").click(function(){  //КАТАЛОГ ПО КАТЕГОРИЯМ
  $("#mpb").removeClass("active");
  $("#lpb").removeClass("active");
  $("#rpb").removeClass("active");
  $("#pcb").removeClass("active");
  $("#ccb").addClass("active");
  $("#mcb").removeClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").hide("slow");
  $("#search").hide("slow");
  $("#catalog_div").show("slow");
    }); 
$("#producer_catalog_but").click(function(){  //КАТАЛОГ ПО КАТЕГОРИЯМ
  $("#mpb").removeClass("active");
  $("#lpb").removeClass("active");
  $("#rpb").removeClass("active");
  $("#pcb").addClass("active");
  $("#ccb").removeClass("active");
  $("#mcb").removeClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").hide("slow");
  $("#search").hide("slow");
  $("#catalog_div").show("slow");    }); 
$("#manufacturer_catalog_but").click(function(){  //КАТАЛОГ ПО КАТЕГОРИЯМ
  $("#mpb").removeClass("active");
  $("#lpb").removeClass("active");
  $("#rpb").removeClass("active");
  $("#pcb").removeClass("active");
  $("#ccb").removeClass("active");
  $("#mcb").addClass("active");
  $("#reg_div").hide("slow");
  $("#login_div").hide("slow");
  $("#search").hide("slow");
  $("#catalog_div").show("slow");
    }); 
$("#support_button").click(function(){
alert("опция в разработке!");
})