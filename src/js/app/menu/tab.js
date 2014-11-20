//tab

define(function(require){
	var $ = require('jquery');
	function tabThis(){
		var lis = $('.ui-tab-item').find('a');
		var divs = $('.add');
		lis.each(function(){
			$(this).click(function(){
				for(var i = 0;i<lis.length;i++){
					if($(this).parent().index()==i){
						$(this).parent().addClass('ui-tab-item-current');
						$(this).css('outline','none');
						divs.eq(i).css('display','block');
					}
					else{
						lis.eq(i).parent().removeClass('ui-tab-item-current');
						divs.eq(i).css('display','none');
					}
				}
			});
		});
	}
	return{
		init:function(){
			tabThis();
		}
	}
});