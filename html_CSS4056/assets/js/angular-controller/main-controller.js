app.controller('mainCtrl', ['$scope',
function($scope) {

	$scope.editmode = false;
	$scope.status = "hide";
	$scope.className = "";
	angular.element('.select-box').addClass('ng-hide');

	/*Tool box open/close code starts here*/
	$scope.openToolBox = function() {

		$scope.editmode = true;
		$scope.status = "show";
		if ($scope.editmode == true) {
			$scope.className = "border-style";
			angular.element('.select-box').removeClass('ng-hide').addClass('ng-show');
			angular.element('.selected-data').removeClass('ng-show').addClass('ng-hide');
			angular.element('.dropable-area').removeClass('ng-hide').addClass('ng-show border-style');

			angular.element('.dropable-data').removeClass('ng-show').addClass('ng-hide');
			angular.element('.lesson-plan').addClass('edit-lessonplan');

		} else {
			$scope.className = "";
			angular.element('.select-box').addClass('ng-hide');
		}
		angular.element('.outerdroppable-box').each(function() {
			angular.element(this).find('.dropable-area').attr('contenteditable', 'true');
		});

	}
	$scope.closeToolBox = function() {

		$scope.editmode = false;
		$scope.status = "hide";
		$scope.className = " ";
		angular.element('.select-box').addClass('ng-hide');
		angular.element('.selected-data').removeClass('ng-hide').addClass('ng-show');
		angular.element('.dropable-data').removeClass('ng-hide').addClass('ng-show');

		angular.element('.outerdroppable-box').each(function() {

			angular.element(this).find('.dropable-area').attr('contenteditable', 'false');
			if (angular.element(this).find('.dropable-area').find('span.placeholder').length == 0) {
				angular.element(this).find('.dropable-area').removeClass('border-style');
			} else {

				angular.element(this).find('.dropable-area').removeClass('ng-show').addClass('ng-hide');
			}

		});

		angular.element('.lesson-plan').removeClass('edit-lessonplan');
		

	}
	/*Tool box open/close code ends here*/
	
	/*total time calculation code starts here*/
	angular.element('td.time span').blur(function(){
		var total=0;
		var len;
		var txt;
		angular.element(this).parents('table').find('td.time').each(function(){
			
     		  len = angular.element(this).find('span').text().length;
     	
	     		if(len != 0)
	     		{
	     			   txt = parseInt(angular.element(this).find('span').text());
	     			   total = parseInt(total+txt);
	     		}
	     		angular.element(this).parents('table').find('th.time').find('span').text(total);
     		
     		});
	});
	/*total time calculation code ends here*/
	
	

/*edit functionality code starts here*/
	$scope.data = {};
	$scope.bold = function() {

		if (window.getSelection().toString().length > 0) {
			document.execCommand("bold", false, null);
			//window.getSelection().empty();
		}
	};

	$scope.italic = function() {
		if (window.getSelection().toString().length > 0) {
			document.execCommand("italic");
		}
	};

	$scope.underline = function() {
		if (window.getSelection().toString().length > 0) {
			document.execCommand("underline");
		}
	};

	$scope.undo = function() {
		if (window.getSelection().toString().length > 0) {
			document.execCommand("undo");
		}
	};
	$scope.redo = function() {
		if (window.getSelection().toString().length > 0) {
			document.execCommand("redo");
		}
	};
	$scope.save = function() {
		alert("Calling save();");
	}
/*edit functionality code ends here*/	
	
	// angular.element('.procedure').each(function(){
// 		
		// var txt = angular.element(this).find('.data-container').eq(0).find('.data-container-inner span').text();
// 	    
	    // var res = txt.substr(0, 30);
	   	// angular.element(this).append('<span class="dot ng-hide">'+res+'...</span>');
	// });
	
}]);

/*drag and drop directive starts here*/
app.directive('textbox', function($compile) {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {

				element.find('span').remove();
				element.focus();
				if (element.parent().find('.editbale-close').length <= 0) {
					element.parent().append($compile('<a showhide  class="colsp-btn top" href="javascript:;"></a><a  cleardata href="javascript:;" class="editbale-close" style="position: absolute; right: 4px; top: 7px;"></a><span class="one-line-text ng-hide"></span>')(scope));
					element.parents('.procedure').append($compile('<div style="position: relative;" class="outerdroppable-box"><div textbox  contenteditable="true" class="dropable-area ng-show border-style" droppable=""><span class="placeholder">Add New text box or drop in new content</span></div></div>')(scope));

				}
			})
		}
	}
});

