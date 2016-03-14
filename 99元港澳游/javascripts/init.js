util.initFont()

window.CompleteCount = 0;

var images = [
    'images/zqdn/xiaqimao.png',
    'images/zqdn/qimaoshang.png',
    'images/zqdn/1/1qipao.png',
    'images/zqdn/1/1r.png',
    'images/zqdn/1/1rx.png',
    'images/zqdn/1/1tx.png',
    'images/zqdn/1/1xd.png',
    'images/zqdn/1/38tejia.png',
    'images/zqdn/1/3999yuanqi.png',
    'images/zqdn/1/1gay.png',
    'images/zqdn/1/199y.png',
    'images/zqdn/1/1qqmpfb.png',
    'images/zqdn/1/1yymf.png',
    'images/zqdn/1/1jzfc.png',
    'images/zqdn/1/1fdj.png',
    'images/zqdn/2/2tx.png',
    'images/zqdn/2/2hdzz.png',
    'images/zqdn/2/2hdzw.png',
    'images/zqdn/3/d1title.png',
    'images/zqdn/3/d1tf.png',
    'images/zqdn/3/d1music.png',
    'images/zqdn/3/d1true.png',
    'images/zqdn/3/d1false.png',
    'images/zqdn/4/3true.png',
    'images/zqdn/4/3dcwt.png',
    'images/zqdn/4/3rt.png',
    'images/zqdn/4/3sb.png',
    'images/zqdn/4/3next.png',
    'images/zqdn/4/3xinl.png',
    'images/zqdn/4/3xinr.png',
    'images/zqdn/4/3topp.png',
    'images/zqdn/4/3bottomp.png',
    'images/zqdn/5/4d1.png',
    'images/zqdn/5/4cw.png',
    'images/zqdn/5/4d2.png',
    'images/zqdn/5/4fxr.png',
    'images/zqdn/5/4djt.png',
    'images/zqdn/5/4dewm.png',
    'images/zqdn/5/4dwz.png',
    'images/zqdn/5/4dbotft.png',
    'images/zqdn/5/4dggl.png',
    'images/zqdn/5/d4hyh.png',
    'images/zqdn/5/4dyy.png',
    'images/zqdn/5/4dcgj.png',
    'images/zqdn/5/4fxpyq.png',
    'images/zqdn/5/4dt2.png',
    'images/zqdn/5/4dt3.png',
    'images/zqdn/5/4dt4.png',
    'images/zqdn/5/4dt5.png',
    'images/zqdn/5/4kcj.png',
    'images/zqdn/3/d1title.png',
    'images/zqdn/5/title2.png',
    'images/zqdn/5/title3.png',
    'images/zqdn/5/title4.png',
    'images/zqdn/5/title5.png',
    'images/zqdn/5/4dcj1.png',
    'images/zqdn/5/d4hyh.png',
    'images/zqdn/5/4dzjl.png',
    'images/arrow.png',
    'images/zqdn/touxiang.png',
    'images/zqdn/head/1.jpg',
    'images/zqdn/head/2.jpg',
    'images/zqdn/head/3.jpg',
    'images/zqdn/head/4.jpg',
    'images/zqdn/head/5.jpg',
    'images/zqdn/head/6.jpg',
    'images/zqdn/head/7.jpg'
]

var user = [{
    phone: '180****1242',
    date: '2016-3-15',
    img: 'images/zqdn/head/1.jpg'
},{
    phone: '187****4214',
    date: '2016-3-15',
    img: 'images/zqdn/head/2.jpg'
},{
    phone: '182****4561',
    date: '2016-3-15',
    img: 'images/zqdn/head/3.jpg'
},{
    phone: '182****4781',
    date: '2016-3-15',
    img: 'images/zqdn/head/4.jpg'
},{
    phone: '183****4412',
    date: '2016-3-15',
    img: 'images/zqdn/head/5.jpg'
},{
    phone: '186****4112',
    date: '2016-3-15',
    img: 'images/zqdn/head/6.jpg'
},{
    phone: '187****2462',
    date: '2016-3-15',
    img: 'images/zqdn/head/7.jpg'
}]


