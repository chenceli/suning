/**
 * Created by chen on 2018/3/4.
 */
$(function () {

    //banner
    function banner(arr) {
        let div=$(arr);
        let banner=$('.img_box li');
        let arrowLeft=$('.banner_jiantou_left');
        let arrowRight=$('.banner_jiantou_right');
        let circles=$('.banner_lunbodian li');
        let n=0;

        $(banner).eq(0).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
        function move() {
            if (n>=banner.length) {
                n=0;
            }
            $(banner).eq(n).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
            $(circles).eq(n).addClass('bannerActive').siblings(circles).removeClass('bannerActive');
            n++;
        }
        let t=setInterval(move,2000);
        $(div).mouseenter(function () {
            clearInterval(t);
        });
        $(div).mouseleave(function () {
            t=setInterval(move,2000);
        });
        $(circles).click(function(){
            n=$(this).index();
            move();
        });
        $(arrowLeft).click(function(){
            clearInterval(t);
            if (n<0) {
                n=banner.length-1;
            }
            $(banner).eq(n).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
            $(circles).eq(n).addClass('bannerActive').siblings(circles).removeClass('bannerActive');
            n--;
        });
        $(arrowRight).click(function(){
            move();
        });
    }
    banner('.banner');

    //搜索框
    let input=$('.search_box_top_left');
    let searchHidden=$('.searchHidden');
    let close=$('.searchHiddenicon');
    input.each(function (index) {
        $(this).val('疯抢2018大额手机券');
        $(this).click(function () {
            $(this).val('');
            $(this).end().focus();
            searchHidden.eq(index).css('display','flex');
        });
        $(this).blur(function () {
            searchHidden.eq(index).hide();
        });
        close.eq(index).click(function () {
            searchHidden.eq(index).hide();
        });
    });

    //头部开始
    let headerList=$('.headerList');
    let headerHidden=$('.headerHidden');
    headerList.each(function (index) {
        $(this).mouseenter(function () {
            headerHidden.eq(index).slideDown('fast').css({'border':'1px solid #ddd'});
        });
        $(this).mouseleave(function () {
            headerHidden.eq(index).slideUp('fast').css({'border':'none'});
        })
    })

    //大聚惠
    function dajuhui(arr) {
        let now=0,next=0;
        let box=$(arr);
        let lis=$('.dajuhui_bottom_left',box);
        let flag=true;
        $('.dajuhui_jiantou_right').click(function () {
            next=now+1;
            if(next>=lis.length){
                next=0;
            }
            lis.eq(next).css('left','1000px').animate({left:0}).end().eq(now).animate({left:-1000});
            now=next;
        });
        $('.dajuhui_jiantou_left').click(function () {
            next=now-1;
            if(next<0){
                next=lis.length-1;
            }
            lis.eq(next).css('left','-1000px').animate({left:0}).end().eq(now).animate({left:1000});
            now=next;
        });
    }
    dajuhui('#dajuhuiLeft');
    dajuhui('#dajuhuiRight');

    //选项卡
    function tabs(a,b) {
        let arr=$(a);
        let brr=$(b);
        arr.on('mousemove',function () {
            $(this).addClass('active').siblings().removeClass('active');
            brr.eq($(this).index()-1).addClass('dajuhuiActive').siblings().removeClass('dajuhuiActive');
        })
    }
    tabs('.dajuhui_top_center','.dajuhuiBox');

    //排行榜
    function rank(arr) {
        let now=0,next=0;
        let box=$(arr);
        let lis=$('.rank li');
        let w=box.width();
        let circles=$('.rankCircle li');
        let flag=true;
        $('.rankArrowRight').click(function () {
            if(!flag){
                return;
            }
            flag=false;
            next=now+1;
            if(next>lis.length-1){
                next=0;
            }
            lis.eq(next).css('left','100%');
            lis.eq(now).animate({left:-w}).end().eq(next).animate({left:0},function () {
                flag=true;
            });
            circles.eq(next).addClass('active').siblings().removeClass('active');
            now=next;
        });
        $('.rankArrowLeft').click(function () {
            if(!flag){
                return;
            }
            flag=false;
            next=now-1;
            if(next<0){
                next=lis.length-1;
            }
            lis.eq(next).css('left','-100%');
            lis.eq(now).animate({left:w}).end().eq(next).animate({left:0},function () {
                flag=true;
            });
            circles.eq(next).addClass('active').siblings().removeClass('active');
            now=next;
        });
    }
    rank('.rankBottom');

    //拼购
    function pingou(arr,img,ArrowRight,ArrowLeft) {
        let now=0,next=0;
        let box=$(arr);
        let lis=$(img,box);
        let w=box.width();
        let flag=true;
        $(ArrowRight).click(function () {
            if(!flag){
                return;
            }
            flag=false;
            next=now+1;
            if(next>=lis.length){
                next=0;
            }
            lis.eq(next).css('left','100%');
            lis.eq(now).animate({left:-w}).end().eq(next).animate({left:0},function () {
                flag=true;
            });
            now=next;
        });
        document.querySelector(ArrowLeft).onclick=function () {
            if(!flag){
                return;
            }
            flag=false;
            next=now-1;
            if(next<0){
                next=lis.length-1;
            }
            lis.eq(next).css('left','-100%');
            lis.eq(now).animate({left:w}).end().eq(next).animate({left:0},function () {
                flag=true;
            });
            now=next;
        };
    }
    pingou('.pingou','.pgList','.pgArrowRight','.pgArrowLeft');
    pingou('.fenleiBox','.fenlei_right_middle','.fenlei_jiantou_right','.fenlei_jiantou_left');

    //右侧固定栏
    let fixedBox=$('.icon_box li');
    let fixedText=$('.icon_box li div');
    let w;
    fixedBox.on('mouseenter',function () {
        w=fixedText.eq($(this).index()).width();
        fixedText.eq($(this).index()).animate({left:-w});
    }).on('mouseleave',function () {
        fixedText.eq($(this).index()).animate({left:0});
    }).clearQueue();

    //滚动条
    function scorll(a) {
        let floors=document.querySelectorAll(a);
        let navs=document.querySelectorAll('.left .nav a');
        let ch=document.documentElement.clientHeight;
        let back=document.querySelector('#icon');
        let hidden=document.querySelector('.hidden');
        let trans=document.querySelector('.dajuhui');
        let asides=document.querySelector('.left');
        let flag=true;
        let out=true;
        let enter=false;
        window.onscroll=function () {
            let tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
            floors.forEach(function (val,index) {
                if(!flag){
                    return;
                }
                if(tops>=val.offsetTop){
                    asides.classList.add('leftActive');//将含有display:block的类名赋给侧导航，侧导航出现
                    navs.forEach(function (value) {
                        value.classList.remove('active');
                    });
                    navs[index].classList.add('active');
                }
                if(tops<=floors[0].offsetTop){
                    asides.classList.remove('leftActive');
                }
            });
            navs.forEach(function (val,index) {
                val.onclick=function () {
                    flag=false;
                    this.classList.add('active');
                    let t=floors[index].offsetTop+ch-260;
                    animate(document.body,{scrollTop:t},100,function () {
                        flag=true;
                    });
                    animate(document.documentElement,{scrollTop:t},100,function () {
                        flag=true;
                    });
                }
            });
            back.onclick=function () {
                animate(document.body,{scrollTop:0});
                animate(document.documentElement,{scrollTop:0});
            };
            if(tops>(trans.offsetTop+ch)){
                if(out){
                    out=false;
                    animate(hidden,{top:0},function () {
                        enter=true;
                    });
                }
            }
            else {
                if(enter){
                    enter=false;
                    animate(hidden,{top:-50},function () {
                        out=true;
                    })
                }
            }
        };
    }
    scorll('.scroll');

});