app.directive('draggable', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.draggable({
				appendTo : "body",
				helper : "clone",
				cancel : ".ui-widget-header",
				zIndex : 99999,
				revert : "invalid",
				drag : function(event, ui) {

				}
			});

		}
	}
});

app.directive('droppable', function($compile) {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {
			//This makes an element Droppable
			element.droppable({
				drop : function(event, ui) {
					angular.element(this).find(".placeholder").remove();
					angular.element(this).append(ui.draggable.clone())
                    angular.element(this).removeClass('border-style');
					if (angular.element(this).parent().find('.editbale-close').length <= 0) {
						angular.element(this).parent().append($compile('<a  cleardata href="javascript:;" class="editbale-close" style="position: absolute; right: 4px; top: 7px;"></a>')(scope));
						angular.element(this).parents('.procedure').append($compile('<div style="position: relative;" class="outerdroppable-box"><div textbox contenteditable="true" class="dropable-area ng-show border-style" droppable=""><span class="placeholder">Add New text box or drop in new content</span></div></div>')(scope));
					}

					scope.$apply();
				}
			});
		}
	};
});

/*drag and drop directive ends here*/

/*presenting language page slide code starts here*/

app.directive('aimslide', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {

				if (element.hasClass('ar-right')) { 
					   //alert(1)
					   //alert(element.parents('table').find('.aim').width())
				    element.parents('table').find('th.aim').removeClass('collspaed');
					element.removeClass('ar-right');
					element.parents('table').find('.aim').animate({
						'width' : '150px'
					}, 100, function() {

						element.parents('table').find('.aim').each(function() {
							angular.element(this).find('span').eq(1).removeClass('ng-hide').addClass('ng-show');
							angular.element(this).find('a').not('a.colsp-btn').removeClass('ng-hide').addClass('ng-show');
						})
					});

					element.parents('table').find('.aim').find('.dotted').addClass('ng-hide').removeClass('ng-show');
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w-50;  
                                 angular.element(this).width(w); 
						});	

				} else { 
                     
                      //alert(2) 
					  element.addClass('ar-right');
					// alert(element.parents('table').find('.aim').width())
					element.parents('table').find('th.aim').addClass('collspaed');
					element.parents('table').find('.aim').animate({
						'width' : '34px'
					});
					element.parents('table').find('.aim').find('.dotted').removeClass('ng-hide').addClass('ng-show');
					element.parents('table').find('.aim').each(function() {
						angular.element(this).find('span').eq(1).addClass('ng-hide').removeClass('ng-show');
						angular.element(this).find('a').not('a.colsp-btn').addClass('ng-hide').removeClass('ng-show');
					})
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w+100;  
                                 angular.element(this).width(w); 
						});	
				}

			});
		}
	}
});

