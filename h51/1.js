$(function () {
    var play = document.getElementById('fMusicPlayer');

    $('html').one('touchstart', function () {
        play.play();
    });

    ////禁止窗口的默认滑动
    document.ontouchmove = function (e) {
        e.preventDefault();
    };
    //框架
    var runPage,
        interval,
        autoPlay;

    autoPlay = function (to) {

        clearTimeout(interval);
        interval = setTimeout(function () {
            runPage.go(to);
        }, 5000);

    };

    $('#musiccontrolon').click(function () {
        play.pause();
        $("#musiccontrolon").addClass("ele_hide");
        $("#musiccontroloff").removeClass("ele_hide");
    });

    $('#musiccontroloff').click(function () {
        play.play();
        $("#musiccontroloff").addClass("ele_hide");
        $("#musiccontrolon").removeClass("ele_hide");
    });

    play.addEventListener("canplaythrough", function () {

        }
    );

    function play_page1() {
        change_status(".moveUp", "running");
        change_status(".arrowing", "running");
        change_status(".fadeInNormal", "running");
        change_status(".expandOpen", "running");
        change_status(".fadeIn", "running");
    }

    function stop_page1() {
        change_status(".moveUp", "paused");
        change_status(".arrowing", "paused");
        change_status(".fadeInNormal", "paused");
        change_status(".expandOpen", "paused");
        change_status(".fadeIn", "paused");
    }

    function load_before() {
        auto_bt();
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
        if(!img.getAttribute("load")){
            img.src = img.getAttribute("url");
        }
        img.onload = function () {
            counter++;
            if (counter >= len) {
            }
        };
    }

    window.onorientationchange = function () {
        console.log(window.orientation);
        switch (window.orientation) {
            case -90:
            case 90:

                break;
            case 0:
            case 180:
                //alert("竖屏:" + window.orientation);
                break;
        }
    };

    function load() {
        $("#musiccontrolon").addClass("ele_hide");
    }


    runPage = new FullPage({
        id: 'pageContain',                            // id of contain
        slideTime: 800,                               // time of slide
        continuous: false,                             // create an infinite feel with no endpoints
        effect: {                                     // slide effect
            transform: {
                translate: 'Y',					   // 'X'|'Y'|'XY'|'none'
                scale: [ 1, 1 ],					   // [scalefrom, scaleto]
                rotate: [ 0, 0 ]					   // [rotatefrom, rotateto]
            },
            opacity: [ 0, 1 ]                           // [opacityfrom, opacityto]
        },
        mode: 'wheel,touch',               // mode of fullpage
        easing: 'ease',                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
        callback: function (index, thisPage) {
            switch (index){
                case 0:

                    break;
                case 1:
                    play_page1();
                    play.play();
                    $("#musiccontrolon").removeClass("ele_hide");
                    runPage.removePage(0);
                    break;
            }
        }
    });

    load();
    load_before();

    window.onload = window.onresize = function(){
        var page = new pageResponse({
            class : 'contain',     //模块的类名，使用class来控制页面上的模块(1个或多个)
            mode : 'contain',     // auto || contain || cover
            width : '320',      //输入页面的宽度，只支持输入数值，默认宽度为320px
            height : '568'      //输入页面的高度，只支持输入数值，默认高度为504px
        })
    }
});