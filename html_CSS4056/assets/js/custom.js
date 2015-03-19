var index = 0;
var classval;
$(document).ready(function() {

	/*Select option and change indicator work starts here*/
	$('.enabled').live("click", function() {
		index = $(this).index();
		$('.dial i').eq(index).css('display', 'block');
		$('.dial i').eq(index).siblings().css('display', 'none');

		var textval = $(this).children().text();
		if (textval == 'Favorites') {
			$('.nav .student').children('a').text('Student & Content Info');
		} else {

			$('.nav .student').children('a').text('Student & ' + textval + ' Info');
		}

	});
	/*Select option and change indicator work ends here*/

	/*custom select box calling function starts here*/
	try {
		oHandler = $(".navigation").msDropDown({
			mainCSS : 'dd2'
		}).data("dd");

		$("#ver").html($.msDropDown.version);
	} catch(e) {
		alert("Error: " + e.message);
	}

	/*custom select box calling function ends here*/

	/* For Custom Vertical Scrollbar starts here */
	$('.scrollbars').ClassyScroll();
	$('.exercise-content').ClassyScroll();
	$('.resource-word-single div').ClassyScroll();
	$('.true-false').ClassyScroll();
	$('.match').ClassyScroll();
	$('.flash').ClassyScroll();
	$('.multiple').ClassyScroll();
	$('.sort-exercise').ClassyScroll();
	$('.tab-container').ClassyScroll();
	//$('.resource-word-column > div').ClassyScroll();

	/* For Custom Vertical Scrollbar ends here */

	/*Catalog Drawer open/close starts here*/
	$(".window a").click(function() {
		$(".catalog-drawer ul").slideToggle(1500);
	})
	/*Catalog Drawer open/close ends here*/

	/*drawer-wrapper open/close animate code starts here*/

	//addclass code
	$('.student').find('a').addClass('student-link');
	$('.people').find('a').addClass('people-link');
	$('.places').find('a').addClass('places-link');
	$('.thing').find('a').addClass('thing-link');
	$('.idea').find('a').addClass('idea-link');
	$('.activity').find('a').addClass('activity-link');
	$('.purpose').find('a').addClass('purpose-link');
	$('.industriesA').find('a').addClass('industriesA-link');
	$('.industriesM').find('a').addClass('industriesM-link');
	$('.verb').find('a').addClass('verb-link');
	$('.part').find('a').addClass('part-link');
	$('.more').find('a').addClass('more-link');

	$('.nav li').click(function(event) {
		classval = $(this).attr('class');
		event.stopPropagation();

		$(this).find('a').addClass('visible-link');
		$(this).siblings().find('a').removeClass('visible-link');
		$(this).parent().siblings().children().find('a').removeClass('visible-link');

		$('.tags div.' + classval).siblings().children('.drawer-wrapper').animate({
			'left' : -200 + '%'
		}, 700, function() {

		})
		setTimeout(function() {

			$('.tags div.' + classval).siblings().children('.drawer-wrapper').css('display', 'none');
			$('.tags div.' + classval).children('.drawer-wrapper').css('display', 'block');
			$('.tags div.' + classval).children('.drawer-wrapper').animate({
				left : 0
			}, 700);
		}, 300)

	});

	$('.close').click(function(event) {
		$('.nav li').each(function() {

			$(this).find('a').removeClass('visible-link')
		})

		event.stopPropagation();
		$(this).parent(".drawer-wrapper").animate({
			'left' : -200 + '%'
		}, 1000, function() {
			$(this).css('display', 'none');
		});

	});

	/*catalog-Drawer li onclick page change code starts here*/

	$('.scrollbars li').live('click', function(e) {
		classval = $(this).attr('class');

		$('.clipboard-content ').children('div.' + classval).css('display', 'block').addClass('block');
		$('.clipboard-content ').children('div.' + classval).siblings().css('display', 'none').removeClass('block');

		// code for side bar statrs here
		$('.sidebar, .aside-btn').css('display', 'block');
		$('.sidebar').find('.' + classval + '').css('display', 'block');
		$('.sidebar').find('.' + classval + '').siblings().css('display', 'none');

		if ($(this).hasClass('flashcard')) {
			$('.sidebar').find('.' + classval + '').css('display', 'none');
			$('.sidebar').find('.' + classval + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('multiplechoice')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('shortexercise')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('matchingword')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('struggling')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('fill-word')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('Adjectives')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : '44px'
			});
			$('.aside-btn').css('right', '44px');
		}

		if ($(this).hasClass('audio')) {
			$('.sidebar').find('.' + classval + '').css('display', 'none');
			$('.sidebar').find('.' + classval + '').css({
				'right' : '44px'
			});
			$('.aside-btn').css('right', '44px');
		}
		if ($(this).hasClass('gas2')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : '44px'
			});
			$('.aside-btn').css('right', '44px');
		}

		if ($(this).hasClass('tiger-image')) {
			$('.sidebar').find('.' + classval + '').css('display', 'none');
			$('.sidebar').find('.' + classval + '').css({
				'right' : '44px'
			});
			$('.aside-btn').css('right', '44px');
		}

		if ($(this).hasClass('video')) {
			$('.sidebar').find('.' + classval + '').css('display', 'none');
			$('.sidebar').find('.' + classval + '').css({
				'right' : '44px'
			});
			$('.aside-btn').css('right', '44px');
		}
		if ($(this).hasClass('gas1')) {
			$('.sidebar').find('.' + classval + '').css({
				'right' : '44px'
			});
			$('.aside-btn').css('right', '44px');
		}
		// code for side bar ends here

		if ($(this).hasClass('struggling')) {
			/*custom radio button code starts here*/

			$('.label_radio').live("click", function() {

				if ($('.text-editor').css('display') == 'block') {

					if ($(this).find('input').length) {

						$(this).each(function() {
							$(this).addClass('r_on');
							$(this).find('input').attr('checked', 'checked');
							$(this).siblings().removeClass('r_on');
							$(this).siblings().find('input').removeAttr('checked');
							$(this).find('input:checked').each(function() {
								$(this).parent('label').addClass('r_on');
							});

						});
					}

				}

			});

			setupLabel();
			/*custom radio button code ends here*/

		}

		if ($(this).hasClass('multiplechoice')) {
			/*custom check box code starts here*/

			$('.label_check').live("click", function() {
				setupLabel();
			});
			setupLabel();
			/*custom check box code ends here*/

		}

	});
	/*custom radio button and check box code function starts here*/

	function setupLabel() {

		if ($('.label_check input').length) {

			$('.label_check').each(function() {
				$(this).removeClass('c_on');

			});
			$('.label_check input:checked').each(function() {
				$(this).parent('label').addClass('c_on');
			});

		}

		if ($('.label_radio input').length) {

			$('.label_radio').each(function() {
				$(this).removeClass('r_on');
			});

			$('.label_radio input:checked').each(function() {
				$(this).parent('label').addClass('r_on');
			});
		}
	}

	/*custom radio button and check box code function ends here*/

	/*catalog-Drawer li onclick page change ends here*/

	/*on +icon click code starts here*/
	$('#header > a').click(function() {
		$('.edit-exercise').fadeIn(1000);
	});

	$('.cancel').click(function() {
		$('.edit-exercise').fadeOut(500);
	});
	/*on +icon click code ends here*/

	/*ClipBoard open/close code starts here*/

	$('.site-link .ClipBoard ').click(function() {
		$('.clipboard-page').css({
			'display' : 'block'
		});

		// $('.binder').css({
		// 'display' : 'none'
		// });
		$('.page').css({
			'margin' : 0,
			'float' : 'left'
		});
		$('.pop-up').css('left', 330 + 'px');
		//$('.tags').css('left', 323 + 'px');

		if ($('.binder').css('display') == 'block' && $('.clipboard-page').css('display') == 'block') {
			$('#wrapper').width('2554px');
		} else {

			$('#wrapper').width('100%');
		}

		//Weekly Calender Call

		// $('#calendar').fullCalendar({
			// header : {
				// left : 'prev,next',
				// center : 'title',
				// right : 'agendaWeek'
			// },
			// defaultDate : '2014-11-12',
			// editable : false,
			// eventLimit : true, // allow "more" link when too many events,
			// eventClick : function(ev, jsEvent, view) {
                 // //alert(ev.title)
			// },
// 			
			// minTime : "8:00:00",
			// maxTime : "23:00:00",
// 
			// events : [
			      	// {
						// title:'Up-Int Adult',
						// start: '2014-11-10T10:00:00',
			            // end: '2014-11-10T16:00:00',
			            // backgroundColor:'#257e4a',
			            // className:'abc' 
// 			   			
					// },
					// {
						// title:'Beginner Kids',
						// start: '2014-11-11T10:00:00',
			            // end: '2014-11-11T16:00:00',
			            // backgroundColor:'#ff9f89'
// 							
					// },
					// {
						// title:'Private Sergey',
						// start: '2014-11-12T10:00:00',
			            // end: '2014-11-12T16:00:00',
			            // backgroundColor:'#ff0000'
					// },
					// {
						// title:'Pre-int Teen',
						// start: '2014-11-13T12:00:00',
			            // end: '2014-11-13T16:00:00',
			            // backgroundColor:'#ff0000'
					// },
					// {
						// title:'mukesh',
						// start: '2014-11-12T14:00:00',
			            // end: '2014-11-12T18:00:00',
			            // backgroundColor:'#257e4a',
			            // className:'abc' 
					// }
// 			
			// ]
		// });
// 
		// $('.fc-agendaWeek-button').trigger('click');
// 
		// if ($('.work-day').lenght > 0) {
			// $('<div class="work-day"> <a href="javascript:;" class="up-arrow"></a><a href="javascript:;" class="dn-arrow"></a> <span> Unavailable</span> <strong> Work day</strong></div>').insertAfter('.fc-time-grid .fc-slats');
		// }
// 
		// var btns = $('.fc-left .fc-button-group').html();
		// $('.fc-center').append(btns);
		// $('.fc-center .fc-prev-button').click(function() {
			// $('.fc-left .fc-prev-button').trigger('click');
		// })
		// $('.fc-center .fc-next-button').click(function() {
			// $('.fc-left .fc-next-button').trigger('click');
		// })
// 
		// $('.fc-content').append('<a href="javascript:;" class="up-arrow"></a><a href="javascript:;" class="dn-arrow"></a>');

	});


	var condition = 0;
	var widt = 0;
	$('.site-link .binder-link').click(function() {
		$('.binder').css({
			'display' : 'block'
		});
		if (condition == 0) {
			$('.calender-slider').bxSlider({
				slideWidth : 48,
				minSlides : 1,
				maxSlides : 4,
			});
		}
		condition = 1;

		// $('.clipboard-page').css({'display' : 'none'});
		$('.page').css({
			'margin' : 0,
			'float' : 'left'
		});

		if ($('.binder').css('display') == 'block' && $('.clipboard-page').css('display') == 'block') {
			$('#wrapper').width('2554px');

		} else {

			$('#wrapper').width('100%');
		}
	});

	$('.site-link .home').click(function() {
		$('.clipboard-page').css({
			'display' : 'none'
		});
		$('.binder').css({
			'display' : 'none'
		});
		$('.page').css({
			'margin' : "0 auto",
			'float' : 'none'
		});
		$('.pop-up').css('left', '50%');

		$('#wrapper').width('100%');
	});

	$('.close-btn').click(function() {
		$('.clipboard-page').css({
			'display' : 'none'
		});
		// $('.binder').css({
		// 'display' : 'none'
		// });
		if ($('.binder').css('display') == 'block') {
		} else {
			$('.page').css({
				'margin' : "0 auto",
				'float' : 'none'
			});
		}
		$('#wrapper').width('100%');
		$('.pop-up').css('left', '50%');

	});
	/*ClipBoard open/close code ends here*/

	//Edit code starts from here.....

	/*add new flash card and edit code starts here*/

	var flag = true;
	$('.addmorecard').click(function() {
		$(this).attr('contenteditable', 'false');
		$('.flash a').before('<div><div class="flash-container" style="position:relative;z-index:100;"><span class="flash-ans"><em contenteditable="true">Enter text here</em></span><span class="flash-qus"><em contenteditable="true">Enter text here</em></span></div></div>');
	});

	$('.flash-container').live("click", function(event) {
		event.preventDefault();

		if ($('.text-editor').css('display') == 'block') {

			$(this).parent().css('opacity', 1);
			$(this).parent().siblings().css('opacity', 0.4);
			flag = false;

			$(this).parent().find('.morecard').remove();
			$(this).find('.flashbtn').remove();
			$(this).parent().siblings().find('.morecard').remove();
			$(this).parent().siblings().find('.flashbtn').remove();

			$(this).parent().css('position', 'relative');
			$(this).css({
				'position' : 'relative',
				'z-index' : 100,
				'width' : '104%'
			});

			if ($(this).next().hasClass('morecard')) {

			} else {
				$(this).after('<div class="morecard ddd" style="position:absolute;height:100%;width:107%;left:-20px;top:0;border:1px dotted #8d8d8d;"></div>');
				$(this).append('<i  class="flashbtn ddd" contenteditable="false" style="display:block;height:20px;width:20px;position:absolute;right:0px;top:0px;background: url(assets/images/x.png) no-repeat 5px 5px;cursor:pointer;"></i>');
			}
		}

	});

	$('.flash-container').live("mouseenter", function() {

		if ($('.text-editor').css('display') == 'block') {
			if (flag == true) {

				$(this).parent().css('position', 'relative');
				$(this).css({
					'position' : 'relative',
					'z-index' : 100,
					'width' : '104%'
				});

				if ($(this).next().hasClass('morecard')) {

				} else {

					$(this).after('<div class="morecard" style="position:absolute;height:100%;width:107%;left:-20px;top:0;border:1px dotted #8d8d8d;"></div>');
					$(this).append('<i class="flashbtn" contenteditable="false" style="display:block;height:20px;width:20px;position:absolute;right:0px;top:0px;background: url(assets/images/x.png) no-repeat 5px 5px;cursor:pointer;"></i>');
				}
			}
		}

	});

	$('.flash-container').live("mouseleave", function() {

		if (flag == true) {
			$(this).parent().find('.morecard').remove();
			$(this).find('.flashbtn').remove();
		}

	});

	$(document).live('click', function(e) {

		e.preventDefault();
		var classname = e.target.className;
		if (classname != 'flash-container' && classname != 'flash-ans' && classname != 'flash-qus') {
			flag = true;
			$('.flash-container').parent().find('.morecard, .flashbtn').remove();
		}
	});

	$('.flash-ans em, .flash-qus em').live('click', function(event) {
		event.stopPropagation();
	});

	$('.flashbtn').live('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().parent().siblings().css('opacity', 1);
		$(this).parent().parent().remove();
	});

	$('.edit').click(function() {
		if ($('.flash').css('display') == 'block') {
			$('.addmorecard').css('display', 'block');
		}
	});

	$('.close').click(function() {
		if ($('.flash').css('display') == 'block') {
			$('.flash-container').parent().css('opacity', 1);
			$('.addmorecard').css('display', 'none');
		}

	});

	/*add new flash card code ends here*/

	/*sort-exercise page edit code starts here*/
	$('.addquestion').click(function() {
		$(this).before('<li style="position:relative;"><div class="ex-container"><div contenteditable="true" class="short-ans" style="position: relative;z-index: 10;"><span><b><i>type new question here</i></b></span><span>type new answer here</span></div></div></li>');
	});

	var ob;
	var bool = 0;
	$('.sort-exercise li').css('position', 'relative');
	$('.clsbtn1').attr('contenteditable', 'false');

	$('.short-ans').live("click", function(e) {

		$('.clsbtn1').attr('contenteditable', 'false');

		if ($('.text-editor').css('display') == 'block') {

			bool = 1;

			ob = $(this);

			ob.parent().parent().css('opacity', 1);
			ob.parent().parent().siblings().css('opacity', 0.4);
			$('.addquestion').css('opacity', 1);
			ob.css('cursor', 'auto');
			ob.parent().find('.clsbtn1, .byMe').remove();

			if (ob.next().hasClass('byMe')) {

			} else {

				ob.append('<i contenteditable="false" class="clsbtn1  ccc" style="display: block; height: 20px; position: absolute; background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: -16px; right: 38px; width: 20px; z-index:100;"></i>');
				ob.after('<div class="byMe ccc" style="position: absolute;z-index:-1; width: 100%; border: 1px dotted rgb(141, 141, 141); height: 100%; left: -40px; top: -7px;"></div>');

			}

		}

	});

	$('.short-ans').live("mouseenter", function(e) {

		if ($('.text-editor').css('display') == 'block') {
			$(this).css('cursor', 'pointer');
			if (bool == 0) {

				if ($(this).next().hasClass('byMe')) {

				} else {

					$(this).append('<i contenteditable="false" class="clsbtn1" style="display: block; height: 20px; position: absolute; background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: -16px; right: 38px; width: 20px; z-index:100;"></i>');
					$(this).after('<div class="byMe" style="position: absolute; width: 100%; border: 1px dotted rgb(141, 141, 141); height: 100%; left: -40px; top: -7px;"></div>');

				}
			}
		}

	});

	$('.short-ans').live("mouseleave", function(e) {

		if (bool == 0) {
			$(this).parent().find('.clsbtn1, .byMe').remove();
		}

	});

	$('.short-ans').live('blur', function(event) {
		event.preventDefault();
		var a = $(this)

		setTimeout(function() {
			bool = 0;
			a.parent().find('.clsbtn1, .byMe').remove();

		}, 500)

	});

	$('.clsbtn1').live("click", function(event) {
		//event.preventDefault();
		event.stopPropagation();
		$(this).parent().parent().parent().siblings().css('opacity', 1);
		$(this).parent().parent().parent().remove();

	});

	$('.edit').click(function() {
		if ($('.sort-exercise').css('display') == 'block') {
			$('.addquestion').attr('contenteditable', 'false');
			$('.addquestion').find('div,span').attr('contenteditable', 'false');
			$('.addquestion').fadeIn(500);

		}
		if ($('.match').css('display') == 'block') {
			$('.addquestion1').attr('contenteditable', 'false');
			$('.addquestion1').find('div,span').attr('contenteditable', 'false');
			$('.addquestion1').fadeIn(500);

			$('.addanswer1').attr('contenteditable', 'false');
			$('.addanswer1').find('div,span').attr('contenteditable', 'false');
			$('.addanswer1').fadeIn(500);

		}
		if ($('.true-false').css('display') == 'block') {

			$('.addquestion2').attr('contenteditable', 'false');
			$('.addquestion2').find('div,span').attr('contenteditable', 'false');
			$('.addquestion2').fadeIn(500);

		}

	});

	$('.close').click(function() {
		if ($('.sort-exercise').css('display') == 'block') {
			$('.sort-exercise li').css('opacity', 1);
			$('.addquestion').attr('contenteditable', 'false');
			$('.addquestion').find('div,span').attr('contenteditable', 'false');
			$('.addquestion').fadeOut(500);
		}
		if ($('.match').css('display') == 'block') {
			$('.match li').css('opacity', 1);
			$('.addquestion1').css('opacity', 1);
			$('.addquestion1').attr('contenteditable', 'false');
			$('.addquestion1').find('div,span').attr('contenteditable', 'false');
			$('.addquestion1').fadeOut(500);

			$('.addanswer1').attr('contenteditable', 'false');
			$('.addanswer1').find('div,span').attr('contenteditable', 'false');
			$('.addanswer1').fadeOut(500);

		}
		if ($('.true-false').css('display') == 'block') {

			$('.addquestion2').attr('contenteditable', 'false');
			$('.addquestion2').find('div,span').attr('contenteditable', 'false');
			$('.addquestion2').css('opacity', 1);
			$('.addquestion2').fadeOut(500);
			$('.true-false li').css("opacity", 1);

		}

	});

	/*sort-exercise page edit code ends here*/

	/*matching info page edit code starts here*/
	var test = 0;
	var dataVal = 10;
	$('.addquestion1').click(function() {
		$(this).before('<li data-match="' + dataVal + '" style="position:relative;"><div class="match-word"><p contenteditable="true"><span></span>Enter new text here</p></div></li>');

		$('.match-question').append('<li data-match="' + dataVal + '" style="position:relative; list-style:none;"><div class="match-word"><p <p contenteditable="true">Enter new text here</p></div></li>');
		dataVal++;
	});

	$('.match li').css('position', 'relative');
	$('.match-word').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {
			test = 1;

			$(this).parent().find('.test').remove();
			$(this).find('.button').remove();

			$(this).find('p').css({
				'position' : 'relative',
				'z-index' : 10,
				'cursor' : 'auto'
			});

			if ($(this).next().hasClass('test')) {

			} else {

				$(this).after('<div class="test aaa" style="position: absolute; z-index:1; width: 116%; border: 1px dotted rgb(141, 141, 141); height: 100%; left: -30px; top: 0px;"></div>');
				$(this).append('<i class="button aaa" style="display: block; height: 20px; position: absolute; background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: 4px; right: -0px; width: 20px; z-index:10;"></i>');
			}

		}

	});

	$('.match-word').live('mouseenter', function() {

		if (test == 0) {

			if ($('.text-editor').css('display') == 'block') {

				$(this).find('p').css({
					'position' : 'relative',
					'z-index' : 10,
					'cursor' : 'pointer'
				});

				if ($(this).next().hasClass('test')) {

				} else {

					$(this).after('<div class="test" style="position: absolute; z-index:1; width: 116%; border: 1px dotted rgb(141, 141, 141); height: 100%; left: -30px; top: 0px;"></div>');
					$(this).append('<i class="button" style="display: block; height: 20px; position: absolute; background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: 4px; right: 0px; width: 20px; z-index:10;"></i>');
				}

			}

		}

	});

	$('.match-word').live('mouseleave', function() {

		if (test == 0) {
			$(this).parent().find('.test').remove();
			$(this).parent().find('i.button').remove();
		}

	});

	var attr_val;
	$('.match-question li').css('list-style', 'none');

	$('.button').live('click', function(event) {

		event.stopPropagation();
		attr_val = $(this).parent().parent().attr('data-match');
		$(this).parent().parent().siblings().css('opacity', 1);
		$(this).parent().parent().parent().siblings().children().css('opacity', 1);
		$(this).parent().parent().remove();

		$('.match-question li').each(function() {

			if ($(this).attr('data-match') == attr_val) {
				$(this).remove();
			}

		})
		$('.match-ans li').each(function() {

			if ($(this).attr('data-match') == attr_val) {
				$(this).remove();
			}

		})
	})

	$('.match-word').live('blur', function() {
		var a = $(this)

		setTimeout(function() {
			test = 0;
			a.parent().find('.test').remove();
			a.parent().find('i.button').remove();
		}, 1000)

	});

	$('.match-word:not(.addquestion1)').live("click", function() {

		if ($('.text-editor').css('display') == 'block') {
			$(this).parent().css('opacity', 1);
			$(this).parent().siblings().css('opacity', 0.4);
			$(this).parent().parent().siblings().children().css('opacity', 0.4);
			$('.addquestion1').css('opacity', 1);
		}
	});

	/*matching info page edit code ends here*/

	/*true-false info page edit code starts here*/
	var check = 0;
	var radioid1 = 7;
	var radioid2 = 8;
	var nameid = 4;
	$('.addquestion2').click(function() {

		$(this).before('<li style="position: relative;"><div class="truefalse"><span style="position:relative;z-index:10;"><label class="label_radio">True<input type="radio" name="radio' + nameid + '" id="radio' + radioid1 + '"></label><label class="label_radio">False<input type="radio" name="radio' + nameid + '" id="radio' + radioid2 + '"></label></span><span contenteditable="true" style="position:relative;z-index:10;">Enter new text here</span></div></li>');

		radioid1 = radioid1 + 2;
		radioid2 = radioid2 + 2;
		nameid++;

	});

	$('.true-false li').css({
		'position' : 'relative'
	});

	$('.truefalse').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {
			$(this).parent().css('opacity', 1);
			$(this).parent().siblings().css('opacity', 0.4);
			$('.addquestion2').css('opacity', 1);
			check = 1;
			//console.log(1)
			$(this).parent().find('.tf').remove();
			$(this).find('i').remove();

			$(this).find('span').css({
				'position' : 'relative',
				'z-index' : 10,
				'cursor' : 'auto'
			});
			$(this).find('span').eq(1).css({
				'width' : '412px'
			});

			if ($(this).next().hasClass('tf')) {

			} else {

				$(this).append('<i class="clearcontent" style="display: block;position: absolute; height: 20px;background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: 0px; right:-16px;width: 20px;z-index:10;"></i>');
				$(this).after('<div class="tf" style="position: absolute;cursor:pointer; z-index:1; width: 110%; border: 1px dotted rgb(141, 141, 141); height: 150%; left: -40px; top: -8px;"></div>');

			}
		}

	});

	$('.truefalse').live('mouseenter', function() {
		if ($('.text-editor').css('display') == 'block') {

			if (check == 0) {

				$(this).find('span').css({
					'position' : 'relative',
					'z-index' : 10,
					'cursor' : 'pointer'
				});
				$(this).find('span').eq(1).css({
					'width' : '412px'
				});
				if ($(this).next().hasClass('tf')) {

				} else {

					$(this).append('<i class="clearcontent" style="display: block;position: absolute; height: 20px;background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: 0px; right:-16px;width: 20px;z-index:10;"></i>');
					$(this).after('<div class="tf" style="position: absolute;cursor:pointer; z-index:1; width: 110%; border: 1px dotted rgb(141, 141, 141); height: 150%; left: -40px; top: -8px;"></div>');
				}
			}

		}
	});

	$('.truefalse').live('mouseleave', function(event) {

		if (check == 0) {
			$(this).parent().find('.tf').remove();
			$(this).find('i').remove();
		}

	});

	$('.truefalse span').live('blur', function() {
		var b = $(this);
		setTimeout(function() {

			b.parents().find('.tf').remove();
			b.parents().find('i.clearcontent').remove();

			check = 0;

		}, 1000)

	})

	$('i.clearcontent').live('click', function(event) {
		event.stopPropagation();
		$(this).parent().parent().siblings().css('opacity', 1);
		$(this).parent().parent().remove();

	});

	/*true-false info page edit code ends here*/

	/*multiple choice info page edit code starts here*/

	var check1 = 0;

	$('.multiplequestion').find('label,strong').css({
		'position' : 'relative',
		'z-index' : 100,
		'display' : 'block'
	});

	$('.multiplequestion').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {

			$(this).parent().css('opacity', 1);
			$(this).parent().siblings().css('opacity', 0.4);
			$('.addmorechoice').css('opacity', 1);
			check1 = 1;
			$(this).find('.choice-btn').remove();
			$(this).parent().find('.multiple-c').remove();

			if ($(this).next().hasClass('multiple-c')) {

			} else {

				$(this).append('<i contenteditable="false" class="choice-btn zzz" style="display: block; height: 20px; position: absolute; background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: 0px; right: 0px; width: 20px; z-index:999;"></i>');
				$(this).after('<div class="multiple-c zzz" style="position: absolute; width: 107%; border: 1px dotted rgb(141, 141, 141); height: 100%; left: -40px; top: -4px;"></div>');

			}
		}

	});

	$('.multiplequestion').live('mouseenter', function() {

		if ($('.text-editor').css('display') == 'block') {

			if (check1 == 0) {

				if ($(this).next().hasClass('multiple-c')) {

				} else {

					$(this).append('<i contenteditable="false" class="choice-btn" style="display: block; height: 20px; position: absolute; background: url(&quot;assets/images/x.png&quot;) no-repeat scroll 5px 5px transparent; cursor: pointer; top: 0px; right: 0px; width: 20px; z-index:999;"></i>');
					$(this).after('<div class="multiple-c" style="position: absolute; width: 107%; border: 1px dotted rgb(141, 141, 141); height: 100%; left: -40px; top: -4px;"></div>');

				}

			}

		}

	});

	$('.multiplequestion').live('mouseleave', function() {

		if ($('.text-editor').css('display') == 'block') {
			if (check1 == 0) {
				$(this).find('.choice-btn').remove();
				$(this).parent().find('.multiple-c').remove();
			}
		}

	});

	$('.multiplequestion').live('blur', function() {
		var obj = $(this);
		setTimeout(function() {
			check1 = 0;
			obj.find('.choice-btn').remove();
			obj.parent().find('.multiple-c').remove();

		}, 300);

	});

	$('.choice-btn').live('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().parent().siblings().css('opacity', 1);
		$(this).parent().parent().remove();
	});

	$('.label_check').live('click', function(event) {

		if ($('.text-editor').css('display') == 'block') {

			event.preventDefault();
		}

		if ($('.text-editor').css('display') == 'none') {

			event.stopPropagation();
		}

	});

	$('.addmorechoice').live('click', function(e) {
		e.preventDefault();
		$(this).before('<li style="position: relative;"><div class="multiplequestion"><strong contenteditable="true" style="position: relative; z-index: 100; display: block;">Enter new text here</strong><ul> <li> <label style="position: relative; z-index: 100; display: block;" class="label_check"><input type="checkbox" /><em contenteditable="true">Enter new text here</em></label></li><li><label style="position: relative; z-index: 100; display: block;" class="label_check"><input type="checkbox" /> <em contenteditable="true">Enter new text here</em></label></li><li><label style="position: relative; z-index: 100; display: block;" class="label_check"><input type="checkbox" /><em contenteditable="true">Enter new text here</em></label></li><li><label style="position: relative; z-index: 100; display: block;" class="label_check"><input type="checkbox" /><em contenteditable="true">Enter new text here</em></label></li><li class="addmore-answer" contenteditable="false" style="position: relative; cursor: pointer;opacity: 1;z-index: 100;"><span class="ans-btn" contenteditable="false">add new answer<i style="font-weight: bold;">+</i></span><div style="position: absolute; border: 1px dotted rgb(141, 141, 141);top:0;height:100%;width:40%;left:-40px"></div></li></ul></div></li>');
	});

	///..answer add

	$('.addmore-answer').live('click', function() {

		$(this).before('<li><label style="position: relative; z-index: 100; display: block;" class="label_check"><input type="checkbox" /><em contenteditable="true">Enter new text here</em></label></li>');
	});

	$('.edit').click(function() {

		if ($('.multiple').css('display') == 'block') {
			$('.addmorechoice, .addmore-answer, .ans-btn').attr('contenteditable', 'false');
			$('.addmorechoice').css({
				'opacity' : 1,
				'position' : 'relative'
			});
			$('.addmore-answer').css({
				'opacity' : 1,
				'position' : 'relative'
			});

		}

	});

	$('.close').click(function() {

		if ($('.multiple').css('display') == 'block') {
			$('.multiple li').css('opacity', 1);
			$('.addmorechoice, .addmore-answer, .ans-btn').attr('contenteditable', 'false');
			$('.addmorechoice').css({
				'opacity' : 0,
				'position' : 'absolute'
			});
			$('.addmore-answer').css({
				'opacity' : 0,
				'position' : 'absolute'
			});
		}

	});

	/*multiple choice info page edit code ends here*/

	//Edit resource work

	/*video of a tiger info page edit code starts here*/
	$('.edit').click(function() {

		$('.resource-video i').attr('contenteditable', 'false');

		if ($('.resource-video').css('display') == 'block') {

			$('.resource-video i.vediobtn').css('display', 'block');

			$('.resource-video h2').css({
				'border' : '1px dotted',
				'marginBottom' : '10px',
				'padding' : '4px'
			});
			$('.resource-video > div').css({
				'border' : '1px dotted',
				'padding' : '18px'
			});

			$('.resource-video span').css({
				'border' : '1px dotted',
				'padding' : '5px'
			});
		}

	});

	$('.close ').click(function() {

		if ($('.resource-video').css('display') == 'block') {

			$('.resource-video i.vediobtn').css('display', 'none');

			$('.resource-video h2').css({
				'border' : 'none',
				'marginBottom' : 'none',
				'padding' : 'none'
			});
			$('.resource-video > div').css({
				'border' : 'none',
				'padding' : 'none'
			});
			$('.resource-video span').css({
				'border' : 'none',
				'padding' : 'none'
			});

		}

	});

	$('.crossbtn1').live('click', function() {
		$(this).parent().find('p').text('Enter new text here');
		$(this).parent().find('p').focus();
	})

	$('.crossbtn3').live('click', function() {
		$('.innerspan').text('Enter new text here');
		$('.innerspan').focus();
	})
	/*video of a tiger info page edit code ends here*/

	/*picture of a tiger info page edit code starts here*/
	$('.edit').click(function() {

		$('.resource-image i').attr('contenteditable', 'false');

		if ($('.resource-image').css('display') == 'block') {

			$('.resource-image i.vediobtn').css('display', 'block');

			$('.resource-image h2').css({
				'border' : '1px dotted',
				'marginBottom' : '10px',
				'padding' : '4px'
			});
			$('.resource-image > div').css({
				'border' : '1px dotted',
				'padding' : '18px',
				'position' : 'relative'
			});
			$('.resource-image span').css({
				'border' : '1px dotted',
				'padding' : '5px'
			});
		}

	});

	$('.close ').click(function() {

		if ($('.resource-image').css('display') == 'block') {

			$('.resource-image i.vediobtn').css('display', 'none');

			$('.resource-image h2').css({
				'border' : 'none',
				'marginBottom' : 'none',
				'padding' : 'none'
			});
			$('.resource-image > div').css({
				'border' : 'none',
				'padding' : 'none'
			});
			$('.resource-image span').css({
				'border' : 'none',
				'padding' : 'none'
			});

		}

	});

	$('.resourcebtn1').live('click', function() {
		$(this).parent().find('p').text('Enter new text here');
		$(this).parent().find('p').focus();
	})

	$('.resourcebtn3').live('click', function() {
		$('.resource-innerspan').text('Enter new text here');
		$('.resource-innerspan').focus();
	})
	/*picture of a tiger info page edit code ends here*/

	/*Audio clip of a tiger info page edit code starts here*/
	$('.edit').click(function() {

		$('.resource-audio i').attr('contenteditable', 'false');

		if ($('.resource-audio').css('display') == 'block') {

			$('.resource-audio i.vediobtn').css('display', 'block');

			$('.resource-audio h2').css({
				'border' : '1px dotted',
				'marginBottom' : '10px',
				'padding' : '4px'
			});
			//$('.resource-audio > div').css({'border':'1px dotted','padding':'18px','position':'relative'});
			$('.resource-audio span').css({
				'border' : '1px dotted',
				'padding' : '5px',
				'position' : 'relative'
			});
		}

	});

	$('.close ').click(function() {

		if ($('.resource-audio').css('display') == 'block') {

			$('.resource-audio i.vediobtn').css('display', 'none');

			$('.resource-audio h2').css({
				'border' : 'none',
				'marginBottom' : 'none',
				'padding' : 'none'
			});
			//$('.resource-image > div').css({'border':'none','padding':'none'});
			$('.resource-audio span').css({
				'border' : 'none',
				'padding' : 'none'
			});

		}

	});

	$('.resource-audiobtn1').live('click', function() {
		$(this).parent().find('p').text('Enter new text here');
		$(this).parent().find('p').focus();
	});

	$('.resource-audiobtn3').live('click', function() {
		$('.resource-audio-innerspan').text('Add Transcript Here');
		$('.resource-audio-innerspan').focus();
	});

	/*Audio clip of a tiger info page edit code ends here*/

	/*resource-word-single Edit info page edit code starts here*/
	$('.edit').click(function() {

		if ($('.resource-word-single').css('display') == 'block') {

			$('.resource-word-single h2, .resource-word-single > div').append('<em style="position: absolute; height: 99%; top: 0px; left: 20px; width: 90%; border: 1px dotted;z-index:-1"></em>');
			$('.resource-word-single h2, .resource-word-single > div').css({
				'position' : 'relative'
			});

		}

	});

	$('.close ').click(function() {
		if ($('.resource-word-single').css('display') == 'block') {
			$('.resource-word-single h2, .resource-word-single > div').find('em').remove();
			$('.resource-word-single h2').css({
				'position' : 'static'
			});
		}

	});

	/*resource-word-single Edit info page edit code ends here*/

	/*Wordbank Paired Edit info page edit code starts here*/

	$('.edit').click(function() {

		if ($('.resource-word-paired').css('display') == 'block') {

			$('.resource-word-paired .columns, .resource-word-paired .add-data').append('<em style="position: absolute; height: 98%; top: 0px; left: 20px; width: 90%; border: 1px dotted;z-index:-1"></em>');
			$('.resource-word-paired h2').append('<em style="position: absolute; height: 108%; top: 0px; left: 20px; width: 90%; border: 1px dotted;z-index:-1"></em>');
			$('.resource-word-paired h2, .resource-word-paired .columns, .resource-word-paired .add-data ').css({
				'position' : 'relative'
			});
			$('.resource-word-paired .add-data').css('margin-top', '5px');

		}

	});

	$('.close ').click(function() {
		if ($('.resource-word-paired').css('display') == 'block') {
			$('.resource-word-paired h2, .resource-word-paired .columns, .resource-word-paired .add-data').find('em').remove();
			$('.resource-word-paired h2, .resource-word-paired .columns, .resource-word-paired .add-data ').css({
				'position' : 'static'
			});

		}

	});

	var w = 0;
	var z = 0;
	var col_count1 = 3;
	$('.columns .plus').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {
			w = $('.columns').css('width');
			w = parseInt(w.split('px'));
			w = w + 125;

			$('.columns').css('width', w);

			var ul_ht = $('.data-test').height();
			//$('.data-test').height(ul_ht);

			z = $('.add-data').css('width');
			z = parseInt(z.split('px'));
			z = z + 125;
			$('.add-data').css('width', z);

			$('.columns').append('<ul class="more-columns"><li contenteditable="true"> <b>Column ' + col_count1 + '</b> </li></ul>');
			col_count1++;

			$('.add-data').append('<ul class="more-data"><li class="dummydata" contenteditable="true">Enter New text</li></ul>');
			$('.add-data ul').css('min-height', ul_ht);
		}
	});

	$('.columns .minus').live("click", function() {

		if ($('.text-editor').css('display') == 'block') {

			w = $('.columns').css('width');
			w = parseInt(w.split('px'));
			w = w - 125;

			$('.columns').css('width', w);

			z = $('.add-data').css('width');
			z = parseInt(z.split('px'));
			z = z - 125;
			$('.add-data').css('width', z);

			$('.columns').find('.more-columns:last').remove();

			col_count1 = col_count1 - 1;

			if (col_count1 <= 2) {
				col_count1 = 3;
			}

			$('.add-data').find('.more-data:last').remove();

		}

	});

	var dataindx = 0
	$(".add-data li").live("keypress", function(e) {

		if (e.keyCode == 13) {
			dataindx = $(this).index();
			$(this).after('<li class="newrow" contenteditable="true">Enter New Text</li>');

			$(this).parent().siblings('ul').each(function() {
				$(this).find('li').eq(dataindx).after('<li class="newrow" contenteditable="true">Enter New Text</li>');
			})

			$(this).next().focus();
			return false;

		}

	});

	/*Wordbank Paired Edit info page edit code ends here*/

	/*Wordbank Edit info page edit code starts here*/

	$('.edit').click(function() {

		if ($('.resource-word-column').css('display') == 'block') {

			$('.resource-word-column h2, .resource-word-column .word-meaning ').append('<em style="position: absolute; height: 99%; top: 0px; left: 20px; width: 90%; border: 1px dotted;z-index:-1"></em>')
			$('.resource-word-column h2, .resource-word-column .word-meaning ').css('position', 'relative');
			$('.resource-word-column .resourcetitle').css({
				'position' : 'relative',
				'padding-bottom' : '10px'
			});
			$('.resource-word-column .resourcetitle').append('<em style="position: absolute; height:24px; top: 0px; left: 20px; width: 87.7%; border: 1px dotted;z-index:-1"></em>');

		}

	});
	$('.close ').click(function() {

		if ($('.resource-word-column').css('display') == 'block') {
			$('.resource-word-column h2, .resource-word-column .word-meaning ').find('em').remove();
			$('.resource-word-column h2, .resource-word-column .word-meaning ').css('position', 'static');
			$('.resource-word-column .resourcetitle').find('em').remove();
			$('.resource-word-column .resourcetitle').css({
				'padding-bottom' : '0px'
			});
		}

	});

	var x = 0;
	var y = 0;
	var col_count2 = 4;
	$('.resourcetitle .plus').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {

			y = $('.resourcetitle').css('width');
			y = parseInt(y.split('px'));
			y = y + 250;

			$('.resourcetitle').css('width', y);
			$('.resourcetitle').append('<ul class="more-columns"><li contenteditable="true"> <b>Column ' + col_count2 + '</b> </li></ul>');
			col_count2++;

			x = $('.word-meaning').css('width');
			x = parseInt(x.split('px'));
			x = x + 250;
			$('.word-meaning').css('width', x);
			$('.word-meaning').append('<ul class="meaning"><li contenteditable="true">Enter New Text</li></ul>');

		}
	});

	$('.resourcetitle .minus').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {
			y = $('.resourcetitle').css('width');
			y = parseInt(y.split('px'));
			y = y - 250;

			$('.resourcetitle').css('width', y);

			$('.resourcetitle').find('.more-columns:last').remove();

			col_count2 = col_count2 - 1;

			if (col_count2 <= 3) {
				col_count2 = 4;
			}

			x = $('.word-meaning').css('width');
			x = parseInt(x.split('px'));
			x = x - 250;
			$('.word-meaning').css('width', x);
			$('.word-meaning').find('.meaning:last').remove();
		}
	});

	var indx = 0;
	$(".word-meaning li").live("keypress", function(e) {

		if (e.keyCode == 13) {
			indx = $(this).index();
			$(this).after('<li class="newrow" contenteditable="true">Enter New Text</li>');

			$(this).parent().siblings('ul').each(function() {
				$(this).find('li').eq(indx).after('<li class="newrow" contenteditable="true">Enter New Text</li>');
			})

			$(this).next().focus();
			return false;
		}

	});

	/*Wordbank Edit info page edit code ends here*/

	/*side bar work code starts here*/

	$('.aside-btn').live('click', function() {

		if ($('.exercise-content').css('display') == 'block') {

			if ($(this).css('right') == '-3px') {
				$(this).animate({
					right : -258
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .fill-word').animate({
					right : -252
				}, 500);
			} else {
				$(this).animate({
					right : -3
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .fill-word').animate({
					right : 0
				}, 500);
			}

		}
		if ($('.resource-word-paired').css('display') == 'block') {

			if ($(this).css('right') == '44px') {
				$(this).animate({
					right : -213
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .Adjectives').animate({
					right : -207
				}, 500);
			} else {
				$(this).animate({
					right : 44
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .Adjectives').animate({
					right : 47
				}, 500);
			}

		}

		if ($('.true-false').css('display') == 'block') {

			if ($(this).css('right') == '0px') {
				$(this).animate({
					right : -258
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .struggling').animate({
					right : -252
				}, 500);
			} else {
				$(this).animate({
					right : 0
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .struggling').animate({
					right : 0
				}, 500);
			}

		}

		if ($('.match').css('display') == 'block') {

			if ($(this).css('right') == '0px') {
				$(this).animate({
					right : -258
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .matchingword').animate({
					right : -252
				}, 500);
			} else {
				$(this).animate({
					right : 0
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .matchingword').animate({
					right : 0
				}, 500);
			}

		}

		if ($('.multiple').css('display') == 'block') {

			if ($(this).css('right') == '0px') {
				$(this).animate({
					right : -258
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .multiplechoice').animate({
					right : -252
				}, 500);
			} else {
				$(this).animate({
					right : 0
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .multiplechoice').animate({
					right : 0
				}, 500);
			}

		}

		if ($('.resource-word-column').css('display') == 'block') {

			if ($(this).css('right') == '44px') {
				$(this).animate({
					right : -213
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .gas2').animate({
					right : -207
				}, 500);
			} else {
				$(this).animate({
					right : 44
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .gas2').animate({
					right : 47
				}, 500);
			}

		}

		if ($('.flash').css('display') == 'block') {
			if ($(this).css('right') == '0px') {
				$('.sidebar .flashcard').css('display', 'block').animate({
					right : -252
				});
				$(this).animate({
					right : -258
				}, 400).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});

			} else {

				$(this).animate({
					right : 0
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});

				$('.sidebar .flashcard').animate({
					right : 0
				}, 500, function() {
					$(this).fadeOut();
				});
			}

		}

		if ($('.resource-video').css('display') == 'block') {
			if ($(this).css('right') == '44px') {

				$('.sidebar .video').css('display', 'block').animate({
					right : -207
				});
				$(this).animate({
					right : -213
				}, 400).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});

			} else {

				$(this).animate({
					right : 44
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .video').animate({
					right : 47
				}, 500, function() {
					$(this).fadeOut();
				});
			}

		}
		if ($('.resource-audio').css('display') == 'block') {

			if ($(this).css('right') == '44px') {
				$('.sidebar .audio').css('display', 'block').animate({
					right : -207
				});
				$(this).animate({
					right : -213
				}, 400).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});

			} else {

				$(this).animate({
					right : 44
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .audio').animate({
					right : 47
				}, 500, function() {
					$(this).fadeOut();
				});
			}

		}
		if ($('.resource-image').css('display') == 'block') {

			if ($(this).css('right') == '44px') {
				$('.sidebar .tiger-image').css('display', 'block').animate({
					right : -207
				});
				$(this).animate({
					right : -213
				}, 400).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});

			} else {

				$(this).animate({
					right : 44
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .tiger-image').animate({
					right : 47
				}, 500, function() {
					$(this).fadeOut();
				});
			}
		}

		if ($('.resource-word-single').css('display') == 'block') {

			if ($(this).css('right') == '44px') {
				$(this).animate({
					right : -213
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .gas1').animate({
					right : -207
				}, 500);
			} else {
				$(this).animate({
					right : 44
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .gas1').animate({
					right : 47
				}, 500);
			}

		}
		if ($('.sort-exercise').css('display') == 'block') {

			if ($(this).css('right') == '0px') {
				$(this).animate({
					right : -258
				}, 500).css({
					"background" : "url(assets/images/aside-close-btn.png) no-repeat left top"
				});
				$('.sidebar .shortexercise').animate({
					right : -252
				}, 500);
			} else {
				$(this).animate({
					right : 0
				}, 500).css({
					"background" : "url(assets/images/aside-btn.png) no-repeat left top"
				});
				$('.sidebar .shortexercise').animate({
					right : 0
				}, 500);
			}

		}

	});

	/*side bar work code ends here*/

	/*Fill in the blank,add more answer function starts here*/

	$('.image-editor span, .image-editor h3').focus(function() {
		$(this).css({
			'border' : '1px dotted #383838',
			'margin' : '8px 35px'
		});
	});

	$('.image-editor span, .image-editor h3').blur(function() {
		$(this).css({
			'border' : 'none',
			'margin' : 'none'
		});
	});

	$('.picturebtn').click(function() {
		$(this).parent().css('display', 'none');
	});

	$('.ans').live('click', function() {
		$(this).before('<span contenteditable="true">New answer</span>');
	});

	$('.addmore-fill').live('click', function() {
		$(this).before('<li style="cursor:pointer"><p contenteditable="true"><span contenteditable="true"><b><u>New text</u></b></span>Enter new text here.</p></li>');
	});

	$('.edit').click(function() {

		$('.ans').css('display', 'block');
		$('.addmore-fill').css({
			'opacity' : 1,
			'position' : 'relative'
		});
		$('.answer span, .question p, .question span').attr('contenteditable', 'true');
		$('.exercise-content').find('h2,h3').attr('contenteditable', 'true');
		$('.answer span.ans').attr('contenteditable', 'false');
		$('.answer span').draggable('disable');

	});

	$('.close').click(function() {

		$('.question li').css({
			"opacity" : 1
		});
		$('.addmore-fill').css({
			'position' : 'absolute',
			'opacity' : 0
		});
		$('.ans').css('display', 'none');
		$('.answer span, .question p, .question span').removeAttr('contenteditable');
		$('.exercise-content').find('h2,h3').removeAttr('contenteditable');
		$('.answer span').draggable().draggable('enable');
		$('.question').find('.fill').remove();

		$(".question p span").droppable({

			drop : function(event, ui) {

				$(this).append(ui.draggable.context);
				$('.question .ui-draggable').css({
					'left' : 0,
					'top' : 0
				});

				var getSrc = $('.image-editor img').attr('src');
				if (getSrc == '') {

					$('.image-editor').css('display', 'none');
				}

			}
		});

	});

	$('.clsbtn').live("click", function(event) {
		event.stopPropagation();
		$(this).parent().parent().remove();
		$('#textBox li').css('opacity', 1);

	});

	$('.question li').css('cursor', 'pointer');

	$('.question li:not(.addmore-fill)').live('click', function() {

		if ($('.text-editor').css('display') == 'block') {

			$(this).css({
				"position" : "relative",
				'cursor' : 'auto'
			});
			$(this).find('p').css({
				"position" : "relative",
				"z-index" : "10"
			});

			$(this).css({
				"opacity" : 1
			});
			$(this).siblings().css({
				"opacity" : 0.4
			});
			$(this).siblings().find('div.fill').remove();

			if ($(this).find('div').hasClass('fill')) {
			} else {

				$(this).append('<div class="fill" style="position:absolute;height:30px;width:100%;left:-30px;top:-1px;border:1px dotted #8d8d8d;z-index:5;"><i class="clsbtn" style="display:block;height:20px;width:20px;position:absolute;right:0px;top:0px;background: url(assets/images/x.png) no-repeat 5px 5px;cursor:pointer;z-index:7;"></i></div>');
			}

		}

	});

	/*Fill in the blank,add more answer function starts here*/

	/*Fill in the blank, drag and drop function starts here*/
	$('.answer span').draggable();
	$('.ans').draggable('disable');

	// $(".question p span").droppable({
	//
	// drop : function(event, ui) {
	//
	// $(this).append(ui.draggable.context);
	// $('.question .ui-draggable').css({'left':0,'top':0});
	//
	// var getSrc=$('.image-editor img').attr('src');
	// if(getSrc == '')
	// {
	//
	// $('.image-editor').css('display','none');
	// }
	//
	// }
	// });

	$(".answer").droppable({
		drop : function(event, ui) {

			$(this).append(ui.draggable.context);
			$(this).find('.ans').before(ui.draggable.context);

			var getSrc = $('.image-editor img').attr('src');
			if (getSrc == '') {

				$('.image-editor').css('display', 'none');
			}
		}
	});

	$('.answer span').mouseup(function() {

		$(this).css({
			'position' : 'static',
			'left' : 0,
			'top' : 0
		});
	});

	$('.answer span').mousedown(function() {
		$(this).css('position', 'relative');
	});

	$('.question span').mouseup(function() {
		$(this).css('position', 'static');
	});

	$('.question .ui-draggable').live('mousedown', function() {

		$(this).css({
			'left' : '0px',
			'top' : '0px'
		});
	})
	/*drag and drop function ends here*/

	/*Add new exercice code starts here*/
	$('.edit-exercise li').click(function() {
		var cls = $(this).attr('class');

		$('.clipboard-content ').children('div.' + cls).css('display', 'block').addClass('block');
		$('.clipboard-content ').children('div.' + cls).siblings().css('display', 'none').removeClass('block');

		$('.sidebar, .aside-btn').css('display', 'block');
		$('.sidebar').find('.' + cls + '').css('display', 'block');
		$('.sidebar').find('.' + cls + '').siblings().css('display', 'none');

		if ($(this).hasClass('multiplechoice')) {
			$('.sidebar').find('.' + cls + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('shortexercise')) {
			$('.sidebar').find('.' + cls + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('matchingword')) {
			$('.sidebar').find('.' + cls + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('struggling')) {
			$('.sidebar').find('.' + cls + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}
		if ($(this).hasClass('fill-word')) {
			$('.sidebar').find('.' + cls + '').css({
				'right' : 0
			});
			$('.aside-btn').css('right', 0);
		}

	});
	/*Add new exercice code ends here*/

});
//document end

/*drawer pop-up drag and drop function starts here*/

var headingval;
var imagesrc;
// function allowDrop(ev) {
// ev.preventDefault();
// }
//
// function drag(ev) {
//
// headingval = $('.pop-up').children('h2').text();
// imagesrc = $('.pop-up').find('img').attr('src');
//
// }

// function drop(ev) {
//
// $('.image-editor').css({
// 'display' : 'block'
// });
// $('.dropalert').css('display','block');
// $('.image-editor').find('h3').text(headingval);
// $('.image-editor').find('img').attr('src', imagesrc);
//
// $('.date').css('display', 'block');
// $('.exercise-content .scrollbar-content > h2').addClass("change");
// $('.exercise-content .scrollbar-content > h3').css({
// 'line-height' : '1.5',
// 'font-style' : 'italic'
// });
// $('.exercise-content').css('height', '732')
// }

var dragtest = 0;
$('.icone').mousedown(function() {
	dragtest = 1
	$('.image-editor').css('display', 'block');
	$('.dropalert').css('display', 'block');
	$('.date').css('display', 'block');
	$('.exercise-content .scrollbar-content > h2').addClass("change");
	$('.exercise-content .scrollbar-content > h3').css({
		'line-height' : '1.5',
		'font-style' : 'italic'
	});
	$('.exercise-content').css('height', '732');
});
$(function() {
	$(".icone").draggable({
		appendTo : "body",
		helper : "clone",
		cursor : "move",
		revert : "valid",
		drag : function(event, ui) {
			dragtest = 0;
		}
	});

	$(".image-editor").droppable({
		drop : function(event, ui) {
			dragtest = 0;
			var a = ui.draggable.parent().find('h2').text();
			var src = ui.draggable.parent().find('img').attr('src');
			$(".image-editor").find('div').find('h3').text(a);
			$(".image-editor").find('div').find('img').attr('src', src);

		}
	})

});

$('.icone').mouseup(function() {
	if (dragtest == 1) {
		$('.image-editor').css('display', '');
	}

})
/*drawer pop-up drag and drop function ends here*/

/*Tag Drawer, drag and drop function starts here*/

$('.drawer li > ul > li > a').addClass('child');
$('.level li  a').addClass('child');
$('.lesson  a').addClass('subchild');

$(function() {
	$(".drawer-wrapper a").draggable({
		appendTo : "body",
		helper : "clone",
		cancel : ".ui-widget-header",
		zIndex : 99999,
		revert : "invalid",
	});

	$(".include").droppable({
		drop : function(event, ui) {
			ui.draggable.addClass('ui-widget-header');
			$(this).find(".placeholder").remove();
			$(this).append(ui.draggable.clone());
			ui.draggable.css({
				'color' : '#8A8780',
				'background' : 'none',
				'border' : '1px solid #8A8780',
				'border-radius' : '2px'
			});
			excludeDrop();
			$(this).find('a').removeClass('ui-widget-header');

		}
	})

	$(".exclude").droppable({
		drop : function(event, ui) {
			ui.draggable.addClass('ui-widget-header');
			$(this).find(".placeholder").remove();
			$(this).append(ui.draggable.clone());
			ui.draggable.css({
				'color' : '#8A8780',
				'background' : 'none',
				'border' : '1px solid #8A8780',
				'border-radius' : '2px'
			});
			excludeDrop();
			$(this).find('a').removeClass('ui-widget-header');
		}
	})

});

function excludeDrop() {
	$(function() {

		$(".include a").draggable({
			appendTo : "body",
			helper : "clone",
			zIndex : 99999,
			revert : "invalid",

		});

		$(".exclude a").draggable({
			appendTo : "body",
			helper : "clone",
			zIndex : 99999,
			revert : "invalid",

		});

		$(".drawer-wrapper").droppable({

			drop : function(event, ui) {

				htm = ui.draggable.html();
				ui.draggable.remove();

				$('.tags a').each(function() {

					if ($(this).html() == htm) {
						$(this).removeAttr('style');
						$(this).removeClass('ui-widget-header');
					}

				});
			}
		})

	});
}

function del() {
	$(".exclude").find('a').removeAttr('class');
	$(".exclude").find('a').removeAttr('style');
}

/* drawer-wrapper to include on click code starts here*/
var htm;
$(".drawer-wrapper a:not(.close)").click(function() {

	htm = $(this).clone();

	if ($(this).hasClass('ui-widget-header')) {

	} else {

		$('.include').append(htm);
		$('.include').find('a').addClass('special')

		excludeDrop();
	}

	$(this).css({
		'color' : '#8A8780',
		'background' : 'none',
		'border' : '1px solid #8A8780',
		'border-radius' : '2px'
	}).addClass('ui-widget-header');
	$('.include').find('.placeholder').remove();

});

/* drawer-wrapper to include code ends here*/

/* on click items trays out code starts here*/
$('.include a').live('click', function() {

	htm = $(this).html();
	$(this).remove();

	$('.tags a').each(function() {

		if ($(this).html() == htm) {
			$(this).removeAttr('style');
			$(this).removeClass('ui-widget-header');
		}

	});

});

$('.exclude a').css({
	'cursor' : 'pointer'
});
$('.exclude').css({
	'z-index' : 0
});
$('.exclude a').live('click', function() {

	htm = $(this).html();
	$(this).remove();

	$('.tags a').each(function() {

		if ($(this).html() == htm) {
			$(this).removeAttr('style');
			$(this).removeClass('ui-widget-header');
		}

	});
});
/* on click items trays out code ends here*/

/*Tag Drawer drag and drop function ends here*/

/*Second phase code starts here*/
var listClass;
var listClass1;
$(document).ready(function() {

	/*second page tab code starts here*/

	$('.tabbing-link li').click(function() {

		listClass = $(this).attr('class');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		$('.tab-section').find('div.' + listClass + '').css('display', 'block');
		$('.tab-section').find('div.' + listClass + '').siblings().css('display', 'none');
	});

	$('.rate').css('display', 'none');

	$('.check').click(function() {

		$('.rate').fadeIn(500);

		$(function() {
			$("#difficulty").slider({
				range : "max",
				min : 1,
				max : 5,
				value : 1,
				slide : function(event, ui) {
					$("#amount").val(ui.value);

					if (ui.value == 2) {
						$("#difficulty a").css('background-position', '-120px 0');
					} else if (ui.value == 3) {
						$("#difficulty a").css('background-position', '-224px 0');

					} else if (ui.value == 4) {
						$("#difficulty a").css('background-position', '-326px 0');
					} else if (ui.value == 5) {
						$("#difficulty a").css('background-position', '-433px 1px');
					} else if (ui.value == 1) {
						$("#difficulty a").css('background-position', '0 1px');
					}

				}
			});
		});

		$(function() {
			$("#interest").slider({
				range : "max",
				min : 1,
				max : 5,
				value : 2,
				slide : function(event, ui) {
					$("#interest").val(ui.value);

					if (ui.value == 2) {
						$("#interest a").css('background-position', '-120px -70px');
					} else if (ui.value == 3) {
						$("#interest a").css('background-position', '-224px -70px');

					} else if (ui.value == 4) {
						$("#interest a").css('background-position', '-326px -70px');
					} else if (ui.value == 5) {
						$("#interest a").css('background-position', '-433px -70px');
					} else if (ui.value == 1) {
						$("#interest a").css('background-position', '0px -70px');
					}
				}
			});

		});

		$(function() {
			$("#relevance").slider({
				range : "max",
				min : 1,
				max : 5,
				value : 3,
				slide : function(event, ui) {
					$("#relevance").val(ui.value);

					if (ui.value == 2) {
						$("#relevance a").css('background-position', '-120px -145px');
					} else if (ui.value == 3) {
						$("#relevance a").css('background-position', '-224px -145px');

					} else if (ui.value == 4) {
						$("#relevance a").css('background-position', '-326px -145px');
					} else if (ui.value == 5) {
						$("#relevance a").css('background-position', '-433px -143px');
					} else if (ui.value == 1) {
						$("#relevance a").css('background-position', '0 -146px');
					}

				}
			});

		});

	});

	$('.done').click(function() {
		$('.rate').fadeOut(500);
	});
	/*second page tab code ends here*/

	/*binder page tab code starts here*/
	$('.tab-link li').eq(0).addClass('active');
	$('.tab-link li').click(function() {

		listClass1 = $(this).attr('class');
		if ($(this).hasClass('active')) {

			listClass1 = listClass1.split(' ');
			$(this).removeClass('active');
			$('.tab-container').find('div.' + listClass1 + '').css('display', 'none');

		} else {

			$(this).addClass('active');
			$('.tab-container').find('div.' + listClass1 + '').css('display', 'block');
		}
	});

	/*binder page tab code ends here*/

	/*binder page edit code starts here*/
	$('.edit').click(function() {
		if ($(this).parent().find('.editable').attr("contenteditable") == 'false') {
			$(this).parent().find('.editable').attr('contenteditable', 'true').css({
				'border' : '1px dotted'
			});
			$('.schedule').find('.editable').attr('contenteditable', 'true').css({
				'border' : '1px dotted'
			});
		} else {

			$(this).parent().find('.editable').attr('contenteditable', 'false').css({
				'border' : 'none'
			});
			$('.schedule').find('.editable').attr('contenteditable', 'false').css({
				'border' : 'none'
			});
		}
	});
	$('.open-close').click(function() {
		$('.english > div').toggle(500);
		$(this).toggleClass('angle');
	})
	$('.chat-box').click(function() {
		if ($(this).css('z-index') == 500) {
			$(this).css('z-index', 2000);
		} else {

			$(this).css('z-index', 500);
		}

	});
	$('.chat-box > div').click(function(event) {
		event.stopPropagation();
	})

	$('.student-roster > strong').click(function() {

		if ($(this).css('color') == "rgb(71, 71, 71)") {
			$(this).css('color', 'rgb(82, 131, 207)');
		} else {
			$(this).css('color', 'rgb(71, 71, 71)');
		}

	});

	$('.student-name li').click(function() {

		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		var myString = $(this).find('.findName').text();
		var rank = $(this).find('.rank').text();

		var arrayValue = myString.split(' ');
		var firstValue = arrayValue[0];
		var secValue = arrayValue[1];

		var firstChar = firstValue.charAt(0);
		var lastChar = secValue.charAt(0);

		$('.short-Name').text(firstChar + lastChar);
		$('.user-message i').text(firstChar + lastChar + ' :');

		//new code
		$('.total-marks h3').text(myString);
		$('.total-marks small').text(rank);

		$('.chat-box strong').text("To: " + myString);

		if ($(this).find('a').children('i').hasClass('chat')) {
			$(this).find('a').children('i').remove();
			$(this).find('a').append('<i class="chat"> </i>');
		} else {
			$(this).find('a').append('<i class="chat"> </i>');
			$(this).siblings().find('a').children('i').remove();
		}

	});

	var day;
	$('.schedule1 em').click(function() {

		$(this).addClass('active');
		day = $(this).text();

		$('.calender-view li').each(function() {
			if ($(this).find('span').eq(0).text() == day) {
				$(this).find('span').css('font-weight', 'bold');
			}

		});

	});

	$('.scrollbar-content > div').find('li').on("click touchend", function() {
		// var clss=$(this).attr('class');
		// setTimeout(function(){
		// $('.score-page').children('div.'+clss).css('display','block').animate({'left':'334px'},800);
		// },200)
		// $('.score-page').children('div.'+clss).siblings().animate({'left':-400},800);
		// setTimeout(function(){
		// $('.score-page').children('div.'+clss).siblings().css('display','none');
		// },200)
		var clss = $(this).attr('class');
		$('.score-page').children('div.' + clss).css('display', 'block');
		$('.score-page').children('div.' + clss).siblings().css('display', 'none');
	})

	$('.exit').on('click', function() {
		//$(this).parents('.close-ex').animate({'left':-400},800,function(){
		//$(this).css('display','none');
		$(this).parents('.close-ex').css('display', 'none');
	});

	$('.edit-score').on('click', function(event) {
		event.stopPropagation();
		if ($(this).parent().parent().find('.editable').attr('contenteditable') == 'false') {
			$(this).parent().parent().find('.editable').attr('contenteditable', 'true').css({
				'border' : '1px dotted'
			});
		} else {

			$(this).parent().parent().find('.editable').attr('contenteditable', 'false').css({
				'border' : 'none'
			});
		}
	});

	$('.editable').on('click', function(event) {
		event.stopPropagation();
		$(this).css('cursor', 'auto');
	})

	$(".tab-content1 li").hover(function() {

		$(this).css({
			'cursor' : 'pointer'
		})
		$(this).find('a').css({
			'visibility' : 'visible'
		});

	}, function() {
		$(this).css({
			'cursor' : 'auto'
		})
		$(this).find('a').css({
			'visibility' : 'hidden'
		});
		//$(this).find('div').css({'display':'none'});
	});

	$(".tab-content1 li").click(function() {

		$(this).css({
			'background' : '#e6f1ff'
		})
		$(this).find('div').css({
			'display' : 'block'
		});

		$(this).siblings().css({
			'background' : 'none'
		})
		$(this).parent().parent().siblings().find('li').css({
			'background' : 'none'
		})
		$(this).siblings().find('div').css({
			'display' : 'none'
		});
		$(this).parent().parent().siblings().find('li').find('div').css({
			'display' : 'none'
		});
	});

	$(".english").hover(function() {
		$(this).find('.edit').css('display', 'block');

	}, function() {

		$(this).find('.edit').css('display', 'none');
	});
	$('.english .edit').css('display', 'none');

	/*binder page edit code ends here*/

	/*side bar editable work code starts here*/

	$('.edit-sidebar').click(function() {

		if ($(this).parent().find('.editable').attr("contenteditable") == 'false') {
			$(this).parent().find('.editable').attr('contenteditable', 'true').css({
				'border' : '1px dotted'
			});

		} else {

			$(this).parent().find('.editable').attr('contenteditable', 'false').css({
				'border' : 'none'
			});

		}
	});

	/*side bar editable work code ends here*/
	/*side bar star selectable/deselectable work code starts here*/
	$('.heading i').click(function() {

		if ($(this).css('background-position') == "0px -600px") {
			$(this).css('background-position', '0px -238px');
		} else {
			$(this).css('background-position', '0px -600px');
		}

	});
	/*side bar star selectable/deselectable work code ends here*/
	// $('.expand-report').click(function(){
	// $('.progress-report').animate({right:0},350)
	// })
	// $('.report-link').click(function(){
	// $('.progress-report').animate({right:224},350)
	// })
	// $('.label_check').click(function() {
	// setuplabel();
	// });
	//
});
//
// function setuplabel() {
// if ($('.label_check input').length) {
// $('.label_check').each(function() {
// $(this).removeClass('c_on');
// });
// $('.label_check input:checked').each(function() {
// $(this).parent('label').addClass('c_on');
// });
// };
//
// };
function css_browser_selector(u) {
	var ua = u.toLowerCase(), is = function(t) {
		return ua.indexOf(t) > -1
	}, g = 'gecko', w = 'webkit', s = 'safari', o = 'opera', m = 'mobile', h = document.documentElement, b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
	c = b.join(' ');
	h.className += ' ' + c;
	return c;
}; css_browser_selector(navigator.userAgent); 