app.directive('minslide', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {
              var w;
			element.bind('click', function() {

				if (element.hasClass('ar-right')) { 
					element.removeClass('ar-right');
					
					//alert(element.parents('table').find('.time').width())
					element.parents('table').find('th.time').removeClass('collspaed');
					element.parents('table').find('.time').animate({
						'width' : '80px'
					}, 100, function() {
						//element.prev('span').addClass('ng-show').removeClass('ng-hide');
						element.parent().find('span, em').addClass('ng-show').removeClass('ng-hide');
					});
					element.parents('table').find('.time').each(function() {
						angular.element(this).find('span').css('display', 'inline-block');
					});
					
				 element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w-50;  
                                 angular.element(this).width(w); 
						});	
					
					
				} else { 
					element.addClass('ar-right');
					//alert(element.parents('table').find('.time').width())
					element.parents('table').find('th.time').addClass('collspaed');
					element.parents('table').find('.time').animate({
						'width' : '34px'
					})

					element.parents('table').find('.time').each(function() {
						angular.element(this).find('span').css('display', 'block');
					});
					//element.prev('span').removeClass('ng-show').addClass('ng-hide');
					 element.parent().find('span, em').removeClass('ng-show').addClass('ng-hide');
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w+50;  
                                 angular.element(this).width(w); 
						});
				}

			});

		}
	}
});
app.directive('stageslide', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {
            var w;
			element.bind('click', function() {
					

				if (element.hasClass('ar-right')) {
					 //alert('if'); 
					element.removeClass('ar-right');
				
					//alert(element.parents('table').find('th.stage').width())
					element.parents('table').find('th.stage').removeClass('collspaed');
					element.parents('table').find('.stage').animate({
						'width' : '80px'
					}, 100, function() {
						element.parents('table').find('.stage').each(function() {

							angular.element(this).find('span').eq(1).removeClass('ng-hide').addClass('ng-show');
							angular.element(this).find('span').eq(0).removeClass('ng-show').addClass('ng-hide');
						});

					});
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             
                             w = w-50;  
                                 angular.element(this).width(w); 
						});
					
					

				} else {	
					 //alert('else') 
					element.addClass('ar-right');
					
					//alert(element.parents('table').find('th.stage').width())
					element.parents('table').find('th.stage').addClass('collspaed');
					element.parents('table').find('.stage').animate({
						'width' : '34px'
					})

					element.parents('table').find('.stage').each(function() {
						angular.element(this).find('span').eq(1).addClass('ng-hide').removeClass('ng-show');
						angular.element(this).find('span').eq(0).removeClass('ng-hide').addClass('ng-show');
					});
					
					element.parents('table').find('.procedure').each(function() {
	                          w = angular.element(this).width();
	                          w = w+50; 
                                angular.element(this).width(w); 
						});
				}

			});

		}
	}
});

app.directive('protocolslide', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {
               var w;
			element.bind('click', function() {

				if (element.hasClass('ar-right')) { 
					element.removeClass('ar-right');
                //alert(element.parents('table').find('.protocol').width())
                element.parents('table').find('th.protocol').removeClass('collspaed');
					element.parents('table').find('.protocol').animate({
						'width' : '42px'
					}, 100, function() {

                       
                      if(angular.element('.text-editor').css('display')=='none')
                      {
                      	element.parents('table').find('.protocol').each(function() {
							angular.element(this).find('span').eq(0).removeClass('ng-show').addClass('ng-hide');
							angular.element(this).find('span').eq(1).removeClass('ng-hide').addClass('ng-show');

						});
                      	
                      }
                      else{
                      	 
                      	 element.parents('table').find('.protocol').each(function() {
							angular.element(this).find('span').eq(0).removeClass('ng-show').addClass('ng-hide');
							//angular.element(this).find('span').eq(1).removeClass('ng-hide').addClass('ng-show');
							angular.element(this).find('div').removeClass('ng-hide').addClass('ng-show');

						});
                      	
                      }

	
					});
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w-10;  
                                 angular.element(this).width(w); 
						});

				} else {
					
					element.addClass('ar-right');
					//alert(element.parents('table').find('.protocol').width())
					element.parents('table').find('th.protocol').addClass('collspaed');
					element.parents('table').find('.protocol').animate({
						'width' : '34px'
					})

                    if(angular.element('.text-editor').css('display')=='none')
                    {
                    	element.parents('table').find('.protocol').each(function() {
						angular.element(this).find('span').eq(0).removeClass('ng-hide').addClass('ng-show');
						angular.element(this).find('span').eq(1).addClass('ng-hide').removeClass('ng-show');

					});
					
                    }
                    else{
                    	
                    	element.parents('table').find('.protocol').each(function() {
						angular.element(this).find('span').eq(0).removeClass('ng-hide').addClass('ng-show');
						//angular.element(this).find('span').eq(1).addClass('ng-hide').removeClass('ng-show');
						angular.element(this).find('div').removeClass('ng-show').addClass('ng-hide');

					});
                    	
                    }

					
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w+10;  
                                 angular.element(this).width(w); 
						});

				}

			});

		}
	}

});

