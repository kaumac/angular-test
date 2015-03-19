$(document).ready(function() {

	$('.text-editor').find('li').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	$('.close').click(function() {
		$('.text-editor').fadeOut(500);
		$('.question').find('span').attr('contenteditable', 'false');
		$('.image-editor').find('h2,h3,span').attr('contenteditable', 'false');
		$('.gas2').find('h2,li').attr('contenteditable', 'false');
		
		$('.audio').find('h2,span').attr('contenteditable', 'false');
		
		$('.tiger-image').find('h2,	span').attr('contenteditable', 'false');
		
		$('.video').find('h2,span').attr('contenteditable', 'false');
		$('.gas1').find('h2,ul').attr('contenteditable', 'false');
		$('.Adjectives').find('h2,li').attr('contenteditable', 'false');
		
		$('.true-false').find('h2,h3,p').attr('contenteditable', 'false');
		$('.truefalse').each(function(){
			
			$(this).find('span').eq(1).attr('contenteditable', 'false');
		})
		
		
		$('.shortexercise').find('h2,h3').attr('contenteditable', 'false');
		$('.short-ans').attr('contenteditable','false');
		
		$('.multiplechoice').find('h2,h3,strong,em').attr('contenteditable', 'false');
		
		
		$('.matchingword').find('h2,h3').attr('contenteditable', 'false');
		$('.matchingword').find('li').each(function(){
			$(this).find('p').attr('contenteditable', 'false');
		});
		
		$('.flashcard').find('h2,h3,em').attr('contenteditable', 'false');

		popupClose();
	});

	$('.clipboard-link .edit').click(function() {
		$('.text-editor').fadeIn(500);
		$('.question').find('span').attr('contenteditable', 'true');
		$('.image-editor').find('h2,h3,span').attr('contenteditable', 'true');
		$('.gas2').find('h2,li').attr('contenteditable', 'true');
		$('.audio').find('h2,span').attr('contenteditable', 'true');
		
		$('.tiger-image').find('h2,span').attr('contenteditable', 'true');
		
		$('.video').find('h2,span').attr('contenteditable', 'true');
		
		$('.gas1').find('h2,ul').attr('contenteditable', 'true');
		
		$('.Adjectives').find('h2,li').attr('contenteditable', 'true');
		
		$('.true-false').find('h2,h3,p').attr('contenteditable', 'true');
		$('.truefalse').each(function(){
			
			$(this).find('span').eq(1).attr('contenteditable', 'true');
		})
		
		$('.shortexercise').find('h2,h3').attr('contenteditable', 'true');
		$('.short-ans').attr('contenteditable','true');
		
		$('.multiplechoice').find('h2,h3,strong,em').attr('contenteditable', 'true');
		
		$('.matchingword').find('h2,h3').attr('contenteditable', 'true');
		$('.matchingword').find('li').each(function(){
			
			$(this).find('p').attr('contenteditable', 'true');
		});
		
		
		$('.flashcard').find('h2,h3,em').attr('contenteditable', 'true');
		$('.text-editor').find('li').removeClass('active');

		popUp();
	});

	/*drawer pop up box code starts here*/
	function popUp() {
		$('.close-pop').click(function() {
			$('.pop-up-box').css('display', 'none');
		});

		$('.catalog-drawer ul li').mouseenter(function() {
			$('.pop-up-box').css('display', 'block');
		});

		$('.catalog-drawer ul li').mouseleave(function() {
			$('.pop-up-box').css('display', 'none');
		});

		$('.pop-up-box').mouseenter(function() {
			$(this).css('display', 'block');
		})

		$('.pop-up-box').mouseleave(function() {
			$(this).css('display', 'none');
		})
		//code for set attr in popup box
		$('.scrollbars li').hover(function() {

			var topval = $(this).offset().top;
			var src = $(this).children('div.pop-up-content').children('img').attr('src');
			var heading = $(this).children('div.pop-up-content').children('h2').text();

			$('.pop-up-box').find('.pop-up').css('top', topval - 98);
			$('.pop-up-box').find('.pop-up').find('img').attr('src', src);
			$('.pop-up-box').find('.pop-up').find('h2').text(heading);

		});
	}

	function popupClose() {

		$('.catalog-drawer ul li').mouseenter(function() {
			$('.pop-up-box').css('display', 'none');
		});

	}


	$(".icone").click(function() {

		$(this).parent(".pop-up").find('h2,img,i,span').css("display", "none");
		$(".pop-up").css("width", "342");
		//$(".pop-up").css({"top":"14px"});
	})

	$(".pop-up").mouseleave(function() {
		$(this).find('h2,img,i,span').css("display", "block");
	})
	/*drawer pop up box code starts here*/

	/*Editable click functiont code starts here*/
	// $('.bold').click(function() {
		// if (selText) {
			// formatDoc('bold');
		// }
	// });
// 
	// $('.italic').click(function() {
		// if (selText) {
			// formatDoc('italic');
		// }
	// });
// 
	// $('.underline').click(function() {
		// if (selText) {
			// formatDoc('underline');
		// }
	// });
// 
	// $('.undo').click(function() {
		// //if(selText){
		// formatDoc('undo');
		// //}
	// });
// 
	// $('.redo').click(function() {
		// //if(selText){
		// formatDoc('redo');
		// //}
	// });
	
	$('.meta-tag').click(function() {
		$('.tree').fadeIn(500);
	});
	$('.tree-close').click(function(){
		$(this).parent().fadeOut(500);
	});

	// $('#reset').click(function(){
	// //if(selText){
	// formatDoc('cleanDoc');
	// //document.getElementById("textBox").innerHTML="";
	// oDoc.innerHTML=sDefTxt;
	// //}
	// });

	/*Editable click functiont code ends here*/

/* push the title below the edit toolbar when it opens code statrs here*/

$('.edit').click(function(){
	
 	if($('.resource-word-paired').css('display')=='block')
 	{ 
 		 $('.resource-word-paired').css('padding-top','70px');
 	}
 	if($('.resource-audio').css('display')=='block')
 	{ 
 		 $('.resource-audio').css('padding-top','70px');
 	}
 	if($('.resource-image').css('display')=='block')
 	{ 
 		 $('.resource-image').css('padding-top','70px');
 	}
 	if($('.resource-video').css('display')=='block')
 	{ 
 		 $('.resource-video').css('padding-top','70px');
 	}
 	if($('.resource-word-column').css('display')=='block')
 	{ 
 		 $('.resource-word-column').css('padding-top','70px');
 	}
 	if($('.resource-word-single').css('display')=='block')
 	{ 
 		 $('.resource-word-single').css('padding-top','70px');
 	}
 		if($('.exercise-content').css('display')=='block')
	 	{ 
	 		 $('.exercise-content').css({'padding-top':'40px','box-sizing':'border-box','-moz-box-sizing':'border-box'});
	 		 $('.exercise-content h2').addClass('display');
	 	}
	 	
	 if($('.true-false').css('display')=='block')
	 	{ 
	 		 $('.true-false').css('padding-top','40px');
	 		 $('.true-false h2').addClass('display');
	 	}	
    if($('.match').css('display')=='block')
	 	{ 
	 		 $('.match').css('padding-top','40px');
	 		 $('.match h2').addClass('display');
	 	}
	if($('.multiple').css('display')=='block')
	 	{ 
	 		 $('.multiple').css('padding-top','40px');
	 		 $('.multiple h2').addClass('display');
	 	}
	 if($('.flash').css('display')=='block')
	 	{ 
	 		 $('.flash').css({'padding-top':'40px','background-position':'left -140px'});
	 		  $('.flash h2').addClass('display');
	 	}	 		

     if($('.sort-exercise').css('display')=='block')
	 	{ 
	 		 $('.sort-exercise').css('padding-top','40px');
	 		 $('.sort-exercise h2').addClass('display');
	 	}
   
 	
});

$('.close').click(function(){
	
	$('.resource-word-paired').css('padding-top','30px');
	$('.resource-audio').css('padding-top','30px');
	$('.resource-image').css('padding-top','30px');
	$('.resource-video').css('padding-top','30px');
	$('.resource-word-column').css('padding-top','30px');
    $('.resource-word-single').css('padding-top','30px');
    
    $('.exercise-content').css('padding-top','0px');
    $('.true-false').css('padding-top','0px');
    $('.match').css('padding-top','0px');
    $('.multiple').css('padding-top','0px');
    
    $('.flash').css({'padding-top':'0px','background-position':'left -180px'});
    
    $('.sort-exercise').css('padding-top','0px');
    
    $('.exercise-content h2, .true-false h2, .match h2, .multiple h2, .flash h2, .sort-exercise h2').removeClass('display');
});

/* push the title below the edit toolbar when it opens code ends here*/

});// document end

