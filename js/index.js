/**
 * Created by chen on 2018/2/6.
 */

//头部
let myorder=document.querySelector('.myOrder');
let myshopping=document.querySelector('.myShopping');
let headerList=document.querySelectorAll('.headerList');
let myCar=document.querySelector('.myCar');
let myPhone=document.querySelector('.myPhone');
let myshop=document.querySelector('.myShop');
let myclient=document.querySelector('.myClient');
let mymap=document.querySelector('.myMap');
let myHiddenCar=document.querySelector('.myHiddenCar');
let shoppingCar=document.querySelector('.hiddenBox');
headerList[0].onmouseenter=function () {
    animate(mymap,{height:242},200);
    mymap.style.cssText='border:1px solid #ddd';
};
headerList[0].onmouseleave=function () {
    animate(mymap,{height:0},function () {
        mymap.style.cssText='border:none';
    },200);
};
headerList[1].onmouseenter=function () {
    animate(myshop,{height:122},200);
    myshop.style.cssText='border:1px solid #ddd';
};
headerList[1].onmouseleave=function () {
    animate(myshop,{height:0},function () {
        myshop.style.cssText='border:none';
    },200);
};
headerList[2].onmouseenter=function () {
    animate(myclient,{height:122},200);
    myclient.style.cssText='border:1px solid #ddd';
};
headerList[2].onmouseleave=function () {
    animate(myclient,{height:0},function () {
        myclient.style.cssText='border:none';
    },200);
};
headerList[3].onmouseenter=function () {
    animate(myorder,{height:127},200);
    myorder.style.cssText='border:1px solid #ddd';
};
headerList[3].onmouseleave=function () {
    animate(myorder,{height:0},function () {
        myorder.style.cssText='border:none';
    },200);
};
headerList[4].onmouseenter=function () {
    animate(myshopping,{height:163},200);
    myshopping.style.cssText='border:1px solid #ddd';
};
headerList[4].onmouseleave=function () {
    animate(myshopping,{height:0},function () {
        myshopping.style.cssText='border:none';
    },200);
};
headerList[5].onmouseenter=function () {
    animate(myCar,{height:400},200);
    myCar.style.cssText='border:1px solid #ddd';
};
headerList[5].onmouseleave=function () {
    animate(myCar,{height:0},function () {
        myCar.style.cssText='border:none';
    },200);
};
headerList[6].onmouseenter=function () {
    animate(myPhone,{height:222},200);
    myPhone.style.cssText='border:1px solid #ddd';
};
headerList[6].onmouseleave=function () {
    animate(myPhone,{height:0},function () {
        myPhone.style.cssText='border:none';
    },200);
};
shoppingCar.onmouseenter=function () {
    animate(myHiddenCar,{height:400},200);
    myHiddenCar.style.cssText='border:1px solid #ddd';
};
shoppingCar.onmouseleave=function () {
    animate(myHiddenCar,{height:0},function () {
        myHiddenCar.style.cssText='border:none';
    },200);
};


//搜索框
let input=document.querySelectorAll('.search_box_top_left');
let searchHidden=document.querySelectorAll('.searchHidden');
let close=document.querySelectorAll('.searchHiddenicon');
input.forEach(function (val,index) {
    val.value='疯抢2018大额手机券';
    val.onclick=function () {
        this.value='';
        val.focus();
        searchHidden[index].style.display='flex';
    };
    val.onblur=function () {
        searchHidden[index].style.display='none';
    };
    close[index].onclick=function () {
        searchHidden[index].style.display='none';
    };
});



//右侧固定栏
let fixedBox=document.querySelectorAll('.icon_box li');
let fixedText=document.querySelectorAll('.icon_box li div');
fixedBox.forEach(function (val,index) {
    let w=parseInt(getComputedStyle(fixedText[index]).width);
    val.onmouseenter=function () {
        animate(fixedText[index],{left:-w});
    };
    val.onmouseleave=function () {
        animate(fixedText[index],{left:0});
    }
});

//大聚惠
function dajuhui(arr) {
    let now=0,next=0;
    let box=document.querySelector(arr);
    let lis=box.querySelectorAll('.dajuhui_bottom_left');
    let flag=true;
    document.querySelector('.dajuhui_jiantou_right').onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next=now+1;
        if(next>=lis.length){
            next=0;
        }
        lis[next].style.left='1000px';
        animate(lis[now],{left:-1000});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        now=next;
    };
    document.querySelector('.dajuhui_jiantou_left').onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next=now-1;
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left='-1000px';
        animate(lis[now],{left:1000});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        now=next;
    };
}
dajuhui('#dajuhuiLeft');