app.directive('substageslide', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {

				if (element.hasClass('ar-right')) { 
					//alert('if')
					element.removeClass('ar-right');
					
					element.parents('table').find('th.substage').removeClass('collspaed');
					element.parents('table').find('.substage').animate({
						'width' : '125px'
					});
					element.parents('table').find('.substage').find('.sub').removeClass('ng-hide').addClass('ng-show');
					
					if(angular.element('.text-editor').css('display')=='none')
					{
						element.parents('table').find('.substage').each(function() {
						angular.element(this).find('.selected-box').removeClass('ng-hide').addClass('ng-show');
						angular.element(this).find('.dot').removeClass('ng-show').addClass('ng-hide');
					});
					
					}
					else{
						
						element.parents('table').find('.substage').each(function() {
						angular.element(this).find('div').removeClass('ng-hide').addClass('ng-show');
						angular.element(this).find('.dot').removeClass('ng-show').addClass('ng-hide');
					});
					}
					
					
					
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w-90;  
                                 angular.element(this).width(w); 
						});

				} else {
					
					//alert('else')

					element.addClass('ar-right');
					
					element.parents('table').find('th.substage').addClass('collspaed');
					
					element.parents('table').find('.substage').animate({
						'width' : '34px'
					});
					
					element.parents('table').find('.substage').find('.sub').removeClass('ng-show').addClass('ng-hide');
					
					if(angular.element('.text-editor').css('display')=='none')
					{
						element.parents('table').find('.substage').each(function() {
						angular.element(this).find('.selected-box').removeClass('ng-show').addClass('ng-hide');
						angular.element(this).find('.dot').removeClass('ng-hide').addClass('ng-show');
					});
					
					}
					else{
						element.parents('table').find('.substage').each(function() {
						angular.element(this).find('div').removeClass('ng-show').addClass('ng-hide');
						angular.element(this).find('.dot').removeClass('ng-hide').addClass('ng-show');
					});
					}
					
					
					
					element.parents('table').find('.procedure').each(function() {
                             w = angular.element(this).width();
                             w = w+90;  
                                 angular.element(this).width(w); 
						});

				}

			});

		}
	}
});
app.directive('showhide', function($compile){
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {
			var ht;
			element.bind('click', function() {

				if (element.hasClass('top')) {

					
					element.removeClass('top').addClass('ar-bottom');
					element.parent().find('div').addClass('ng-hide').removeClass('ng-show');
					element.parent().find('.one-line-text').addClass('ng-show').removeClass('ng-hide');
					
					
							var txt = element.parent().find('div').text();
						    var res = txt.substr(0, 45);
						   	element.parent().find('.one-line-text').text(''+res+'...');
						
					
				} else {
                       
                       
					   element.addClass('top').removeClass('ar-bottom');
				       element.parent().find('div').addClass('ng-show').removeClass('ng-hide');
				       element.parent().find('.one-line-text').addClass('ng-hide').removeClass('ng-show');
				}

			});

		}
	}
	
});

/*presenting language page code ends here*/

app.directive('contenteditable', function() {
	return {
		restrict : 'A', // only activate on element attribute
		require : '?ngModel', // get a hold of NgModelController
		link : function(scope, element, attrs, ngModel) {

			if (!ngModel)
				return;
			// do nothing if no ng-model

			// Specify how UI should be updated
			ngModel.$render = function() {
				element.html(ngModel.$viewValue || '');
			};
			// Listen for change events to enable binding
			element.on('blur keyup change', function() {
				scope.$apply(read);
			});
			read();
			// initialize

			// Write data to the model
			function read() {
				var html = element.html();
				// When we clear the content editable the browser leaves a <br> behind
				// If strip-br attribute is provided then we strip this out
				if (attrs.stripBr && html == '<br>') {
					html = '';
				}
				ngModel.$setViewValue(html);
			}

		}
	};
});

app.directive('sibs', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				element.addClass('active');
				element.siblings().removeClass('active');
				if (element.hasClass('close')) {
					element.removeClass('active');
					element.siblings().removeClass('active');
				}
			});
		}
	}
});

