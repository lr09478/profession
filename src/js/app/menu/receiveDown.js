//receiveDown

define(function(require){
	var $ = require('jquery');
	var isOpen = true;
	
	function addReceive(item){
		//var item = $('.form-vertical-item').find('a');
		item.each(function(){
			$(this).click(function(){
				var x = $(this).prev().offset().left;
				var y = $(this).prev().offset().top;
				var width = $(this).prev().width();
				var height = $(this).prev().height();
				var list = $(this).parent().parent().next();
				console.log(x+','+y+','+width);
				if(isOpen){
					//30是下拉框中的尖尖部分的right属性值
					list.css('left',x+width-list.width()+30);
					list.css('top',y+height+20);
					list.fadeIn();
					isOpen=false;
				}
				else{
					$(this).parent().parent().next().fadeOut();
					isOpen=true;
				}
			});
			
		});
	}
	
	return{
		receive:function(e){
			addReceive(e);
		}
	}
});