/*Editable functionality and get selected text code starts here*/

// var oDoc, sDefTxt;
// function initDoc() {
	// oDoc = document.getElementById("textBox");
	// sDefTxt = oDoc.innerHTML;
// }
// 
// function formatDoc(property, selText) {
	// var nd=document.execCommand(property, false, selText);
// 	
	// //alert(nd);
	// oDoc.focus();
// }

// var selText = "";
// function GetSelectedText() {
// 
	// if (window.getSelection) {// all browsers, except IE before version 9
// 
		// if (document.activeElement && (document.activeElement.tagName.toLowerCase() == "textarea" || document.activeElement.tagName.toLowerCase() == "input")) {
			// var text = document.activeElement.value;
			// selText = text.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd);
			// // alert(selText)
		// } else {
			// var selRange = window.getSelection();
			// selText = selRange.toString();
// 
		// }
	// } else {
		// if (document.selection.createRange) {// Internet Explorer
			// var range = document.selection.createRange();
			// selText = range.text;
		// }
	// }
	// if (selText !== "") {
		// // alert (selText);
	// }
// }

/*Editable functionality and get selected text code ends here*/

//suffle code

(function($) {
$.randomize = function(arr) {
for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
return arr;
};

})(jQuery);


$(function() {

$('.suffle').click(function(event) {

var $li = $('li', '#test-answer').get();
var random = $.randomize($li);

$('#test-answer').empty();

$(random).appendTo('#test-answer').filter('.addanswer1').appendTo('#test-answer');

event.preventDefault();
});


});