/*drop down directive starts here*/
app.directive('selectable', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			try {
				var a = element.msDropDown({
					mainCSS : 'dd2'

				}).data("dd");
				a.add([index]);
				element.on("change", function(res) {
					var val = index;

					element.parents('.select-box').prev('.selected-box').append("<span class='selected-data ng-hide' data-num='" + val + "'><strong></strong></span><div onclick='abc(this)' class=' hide-data select-box ng-show'><select class='select'><option>substage1</option><option>substage2</option><option>substage3</option></select></div>");
					
					try {
						angular.element('.select').msDropDown({
							mainCSS : 'dd2'
						}).data("dd");

					} catch(e) {
						alert("Error: " + e.message);
					}

				});

			} catch(e) {
				alert("Error: " + e.message);
			}

		}
	}
});

// app.directive('dataitems', function(){
// return {
// restrict : "E",
// template : "<div class='selected-box'><span class='selected-data ng-show'><strong>Highlight Form</strong></span><div onclick='abc(this)' class='select-box '><select class='select'><option>Written Record</option><option>Concept Check</option><option>Model/Drill</option><option>Highlight Form</option></select></div></div><div class='select-box substage-select'><select selectable class='select'><option>add substage1</option><option>add substage2</option><option>add substage3</option></select></div>"
// }
// });

app.directive('select', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			try {
				element.msDropDown({
					mainCSS : 'dd2'
				}).data("dd");

			} catch(e) {
				alert("Error: " + e.message);
			}

		}
	}
});
app.directive('dropdown', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			try {
				element.msDropDown({
					mainCSS : 'dd2'
				}).data("dd");

				$("#ver").html($.msDropDown.version);
			} catch(e) {
				alert("Error: " + e.message);
			}

			angular.element('.protocol .enabled').bind('click', function() {
				var val = angular.element(this).children().html();
				val = val.split(':');
				angular.element(this).parents('div.select-box').prev().html(val[0]);

			});

		}
	}
});

/*drop down directive ends here*/

app.directive('cleardata', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {

				element.parent().remove();

			});

		}
	}
});
app.directive('clear', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				element.parent().find('.border-style').html('').focus();

			});

		}
	}
});

/*progress repot work starts here*/

app.controller('progressReport', ['$scope',
function($scope) {

	$scope.editBalance = false;
	$scope.statusReport = "hide";
	$scope.vibility = "show";
	$scope.unit = "%";

	$scope.openReport = function() {
		angular.element('.progress-report').animate({
			right : 0
		}, 500);
	};
	$scope.closeReport = function() {
		angular.element('.progress-report').animate({
			right : 224
		}, 500);
	};

	$scope.ptConvert = function() {

		$scope.unit = "pt."
	}
	$scope.perConvert = function() {
		$scope.unit = "%";
	}

	$scope.done = function() {
		$scope.statusReport = "hide";
		$scope.vibility = "show";
		$scope.editBalance = false;
		angular.element('.progress-report').removeClass('num-style');
	}

	$scope.balanceEdit = function() {
		$scope.statusReport = "show";
		$scope.vibility = "hide";
		$scope.editBalance = true;
		angular.element('.progress-report').addClass('num-style');

	}
}]);

app.directive('studentname', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				var name = element.find('.findName').html();
				angular.element('.selectedStudent').html(name);

			});

		}
	}
});

/*progress repot work ends here*/

/*Teacher profile edit code starts here*/

app.controller('teacherProfile', ['$scope',
function($scope) {
	$scope.editShow = 'show';
	$scope.editHide = 'hide';
	$scope.editStatus = false;

	$scope.profileEdit = function() {

		angular.element('.teacher-profile').addClass('teacher-profile-edit');
		$scope.editShow = 'hide';
		$scope.editHide = 'show';
		$scope.editStatus = true;

		if ($scope.editStatus = true) {
			$scope.editStyle = "edit-border";
		}

		//check box code
		angular.element('.checkbox-listing li').each(function() {
			angular.element(this).find('label').removeClass('ng-hide').addClass('ng-show');
			angular.element(this).find('label').siblings().removeClass('ng-hide').addClass('ng-show');
		})

		angular.element('.show-data').removeClass('ng-show').addClass('ng-hide');
		angular.element('.hide-data').removeClass('ng-hide').addClass('ng-show');

	}

	$scope.profileEditClose = function() {

		angular.element('.teacher-profile').removeClass('teacher-profile-edit');
		$scope.editShow = 'show';
		$scope.editHide = 'hide';
		$scope.editStatus = false;

		//check box code
		angular.element('.checkbox-listing li').each(function() {
			if (angular.element(this).find('label').hasClass('c_on')) {

				angular.element(this).find('label').siblings().addClass('ng-show');
				angular.element(this).find('label').addClass('ng-hide').removeClass('ng-show');
			} else {
				angular.element(this).find('label').addClass('ng-hide');
				angular.element(this).find('label').siblings().addClass('ng-hide').removeClass('ng-show');
			}

		})

		angular.element('.show-data').removeClass('ng-hide').addClass('ng-show');
		angular.element('.hide-data').removeClass('ng-show').addClass('ng-hide');

	}
	//check box code
	angular.element('.checkbox-listing li').each(function() {
		angular.element(this).find('label').addClass('ng-hide');
	})
}]);

