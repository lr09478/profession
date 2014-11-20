define(function(require){
    //TODO
    var $ = require('jquery');
    var Layout = function(){
        this.button = null;
        this.parentNode = $('.pro-main-left').eq(0);
        this.contentNode = $('.pro-main-content').eq(0);
        this.isOpen = false;
        this.emailLeft = $('.pro-content-email-left').eq(0);
        this.emailRight = $('.pro-content-email-right').eq(0);
        this.drop = $('.dp-drop-t').eq(0);
        this.dropDown = $('.dp-drop-down').eq(0);

        this.changeSys = $('#system-t');
        this.changeSysDown = $('#system-b');
        this.changeSysDownLine = $('#system-b-l');

        this.online = $('#online-t');
        this.onlineDown = $('#online-b');;
        this.onlineDownLine = $('#online-b-l');;
    };
    Layout.prototype = {
        init: function(){
            //折叠左侧导航
            this.createButton();
            //自适应高度
            this.autoHeight();
            //管理员下拉
            this.dropDownFunc();
            //切换系统下拉
            this.changeSystemFunc();
            //在线人数
            this.onlineFunc();
        },
        onlineFunc: function(){
            this.online.on('mouseover', $.proxy(this.onlineMouseOver, this));
            this.online.on('mouseout', $.proxy(this.onlineMouseOut, this));
            this.onlineDown.on('mouseover', $.proxy(this.onlineMouseOver, this));
            this.onlineDown.on('mouseout', $.proxy(this.onlineMouseOut, this));
            this.onlineDownLine.on('mouseover', $.proxy(this.onlineMouseOver, this));
            this.onlineDownLine.on('mouseout', $.proxy(this.onlineMouseOut, this));
        },
        onlineMouseOver: function(){
            this.online.addClass('online-selected');
            this.onlineDown.css('display', 'block');
            this.onlineDownLine.css('display', 'block');
        },
        onlineMouseOut: function(){
            this.online.removeClass('online-selected');
            this.onlineDown.css('display', 'none');
            this.onlineDownLine.css('display', 'none');
        },
        changeSystemFunc: function(){
            this.changeSys.on('mouseover', $.proxy(this.changeSysMouseOver, this));
            this.changeSys.on('mouseout', $.proxy(this.changeSysMouseOut, this));
            this.changeSysDown.on('mouseover', $.proxy(this.changeSysMouseOver, this));
            this.changeSysDown.on('mouseout', $.proxy(this.changeSysMouseOut, this));
            this.changeSysDownLine.on('mouseover', $.proxy(this.changeSysMouseOver, this));
            this.changeSysDownLine.on('mouseout', $.proxy(this.changeSysMouseOut, this));
        },
        changeSysMouseOver: function(){
            this.changeSys.addClass('system-selected');
            this.changeSysDown.css('display', 'block');
            this.changeSysDownLine.css('display', 'block');
        },
        changeSysMouseOut: function(){
            this.changeSys.removeClass('system-selected');
            this.changeSysDown.css('display', 'none');
            this.changeSysDownLine.css('display', 'none');
        },
        dropDownFunc: function(){
            this.drop.on('mouseover', $.proxy(this.dropMouseOver, this));
            this.drop.on('mouseout', $.proxy(this.dropMouseOut, this));
            this.dropDown.on('mouseover', $.proxy(this.dropMouseOver, this));
            this.dropDown.on('mouseout', $.proxy(this.dropMouseOut, this));
        },
        dropMouseOver: function(){
            this.drop.addClass('selected');
            this.dropDown.css('display', 'block');
        },
        dropMouseOut: function(){
            this.drop.removeClass('selected');
            this.dropDown.css('display', 'none');
        },
        createButton: function(){
            if(this.parentNode){
                this.button = $('<div id="toggleButton"></div>').on('click', $.proxy(this.toggle, this));
                this.parentNode.append(this.button);
            }
        },
        toggle: function(){
            if(!this.isOpen){
                this.button.hide();
                $(this.parentNode).css('overflow-y', 'hidden').animate({
                    marginLeft: "-168px" 
                }, function(){
                    $('#toggleButton').show().addClass('open');
                });
                $(this.contentNode).animate({
                    marginLeft: '0'
                });
                this.isOpen = true;
            }
            else{
                this.button.hide();
                $(this.parentNode).css('overflow-y', 'auto').animate({
                    marginLeft: "0" 
                }, function(){
                    $('#toggleButton').show().removeClass('open');
                });
                $(this.contentNode).animate({
                    marginLeft: '180px'
                });
                this.isOpen = false;
            }
        },
        autoHeight: function(){
            var eHeight = $(window).height() - 36;
            this.emailLeft.css('height', eHeight + 'px');
            this.emailRight.css({
                'height': eHeight + 'px',
                'overflow-y': 'auto'
            });
        }
    };
    return Layout;
});
