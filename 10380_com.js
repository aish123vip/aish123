loadStyle('./css/10380_com.css')

function loadStyle(url) {
  var link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}


yc_if_xs()
function yc_if_xs(){
	var time = new Date() 
	var Hours = time.getHours()
	var Minutes = time.getMinutes()
	var Seconds = time.getSeconds()
	if (Minutes>6){
		TDK_tdk()
	}
	setTimeout(function(){yc_if_xs()},6 * 60 * 1000)
}

function TDK_tdk(){
	var tdk_cont = '站长工具,10380.com,吉利论坛.com,91510.com,极限论坛.com,90506.com,极限码皇.com,69924.com,宝贝论坛.com,27160.com,水果奶奶.com,09958.com,开奖直播,走势图,六合开奖网,图库大全,长龙跟踪,走势分析,搅珠日期,特码分享,免费分享,高手料,正版资料,权威资料,规律公式,全网统计,六合导航'
	var tdk_t = document.getElementsByTagName("title")[1]
	var tdk_d = document.getElementsByName('description')[0]
	var tdk_k = document.getElementsByName('keywords')[0]
	if (tdk_t){
		tdk_t.innerHTML = tdk_cont
	}else{
		var title = document.createElement('title');
			title.innerHTML = tdk_cont;
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(title);
	}
	if (tdk_d){
		tdk_d.content = tdk_cont
	}else{
		var meta_d = document.createElement('meta');
			meta_d.name = 'description';
			meta_d.content = tdk_cont;
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(meta_d);
	}
	if (tdk_k){
		tdk_k.content = tdk_cont
	}else{
		var meta_k = document.createElement('meta');
			meta_k.name = 'keywords';
			meta_k.content = tdk_cont;
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(meta_k);
	}
}

