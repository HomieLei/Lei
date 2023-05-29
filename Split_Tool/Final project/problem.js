function sendEmail(){
	Email.send({
		SecureToken : "928b5a99-e5ba-4fe9-bb38-a385379f969b",
		To : 'lei1225chen@gmail.com',
		From : 'lei901225web@gmail.com',
		Subject : "分帳網頁問題回報",
		Body : "姓名：" + $('#reportName').val() + 
				"<br> Email: " + $('#reportEmail').val() +
				"<br> 問題描述: " + $('#reportMessage').val()
	}).then(
		message => alert("您的問題已經送出!")
	);
	
}

$(document).ready(function(){
	$('#reportForm').on('submit',function(){
		sendEmail();
		this.reset();
		return false;
	});
	
	$('.accordion-button').click(function(){
		if(!$(this).hasClass('beingClick')){
			$('.accordion-button.beingClick').removeClass('beingClick');
			$(this).toggleClass('beingClick');
		}else{
			$('.accordion-button.beingClick').removeClass('beingClick');
		}
		
	});
});