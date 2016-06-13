$(function(){
		// banner轮播
		var arr=[];
		var forEach=arr.forEach;
		var box=$(".banner-middle")[0];
		var imgs=$(".middle-img");
		var circles=$(".banner-circle");
		var right=$(".dayu")[0];
		var left=$(".xiaoyu")[0];
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,2000);
		function move(){
			if(!flag){
				return;
			}
			flag=false;
			next=n+1;
			if(next>=imgs.length){
				next=0;
			}
			forEach.call(circles,function(v){
				v.style.background="#3E3E3E";
				
			})
			imgs[n].style.opacity=1;
			imgs[next].style.opacity=0;
			circles[next].style.background="red";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},700);
			animate(imgs[next],{opacity:1},700,function(){flag=true});
			n=next;
		}
		function move1(){
			if(!flag){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=imgs.length-1;
			}
			forEach.call(circles,function(v){
				v.style.background="#3E3E3E";
				imgs[n].style.opacity=1;
				imgs[next].style.opacity=0;
			})
			circles[next].style.background="red";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},700);
			animate(imgs[next],{opacity:1},700,function(){flag=true});
			n=next;
		}
		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,2000);
		}
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			move1();
		}
		for(var i=0;i<imgs.length;i++){
			circles[i].index=i;
			circles[i].onclick=function(){
				for(var j=0;j<circles.length;j++){
					circles[j].style.background="#3E3E3E";
					imgs[n].style.opacity=1;
				    imgs[this.index].style.opacity=0;
				}
					circles[this.index].style.background="red";
					imgs[this.index].style.zIndex=1;
					animate(imgs[n],{opacity:0},1000);
					animate(imgs[this.index],{opacity:1},1000);
					n=this.index;
		    }
		}
		// head动效1
		var topLeft=$(".top-left")[0];
		var local=$(".local")[0];
		topLeft.onmouseover=function(){
			local.style.display="block";
		}
		topLeft.onmouseout=function(){
			local.style.display="none";
		}
        // head右边动效
		var zong=$(".zong");
		var zongs=$(".zong-s");
		var zongb=$(".zong-b");
		var zongt=$(".zong-t");
		for(var i=0;i<zong.length;i++){
			zong[i].index=i;
			zong[i].onmouseover=function(){
				for(var j=0;j<zong.length;j++){
					zongs[j].style.display="none";
					zongb[j].style.display="none";
				}
				zongs[this.index].style.display="block";
				zongb[this.index].style.display="block";
			}
			zong[i].onmouseout=function(){
				for(var j=0;j<zong.length;j++){
					zongs[j].style.display="none";
					zongb[j].style.display="none";
				}
				zongs[this.index].style.display="none";
				zongb[this.index].style.display="none";
			}
		}
		var you=$(".top-right")[0];
		var daohang=$(".daohang")[0];
		you.onmouseover=function(){
			daohang.style.display="block";
		}
		you.onmouseout=function(){
			daohang.style.display="none";
		}
		daohang.onmouseover=function(){
			daohang.style.display="block";
		}
		daohang.onmouseout=function(){
			daohang.style.display="none";
		}


        // 调用双下标轮播封装函数
        var box=$(".img-box");
        console.log(box)
        for(var i=0;i<box.length;i++){
        	lunbo(box[i]);
        }


        // 节点轮播
		var windows=$(".recommend")[0];
    	var big=$(".recommend-box")[0];
    	var div=$(".recommend-img");
    	var width=div[0].offsetWidth;
    	var slider=$(".r-right")[0];
    	var slidel=$(".r-left")[0];
    	var flag=true;
    	var r=setInterval(slide,1000);
    	function slide(){
    		if(!flag){
    			return;
    		}
    		flag=false;
    		animate(big,{left:-4*width},200,function(){
    			var first=getFirst(big);
    			big.appendChild(first);
    			big.style.left=0;
    			flag=true;
    		})
    	}
    	function slide1(){
    		if(!flag){
    			return;
    		}
    		var first=getFirst(big);
    		var last=getLast(big);
    		insertBefore(last,first);
    		big.style.left=-4*width+"px";
    		animate(big,{left:0},200,function(){flag=true})
    	}
    	windows.onmouseover=function(){
    		clearInterval(r);
    	}
    	windows.onmouseout=function(){
    		r=setInterval(slide,1000);
    	}
    	slider.onclick=function(){
    		slide();
    	}
    	slidel.onclick=function(){
    		slide1();
    	}

    	// 左边菜单栏
    	var type=$(".classify-all");
    	var caidan=$(".caidan");
    	var typea=$(".classify");
    	for (var i=0;i<type.length;i++) {
   	       type[i].index=i;
   	       type[i].onmouseover=function(){
   	       	  type[this.index].style.background="#F7F7F7";
   	       	  typea[this.index].style.color="#C81623";
   		      caidan[this.index].style.display="block"
   	       }
   	        type[i].onmouseout=function(){
   	          type[this.index].style.background="#C81623";
   	       	  typea[this.index].style.color="#fff";
   		      caidan[this.index].style.display="none"
   	       } 
       }
        for (var i=0;i<caidan.length;i++) {
   		    caidan[i].index=i;
   	        caidan[i].onmouseover=function(){
   	        type[this.index].style.background="#F7F7F7";
   	       	typea[this.index].style.color="#C81623";
   		    caidan[this.index].style.display="block"
   	    }
   	        caidan[i].onmouseout=function(){
   	    	type[this.index].style.background="#C81623";
   	       	typea[this.index].style.color="#fff";
   		    caidan[this.index].style.display="none"
   	       }
        }


