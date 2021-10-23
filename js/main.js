$(function(){

	'use strict';

	$('.js-burger-toggle-menu').on('click', function(e){
		e.preventDefault();
	});

	var gotoTop = function() {
		$('.js-top').on('click', function(e) {
			
			e.preventDefault();

			var $root = $('html, body');

			$root.animate({
		    scrollTop: $('body').offset().top - 30
		  }, 1000, 'easeInOutExpo');

		})
		
	};
	gotoTop();

	// Tiny Slider

	var tinySlider = function() {

		if ( $('#vertical-slider').length > 0 ) {

			var slider = tns({
			  "container": "#vertical-slider",
			  "items": 1,
			  "axis": "vertical",
			  "swipeAngle": false,
			  "speed": 400,
			  "nav": false,
			  "controls": false
			});
			$('.slider-custom-nav li').each(function(index) {
				$(this).find('a').attr('data-number', index);
			});
			$('.slider-custom-nav li a').on('click', function(e) {
				
				e.preventDefault();
				var $this = $(this);

				var n = $this.data('number');

				$('.slider-custom-nav li').removeClass('active');
				$this.closest('li').addClass('active');

				slider.goTo(n);

			});
		}


		if ( $('#slider-21934').length > 0 ) {
			var slider2 = tns({
			  "container": "#slider-21934",
			  "items": 1,
			  "edgePadding": 0, 
			  "gutter": 30,
			  "autoplay": true,
			  "autoplayButtonOutput": false,
			  "arrowKeys": true,
			  "swipeAngle": false,
			  "speed": 800,
			  "nav": false,
			  "controls": false,
			  "responsive": {
			    "480": {
			      "items": 2,
			    },
			    "768": {
			      "items": 3
			    },
			    "1024": {
			    	"items": 4
			    }
			  },
			});
			$('#team-prev').on('click', function(e) {
				e.preventDefault();
				slider2.goTo('prev');
			})
			$('#team-next').on('click', function(e) {
				e.preventDefault();
				slider2.goTo('next');
			});
		}

		if ( $('#slider-text-21012').length > 0 ) {
			var slider_text = tns({
			  "container": "#slider-text-21012",
			  "items": 1,
			  "axis": "vertical",
			  "swipeAngle": false,
			  "speed": 400,
			  "autoHeight": true,
			  "nav": false,
			  "controls": false
			});

			var slider_img = tns({
				"container": "#slider-img-92910",
			  "items": 1,
			  "speed": 400,
			  "controls": false,
			  "nav": false,
			  "swipeAngle": false
			});
			
			$('.vertical-nav li').each(function(index) {
				$(this).find('a').attr('data-number', index);
			});

			// on mouseenter
			$('.vertical-nav li a').on('mouseenter', function(e) {
				
				e.preventDefault();
				var $this = $(this);

				var n = $this.data('number');

				$('.vertical-nav li').removeClass('active');
				$this.closest('li').addClass('active');

				slider_text.goTo(n);
				slider_img.goTo(n);

			});

			// on click
			$('.vertical-nav li a').on('click', function(e) {
				
				e.preventDefault();
				var $this = $(this);

				var n = $this.data('number');

				$('.vertical-nav li').removeClass('active');
				$this.closest('li').addClass('active');

				slider_text.goTo(n);
				slider_img.goTo(n);

			});



			
		}


		// community slider
		if ( $('#slider-82198').length > 0 ) {
			var slider_community = tns({
				"container": "#slider-82198",
			  "items": 1,
			  "speed": 400,
			  "controls": false,
			  "loop": false,
			  "nav": false,
			  "autoHeight": true,
			  "swipeAngle": false
			});
			
			var info = slider_community.getInfo(),
					commLoader = $('#slider-bar-loader'),
					numberWrap = $('.number-wrap'),
					slideCount = info.slideCount,
					total = 100 / info.slideCount,
					tempNum = total,
					tempTotal = 0;

					var totalNumber = slideCount * tempNum;

					
			$('#comm-prev').addClass('disabled');
			$('#comm-prev').prop('disabled', true);

			if ( tempTotal == tempNum ) {
				$(this).addClass('disabled');
				$(this).prop('disabled', true);
			}

			commLoader.css({
				'width' : total + '%'
			});
			numberWrap.css({
				'width' : total + '%'
			})


			$('#comm-prev').on('click', function(e) {
				e.preventDefault();
				slider_community.goTo('prev');
				
				 var info = slider_community.getInfo();

				tempTotal -= tempNum;
				total = tempTotal;


				if ( tempTotal <= tempNum ) {
					$(this).addClass('disabled');
					$(this).prop('disabled', true);
				}
				$('#comm-next').removeClass('disabled');
				$('#comm-next').prop('disabled', false);

				commLoader.css({
					'width' : tempTotal + '%'
				});



			});

			$('#comm-next').on('click', function(e) {
				e.preventDefault();

				

				slider_community.goTo('next');

				var info = slider_community.getInfo();

	
				total += tempNum;
				tempTotal = total;
	

				if ( total >= totalNumber ) {
					$(this).addClass('disabled');
					$(this).prop('disabled', true);
				}

				$('#comm-prev').removeClass('disabled');
				$('#comm-prev').prop('disabled', false);

				commLoader.css({
					'width' : total + '%'
				});



			});
		}
		
		// symptoms slider
		if ( $('#slider-29191').length > 0 ) {
			var slider_symptoms = tns({
				"container": "#slider-29191",
			  "items": 1,
			  "speed": 400,
			  "controls": false,
			  "loop": false,
			  "animateIn": "fadeIn",
  			"animateOut": "fadeOut",
			  "nav": false,
			  "autoHeight": true,
			  "swipeAngle": false,
			  "mode": "gallery"
			});

			var slider_img_symptoms = tns({
				"container": "#slider-32899",
				"items": 1,
			  "speed": 400,
			  "controls": false,
			  "loop": false,
			  "animateIn": "fadeIn",
  			"animateOut": "fadeOut",
			  "nav": false,
			  "autoHeight": true,
			  "swipeAngle": false,
			  "mode": "gallery"
			})

			$('.slider-29191-nav li').each(function(index) {
				$(this).find('a').attr('data-number', index);
			});


			// on click
			$('.slider-29191-nav li a').on('click', function(e) {
				
				e.preventDefault();
				var $this = $(this);

				var n = $this.data('number');

				$('.slider-29191-nav li').removeClass('active');
				$this.closest('li').addClass('active');

				slider_symptoms.goTo(n);
				slider_img_symptoms.goTo(n);

			});

		}
		

	};
	tinySlider();


	var counter = function() {
	
		$('.section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$(this.element).find('.number-counter').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 
					  {
					  	easing: 'swing',
	    				duration: 7000
					  }
					);
				});
				
			}

		} , { offset: '95%' } );


		$(".section-counter-78529").waypoint(
	    function(direction) {
	      if (direction === "down" && !$(this.element).hasClass("unslate-animated")) {
	        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
	          ","
	        );
	        $(".block-counter-78529").each(function() {
	          var $this = $(this),
	            num = $this.data("number");
	          $this.animateNumber(
	            {
	              number: num,
	              numberStep: comma_separator_number_step
	            },
	            7000
	          );
	        });
	      }
	    },
	    { offset: "95%" }
	  );

	};
	counter();
	
	var accordion = function() {
		$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
	  $('.collapse').on('show.bs.collapse', function () {
		  $(this).closest('.accordion-item').addClass('active');
		});
	  $('.collapse').on('hidden.bs.collapse', function () {
		  $(this).closest('.accordion-item').removeClass('active');
		});
	};
	accordion();

	var lavalampPlugin = function() {
		if ( $('.slider-29191-nav').length > 0 ) {
			$('.slider-29191-nav').lavalamp({
	      setOnClick: true,
	      enableHover: false,
	      easing: 'easeOut',
	      margins: false,
	      autoUpdate: true,
	      duration: 400,
	    });
    }
	};
	lavalampPlugin();

	var loader = function() {
		$(".site-loader-wrap").delay(200).fadeOut("slow");
		$("#site-overlayer").delay(200).fadeOut("slow");	
	};
	loader();

	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				errorElement: 'span',
				errorLabelContainer: '.form-error',
				/* submit via ajax */
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/send-email.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		}
				
			} );
		}
	};
	contactForm();

	var ajaxChimpPlugin = function() {
		$('#mc-form').ajaxChimp({
			url: 'https://unslate.us4.list-manage.com/subscribe/post?u=c348974441c6f89657a7d4471&amp;id=6dc6997316'
		});
	}
	ajaxChimpPlugin();
  /*==================================
  05: Menumaker
  ====================================*/

  $(".main-menu").menumaker({
    title: "<span></span>",
    format: "multitoggle"
  });
  /*==================================
  06: Top 50
  ====================================*/

  function top50() {
    var a = $('.top-50'),
        b = a.innerHeight(),
        c = b / 2;
    a.css({
      'margin-top': -c,
      'position': 'relative',
      'z-index': 99
    });
  }

  if ($(window).width() > 991) {
    top50();
  }
  /*==================================
  07: Magnific Popup
  ====================================*/


  $(".video_popup").magnificPopup({
    type: 'video'
  });
  /*==================================
  08: World Update
  ====================================*/

  function worldUpdate() {
    $.ajax({
      url: "https://corona.lmao.ninja/v2/all",
      cache: false,
      crossDomain: true,
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.withCredentials = true;
      },
      success: function success(data) {
        var cases = data.cases,
            recovered = data.recovered,
            deaths = data.deaths,
            affectedCountries = data.affectedCountries,
            critical = data.critical,
            todayCase = data.todayCases,
            todayDeath = data.todayDeaths;
        $('.cuTotal').text(cases);
        $('.cuRecovered').text(recovered);
        $('.cuDeaths').text(deaths);
        $('.cuContries').text(affectedCountries);
        $('.cuCritical').text(critical);
        $('.cuTodayCases').text(todayCase);
        $('.cuTodayDeaths').text(todayDeath);
      }
    });
  }

  worldUpdate();
  /*==================================
  09: Country Update
  ====================================*/

  function countryUpdate() {
    var countryName = $('#coronaCountryUpdate').data("country");
    $.ajax({
      url: "https://corona.lmao.ninja/v2/countries/".concat(countryName),
      cache: false,
      crossDomain: true,
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.withCredentials = true;
      },
      success: function success(data) {
        var cases = data.cases,
            recovered = data.recovered,
            deaths = data.deaths,
            affectedCountries = data.affectedCountries,
            critical = data.critical,
            todayCase = data.todayCases,
            todayDeath = data.todayDeaths;
        $('.cuCountryTotal').text(cases);
        $('.cuCountryRecovered').text(recovered);
        $('.cuCountryDeaths').text(deaths);
        $('.cuCountryContries').text(affectedCountries);
        $('.cuCountryCritical').text(critical);
        $('.cuCountryTodayCases').text(todayCase);
        $('.cuCountryTodayDeaths').text(todayDeath);
      }
    });
  }

  if ($('#coronaCountryUpdate').length) {
    countryUpdate();
  }
  /*==================================
  10: Top Country Update
  ====================================*/


  function topCountries() {
    var a = $('#coronaTopCountries').data("countries");
    a = a.split(',').reverse().join();
    var countries = a;
    $.ajax({
      url: "https://corona.lmao.ninja/v2/countries/".concat(countries),
      cache: false,
      crossDomain: true,
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.withCredentials = true;
      },
      success: function success(data) {
        $(data).each(function (i, c) {
          var a = "\n          <div class=\"col-xl col-lg-2 col-md-3 col-sm-4 col-6 mb-30\">\n          <div class=\"single-country d-xl-flex justify-content-center\">\n            <div class=\"flag-wrapper m-auto\">\n              <div class=\"flag-icon w-100 h-100\">\n                <img src=\"".concat(c.countryInfo['flag'], "\" alt=\"").concat(c.country, "\">\n              </div>\n              <span class=\"country-name\">").concat(c.country, "</span>\n            </div>\n\n            <ul class=\"country-info text-center list-unstyled mt-30 mt-xl-0\">\n                <li class=\"cuScTotal bg-warning\">\n                  Total Cases <br/>\n                  ").concat(c.cases, "\n                </li>\n                <li class=\"cuScDeaths bg-denger\">\n                Total Deaths <br/>\n                  ").concat(c.deaths, "\n                </li>\n                <li class=\"cuScrecovered bg-success\">\n                Recovered <br/>\n                  ").concat(c.recovered, "\n                </li>\n            </ul>\n          </div>\n          </div>");
          $(a).prependTo('#coronaTopCountries');
          var b = $('.country-info');
          $(b).each(function () {
            if ($(window).width() > 1199) {
              if ($(this).offset().left + $(this).width() > $(window).width()) {
                $(this).css({
                  'left': 'auto',
                  'right': '0',
                  'transform': 'none'
                });
              }
            }
          });
        });
      }
    });
  }

  if ($('#coronaTopCountries').length) {
    topCountries();
  }
  /*==================================
  11: Corona Data Table
  ====================================*/


  function coronaDataTable() {
	$("#coronaDataTable").DataTable.clear();
    $.ajax({
      url: "https://corona.lmao.ninja/v2/countries/",
      cache: false,
      crossDomain: true,
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      beforeSend: function beforeSend(xhr) {
        xhr.withCredentials = true;
      },
      success: function success(data) {
        var a;
        $(data).each(function (i, c) {
          a += "\n          <tr>\n            <td>\n              <div class=\"flag-img\"><img src=\"".concat(c.countryInfo['flag'], "\" alt=\"").concat(c.country, "\"></div>\n            </td>\n            <td>").concat(c.country, "</td>\n            <td>").concat(c.cases, "</td>\n            <td>").concat(c.deaths, "</td>\n            <td>").concat(c.recovered, "</td>\n            <td>").concat(c.critical, "</td>\n          </tr>");
        });
        $('#coronaDataTable tbody').prepend(a);
        $('#coronaDataTable').DataTable({
          responsive: true
        });
      }
    });
  }

  if ($('#coronaDataTable').length) {
    coronaDataTable();
  }
  /*==================================
  12: Contact Form
  ====================================*/


  $('.contact-form-wrapper').on('submit', 'form', function (e) {
    e.preventDefault();
    var $el = $(this);
    $.post($el.attr('action'), $el.serialize(), function (res) {
      res = $.parseJSON(res);
      $el.parent('.contact-form-wrapper').find('.form-response').html('<span>' + res[1] + '</span>');
    });
  });
  /*==================================
  13: Preloader
  ====================================*/

  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
  });
})(jQuery);
