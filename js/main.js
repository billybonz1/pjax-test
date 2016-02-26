$(document).ready(function(){

	/* TOP MENU SLIDE*/
	(function($){
		var top_mnu_enter_checker = false;
		$(".rubricator-shower").on("click", function(){
			if (!$(this).hasClass("active")){
				$(this).addClass("active")
				$(".top-mnu").slideDown(400);
			}
			else{
				$(this).removeClass("active");
				$(".top-mnu").slideUp(400);
			}
			top_mnu_enter_checker = true;
			console.log('rubricator-shower click');
		});


		$(".header-select").selectpicker({
	      size: 4
	 	});
	 	$(".category-news__sorting select").selectpicker({
	      size: 4
	 	});
	})(jQuery);
	
	/**/

	/*BG CHANGE*/
	(function($){
		$(".change-bg__value").click(function(){
			if(!$(this).hasClass('active')){
				var old_bg = $(".change-bg__value.active").data("value");
				var bg = $(this).data("value");
				$(".change-bg__value.active").removeClass("active");
				$(this).addClass("active")
				$("body").removeClass("bg-"+old_bg).addClass('bg-'+bg);
			}
		});
	})(jQuery);
	
	/**/
	/*SMOOTH SCROLLLING*/
	$.srSmoothscroll({
        step: 120,
        speed: 800
    });
	/**/


	/*SLIDERS*/
	(function($){
		$(".mt-owl").owlCarousel({
	      navigation : false, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      autoPlay:true,
	      stopOnHover:true
		});
		var hot_topics = $("#hot-topics .owl");
		hot_topics.owlCarousel({
	      items:3, //10 items above 1000px browser width
	      itemsDesktop : [1422,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,2], //2 items between 600 and 0
	      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});

		$("#hot-topics .hot-topics_next").click(function(){
			hot_topics.trigger('owl.next')
		});

		$("#hot-topics .hot-topics_prev").click(function(){
		    hot_topics.trigger('owl.prev');
		});

		var week_actual = $("#week-actual .owl");
		week_actual.owlCarousel({
	      items:3, //10 items above 1000px browser width
	      itemsDesktop : [1422,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,2], //2 items between 600 and 0
	      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});

		$("#week-actual .hot-topics_next").click(function(){
			week_actual.trigger('owl.next')
		});

		$("#week-actual .hot-topics_prev").click(function(){
		    week_actual.trigger('owl.prev');
		});
	})(jQuery);
	/**/

	/*NEWS PAGE SHOW MORE ANIMATION*/
	(function($){
		$("button[role=hot-topics-more]").click(function(){
			$.getJSON( "./news_page_hot.json", function( data ) {
			  $("#news_page_hot article").addClass('animated zoomOut');
			  var items = [];
			  setTimeout(function(){
			  	$.each( data, function( key, val ) {
				  	var item = "<article class='hot-topics__item effect-jazz opacity0'>";
				  	item += "<a href='#'>";
				  	item += "<div class='img-wrap'>";
				  	item += "<img src='"+val.img+"'>";
				  	item += "</div>"
				  	item += "<div class='hot-topics__item-text'>";
				  	item += "<h3>"+val.title+"</h3>";
				  	item += "<p>"+val.text+"</p>";
				  	item += "<div class='hot-topics__item-date'>"+val.date+"</div>";
				  	item += "</div>";
				  	item += "</a>";
				  	item += "</article>";
				  	items.push(item);
				 });
				 var html = items.join("");
				 $( "#news_page_hot" ).html(html);
				 $("#news_page_hot article").addClass('animated zoomIn');
				},300);

			  
			});
		});

		$(".category-news__loader-search").click(function(){
			$.getJSON( "./news_page_hot.json", function( data ) {
			  $("#news_page_hot article").addClass('animated zoomOut');
			  var items = [];
			  setTimeout(function(){
			  	$.each( data, function( key, val ) {
				  	var item = "<article class='category-news__item effect-jazz opacity0'>";
				  	item += "<a href='#'>";
				  	item += "<div class='img-wrap'>";
				  	item += "<img src='"+val.img+"'>";
				  	item += "</div>"
				  	item += "<div class='category-news__item-text'>";
				  	item += "<h3>"+val.title+"</h3>";
				  	item += "<p>"+val.text+"</p>";
				  	item += "<div class='category-news__item-date pull-left'>"+val.date+"</div>";
				  	item += "<div class='article-params pull-right'>";
                    item += "<div class='article-comments'>";
                    item += "<span class='icon-bubble'></span>12";
                    item += "<span class='icon-bubble'></span></div>";
                    item += "<div class='article-views'><span class='icon-eye'></span>213";
                    item += "</div>";
				  	item += "</div>";
				  	item += "</a>";
				  	item += "</article>";
				  	items.push(item);
				 });
				 var html = items.join("");
				 $( ".category-news-grid" ).append(html);
				 $(".category-news-grid article.opacity0").addClass('animated zoomIn');
				},300);

			  
			});
		});
	})(jQuery);
	/**/

	/*SCROLL TO TOP*/
	$(".content").waypoint(function(direction) {
		if (direction === "down") {
			$("#top").addClass("visible");
		} else if (direction === "up") {
			$("#top").removeClass("visible");
		};
	}, {offset: -200});

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/**/

	/*FIXED HEADER*/
	$("#main_header").waypoint(function(direction) {
		if (direction === "down") {
			$("body").addClass("fixed");
			$(".header__wrap").animate({"top":"0px"},600);
		} else if (direction === "up") {
			$(".header__wrap").animate({"top":"-45px"},200,function(){
				$("body").removeClass("fixed");
			});
			
		};
	}, {offset: -150});
	/**/
	
	
	/*RATING*/
	if($("#news-page-rating").length){
		$("#news-page-rating").rating({
			'size':'xs',
			'showClear':false,
			'showCaption':false
		});
	}
	
	/**/

	/*PHOTO PAGE GALLERY*/
	if($('.photo-page-gallery').length){
		var sync1 = $("#photo-page-gallery-top");
		  var sync2 = $("#photo-page-gallery-bottom");
		 var syncPosition = function(el){
		    var current = this.currentItem;
		    console.log(current);
		    sync2
		      .find(".owl-item")
		      .removeClass("synced")
		      .eq(current)
		      .addClass("synced")
		    if(sync2.data("owlCarousel") !== undefined){
		      center(current)
		    }
		  }
		  sync1.owlCarousel({
		    singleItem : true,
		    slideSpeed : 1000,
		    navigation: true,
		    pagination:false,
		    afterAction : syncPosition,
		    responsiveRefreshRate : 200,
		  });
		 
		  sync2.owlCarousel({
		    items : 6,
		    itemsCustom: [[0,2],[391,3],[523,4],[620,5],[747,4],[817,5],[957,4],[1159,5],[1440,6]],
		    pagination:false,
		    responsiveRefreshRate : 100,
		    afterInit : function(el){
		      el.find(".owl-item").eq(0).addClass("synced");
		    }
		  });
		 
		  
		 
		  sync2.on("click", ".owl-item", function(e){
		    e.preventDefault();
		    var number = $(this).data("owlItem");
		    sync1.trigger("owl.goTo",number);
		  });
		 
		  function center(number){
		    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		    var num = number;
		    var found = false;
		    for(var i in sync2visible){
		      if(num === sync2visible[i]){
		        var found = true;
		      }
		    }
		 
		    if(found===false){
		      if(num>sync2visible[sync2visible.length-1]){
		        sync2.trigger("owl.goTo", num - sync2visible.length+2)
		      }else{
		        if(num - 1 === -1){
		          num = 0;
		        }
		        sync2.trigger("owl.goTo", num);
		      }
		    } else if(num === sync2visible[sync2visible.length-1]){
		      sync2.trigger("owl.goTo", sync2visible[1])
		    } else if(num === sync2visible[0]){
		      sync2.trigger("owl.goTo", num-1)
		    }
		    
		  }

		$(".photo-page-gallery-top .item a").magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true,
		    tCounter: '%curr% / %total%'
		  },
		  mainClass: 'mfp-fade'
		});
	}
	/**/

	/*ADVERT*/
	$(".show-advert-all-prices").on("click",function(){
		$(".advert-all-prices").slideDown('slow',function(){
			/*var top = $(this).offset().top;
			$("body, html").animate({
				scrollTop: top - 70
			}, 400);*/
		});
	});
	$(".blue-select").selectpicker({
	    size: 2
	});
	if($("#order-advert-form").length){
		H5F.setup(document.getElementById("order-advert-form"));
		$("#order-advert-form").validator();
		$('#order-advert-form').validator().on('submit', function (e) {
		  if (e.isDefaultPrevented()) {
		  } else {
		    $.ajax({
				type: "POST",
				url: "//formspree.io/bux-center@ya.ru",
				data: $("#order-advert-form").serialize()
			}).done(function() {
				$('#order-advert-form')[0].reset();
				$("#order-advert").modal('hide');
				$("#success").modal('show');

			});
			return false;
		  }
		});
	}

	if($("#contact-us").length){
		H5F.setup(document.getElementById("contact-us"));
		$("#contact-us").validator();
		$('#contact-us').validator().on('submit', function (e) {
		  if (e.isDefaultPrevented()) {
		  } else {
		    $.ajax({
				type: "POST",
				url: "//formspree.io/bux-center@ya.ru",
				data: $("#contact-us").serialize()
			}).done(function() {
				$('#contact-us')[0].reset();
				$("#success").modal('show');

			});
			return false;
		  }
		});
	}

	if($("#reg").length){
		H5F.setup(document.getElementById("reg"));
		$("#contact-us").validator();
		$('#contact-us').validator().on('submit', function (e) {
		  
		});
	}
	
	/**/

	/*EVENT CALENDAR*/
	if($(".event_calendar").length){
		var Event = function(id, text) {
			this.id = id;
		    this.text = text;
		};
		var Shedule =function(event_id,time,text,company){
			this.event_id = event_id;
			this.time = time;
			this.text = text;
			this.company = company;
		}
		var events = {};
		var shedules = {};
		events[new Date("08/14/2015")] = new Event(1, "Valentines Day");
		events[new Date("08/18/2015")] = new Event(2, "Payday");
		events[new Date("09/18/2015")] = new Event(2, "Payday");

		shedules[1] = [
			new Shedule(1,"09:00","Ужин в отеле","Georgian airways"),
			new Shedule(1,"09:40","Выставка в музее","Georgian airways")
		];
		shedules[2] = [
			new Shedule(1,"09:00","Ужин в отеле","Georgian airways"),
			new Shedule(1,"09:40","Выставка в музее","Georgian airways")
		];
		shedules[2] = [
			new Shedule(1,"09:00","Ужин в отеле","Georgian airways"),
			new Shedule(1,"09:40","Выставка в музее","Georgian airways"),
			new Shedule(1,"09:40","Поездка","Georgian airways")
		];
		$.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
	    $.datepicker._updateDatepicker = function(inst) {
	        $.datepicker._updateDatepicker_original(inst);
	        var afterShow = this._get(inst, 'afterShow');
	        if (afterShow)
	            afterShow.apply((inst.input ? inst.input[0] : null));  // trigger custom callback
	    }

	    var event_ids = [];
	    var rus_monthes = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
		$(".event_calendar").datepicker({
			firstDay: 1,
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
			'Июл','Авг','Сен','Окт','Ноя','Дек'], 
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
			dayNamesMin: ['Вс.','Пн.','Вт.','Ср.','Чт.','Пт.','Сб.'],
			showOtherMonths: true,
			beforeShowDay: function(date) {
		        var event = events[date];
		        if (event) {
		        	unic_class = "event"+event.id;
		        	event_ids.push(event.id);
		            return [true, "highlight "+unic_class, event.text];
		        }
		        else {
		            return [true, '', ''];
		        }
		    },
		    onSelect: function(dateText,obj){
		    	var currentDate = new Date(dateText);
		    	var event = events[currentDate];
		        if($(".event_calendar.deployed").length){
		        	var day = currentDate.getDate();
		        	var month = rus_monthes[currentDate.getMonth()];
		        	var shedules_html = '<h2 class="event_shedules_title">События на '+day+' '+month+'</h2>';
		        	shedules[event.id].forEach(function(item, i, arr) {
					  shedules_html += '<div class="event_shedule">';
					  shedules_html += '<div class="event_shedule_time">'+item.time+'</div>';
					  shedules_html += '<div class="event_shedule_text">'+item.text+'</div>';
					  shedules_html += '<div class="event_shedule_company">'+item.company+'</div> ';
					  shedules_html += '</div>';
					});
					$(".event_shedules").fadeOut(200,function(){
						$(".event_shedules").html(shedules_html);
						$(".event_shedules").fadeIn(200);
					});
					

		        }
		        
		    },
		    afterShow:function(){
		    	i = 0;
		    	$(".event_calendar .highlight").each(function(){
		    		id = event_ids[i];
		    		$(this).find("a").attr("data-counter",shedules[id].length);
		    		i++;
		    	});
		    }
		});
	
	}
	/**/
});

(function($, document, window, viewport) {
function resizeWindow() {
	/*HTML FONT SIZE*/
	if($(document).width() < 1166 && $(document).width() > 750){
		var htmlFS = $(document).width()*10/1166;
	}else{
		var htmlFS = 10;
	}
	$("html").css("font-size",htmlFS+'px');

	/*FIXED HEADER*/
	var scrollTop = parseInt($("body").scrollTop()) || parseInt($("html").scrollTop());
	if(scrollTop < 100){
		$("body").removeClass('fixed');
	}
	/**/

	/**/
}
$(document).ready(function() {
	resizeWindow();
});
$(window).resize(function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);