var imageLength = images.length;
var cnumber = 0;
function countSize(){
    ++cnumber
    document.querySelector('.ws2').innerText = (cnumber/imageLength*100).toFixed()+'%'

    if(imageLength/cnumber === 1){
        setTimeout(function(){
            $('.ct').removeClass('hide-opy')
            initFn()
            $('.first-page').animate({
                opacity: 0
            },500,'ease-in',function(){
                $('.first-page').remove();
            })
        },100);
    }
}

images.forEach(function(v){
    var image = new Image()
    image.src = v
    image.onload = countSize
})

function initFn(){
    var $fp = $(".fp")
    var fullpage = $fp.fullpage;
    var u = util.u;
    var isStatus = true
    var pageStatus = true
    var autio=document.getElementById("autod")
    var count = 1
    var degree = 0
    var userPhone = null

    var time_queue = []
    function updateTitle(){
        $('.p3d1d1d1').addClass(data.answer[count].titleClass)
    }

    function p2(){
        pageStatus = false
        autio.play()
        function p2d1d1d2p1(){
            u.typewriter('.p2d1d1d2p1',data.p2.gz1,100,p2d1d1d2p2)();
        }

        function p2d1d1d2p2(){
            u.typewriter('.p2d1d1d2p2',data.p2.gz2,100,p2d1d2d2p1)();
        }

        function p2d1d2d2p1(){
            u.typewriter('.p2d1d2d2p1',data.p2.hdsj,100,p2d1d2d2p2)();
        }

        function p2d1d2d2p2(){
            u.typewriter('.p2d1d2d2p2',data.p2.hdsm,100,function(){
                autio.pause()
                pageStatus = true
            })();
        }

        p2d1d1d2p1();
    }

    function page1(){
        p2();
    }

    function bindTFClick(){
        $('.p3d2d1d3d1').one('click',clickTrue)
        $('.p3d2d1d3d2').one('click',clickFalse)
    }

    function bindNextClick(){
        $('.p4d2d1d2d1').on('click',nextTitle)
        $('.p5d2d1d2d1').on('click',nextTitle)
    }

    function clearNextClick(){
        $('.p4d2d1d2d1').off('click')
        $('.p5d2d1d2d1').off('click')
    }

    function isTrue(){
        ++degree

        isStatus = true
        isT5()
        nextAnimate()

        fullpage.getOnOffTo(3)
    }

    function isFalse(){
        isStatus = false
        isT5()
        nextAnimate()
        fullpage.getOnOffTo(4)
    }

    function clickTrue(){
        var d = false;
        switch (count) {
            case 1:
                d = false
                break;
            case 2:
                d = false
                break;
            case 3:
                d = false
                break;
            case 4:
                d = false
                break;
            case 5:
                d = false
                break;
        }
        pageStatus?d?isTrue():isFalse():false
    }

    function clickFalse(){
        var d = false;
        switch (count) {
            case 1:
                d = true
                break;
            case 2:
                d = true
                break;
            case 3:
                d = true
                break;
            case 4:
                d = true
                break;
            case 5:
                d = true
                break;
        }
        pageStatus?d?isTrue():isFalse():false
    }

    function clearNextAnimate(){
        $('.p5d2d2d1 span').text('')
        $('.p5d2d2d2 span').text('')
        $('.p4d2d2d1 span').text('')
        $('.p4d2d2d2 span').text('')
        $('.p4d2d3d1').removeClass('p4d2d3d1animate')
        $('.p4d2d3d2').removeClass('p4d2d3d2animate')
        $('.p4d2d3d3').removeClass('p4d2d3d3animate')
        $('.p4d2d3d4').removeClass('p4d2d3d4animate')
    }

    function nextAnimate(){
        autio.play()

        time_queue.forEach(function(d){
            clearTimeout(d)
        })

        pageStatus = false
        time_queue = []
        var className1 = 'p4d1d2'
        var className2 = '4'

        if(!isStatus){
            className1 = 'p5d1d2'
            className2 = '5'
        }

        clearNextAnimate();

        function n1(){
            time_queue.push(u.typewriter('.'+className1,data.answer[count].explanation,30,n2)());
        }

        function n2(){
            time_queue.push(u.typewriter('.p'+className2+'s1','全国已有',100,n3)());
        }

        function n3(){
            time_queue.push(u.typewriter('.p'+className2+'s2',data.answer[count].number,100,n4)());
        }

        function n4(){
            time_queue.push(u.typewriter('.p'+className2+'s3','位旅客,',100,n5)());
        }

        function n5(){
            time_queue.push(u.typewriter('.p'+className2+'s4','通过,',100,n6)());
        }

        function n6(){
            time_queue.push(u.typewriter('.p'+className2+'s5','12301,',100,n7)());
        }

        function n7(){
            time_queue.push(u.typewriter('.p'+className2+'s6','解决了此类问题,',100,n8)());
        }

        function n8(){
            $('.p4d2d3d1').addClass('p4d2d3d1animate')
            $('.p4d2d3d2').addClass('p4d2d3d2animate')
            $('.p4d2d3d3').addClass('p4d2d3d3animate')
            $('.p4d2d3d4').addClass('p4d2d3d4animate')
            autio.pause()
            pageStatus = true
        }

        n1()
    }

    function nextTitle(){
        if (!pageStatus){
            return false
        }

        count++

        autio.pause()
        updateTitle()
        $('.p3d1d2').text(data.answer[count].text)
        bindTFClick()

        fullpage.getOnOffTo(2)
    }

    function lookResult(){
        var status = (degree>=3)?'succeed':'fail'

        $('.p6d1d1').addClass(data.resultTitle[degree].titleClass)
        $('.p6d2d2d1').addClass(data.result[status].statusClass)
        $('.p6d1d2').html(data.result[status].html)

        fullpage.getOnOffTo(5)

        succeedFail(status)
    }

    function succeedFail(status){
        if(status === 'succeed'){
            $('.kcj').on('click',lottery)
        }else{
            $('.fxpyq').on('click',failure)
        }
    }

    function lottery(){
        initScrape()
        fullpage.getOnOffTo(7)
    }

    function failure(){
        $('#share').removeClass('hide-dps')
    }

    $('.p8d2d2d1').on('click',failure)

    $('.p8d2d2d2').on('click',lock2)

    $('.p6d2d3d1').on('click',lock2)

    $('.p9d2d1').on('click',failure)

    $('.p9d2d2').on('click',lock2)

    function lock2(){
        fullpage.getOnOffTo(6)
    }

    function isT5(){
        if(count===5){
            clearNextClick()
            $('.p4d2d1d2d1').addClass('look-result')
            $('.p5d2d1d2d1').addClass('look-result')
            $('.look-result').on('click',lookResult)
        }
    }

    function init(){
        bindTFClick()
        bindNextClick()

        var lihtml = ''
        user.forEach(function(data){
            lihtml+= '<li class="p8d3i1"> <div><img src="'+data.img+'" alt="loading" /> <span></span> </div> <div class="p8d3i1d2"> <div>'+data.phone+'</div> <div>'+data.date+'</div> </div> <div> 领取了奖品 </div> </li>'
        })
        $('.p8d3u1').html(lihtml)

        setInterval(function(){
            var $dom = $('.p8d3u1 li').last()
            $('.p8d3u1').html('<li class="p8d3i1">'+$dom.html()+'</li>'+$('.p8d3u1').html())
            $('.p8d3u1 li').last().remove()
        },4000)

        fullpage.call($fp,{
            beforeChange: function(opt){
                if(opt.next > 2 || opt.cur > 2){
                    this.moveType = 'opacity'
                }
                else{
                    this.moveType = 'default'
                }

                return pageStatus?opt.cur>=2 ? false : true:false
            },
            afterChange: function(opt){
                (opt.cur===1)&&page1()
            }
        })

        if(window.localStorage['isLottery'] === 'true'){
            fullpage.getOnOffTo(8)
        }
    }

    function isLottery(){
        var status = (Math.random()*10).toFixed(1)>9

        if(status){
            $('#scrapeBox').addClass('win1')
        }else{
            $('#scrapeBox').addClass('low1')
        }

        return status
    }

    function initScrape(){
        var status = isLottery()
        var ggkBox = document.getElementById('scrapeBox');//刮刮卡外盒子
        var myCanvas = document.getElementById('scrape');//canvas对象
        var ctx = myCanvas.getContext('2d');
        ctx.fillStyle = "#734d1d";
        var radius = 15;//刮动半径
        var x1 = 0;//移动初始点横坐标
        var y1 = 0;//移动初始点纵坐标
        var x2 = 0;//移动结束点横坐标
        var y2 = 0;//移动结束点纵坐标
        var ggkTimeout;//刮刮卡展示中奖信息延时
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        var touchMethod = function () {
            var isTouch = "ontouchstart" in window ? true : false;
            return {
                start: isTouch ? "touchstart" : "mousedown",
                move: isTouch ? "touchmove" : "mousemove",
                end: isTouch ? "touchend" : "mouseup"
            }
        }();
        myCanvas.addEventListener(touchMethod.start, function (e) {
            e.preventDefault();
            clearTimeout(ggkTimeout);
            try {
                x1 = e.targetTouches[0].pageX - ggkBox.offsetLeft;
                y1 = e.targetTouches[0].pageY - ggkBox.offsetTop;
            } catch (ex) {
                x1 = e.pageX - ggkBox.offsetLeft;
                y1 = e.pageY - ggkBox.offsetTop;
            }


            ctx.save();
            ctx.beginPath();
            ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            ctx.restore();
            myCanvas.addEventListener(touchMethod.move, moveFn);
            document.addEventListener(touchMethod.end, endFn);
        });
        //TODO 移动函数
        function moveFn(e) {
            e.preventDefault();
            try {
                x2 = e.targetTouches[0].pageX - ggkBox.offsetLeft;
                y2 = e.targetTouches[0].pageY - ggkBox.offsetTop;
            } catch (ex) {
                x2 = e.pageX - ggkBox.offsetLeft;
                y2 = e.pageY - ggkBox.offsetTop;
            }

            ctx.save();
            ctx.beginPath();
            ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            ctx.restore();


            ctx.save();
            ctx.beginPath();
            var asin = radius * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
            var acos = radius * Math.cos(Math.atan((y2 - y1) / (x2 - x1)));
            var x3 = x1 + asin;
            var y3 = y1 - acos;
            var x4 = x1 - asin;
            var y4 = y1 + acos;
            var x5 = x2 + asin;
            var y5 = y2 - acos;
            var x6 = x2 - asin;
            var y6 = y2 + acos;
            ctx.moveTo(x3, y3);
            ctx.lineTo(x5, y5);
            ctx.lineTo(x6, y6);
            ctx.lineTo(x4, y4);
            ctx.closePath();
            ctx.clip();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            ctx.restore();


            x1 = x2;
            y1 = y2;
        }

        //TODO 移动结束函数
        function endFn(e) {
            e.preventDefault();
            myCanvas.removeEventListener(touchMethod.move, moveFn);
            document.removeEventListener(touchMethod.end, endFn);
            ggkTimeout = setTimeout(function () {
                var imgData = ctx.getImageData(0, 0, myCanvas.width, myCanvas.height).data;
                var dd = 0;
                for (var i = 0, dataMax = imgData.length; i < dataMax - 4; i += 4) {
                    if (imgData[i] + imgData[i + 1] + imgData[i + 2] + imgData[i + 3] > 0) {
                        dd++;
                    }
                }
                if (dd * 4 / dataMax <= 0.7) {
                    myCanvas.style.display = "none";
                    setTimeout(Lottery.bind(null,status), 500);
                }
            }, 100);
        }
    }

    function Lottery(status){
        window.localStorage['isLottery'] = true
        if(status){
            userPhone = prompt('请输入您的手机号码!') || 0
        }
    }

    init()
}