function abc(ev) {
	$(ev).find('a').on('click', function() {
		var a = $(this).find('span').html();
		$(this).parents('div.select-box').prev().find('strong').html(a);
	});
}

app.directive("addchange", function() {
	return {
		restrict : "E",
		template : "<p class='add-profile ng-{{editHide}}'>Add/Change </p>"
	}
});
app.directive("editcredential", function() {
	return {
		restrict : "E",
		template : "<p class='edit-Credential ng-{{editHide}}'>Edit Credentials</p>"
	}
});
app.directive("addschoolname", function() {
	return {
		restrict : "E",
		template : "<p schoolbutton  class='add-button ng-{{editHide}}'>+Add a School</p>"
	}
});
app.directive("schoolbutton", function($compile) {
	return function(scope, element, attrs) {
		element.bind("click", function() {
			element.parent().before($compile("<span class='edit-border' contenteditable='true'><strong>Add New Schools</strong></span>")(scope));
		});
	};
});

app.directive("addhobbies", function() {
	return {
		restrict : "E",
		template : "<p hobbies  class='add-button ng-{{editHide}}'>+Add an Interest/Hobby</p>"
	}
});
app.directive("hobbies", function($compile) {
	return function(scope, element, attrs) {
		element.bind("click", function() {
			element.parent().before($compile("<span class='edit-border' contenteditable='true'><strong>Add New Interest/Hobby</strong></span>")(scope));
		});
	};
});

app.directive("addlanguages", function() {
	return {
		restrict : "E",
		template : "<p languages  class='add-button ng-{{editHide}}'>+Add a Language</p>"
	}
});
app.directive("languages", function($compile) {
	return function(scope, element, attrs) {
		element.bind("click", function() {
			element.parent().before($compile("<div class='spoken-lag'><span class='edit-border' contenteditable='true'><strong>Language</strong></span><span class='show-data ng-hide'><strong>levels</strong></span><div onclick='abc(this)' class=' hide-data select-box ng-show'><select class='select'><option>Native</option><option>Intermediate</option></select></div></div>")(scope));

			try {
				angular.element('.select').msDropDown({
					mainCSS : 'dd2'
				}).data("dd");

				$("#ver").html($.msDropDown.version);
			} catch(e) {
				alert("Error: " + e.message);
			}

		});

	};

});

app.directive("specialization", function() {
	return {
		restrict : "E",
		template : "<p specializationbutton  class='add-button ng-{{editHide}}'>+Add a Specialization</p>"
	}
});
app.directive("specializationbutton", function($compile) {
	return function(scope, element, attrs) {
		element.bind("click", function() {
			element.parent().before($compile("<span class='edit-border' contenteditable='true'><strong>Add New Specialization</strong></span>")(scope));
		});
	};
});

app.directive("labelcheck", function() {
	return {
		restrict : "A",
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				setuplabel();
			});

		}
	}
});

function setuplabel() {
	if ($('.label_check input').length) {
		$('.label_check').each(function() {
			$(this).removeClass('c_on');
		});
		$('.label_check input:checked').each(function() {
			$(this).parent('label').addClass('c_on');
		});
	};

};

app.directive('filter', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				alert('click');
			});
		}
	}
});

/*Teacher profile edit code ends here*/

/*calender section works starts here*/

