$(document).ready(function(){
	$('.btn:contains(立即使用)').click(function(){
		var message = "tryNow";
		
		window.parent.postMessage(message, '*');
	});
})