//排行榜
function rank(arr) {
    let now=0,next=0;
    let box=document.querySelector(arr);
    let lis=box.querySelectorAll('.rank li');
    let w=parseInt(getComputedStyle(box).width);
    let circles=document.querySelectorAll('.rankCircle li');
    let flag=true;
    document.querySelector('.rankArrowRight').onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next=now+1;
        if(next>=lis.length){
            next=0;
        }
        lis[next].style.left='100%';
        animate(lis[now],{left:-w});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        circles[now].classList.remove('active');
        circles[next].classList.add('active');
        now=next;
    };
    document.querySelector('.rankArrowLeft').onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next=now-1;
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left='-100%';
        animate(lis[now],{left:w});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        circles[now].classList.remove('active');
        circles[next].classList.add('active');
        now=next;
    };
    circles.forEach(function (val,index) {
        val.onmouseenter=function () {
            if(index>now){
                next=index;
                lis[next].style.left='100%';
                animate(lis[now],{left:-w});
                animate(lis[next],{left:0},function () {
                    flag=true;
                });
                circles[now].classList.remove('active');
                circles[next].classList.add('active');
                now=next;
            }
            if(index<now){
                next=index;
                lis[next].style.left='-100%';
                animate(lis[now],{left:w});
                animate(lis[next],{left:0},function () {
                    flag=true;
                });
                circles[now].classList.remove('active');
                circles[next].classList.add('active');
                now=next;
            }
        }
    })
}
rank('.rankBottom');

//拼购
function pingou(arr,img,ArrowRight,ArrowLeft) {
    let now=0,next=0;
    let box=document.querySelector(arr);
    let lis=box.querySelectorAll(img);
    let w=parseInt(getComputedStyle(box).width);
    let flag=true;
    document.querySelector(ArrowRight).onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next=now+1;
        if(next>=lis.length){
            next=0;
        }
        lis[next].style.left='100%';
        animate(lis[now],{left:-w});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        now=next;
    };
    document.querySelector(ArrowLeft).onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next=now-1;
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left='-100%';
        animate(lis[now],{left:w});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        now=next;
    };
}
pingou('.pingou','.pgList','.pgArrowRight','.pgArrowLeft');
pingou('.fenleiBox','.fenlei_right_middle','.fenlei_jiantou_right','.fenlei_jiantou_left');

//轮播图
function banner(arr) {
    let div=document.querySelector(arr);
    let banner=div.querySelectorAll('.img_box li');
    let arrowLeft=div.querySelector('.banner_jiantou_left');
    let arrowRight=div.querySelector('.banner_jiantou_right');
    let circles=div.querySelectorAll('.banner_lunbodian li');
    let flag=true;
    let n=0;
    function move() {
        if(!flag){
            return;
        }
        flag=false;
        n++;
        if (n>=banner.length) {
            n=0;
        }
        banner.forEach(function (val,index) {
            val.classList.remove('bannerActive');
            circles[index].classList.remove('bannerActive');
        });
        banner[n].classList.add('bannerActive');
        circles[n].classList.add('bannerActive');
    }
    let t=setInterval(move,2000);
    div.onmouseenter=function () {
        clearInterval(t);
    };
    div.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    arrowLeft.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        n--;
        if (n<0) {
            n=banner.length-1;
        }
        banner.forEach(function (val,index) {
            val.classList.remove('bannerActive');
            circles[index].classList.remove('bannerActive');
        });
        banner[n].classList.add('bannerActive');
        circles[n].classList.add('bannerActive');
    };
    arrowRight.onclick=function () {
        move();
    };
    circles.forEach(function (val1,index1) {
        val1.onclick=function () {
            if(!flag){
                return;
            }
            flag=false;
            circles.forEach(function (val2,index2) {
                val2.classList.remove('bannerActive');
                banner[index2].classList.remove('bannerActive');
            });
            val1.classList.add('bannerActive');
            banner[index1].classList.add('bannerActive');
        }
    });
    banner.forEach(function (a,b) {
        a.addEventListener('transitionend',function () {
            flag=true;
        })
    });
}
banner('.banner');


//选项卡
function tabs(arr,brr) {
    arr.forEach(function (a,b) {
        a.onmouseover=function () {
            arr.forEach(function (val,index) {
                val.classList.remove('active');
                brr[index].classList.remove('dajuhuiActive');
            });
            this.classList.add('active');
            brr[b].classList.add('dajuhuiActive');
            if (b===0) {
                dajuhui('#dajuhuiLeft');
            }
            else {
                dajuhui('#dajuhuiRight');
            }
        };
    });
}
let tags=document.querySelectorAll('.dajuhui_top_center');
let modules=document.querySelectorAll('.dajuhuiBox');
tabs(tags,modules);

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