app.controller('calenderCtrl', ['$scope', '$timeout',
function($scope, $timeout) {

	/*calender events strats here*/
	$scope.eventChanged = 0;
	$scope.events = [{
		title : 'Unavailable Work day',
		start : '2015-01-04T08:00:00',
		end : '2015-01-04T23:00:00',
		allDay : false,
		className : 'event',
		backgroundColor : '#c9c8c5'
	}, {
		title : 'Up-int Adult',
		start : '2015-01-05T10:00:00',
		end : '2015-01-05T12:00:00',
		allDay : false,
		className : 'firstEvent',
		backgroundColor : '#257e4a'
	}, {
		title : 'Business English Gazprom',
		start : '2015-01-05T12:30:00',
		end : '2015-01-05T15:00:00',
		allDay : false,
		className : 'secondEvent',
		backgroundColor : '#257e4a'
	}, {
		title : 'Beginner Kids',
		start : '2015-01-06T11:00:00',
		end : '2015-01-06T14:30:00',
		allDay : false,
		className : 'thirdEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Pre-int Teen',
		start : '2015-01-06T15:00:00',
		end : '2015-01-06T16:30:00',
		allDay : false,
		className : 'forthEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Business English Downtown',
		start : '2015-01-06T17:30:00',
		end : '2015-01-06T20:30:00',
		allDay : false,
		className : 'fithEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Up-int Adult',
		start : '2015-01-07T10:00:00',
		end : '2015-01-07T12:00:00',
		allDay : false,
		className : 'sixthEvent',
		backgroundColor : '#ff0000'
	}, {
		title : 'Business English Gazprom',
		start : '2015-01-07T12:30:00',
		end : '2015-01-07T15:00:00',
		allDay : false,
		className : 'sevenEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Beginner Kids',
		start : '2015-01-08T11:00:00',
		end : '2015-01-08T14:30:00',
		allDay : false,
		className : 'eightEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Pre-int Teen',
		start : '2015-01-08T15:00:00',
		end : '2015-01-08T16:30:00',
		allDay : false,
		className : 'nineEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Business English Downtown',
		start : '2015-01-08T17:30:00',
		end : '2015-01-08T20:30:00',
		allDay : false,
		className : 'tenEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Private Sergey',
		start : '2015-01-09T10:00:00',
		end : '2015-01-09T11:00:00',
		allDay : false,
		className : 'elevenEvent',
		backgroundColor : '#ff0000'
	}, {
		title : 'Sat Class Group 5',
		start : '2015-01-09T12:30:00',
		end : '2015-01-09T15:00:00',
		allDay : false,
		className : 'twelveEvent',
		backgroundColor : '#ff9f89'
	}, {
		title : 'Private Ludmilla',
		start : '2015-01-09T16:30:00',
		end : '2015-01-09T18:00:30',
		allDay : false,
		className : 'thirteenEvent',
		backgroundColor : '#ff9f89'
	}]

	/*calender events ends here*/

	$scope.inEdit = 'show';
	$scope.outEdit = 'hide';
	$scope.popupEdit = false;
	$scope.value = 7;
	$scope.hours = 2;
	$scope.startDate = '9/Dec/14';
	$scope.endDate = '12/May/14';

	$scope.closePopUp = function() {
		angular.element('.event-popup').addClass('ng-hide').removeClass('ng-show');
	}

	$scope.editPopUp = function() {
		$scope.outEdit = 'show';
		$scope.inEdit = 'hide';
		$scope.popupEdit = true;
		angular.element('.event-popup').addClass('event-edit');
		angular.element('.event-popup').draggable("disable");
	}

	$scope.editDone = function() {
		$scope.inEdit = 'show';
		$scope.outEdit = 'hide';
		$scope.popupEdit = false;
		angular.element('.event-popup').removeClass('event-edit');
		angular.element('.event-popup').draggable("enable");
	}
	$timeout(function() {
		callAtTimeout();
	}, 3000);

}]);

function callAtTimeout() {

	angular.element('.fc-button-agendaWeek').trigger('click');
	angular.element('.fc-button-next').trigger('click');
	angular.element('.fc-event-content').append('<a class="uparrow"></a><a class="downarrow"></a>');

}

