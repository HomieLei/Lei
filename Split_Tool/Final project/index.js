$(document).ready(function(){
	
	for(key in localStorage){
		if(localStorage.getItem(key)!=null){
			try{
				var groupName = JSON.parse(localStorage.getItem(key)).groupName;
				if(groupName!=undefined) $("#sublist").prepend("<li><a href='split bill new.html' target='right-iframe' class='showIframe'>"+groupName+"<i class='fa-sharp fa-solid fa-delete-left'></a></li>");	
			}catch{;}
		}
	}
	
	$("iframe").hide();
	
	$("#collapse").on("click",function(){
		
		$("#sidebar").toggleClass("active");
		$("#buttImage").toggleClass("fa-circle-right");
		$("#buttImage").toggleClass("fa-circle-left");
		
	});
	
	
	$("body").on("click",".hideIframe",function(){
		$("iframe").hide();
		$("h2").show();
	});
	
	$("body").on("click",".showIframe",function(){
		$("iframe").show();
		$("h2").hide();
	});
	
	$("#addGroup").on("click",function(){
		
		var groupName = $("#groupName").val();
		$("#sublist").prepend("<li><a href='split bill new.html' target='right-iframe' class='showIframe'>"+groupName+"<i class='fa-sharp fa-solid fa-delete-left'></a></li>");
		
		var group = {groupName:groupName};
		localStorage.setItem(groupName,JSON.stringify(group));
		console.log(localStorage);
		
		$("#groupName").val("");
		$("#loginModal").modal("hide")
		
		$('li a:contains(G1)').click();
	});
	
	
	$("#sublist").on("click", ".showIframe", function() {
		console.log($(this).text());
		localStorage.setItem("groupNow",$(this).text());
	});
	
	$("#sublist").on("click",".fa-delete-left",function(){
			localStorage.removeItem($(this).parent().text());
			console.log(localStorage);
			$(this).parent().parent().remove();
			$("iframe").hide();
			$("h2").show();
	});
	
})

