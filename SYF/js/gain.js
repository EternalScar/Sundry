/*首页中轮播图获取方法：carousel()*/
function carousel(){
	//AJAX数据交互
	//通过异步的网络请求，实现局部刷新效果
	//是否需要跨域--如果协议相同，域名相同，端口号相同的情况下可以使用
	//js中封装好的网络请求的对象进行与后台的交互XMLHTTPReguest
	//获取网络对象的实例--因为js把网络请求的方法全部封装到了这个对象里
	var xhr = new XMLHttpRequest();
	//设定请求地址--open()方法
	/**
	 * 1.请求方式
	 * 2.请求地址
	 * 3.是否异步
	 */
	xhr.open("GET","data/favorable.json",true);
	//发送请求--send()方法
	xhr.send();
	//检测状态--检测发送的状态，一旦状态发送改变，那么久可以采取某些方法
	xhr.onreadystatechange = function(){
		//第一个前提：对方已经接受到发送出的网络请求的消息
		//第二个前提：对方有反馈回消息，也就是可以提供数据
		/**
		 * readyState:请求码
		 * status:状态码
		 * responseText:响应文本
		 */
		//处理json数据的方式
		/**
		 * 1.把json字符串转成json对象
		 * 		JSON.parse();
		 * 2.把json对象转成json字符串--主要用于将数据发送给后台的时候
		 * 		JSON.stringify();
		 */
		if(xhr.readyState===4&&xhr.status===200){
			//测试：输出响应文本
//			console.log(xhr.responseText);
			//判断接受回来的数据是字符串还是对象
			//判断数据类型的方法--typeof
//			console.log(typeof xhr.responseText);
			var objs = JSON.parse(xhr.responseText);
			//循环添加li	div	img标签
			for(var x in objs){
				//遍历数组，通过数组对象的数量来判断创建多少li		div	img
//				console.log(x);
				var lis = document.createElement("li");
				
				var divs = document.createElement("div");
				var imgs = document.createElement("img");
				imgs.src = objs[x].image;
			}
		}
	}
}