function next() {
	angular.element('.fc-button-next').trigger('click');
}

function prev() {
	angular.element('.fc-button-prev').trigger('click');
}

/*calender directive starts here*/
app.directive('devCalendar', ['ui.config', '$parse',
function(uiConfig, $parse) {

	uiConfig.devCalendar = uiConfig.devCalendar || {};
	//returns the calendar
	return {
		require : 'ngModel',
		restrict : 'A',
		scope : {
			eventChanged : "=changed",
			events : "=ngModel"
		},

		link : function(scope, elm, $attrs) {
			var ngModel = $parse($attrs.ngModel);
			var editEvents = [];
			//update the calendar with the correct options
			function update() {

				//IF the calendar has options added then render them.
				var expression, options = {
					header : {
						left : 'prev,next',
						center : 'title',
						right : 'agendaWeek'
					},
					editable : false,
					eventLimit : true,
					minTime : "8:00:00",
					maxTime : "23:00:00",
					allDaySlot : false,
					eventClick : function(ev, jsEvent, view) { 
                       var clsName = ev.className;
                       var imgUrl = angular.element('div.'+clsName+'').css('background-image')
                        angular.element('.event-popup').css('cssText','background-image: '+imgUrl+' !important');
						angular.element('.event-popup').removeClass('ng-hide').addClass('ng-show');
						angular.element('.popup-header h2').html(ev.title);

					},
					// Calling the events from the scope through the ng-model binding attribute.
					events : ngModel(scope)
				};

				if ($attrs.devCalendar) {
					expression = scope.$eval($attrs.devCalendar);
				} else {
					expression = {};
				}
				//Set the options from the directive's configuration
				angular.extend(options, uiConfig.devCalendar, expression);
				elm.html('').fullCalendar(options);
			}

			update();

			scope.$watch('events.length', function(newVal, oldVal) {

				//console.log('model changed:', newVal, oldVal);

				update();

			}, true);

		}
	};
}]);
app.directive('popupdraggable', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.draggable();

		}
	}
});
/*calender directive ends here*/

app.directive('numberbuttons', function() {
	return {
		restrict : 'E',
		template : "<P class='ng-{{outEdit}} up' decrease></P><P class='ng-{{outEdit}} down' increase></P>"

	}
});

app.directive('increase', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {

				var currnetValue = element.parent().prev().find('em').html();
				var newValue = parseInt(currnetValue) + 1;
				element.parent().prev().find('em').html(newValue);
			});
		}
	}
});

app.directive('decrease', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				var currnetValue = element.parent().prev().find('em').html();
				var newValue = parseInt(currnetValue) - 1;
				element.parent().prev().find('em').html(newValue);
			});

		}
	}
});
app.directive('addactive', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			element.bind('click', function() {
				element.addClass('active');
			});
		}
	}
});
app.directive('courselevel', function() {
	return {
		restrict : 'A',
		scope : true,
		link : function(scope, element, attrs) {

			try {
				element.msDropDown({
					mainCSS : 'dd2'
				}).data("dd");

				$("#ver").html($.msDropDown.version);
			} catch(e) {
				alert("Error: " + e.message);
			}

			angular.element('.course-level .enabled').bind('click', function() {
				var val = angular.element(this).children().html();
				angular.element(this).parents('div.select-box').prev().html(val);

			});

		}
	}
});

app.directive('startdatepicker', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			element.datepicker({
				dateFormat : "dd/M/y",
				onSelect : function(date) {
					scope.$apply(function() {
						scope.startDate = date;
					});
				}
			});

		}
	}
});
app.directive('enddatepicker', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			element.datepicker({
				dateFormat : "dd/M/y",
				onSelect : function(date) {
					scope.$apply(function() {
						scope.endDate = date;
					});
				}
			});

		}
	}
});

function upTime(ob1) {

	var num = parseInt($(ob1).parent('div').find('span').find('em').html());
	num = num + 1;
	$(ob1).parent('div').find('span').find('em').html(num);

}

function downTime(ob2) {

	var num = parseInt($(ob2).parent('div').find('span').find('em').html());
	num = num - 1;
	$(ob2).parent('div').find('span').find('em').html(num);
}

/*calender section works ends here*/
