//folditem

define(function(require){
	var $ = require('jquery');
	var folditem = function(){
		this.firstNode = $('.pro-side-menu-item');
		this.parent = $('.ui-button-blue');
		this.isOpen = true;
	};
	folditem.prototype = {
		init:function(){				//���չ�����۵�����
			this.firstNode.each(function(){
				$(this).click(function(){
					$(this).addClass("current");
					$(this).siblings().removeClass("current");
					//�ҵ���ǰ�����ڼ����е��±�
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
		//�л��˵���������ʽ,type�ǵ������ʾ����ʽ
		focus:function(parentDiv,type){		
			parentDiv.each(function(){
				$(this).click(function(){
					$(this).find("a").addClass(type);
					$(this).siblings().find("a").removeClass(type);
				});
			});
		},
		//������,parentDiv�Ǹ���ǩ��childDiv��Ҫ��ʾ��������column��������Ķ���
		downList:function(parentDiv,childDiv,type){
			parentDiv.each(function(){
				//this��span��ǩ
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
						//����������������
						$(this).parent().parent().find('ul').fadeOut();
						//��������ͷ��Ϊ����
						$(this).parent().parent().find('a').find('span').removeClass(type);
						//����ǰ���������ʽ
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