//folditem

define(function(require){
	var $ = require('jquery');
	var folditem = function(){
		this.firstNode = $('.pro-side-menu-item');
		this.parent = $('.ui-button-blue');
		this.isOpen = true;
	};
	folditem.prototype = {
		init:function(){				//点击展开与折叠功能
			this.firstNode.each(function(){
				$(this).click(function(){
					$(this).addClass("current");
					$(this).siblings().removeClass("current");
					//找到当前对象在集合中的下标
					var i = $(this).index();
					var type = $('.pro-side-menu-item-children');
					nextNode = $('.pro-side-menu-item-children').eq(i/2);
					for(var j = 0;j<type.length;j++){
						var item = type.eq(j);
						if(j==i/2){
							if(item.css('display')=='none'){
								item.slideDown();
								item.prev().find('b').removeClass('closed').addClass('opend');
							}
							else{
								item.slideUp();
								item.prev().find('b').removeClass('opend').addClass('closed');
							}
						}
						else{
							item.slideUp();
							item.prev().find('b').removeClass('opend').addClass('closed');
						}
					}
				});
			});
		},
		//切换菜单，更改样式,type是点击后显示的样式
		focus:function(parentDiv,type){		
			parentDiv.each(function(){
				$(this).click(function(){
					$(this).find("a").addClass(type);
					$(this).siblings().find("a").removeClass(type);
				});
			});
		},
		//下拉框,parentDiv是父标签，childDiv是要显示的下拉框，column是鼠标点击的对象，
		downList:function(parentDiv,childDiv,type){
			parentDiv.each(function(){
				//this是span标签
				$(this).click(function(){					
					var x = $(this).parent().offset().left;
					var y = $(this).parent().offset().top;
					if($(this).attr("class").indexOf(type)>0){
						$(this).removeClass(type);
						console.log("remove");
						$(this).parent().next().css("top",y+$(this).height()+3);
						$(this).parent().next().css("right",x);
						$(this).parent().next().fadeOut("slow");
					}
					else{
						//让所有下拉框都隐藏
						$(this).parent().parent().find('ul').fadeOut();
						//把下拉箭头置为向上
						$(this).parent().parent().find('a').find('span').removeClass(type);
						//给当前对象添加样式
						$(this).addClass(type);
						$(this).parent().next().css("top",y+$(this).height()+3);
						$(this).parent().next().css("left",x);
						$(this).parent().next().fadeIn("slow");
					}
				});
			});
		},
		clickDown:function(item){
			item.find('li').each(function(){
				$(this).click(function(){
					$(this).parent().fadeOut();
					$(this).parent().prev().find('span').removeClass('split-selected');
				});
			});
		}
	};
	return folditem;
});