// 楼层跳转
    var floor = $(".floor");
	var lis = $(".li");
	var fudong = $(".louceng")[0];
	var cw = document.documentElement.clientWidth;
	var ch = document.documentElement.clientHeight;
	var bh = fudong.offsetHeight;
	var hidePng = $('.hide-png');
	fudong.style.top = (ch - bh) / 2 + "px";
	var flag=true;
	var flag1=true;
	var sign=true;
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			sign=false;
			// var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
			var top = floor[this.index].offsetTop;
			// 将当前点击的楼层距离屏幕的高度赋给滚动距离
			animate(document.documentElement,{scrollTop:top},300,function () {
			    sign=true;
			})
			animate(document.body,{scrollTop:top},300,function () {
			    sign=true;
			})
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.background = "#fff"
				lis[i].style.color = "#666"
				lis[i].innerHTML=i+1+"F";
				animate(hidePng[i],{height:0},500)
			}
			lis[this.index].style.color = "#fff" 
			lis[this.index].style.background = "#C81623"
			lis[this.index].style.fontSize = 12+"px";
			var aa = lis[this.index].getAttribute("aa");
			lis[this.index].innerHTML=aa;
			animate(hidePng[this.index],{height:25},500)
			// 获取自定义属性，并将该属性赋值给当前所在框
		}
	}
     

     //滚动条事件
	window.onscroll=function(){
		if(!sign){
			return;
		}
		var obj=document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i=0; i<floor.length; i++) {
			if (obj.scrollTop>=(floor[i].offsetTop-ch)) {
				for (var j=0;j<lis.length;j++) {
					lis[j].style.background="#fff"
					lis[j].style.color="#666"
					lis[j].innerHTML=j+1+"F";
					animate(hidePng[j],{height:0},300)
				}
				
				var aa=lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				lis[i].style.color="#fff"
				lis[i].style.background="#c81623"
				animate(hidePng[i],{height:25},300)
			}
		}
		if (obj.scrollTop>=(floor[0].offsetTop-ch)) {//开关控制
			if(flag){
				flag=false;
				animate(fudong,{opacity:1},300,function(){flag1=true;})
			} 
		}else{
				if(flag1) {
				flag1=false;
				animate(fudong,{opacity:0},300,function(){flag=true;})
			} 
		}
	}

	// 选项卡
	var rightType=$(".right-type");
	var righta=$(".right-a");
	var xxk=document.querySelectorAll(".xxk");
	for(var i=0;i<rightType.length;i++){
		rightType[i].index=i;
		xxk[i].style.zIndex=0;
		rightType[i].onmouseover=function(){
			righta[this.index].style.display="block";
			xxk[this.index].style.zIndex=1;
		}
		rightType[i].onmouseout=function(){
			righta[this.index].style.display="none";
			xxk[this.index].style.zIndex=0;
		}
	}

	for(var i=0;i<xxk.length;i++){
		xxk[i].index=i;
		xxk[i].onmouseover=function(){
			righta[this.index].style.display="block";
			xxk[this.index].style.zIndex=1;
		}
		xxk[i].onmouseout=function(){
			righta[this.index].style.display="none";
			xxk[this.index].style.zIndex=0;
		}
	}



	var floatRight=$('.float-r')[0];
    var fh=floatRight.offsetHeight;
    var liRight=$('.li-r');
    var dlRight=$('.dl-r');
    floatRight.style.top=(ch - fh) / 2 + "px"
    for(var i=0;i<liRight.length;i++){
    	liRight[i].index=i;
    	liRight[i].onmouseover=function(){
    		for(var j=0;j<liRight.length;j++){
    			liRight[j].style.background='#7A6E6E';
    		}
    		liRight[this.index].style.background='#B61D1D'
    		animate(dlRight[this.index],{width:70},200)
    		dlRight[this.index].style.background='#B61D1D'
    	}
    	liRight[i].onmouseout=function(){
    		liRight[this.index].style.background='#7A6E6E'
    		animate(dlRight[this.index],{width:0},200);
    		dlRight[this.index].style.background='#7A6E6E'
    	}
    }
})



