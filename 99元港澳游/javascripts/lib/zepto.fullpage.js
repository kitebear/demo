(function($, window, undefined) {
    if (typeof $ === 'undefined') {
        throw new Error('zepto.fullpage\'s script requires Zepto');
    }

    //初始化变量
    var fullpage = null;

    //初始化config
    var d = {
        page: '.page',
        start: 0,
        duration: 500,
        loop: false,
        drag: false,
        //执行开关
        pageState: true,
        isAnim: true,
        //是否向上翻
        upflag: false,
        moveType: 'default',
        //横竖移动 默认v 竖屏
        dir: 'v',
        der: 0.1,
        change: function(data) {},
        beforeChange: function(data) {},
        afterChange: function(data) {},
        orientationchange: function(orientation) {},
        onload: function(data){}
    };

    //默认阻止
    function touchmove(e) {
        e.preventDefault();
    }

    //计算是否越界  超过最大数  小于0
    function fix(cur, pagesLength, loop) {
        if (cur < 0) {
            return !!loop ? pagesLength - 1 : 0;
        }

        if (cur >= pagesLength) {
            return !!loop ? 0 : pagesLength - 1;
        }

        return cur;
    }

    var moveAnim = {
        default : function($this,xPx,yPx){
            $this.css({
                '-webkit-transform' : 'translate3d(' + xPx + ', ' + yPx + ', 0px);',
                'transform' : 'translate3d(' + xPx + ', ' + yPx + ', 0px);'
            });
        },
        opacity: function($this,xPx,yPx){
            function oneOpacity(){
                $this.animate({
                    opacity: 1
                },300,'ease-in')
            }

            $this.animate({
                opacity: 0
            },300,'ease-out',function(){
                $this.css({
                    '-webkit-transform' : 'translate3d(' + xPx + ', ' + yPx + ', 0px);',
                    'transform' : 'translate3d(' + xPx + ', ' + yPx + ', 0px);'
                });

                oneOpacity()
            })
        }
    }

    //上下移动
    function move() {
        var that = this
        var $this = this.$this
        var next = this.next
        var dist = -next * (that.o.dir === 'v' ? that.height : that.width)

        var xPx = "0px" , yPx = "0px";
        if(that.o.dir === 'v') yPx = dist+"px";
        else xPx = dist + "px";

        moveAnim[this.o.moveType].call(this,$this,xPx,yPx)
    }

    //初始化函数
    function init(option) {
        //深拷贝
        var o = $.extend(true, {}, d, option);
        var that = this;
        that.curIndex = -1;
        that.o = o;

        that.startY = 0;
        that.movingFlag = false;

        //添加默认的Class
        that.$this.addClass('fullPage-wp');
        //获取最外层节点
        that.$parent = that.$this.parent();
        //获取每个页面
        that.$pages = that.$this.find(o.page).addClass('fullPage-page fullPage-dir-' + o.dir);
        //获取页面数量
        that.pagesLength = that.$pages.length;
        that.update();
        that.initEvent();
        that.start();
        this.o.onload&&this.o.onload()
    }

    function Fullpage($this, option) {
        this.$this = $this;
        init.call(this, option);
    }

    $.extend(Fullpage.prototype, {
        update: function() {
            if (this.o.dir === 'h') {
                this.width = this.$parent.width();
                this.$pages.width(this.width);
                this.$this.width(this.width * this.pagesLength);
            }

            this.height = this.$parent.height();
            this.$pages.height(this.height);

            this.moveTo(this.curIndex < 0 ? this.o.start : this.curIndex);
        },
        initEvent: function() {
            var that = this;
            var $this = that.$this;

            $this.on('touchstart', function(e) {
                if (!that.status) {return 1;}
                //e.preventDefault();
                if (that.movingFlag) {
                    return 0;
                }

                that.startX = e.targetTouches[0].pageX;
                that.startY = e.targetTouches[0].pageY;
            });

            $this.on('touchend', function(e) {
                if (!that.status) {return 1;}
                //e.preventDefault();
                if (that.movingFlag) {
                    return 0;
                }

                //移动的比例值
                var sub = that.o.dir === 'v' ? (e.changedTouches[0].pageY - that.startY)/that.height : (e.changedTouches[0].pageX - that.startX)/that.width;
                //比例值翻页计算
                var der = (sub > that.o.der || sub < -that.o.der) ? sub > 0 ? -1 : 1 : 0;

                if(Math.abs(e.changedTouches[0].pageY - that.startY) > 100){
                    that.moveTo(that.curIndex + der, true);
                }
            });

            if (that.o.drag) {
                $this.on('touchmove', function(e) {
                    if (!that.status) {return 1;}
                    //e.preventDefault();
                    if (that.movingFlag) {
                        that.startX = e.targetTouches[0].pageX;
                        that.startY = e.targetTouches[0].pageY;
                        return 0;
                    }

                    var y = e.changedTouches[0].pageY - that.startY;
                    if( (that.curIndex==0 && y>0) || (that.curIndex===that.pagesLength-1 && y<0) ) y/=2;
                    var x = e.changedTouches[0].pageX - that.startX;
                    if( (that.curIndex==0 && x>0) || (that.curIndex===that.pagesLength-1 && x<0) ) x/=2;
                    var dist = (that.o.dir === 'v' ? (-that.curIndex * that.height + y) : (-that.curIndex * that.width + x));
                    $this.removeClass('anim');
                    move($this, that.o.dir, dist);
                });
            }

            // 翻转屏幕提示
            // ==============================             
            window.addEventListener("orientationchange", function() {
                if (window.orientation === 180 || window.orientation === 0) {
                    that.o.orientationchange('portrait');
                }
                if (window.orientation === 90 || window.orientation === -90) {
                    that.o.orientationchange('landscape');
                }
            }, false);

            window.addEventListener("resize", function() {
                that.update();
            }, false);
        },

        holdTouch: function() {
            $(document).on('touchmove', touchmove);
        },
        unholdTouch: function() {
            $(document).off('touchmove', touchmove);
        },
        start: function() {
            this.status = 1;
            this.holdTouch();
        },
        stop: function() {
            this.status = 0;
            this.unholdTouch();
        },
        moveTo: function(next, anim) {
            var that = this;
            var $this = that.$this;
            var cur = that.curIndex;

            next = fix(next, that.pagesLength, that.o.loop)

            this.next = next

            if(this.o.upflag&&next<cur){
                return;
            }



            if (this.o.isAnim&&anim) {
                $this.addClass('anim');
            } else {
                $this.removeClass('anim');
            }

            if (next !== cur) {
                var flag = that.o.beforeChange({
                    next: next,
                    cur: cur
                });

                // beforeChange 显示返回false 可阻止滚屏的发生
                if (that.o.pageState && flag === false) {
                    return 1;
                }
            }

            that.movingFlag = true;
            that.curIndex = next;

            move.call(this);

            if (next !== cur) {
                that.o.change({
                    prev: cur,
                    cur: next
                });
            }

            window.setTimeout(function() {
                that.movingFlag = false;
                if (next !== cur) {
                    that.o.afterChange({
                        prev: cur,
                        cur: next
                    });
                    that.$pages.removeClass('cur').eq(next).addClass('cur');
                }
            }, that.o.duration);

            return 0;
        },
        movePrev: function(anim) {
            this.moveTo(this.curIndex - 1, anim);
        },
        moveNext: function(anim) {
            this.moveTo(this.curIndex + 1, anim);
        },
        getCurIndex: function () {
            return this.curIndex;
        },
        getOnOffTo: function (index) {
            this.o.pageState = false
            this.moveTo(index,true)
            this.o.pageState = true
        },
        getOnOffNext: function(){
            this.o.pageState = false
            this.moveNext(true)
            this.o.pageState = true
        }
    });

    $.fn.fullpage = function(option) {
        if (!fullpage) {
            fullpage = new Fullpage($(this), option);
        }
        return this;
    };

    //暴露方法
    $.each(['update', 'moveTo', 'moveNext', 'movePrev', 'start', 'stop', 'getCurIndex', 'holdTouch', 'unholdTouch','getOnOffNext','getOnOffTo'], function(key, val) {
        $.fn.fullpage[val] = function() {
            if (!fullpage) {
                return 0;
            }
            return fullpage[val].apply(fullpage, [].slice.call(arguments, 0));
        };
    });
}(Zepto, window));