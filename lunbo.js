	function lunbo(obj){
		var b=$(".b",obj);
		var c=$(".c",obj);
		var r=$(".r",obj)[0];
		var l=$(".l",obj)[0];
		var w=b[0].offsetWidth;
		var x=0;
		var y=0;
		var flag=true;
		var t1=setInterval(dong,2000);
		function dong(){
			if(!flag){
				return;
			}
			flag=false;
			y=x+1;
			if(y>=b.length){
					y=0;
				}
			for(var i=0;i<b.length;i++){
				c[i].style.background="#3E3E3E";
			}
			c[y].style.background="red";
			b[y].style.left=w+"px";
			b[y].style.zIndex=1;
			animate(b[x],{left:-w},300);
			animate(b[y],{left:0},300,function(){flag=true});
			x=y;
		}
		function dong1(){
			if(!flag){
				return;
			}
			flag=false;
			y=x-1;
			if(y<0){
					y=b.length-1;
				}
			for(var i=0;i<b.length;i++){
				c[i].style.background="#3E3E3E";
			}
			c[y].style.background="red";
			b[y].style.left=-w+"px";
			b[y].style.zIndex=1;
			animate(b[x],{left:w},300);
			animate(b[y],{left:0},300,function(){flag=true});
			x=y;
		}
		obj.onmouseover=function(){
			clearInterval(t1);
		}
		obj.onmouseout=function(){
			t1=setInterval(dong,2000);
		}
		r.onclick=function(){
			dong();
		}
		l.onclick=function(){
			dong1();
		}
		for(var i=0;i<b.length;i++){
			c[i].index=i;
			c[i].onclick=function(){
				if(this.index>x){
					for(var j=0;j<b.length;j++){
						c[j].style.background="#3E3E3E";
					}
					c[this.index].style.background="red";
					b[this.index].style.left=w+"px";
					b[this.index].zIndex=1;
					animate(b[x],{left:-w},300);
					animate(b[this.index],{left:0},300);
					x=this.index;
				}else if(this.index<x){
					for(var j=0;j<b.length;j++){
						c[j].style.background="#3E3E3E";
					}
					c[this.index].style.background="red";
					b[this.index].style.left=-w+"px";
					b[this.index].zIndex=1;
					animate(b[x],{left:w},300);
					animate(b[this.index],{left:0},300);
					x=this.index;
				}else{
					return;
				}
			}
		}
	}