$(function () {
    var runPage//框架
        , init_auto_start
        , play = document.getElementById('fMusicPlayer');

    var base_rate = {
        defaultWidth: 320,
        defaultHeight: 568,
        newWidth: document.documentElement.clientWidth,
        newHeight: document.documentElement.clientHeight
    };

    $('html').one('touchstart', function () {
        //play.play();
        if (!init_auto_start) {
            runPage.go(1);
        }
    });

    ////禁止窗口的默认滑动
    document.ontouchmove = function (e) {
        e.preventDefault();
    };

    //点击
    $('#musiccontrolon').tap(function () {
        play.pause();
        $("#musiccontrolon").addClass("ele_hide");
        $("#musiccontroloff").removeClass("ele_hide");
    });

    $('#musiccontroloff').tap(function () {
        play.play();
        $("#musiccontroloff").addClass("ele_hide");
        $("#musiccontrolon").removeClass("ele_hide");
    });

    play.addEventListener("canplaythrough", function () {
            if (!init_auto_start) {
                runPage.go(1);
                $("#musiccontrolon").addClass("auto_at");
            }
        }
    );

    //初始前加载
    function load_before() {
        load();
        auto_bt();
    }

    //修复缩放比率
    function reset_size(obj) {
        var ele = obj.ele
            , wProp = parseFloat(obj.newWidth / obj.defaultWidth).toFixed(2)
            , hProp = parseFloat(obj.newHeight / obj.defaultHeight).toFixed(2)
            , eleWidth = parseInt(ele.style.width) * wProp
            , eleHeight = parseInt(ele.style.height) * hProp
            , eleLeft = (ele.style.left.indexOf("%") === -1) ? parseInt(ele.style.left) * wProp : null
            , eleTop = parseInt(ele.style.top) * hProp;

        ele.style.top = eleTop + "px";
        if (eleLeft)ele.style.left = eleLeft + "px";
        ele.style.width = eleWidth + "px";
        ele.style.height = eleHeight + "px";
    }

    function auto_bt() {
        change_status(".auto_at", "running");
        $('#fMusicPlayer').html('<source src="./1.mp3" type="audio/mpeg">');
    }

    function change_status(ele, status) {
        $(ele).css("-webkit-animation-play-state", status);
    }

    var len = $("img").length;
    var counter = 0;
    for (var i = 0, img; i < len; i++) {
        img = $("img")[ i ];
        if (!img.getAttribute("load")) {
            img.src = img.getAttribute("url");
        }
        img.onload = function () {
            counter++;
            if (counter >= len - 1) {
                if (!init_auto_start) {
                    runPage.go(1);
                    $("#musiccontrolon").addClass("auto_at");
                }
            }
        };
    }

    function img_lazy_load() {
        $('div[resize="true"]').each(function (index, ele) {
            reset_size($.extend(base_rate, {ele: ele}));
        });
    }

    function load() {
        $("#musiccontrolon").addClass("ele_hide");
    }


    runPage = new FullPage({
        id: 'pageContain',                            // id of contain
        slideTime: 800,                               // time of slide
        continuous: false,                            // create an infinite feel with no endpoints
        effect: {                                     // slide effect
            transform: {
                translate: 'Y',					      // 'X'|'Y'|'XY'|'none'
                scale: [ 1, 1 ],					  // [scalefrom, scaleto]
                rotate: [ 0, 0 ]					  // [rotatefrom, rotateto]
            },
            opacity: [ 0, 1 ]                         // [opacityfrom, opacityto]
        },
        mode: 'wheel,touch',                          // mode of fullpage
        easing: 'ease',                               // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
        callback: function (index, thisPage) {
            switch (index) {
                case 0:

                    break;
                case 1:
                    //play.play();
                    $("#musiccontrolon").removeClass("ele_hide");
                    runPage.removePage('page1');
                    break;
            }
        }
    });


    window.onload = window.onresize = function () {
        var body_width = document.documentElement.clientWidth
            , body_height = document.documentElement.clientHeight
            , page = new pageResponse({
                class: 'contain',     //模块的类名，使用class来控制页面上的模块(1个或多个)
                mode: 'contain',      // auto || contain || cover
                width: (body_width > 414) ? 320 : body_width,      //输入页面的宽度，只支持输入数值，默认宽度为320px
                height: (body_height > 736) ? 504 : body_height    //输入页面的高度，只支持输入数值，默认高度为504px
            });
        if (body_width <= 414 && body_height <= 736) {
            img_lazy_load();
        }
    };

    load_before();
});