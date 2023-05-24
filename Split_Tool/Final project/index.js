$(document).ready(function(){
	
	for(key in localStorage){
		if(localStorage.getItem(key)!=null){
			try{
				var groupName = JSON.parse(localStorage.getItem(key)).groupName;
				if(groupName!=undefined) $("#sublist").prepend("<li><a href='split bill new.html' target='right-iframe'>"+groupName+"<i class='fa-sharp fa-solid fa-delete-left'></a></li>");	
			}catch{;}
		}
	}
	
	
	$("#sidebar").mouseenter(function(){
		$("#sidebar").removeClass("active");
		
	});
	
	$("#sidebar").mouseleave(function(){
		$("#sidebar").addClass("active");
	});
	
	$('a:contains(新增群組)').click(function(){
		validGroupForm.resetForm();
	});
	
	$("#addGroup").on("click",function(){
		if($("#groupForm").valid()){
			var groupName = $("#groupName").val();
			$("#sublist a").last().before("<li><a href='split bill new.html' target='right-iframe'>"+groupName+"<i class='fa-sharp fa-solid fa-delete-left'></a></li>");
			
			var group = {groupName:groupName};
			localStorage.setItem(groupName,JSON.stringify(group));
			console.log(localStorage);
			
			$("#groupName").val("");
			$("#loginModal").modal("hide")
			
			localStorage.setItem("groupNow",groupName);
			console.log($('iframe').src);
			$('iframe').attr('src', 'split bill new.html');
			return false;
		}
		
	});
	
	
	$("#sublist").on("click", "a", function() {
	
		console.log($(this).text());
		localStorage.setItem("groupNow",$(this).text());
		
		
	});
	
	$("#sublist").on("click",".fa-delete-left",function(){
		
		localStorage.removeItem($(this).parent().text());
		localStorage.setItem("groupNow","");
		console.log(localStorage);
		$(this).parent().parent().remove();
		$('a:contains(首頁) i').click();
		return false;
	});
	
	window.addEventListener('message', function (e) {
		// Get the sent data
		const data = e.data;
		if(e.data == "tryNow"){
			validGroupForm.resetForm();
			$('#loginModal').modal('show');
		}
    
	});
	
	var validGroupForm = $("#groupForm").validate({
            rules: {
                NAME: {
                    required: true
                },
                            
            },
			messages: {
                NAME: "此欄位不可空白",
			}
    });
})

