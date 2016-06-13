// 处理getclass的兼容性问题
function getClass(classname,obj){
	var obj=obj||document;
	 // 如果没有传入obj，默认使用document对象输出
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		// 定义一个空数组存储需要的类名
		var alls=document.getElementsByTagName('*');
		// 通过*选择所有的标签
		for(var i=0;i<alls.length;i++){
			if(check(alls[i].className,classname)){
				arr.push(alls[i]);
				// 调用check函数，如果下标为i的元素的类名等于实参，将这个类名加在数组arr里面
			}
		}
		return arr;
	}
}

 function check(search,match){
	var brr=search.split(" ");
	// 将找到的所有的标签的类名用空格分割成数组
	for(var i=0;i<brr.length;i++){
		if(brr[i]==match){
			return true;
		}else{
			return false;
		}
	}
}






function getInner(obj,value){
	if(obj.textContent){
		if(value==undefined){
			return obj.textContent;
		}else{
			obj.textContent=value;
		}
	}else{
		if(value==undefined){
			return obj.innerText;
		}else{
			obj.innerText=value;
		}
	}
}

function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}else{
		return obj.getComputedStyle(obj,null)[style];
	}
}




function $(search,obj){
	var obj=obj||document;
	if(typeof(search)=="string"){
		
	    if(search.charAt(0)=="#"){
		    return document.getElementById(search.substr(1));
	    }else if(search.charAt(0)=="."){
		    return getClass(search.substr(1),obj);
	    }else{
		    return search.getElementsByTagName(search);
	    }
	}else if(typeof(search)=="function"){
		window.onload=function(){
			search();
		}
	}
	

}






// 获取子节点
function getChild(obj,type){
	var type=type||"a";
	var all=obj.childNodes;
	var arr=[];
	for(var i=0;i<all.length;i++){
		if(type=="a"){
			if(all[i].nodeType==1){
				arr.push(all[i]);
			}
		}else if(type=="b"){
			if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))){
				arr.push(all[i]);
			}
		}
	}
	return arr;
}



function getFirst(obj){
	return getChild(obj)[0];

}

function getLast(obj,type){
	return getChild(obj)[getChild(obj).length-1];

}



function getNext(obj,type){
	var type=type||"a";
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	if(type="a"){
		while(next.nodeType==3||next.nodeType==8){
			next=next.nextSibling;
			if(next==null){
				return false;
			}
		}
	}else if(type=="b"){
		while((next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,""))||next.nodeType==8){
			next=next.nextSibling;
			if(next==null){
				return false;
		    }
	    }
     }
     return next;
}



function insertBefore(obj,before){
	var parent=before.parentNode;
	parent.insertBefore(obj,before);
}


