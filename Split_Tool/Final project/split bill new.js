var groupName=localStorage.getItem("groupNow");



function createTable1(groupData){
	$('#table1').DataTable({
		columnDefs: [
            {
                targets: 0,
                data: null,
                defaultContent: '<span data-bs-toggle="tooltip" title="編輯"><button class="editButt editNameButt" data-bs-toggle="modal" data-bs-target="#editNameModal"></button></span>',
				orderable: false
            },
			{
				targets: 1,
                data: null,
                defaultContent: '<span data-bs-toggle="tooltip" title="刪除"><button class="delButt delNameButt"></button></span>',
				orderable: false
		}],
		order:false,
		searching:false,
		"responsive":true,
       
		"language":{
			"processing": "處理中...",
			"loadingRecords": "載入中...",
			"paginate": {
				"first": "第一頁",
				"previous": "上一頁",
				"next": "下一頁",
				"last": "最後一頁"
			},
			"emptyTable": "目前沒有資料",
			"datetime": {
				"previous": "上一頁",
				"next": "下一頁",
				"hours": "時",
				"minutes": "分",
				"seconds": "秒",
				"amPm": [
					"上午",
					"下午"
				],
				"unknown": "未知",
				"weekdays": [
					"週日",
					"週一",
					"週二",
					"週三",
					"週四",
					"週五",
					"週六"
				],
				"months": [
					"一月",
					"二月",
					"三月",
					"四月",
					"五月",
					"六月",
					"七月",
					"八月",
					"九月",
					"十月",
					"十一月",
					"十二月"
				]
			},
			"searchBuilder": {
				"add": "新增條件",
				"condition": "條件",
				"deleteTitle": "刪除過濾條件",
				"button": {
					"_": "複合查詢 (%d)",
					"0": "複合查詢"
				},
				"clearAll": "清空",
				"conditions": {
					"array": {
						"contains": "含有",
						"equals": "等於",
						"empty": "空值",
						"not": "不等於",
						"notEmpty": "非空值",
						"without": "不含"
					},
					"date": {
						"after": "大於",
						"before": "小於",
						"between": "在其中",
						"empty": "為空",
						"equals": "等於",
						"not": "不為",
						"notBetween": "不在其中",
						"notEmpty": "不為空"
					},
					"number": {
						"between": "在其中",
						"empty": "為空",
						"equals": "等於",
						"gt": "大於",
						"gte": "大於等於",
						"lt": "小於",
						"lte": "小於等於",
						"not": "不為",
						"notBetween": "不在其中",
						"notEmpty": "不為空"
					},
					"string": {
						"contains": "含有",
						"empty": "為空",
						"endsWith": "字尾為",
						"equals": "等於",
						"not": "不為",
						"notEmpty": "不為空",
						"startsWith": "字首為",
						"notContains": "不含",
						"notStartsWith": "開頭不是",
						"notEndsWith": "結尾不是"
					}
				},
				"data": "欄位",
				"leftTitle": "群組條件",
				"logicAnd": "且",
				"logicOr": "或",
				"rightTitle": "取消群組",
				"title": {
					"_": "複合查詢 (%d)",
					"0": "複合查詢"
				},
				"value": "內容"
			},
			"editor": {
				"close": "關閉",
				"create": {
					"button": "新增",
					"title": "新增資料",
					"submit": "送出新增"
				},
				"remove": {
					"button": "刪除",
					"title": "刪除資料",
					"submit": "送出刪除",
					"confirm": {
						"_": "您確定要刪除您所選取的 %d 筆資料嗎？",
						"1": "您確定要刪除您所選取的 1 筆資料嗎？"
					}
				},
				"error": {
					"system": "系統發生錯誤(更多資訊)"
				},
				"edit": {
					"button": "修改",
					"title": "修改資料",
					"submit": "送出修改"
				},
				"multi": {
					"title": "多重值",
					"info": "您所選擇的多筆資料中，此欄位包含了不同的值。若您想要將它們都改為同一個值，可以在此輸入，要不然它們會保留各自原本的值。",
					"restore": "復原",
					"noMulti": "此輸入欄需單獨輸入，不容許多筆資料一起修改"
				}
			},
			"autoFill": {
				"cancel": "取消"
			},
			"buttons": {
				"copySuccess": {
					"_": "複製了 %d 筆資料",
					"1": "複製了 1 筆資料"
				},
				"copyTitle": "已經複製到剪貼簿",
				"excel": "Excel",
				"pdf": "PDF",
				"print": "列印",
				"copy": "複製",
				"colvis": "欄位顯示",
				"colvisRestore": "重置欄位顯示",
				"csv": "CSV",
				"pageLength": {
					"-1": "顯示全部",
					"_": "顯示 %d 筆"
				},
				"createState": "建立狀態",
				"removeAllStates": "移除所有狀態",
				"removeState": "移除",
				"renameState": "重新命名",
				"savedStates": "儲存狀態",
				"stateRestore": "狀態 %d",
				"updateState": "更新"
			},
			"searchPanes": {
				"collapse": {
					"_": "搜尋面版 (%d)",
					"0": "搜尋面版"
				},
				"emptyPanes": "沒搜尋面版",
				"loadMessage": "載入搜尋面版中...",
				"clearMessage": "清空",
				"count": "{total}",
				"countFiltered": "{shown} ({total})",
				"title": "過濾條件 - %d",
				"showMessage": "顯示全部",
				"collapseMessage": "摺疊全部"
			},
			"stateRestore": {
				"emptyError": "名稱不能空白。",
				"creationModal": {
					"button": "建立",
					"columns": {
						"search": "欄位搜尋",
						"visible": "欄位顯示"
					},
					"name": "名稱：",
					"order": "排序",
					"paging": "分頁",
					"scroller": "卷軸位置",
					"search": "搜尋",
					"searchBuilder": "複合查詢",
					"select": "選擇",
					"title": "建立新狀態",
					"toggleLabel": "包含："
				},
				"duplicateError": "此狀態名稱已經存在。",
				"emptyStates": "名稱不可空白。",
				"removeConfirm": "確定要移除 %s 嗎？",
				"removeError": "移除狀態失敗。",
				"removeJoiner": "和",
				"removeSubmit": "移除",
				"removeTitle": "移除狀態",
				"renameButton": "重新命名",
				"renameLabel": "%s 的新名稱：",
				"renameTitle": "重新命名狀態"
			},
			"select": {
				"columns": {
					"_": "選擇了 %d 欄資料",
					"1": "選擇了 1 欄資料"
				},
				"rows": {
					"1": "選擇了 1 筆資料",
					"_": "選擇了 %d 筆資料"
				},
				"cells": {
					"1": "選擇了 1 格資料",
					"_": "選擇了 %d 格資料"
				}
			},
			"zeroRecords": "沒有符合的資料",
			"aria": {
				"sortAscending": "：升冪排列",
				"sortDescending": "：降冪排列"
			},
			"info": "總共 _TOTAL_ 人",
			"infoEmpty": "顯示第 0 至 0 筆資料，共 0 筆",
			"infoFiltered": "(從 _MAX_ 筆結果中過濾)",
			"infoThousands": ",",
			"lengthMenu": "顯示 _MENU_ 筆資料",
			"search": "新增：",
			"searchPlaceholder": "請輸入姓名",
			"thousands": ","
		} 
		
		
	});
	
	try{
		var name = groupData["table1"]["name"];
		for(i in name){
			var data = [["","",name[i]]];
			$("#table1").DataTable().rows.add(data).draw();
		}
	}catch{
		groupData["table1"]={};
		groupData["table1"]["name"]=[];
		console.log(groupData);
	}
	
}

function createTable2(groupData){
	
	$('#table2').DataTable({
		columnDefs: [{
          className: 'details-control',
          orderable: false,
		  target:6
        },{
          targets: 0,
          data: null,
          defaultContent: '<span data-bs-toggle="tooltip" data-bs-placement="top" title="編輯"><button class="editButt editItemButt" data-bs-toggle="modal" data-bs-target="#addItemModal1"></button></span>',
		  orderable: false
        },
		  {
       	  targets: 1,
          data: null,
          defaultContent: '<span data-bs-toggle="tooltip" data-bs-placement="top" title="刪除"><button class="delButt delItemButt"></button></span>',
		  orderable: false
		}],
		order: [[1, 'asc']],
		"responsive":true,
		"language":{
			"processing": "處理中...",
			"loadingRecords": "載入中...",
			"paginate": {
				"first": "第一頁",
				"previous": "上一頁",
				"next": "下一頁",
				"last": "最後一頁"
			},
			"emptyTable": "目前沒有資料",
			"datetime": {
				"previous": "上一頁",
				"next": "下一頁",
				"hours": "時",
				"minutes": "分",
				"seconds": "秒",
				"amPm": [
					"上午",
					"下午"
				],
				"unknown": "未知",
				"weekdays": [
					"週日",
					"週一",
					"週二",
					"週三",
					"週四",
					"週五",
					"週六"
				],
				"months": [
					"一月",
					"二月",
					"三月",
					"四月",
					"五月",
					"六月",
					"七月",
					"八月",
					"九月",
					"十月",
					"十一月",
					"十二月"
				]
			},
			"searchBuilder": {
				"add": "新增條件",
				"condition": "條件",
				"deleteTitle": "刪除過濾條件",
				"button": {
					"_": "複合查詢 (%d)",
					"0": "複合查詢"
				},
				"clearAll": "清空",
				"conditions": {
					"array": {
						"contains": "含有",
						"equals": "等於",
						"empty": "空值",
						"not": "不等於",
						"notEmpty": "非空值",
						"without": "不含"
					},
					"date": {
						"after": "大於",
						"before": "小於",
						"between": "在其中",
						"empty": "為空",
						"equals": "等於",
						"not": "不為",
						"notBetween": "不在其中",
						"notEmpty": "不為空"
					},
					"number": {
						"between": "在其中",
						"empty": "為空",
						"equals": "等於",
						"gt": "大於",
						"gte": "大於等於",
						"lt": "小於",
						"lte": "小於等於",
						"not": "不為",
						"notBetween": "不在其中",
						"notEmpty": "不為空"
					},
					"string": {
						"contains": "含有",
						"empty": "為空",
						"endsWith": "字尾為",
						"equals": "等於",
						"not": "不為",
						"notEmpty": "不為空",
						"startsWith": "字首為",
						"notContains": "不含",
						"notStartsWith": "開頭不是",
						"notEndsWith": "結尾不是"
					}
				},
				"data": "欄位",
				"leftTitle": "群組條件",
				"logicAnd": "且",
				"logicOr": "或",
				"rightTitle": "取消群組",
				"title": {
					"_": "複合查詢 (%d)",
					"0": "複合查詢"
				},
				"value": "內容"
			},
			"editor": {
				"close": "關閉",
				"create": {
					"button": "新增",
					"title": "新增資料",
					"submit": "送出新增"
				},
				"remove": {
					"button": "刪除",
					"title": "刪除資料",
					"submit": "送出刪除",
					"confirm": {
						"_": "您確定要刪除您所選取的 %d 筆資料嗎？",
						"1": "您確定要刪除您所選取的 1 筆資料嗎？"
					}
				},
				"error": {
					"system": "系統發生錯誤(更多資訊)"
				},
				"edit": {
					"button": "修改",
					"title": "修改資料",
					"submit": "送出修改"
				},
				"multi": {
					"title": "多重值",
					"info": "您所選擇的多筆資料中，此欄位包含了不同的值。若您想要將它們都改為同一個值，可以在此輸入，要不然它們會保留各自原本的值。",
					"restore": "復原",
					"noMulti": "此輸入欄需單獨輸入，不容許多筆資料一起修改"
				}
			},
			"autoFill": {
				"cancel": "取消"
			},
			"buttons": {
				"copySuccess": {
					"_": "複製了 %d 筆資料",
					"1": "複製了 1 筆資料"
				},
				"copyTitle": "已經複製到剪貼簿",
				"excel": "Excel",
				"pdf": "PDF",
				"print": "列印",
				"copy": "複製",
				"colvis": "欄位顯示",
				"colvisRestore": "重置欄位顯示",
				"csv": "CSV",
				"pageLength": {
					"-1": "顯示全部",
					"_": "顯示 %d 筆"
				},
				"createState": "建立狀態",
				"removeAllStates": "移除所有狀態",
				"removeState": "移除",
				"renameState": "重新命名",
				"savedStates": "儲存狀態",
				"stateRestore": "狀態 %d",
				"updateState": "更新"
			},
			"searchPanes": {
				"collapse": {
					"_": "搜尋面版 (%d)",
					"0": "搜尋面版"
				},
				"emptyPanes": "沒搜尋面版",
				"loadMessage": "載入搜尋面版中...",
				"clearMessage": "清空",
				"count": "{total}",
				"countFiltered": "{shown} ({total})",
				"title": "過濾條件 - %d",
				"showMessage": "顯示全部",
				"collapseMessage": "摺疊全部"
			},
			"stateRestore": {
				"emptyError": "名稱不能空白。",
				"creationModal": {
					"button": "建立",
					"columns": {
						"search": "欄位搜尋",
						"visible": "欄位顯示"
					},
					"name": "名稱：",
					"order": "排序",
					"paging": "分頁",
					"scroller": "卷軸位置",
					"search": "搜尋",
					"searchBuilder": "複合查詢",
					"select": "選擇",
					"title": "建立新狀態",
					"toggleLabel": "包含："
				},
				"duplicateError": "此狀態名稱已經存在。",
				"emptyStates": "名稱不可空白。",
				"removeConfirm": "確定要移除 %s 嗎？",
				"removeError": "移除狀態失敗。",
				"removeJoiner": "和",
				"removeSubmit": "移除",
				"removeTitle": "移除狀態",
				"renameButton": "重新命名",
				"renameLabel": "%s 的新名稱：",
				"renameTitle": "重新命名狀態"
			},
			"select": {
				"columns": {
					"_": "選擇了 %d 欄資料",
					"1": "選擇了 1 欄資料"
				},
				"rows": {
					"1": "選擇了 1 筆資料",
					"_": "選擇了 %d 筆資料"
				},
				"cells": {
					"1": "選擇了 1 格資料",
					"_": "選擇了 %d 格資料"
				}
			},
			"zeroRecords": "沒有符合的資料",
			"aria": {
				"sortAscending": "：升冪排列",
				"sortDescending": "：降冪排列"
			},
			"info": "顯示第 _START_ 至 _END_ 筆資料，共 _TOTAL_ 筆",
			"infoEmpty": "顯示第 0 至 0 筆資料，共 0 筆",
			"infoFiltered": "(從 _MAX_ 筆結果中過濾)",
			"infoThousands": ",",
			"lengthMenu": "顯示 _MENU_ 筆資料",
			"search": "搜尋：",
			"searchPlaceholder": "請輸入關鍵字",
			"thousands": ","
		} 
		
		
	});
	
	try{
		var row = groupData["table2"]["row"];
		for(i in row){
			
			var rowData = [["",""].concat(row[i]).concat([""])];
			
			console.log(groupData);
			console.log(rowData);
			$("#table2").DataTable().rows.add(rowData).draw();
		}
	}catch{
		groupData["table2"]={};
		groupData["table2"]["row"]=[];
		groupData["table2"]["childRow"]=[];
		console.log(groupData);
		}
}

function saveToLS(newGroupData){
	localStorage.setItem(groupName,JSON.stringify(newGroupData));
	console.log(localStorage);
}

//JSON格式: 物件用大括號 陣列用小括號



$(document).ready(function(){
	
	
	$("#billTitle").text(groupName);
	
	var groupData = JSON.parse(localStorage.getItem($("#billTitle").text()));
	
	createTable1(groupData);
	createTable2(groupData);
	$("th.details-control").removeClass("details-control");
	
	var validNameForm = $("#nameForm").validate({
            rules: {
                NAME: {required: true},
                            
            },
			messages: {
                NAME: "此欄位不可空白",
			}
    });
	
	$("#addName").on("click",function(){
		var newName = $("#newName").val();
		if($("#nameForm").valid()){
			var data = [["","",newName]];
			$("#table1").DataTable().rows.add(data).draw();
			var len = groupData["table1"]["name"].length;
			groupData["table1"]["name"][len]=newName;
			
			console.log(groupData);
			saveToLS(groupData);
			$("#newName").val("");
			return false;
		}
	})
	
	
	var validEditNameForm = $("#editNameForm").validate({
            rules: {
                NAME: {required: true},
                            
            },
			messages: {
                NAME: "此欄位不可空白",
			}
    });
	
	
	$("body").on('click','.editNameButt',function(){
		
		$('#editNameModal input').val("");
		
		console.log($(this).parent().parent().next().next());
		td = $(this).parent().parent().next().next();
		$("body").on('click','#editNameCom',function(){
			if($("#editNameForm").valid()){
				
				//修改name的資料
				var name = groupData["table1"]["name"];
				for(i in name){
					if(name[i] == String(td.text())){
						name[i] = String($('#editNameModal input').val());
					}
				}
				
				//修改row的資料
				$('#table2 td:contains('+td.text()+')').each(function(){
					//console.log(td.text());
					$(this).html(String($('#editNameModal input').val()));
					
					var tr = $(this).closest('tr');
					var row = $("#table2").DataTable().row(tr);
					var index = row.index();
					console.log(index);
					
					try{
						groupData["table2"]["row"][index][2] = String($('#editNameModal input').val());
					}catch{;}
					
				});
				
				//修改childRow的資料
				var childRow = groupData["table2"]["childRow"];
				for(i=0;i<childRow.length;i++){
					for(j=0;j<childRow[i].length;j++){
						if(childRow[i][j][0]==String(td.text())) childRow[i][j][0] = String($('#editNameModal input').val());
					}
				}
				
				//修改頁面上顯示的資料
				td.html(String($('#editNameModal input').val()));
				
				saveToLS(groupData);
				
				$('#editNameModal').modal('hide');
				return false;
			}
			
		});
		
		
	});
	
 
    $('body').on('click','.delNameButt',function () {
		var result = confirm("刪除名字可能導致項目清單的名字不一致，請問您確定要刪除嗎?");
		if(result){
			var tr = $(this).closest('tr');
			var row = $("#table1").DataTable().row(tr);
			var index = row.index();
			
			var name = groupData['table1']['name'];
			
			name.splice(index,1);
			
			saveToLS(groupData);
			$('#table1').DataTable().row(tr).remove().draw(false);
		
		}
    });
	
	var validMethodForm2 = $("#methodForm2").validate();
	
	jQuery.extend(jQuery.validator.messages, {
		required: "此欄位不可空白",
		min: "金額必須大於0",
		number: "請輸入數字",
	});
	
	
	$('body').on('click','#addItem1, .editItemButt',function(){
		validItemForm1.resetForm();
		$('select').removeClass('error');
		
		
		
		$('#payer').empty().append('<option hidden>付款人</option>');
		$('#methodForm2').empty().append('<div class="row form-text"><h6>分帳人</h6></div> <div class="row "><div class="input-group input-group-sm mb-3"><div class="input-group-text"><input class="form-check-input mt-0" type="checkbox" id="selectAll" checked><label class="form-check-label" for="selectAll">全選</label></div></div></div>');
		var name = groupData["table1"]["name"];
		for(i in name){
			$('#payer').append('<option value="1">'+name[i]+'</option>');
			$('#methodForm2').append('<div class="row "><div class="input-group input-group-sm mb-3"><div class="input-group-text"><input class="form-check-input mt-0" type="checkbox" id="'
									+name[i]+'" checked><label class="form-check-label" for="'+name[i]+'">'+name[i]+'</label></div><input type="number" class="form-control" name="AMOUNT'+i+'" placeholder="應付金額" required> </div></div>');
		}
		$("input:checkbox").parent(".input-group-text").next().hide();
		$("#average").prop('checked', true);
		
		$('#methodForm2 input[type=number]').each(function(){
			$(this).rules("add",{ number:true, min:1,});
		});
		
		
		if($(this).hasClass('editItemButt')){
			$('#addItemModal1 h3').html("更改項目");
			$('#addItemModal2 h3').html("更改項目");
			$('#addItem2').html("確定");
			
			var itemData = groupData['table2']['row'];
			//console.log($(this).parent().next().next());
			$("#itemName").val(String($(this).parent().parent().next().next().text()));
			$("#itemAmount").val(String($(this).parent().parent().next().next().next().text()));
			$('#payer option:contains('+$(this).parent().parent().next().next().next().next().text()+')').attr('selected','selected');
			
			var tr = $(this).closest('tr');
			var row = $("#table2").DataTable().row(tr);
			var index = row.index();
			localStorage.setItem("indexNow",index);
			
			if(String($(this).parent().parent().next().next().next().next().next().text())=='均分'){
				$("input[name='method']")[0].checked=true;
				$("input[id='selectAll']").click();
				for(i in groupData["table2"]["childRow"][index]){
					$("input[id='"+groupData["table2"]["childRow"][index][i][0]+"']").click();
				}
			} 
			else{
				$("#custom").prop('checked', true);
				$("#selectAll").click();
				
				for(i in groupData["table2"]["childRow"][index]){
					$("input[id='"+groupData["table2"]["childRow"][index][i][0]+"']").click();
					$("input[id='"+groupData["table2"]["childRow"][index][i][0]+"']").parent().next().val(groupData["table2"]["childRow"][index][i][1]);
				}	
			}
		}else{
			$('#addItemModal1 h3').html("新增項目");
			$('#addItemModal2 h3').html("新增項目");
			$('#addItem2').html("新增");
			$("#itemName").val("");
			$("#itemAmount").val("");
			
		}
		
	});
	
	$('body').on('click','.delItemButt',function(){
		
		var tr = $(this).closest('tr');
		var row = $("#table2").DataTable().row(tr);
		var index = row.index();
		
		var row = groupData["table2"]["row"];
		row.splice(index,1);
		
		var childRow = groupData["table2"]["childRow"];
		childRow.splice(index,1);
		
		saveToLS(groupData);
		
		$('#table2').DataTable().row(tr).remove().draw(false);
	});
	
	
	$('body').on('click','#selectAll',function(){
		if($("input:checkbox").prop("checked")){
			$("input:checkbox").prop("checked", true);
			if($('input:radio:checked').val()=="custom"){
				$("input:checkbox").parent(".input-group-text").next().show();
			}
			
		}else{
			$("input:checkbox").prop("checked", false);
			$("input:checkbox").parent(".input-group-text").next().hide();
		}
		
	});
	
	var validItemForm1 = $("#addItemForm1").validate({
            rules: {
                NAME: {required: true},
                AMOUNT: {required: true, number: true, min: 1,},
				SELECT: { min: 1 },
            },
			messages: {
                NAME: "此欄位不可空白",
				AMOUNT:{required: "此欄位不可空白", number: "請輸入數字", min: "金額必須大於0"},
				SELECT: { min: "必選一個選項" },
			}
    });
	
	
	$('#nextButt').on('click',function(){
		if($("#addItemForm1").valid()){
			$("#addItemModal1").modal("hide");
			$("#addItemModal2").modal("show");
			//validMethodForm2.resetForm();
			return false;
		}
	});
	
	$('#beforeButt').on('click',function(){
		$("#addItemModal2").modal("hide");
	});
	
	$("body").on("click",'input:checkbox',function(){
		//console.log($(this).parent(".input-group-text").next());
		if($(this).prop("checked")){
			if($('input:radio:checked').val()=="custom"){
				$(this).parent(".input-group-text").next().show();
			}
			
		}else{
			$(this).parent(".input-group-text").next().hide();
		}
		
	});
	
	$("body").on('change','input:radio',function(){
		//console.log($(this).val());
		if($(this).val()=="average"){
			$("input:checkbox").parent(".input-group-text").next().hide();
		}else{
			$("input:checkbox:checked").parent(".input-group-text").next().show();
		}
	});
	
	
	
	
	$("body").on('click','#addItem2',function(){
		console.log($('#methodForm2').valid());
		
		
		if($('#methodForm2').valid()){
			var amount = $('#itemAmount').val();
			var customAmount = $("input[type=number]:visible");
			console.log($("input[type=number]:visible"));
			total = 0;
			for(i in customAmount){
				if(customAmount[i].value!=undefined){
					//console.log(customAmount[i].value);
					total += +customAmount[i].value;
				}
			}
			//console.log(amount);
			//console.log(total);
			//console.log(total == amount);
			if(total == amount){
				var itemName = $("#itemName").val();
				var itemAmount = $("#itemAmount").val();
				var payer = $("#payer option:selected").text();
				var method = $('label[for="'+$('input:radio:checked').val()+'"]').text();
				var rowData = [["","",itemName, itemAmount, payer, method,""]];
				
				var checkList = $("input:checkbox:checked:not('#selectAll')");
				var checkInput = $("input[placeholder='應付金額']:visible");
				
				if(String($("#addItemModal2 h3").text()) == '新增項目'){
					
					$("#table2").DataTable().rows.add(rowData).draw();
					var rowLen = groupData["table2"]["row"].length;
					groupData["table2"]["row"][rowLen] = [itemName, itemAmount, payer, method];	
					
					for(i=0;i<checkList.length;i++){
						if(method == "均分"){
							try{
								groupData["table2"]["childRow"][rowLen][i] = [checkList[i].id,$("#itemAmount").val()/checkList.length];
							}catch{
								groupData["table2"]["childRow"][rowLen]=[];
								groupData["table2"]["childRow"][rowLen][i] = [checkList[i].id,$("#itemAmount").val()/checkList.length];
							}
						}else{
							try{
								groupData["table2"]["childRow"][rowLen][i] = [checkList[i].id,checkInput[i].value];
							}catch{
								groupData["table2"]["childRow"][rowLen]=[];
								groupData["table2"]["childRow"][rowLen][i] = [checkList[i].id,checkInput[i].value];
							}
						}
					}
					
				}else{
					
					var index = localStorage.getItem("indexNow");
					$("#table2").DataTable().row(index).data(rowData[0]).draw();
					groupData["table2"]["row"][index] = [itemName, itemAmount, payer, method];
					
					groupData["table2"]["childRow"][index] = [];
					for(i=0;i<checkList.length;i++){
						if(method == "均分"){
							try{
								groupData["table2"]["childRow"][index][i] = [checkList[i].id,$("#itemAmount").val()/checkList.length];
							}catch{
								groupData["table2"]["childRow"][index]=[];
								groupData["table2"]["childRow"][index][i] = [checkList[i].id,$("#itemAmount").val()/checkList.length];
							}
						}else{
							try{
								groupData["table2"]["childRow"][index][i] = [checkList[i].id,checkInput[i].value];
							}catch{
								groupData["table2"]["childRow"][index]=[];
								groupData["table2"]["childRow"][index][i] = [checkList[i].id,checkInput[i].value];
							}
						}
					}
					
					
				}
				
				console.log(groupData);
				saveToLS(groupData);
				
				
				$("#addItemModal2").modal("hide");
				return false;
			}else{
				$('#methodForm2').append("<div class='error'>自訂金額總和必須等於該項目金額</div>");
			}
			
		}
		
	});
	

	$('body').on('click', 'td.details-control', function() {
        var tr = $(this).closest('tr');
        var row = $("#table2").DataTable().row(tr);
		var index = row.index();
		console.log(index);
        if (row.child.isShown()) {
          row.child.hide();
          tr.removeClass('shown');
        } else {
			//創建子table
			row.child($('<table id="child_details'+index+'" width="100%"><thead><tr><th>姓名</th><th>金額</th></tr></thead></table>')).show();
			$('#child_details'+ index).DataTable({
				scrollX:'30px',
				scrollY: '100px',
				paginate: false,
				paging: false,
				info:false,
			"language":{
			"processing": "處理中...",
			"loadingRecords": "載入中...",
			"paginate": {
				"first": "第一頁",
				"previous": "上一頁",
				"next": "下一頁",
				"last": "最後一頁"
			},
			"emptyTable": "目前沒有資料",
			"datetime": {
				"previous": "上一頁",
				"next": "下一頁",
				"hours": "時",
				"minutes": "分",
				"seconds": "秒",
				"amPm": [
					"上午",
					"下午"
				],
				"unknown": "未知",
				"weekdays": [
					"週日",
					"週一",
					"週二",
					"週三",
					"週四",
					"週五",
					"週六"
				],
				"months": [
					"一月",
					"二月",
					"三月",
					"四月",
					"五月",
					"六月",
					"七月",
					"八月",
					"九月",
					"十月",
					"十一月",
					"十二月"
				]
			},
			"searchBuilder": {
				"add": "新增條件",
				"condition": "條件",
				"deleteTitle": "刪除過濾條件",
				"button": {
					"_": "複合查詢 (%d)",
					"0": "複合查詢"
				},
				"clearAll": "清空",
				"conditions": {
					"array": {
						"contains": "含有",
						"equals": "等於",
						"empty": "空值",
						"not": "不等於",
						"notEmpty": "非空值",
						"without": "不含"
					},
					"date": {
						"after": "大於",
						"before": "小於",
						"between": "在其中",
						"empty": "為空",
						"equals": "等於",
						"not": "不為",
						"notBetween": "不在其中",
						"notEmpty": "不為空"
					},
					"number": {
						"between": "在其中",
						"empty": "為空",
						"equals": "等於",
						"gt": "大於",
						"gte": "大於等於",
						"lt": "小於",
						"lte": "小於等於",
						"not": "不為",
						"notBetween": "不在其中",
						"notEmpty": "不為空"
					},
					"string": {
						"contains": "含有",
						"empty": "為空",
						"endsWith": "字尾為",
						"equals": "等於",
						"not": "不為",
						"notEmpty": "不為空",
						"startsWith": "字首為",
						"notContains": "不含",
						"notStartsWith": "開頭不是",
						"notEndsWith": "結尾不是"
					}
				},
				"data": "欄位",
				"leftTitle": "群組條件",
				"logicAnd": "且",
				"logicOr": "或",
				"rightTitle": "取消群組",
				"title": {
					"_": "複合查詢 (%d)",
					"0": "複合查詢"
				},
				"value": "內容"
			},
			"editor": {
				"close": "關閉",
				"create": {
					"button": "新增",
					"title": "新增資料",
					"submit": "送出新增"
				},
				"remove": {
					"button": "刪除",
					"title": "刪除資料",
					"submit": "送出刪除",
					"confirm": {
						"_": "您確定要刪除您所選取的 %d 筆資料嗎？",
						"1": "您確定要刪除您所選取的 1 筆資料嗎？"
					}
				},
				"error": {
					"system": "系統發生錯誤(更多資訊)"
				},
				"edit": {
					"button": "修改",
					"title": "修改資料",
					"submit": "送出修改"
				},
				"multi": {
					"title": "多重值",
					"info": "您所選擇的多筆資料中，此欄位包含了不同的值。若您想要將它們都改為同一個值，可以在此輸入，要不然它們會保留各自原本的值。",
					"restore": "復原",
					"noMulti": "此輸入欄需單獨輸入，不容許多筆資料一起修改"
				}
			},
			"autoFill": {
				"cancel": "取消"
			},
			"buttons": {
				"copySuccess": {
					"_": "複製了 %d 筆資料",
					"1": "複製了 1 筆資料"
				},
				"copyTitle": "已經複製到剪貼簿",
				"excel": "Excel",
				"pdf": "PDF",
				"print": "列印",
				"copy": "複製",
				"colvis": "欄位顯示",
				"colvisRestore": "重置欄位顯示",
				"csv": "CSV",
				"pageLength": {
					"-1": "顯示全部",
					"_": "顯示 %d 筆"
				},
				"createState": "建立狀態",
				"removeAllStates": "移除所有狀態",
				"removeState": "移除",
				"renameState": "重新命名",
				"savedStates": "儲存狀態",
				"stateRestore": "狀態 %d",
				"updateState": "更新"
			},
			"searchPanes": {
				"collapse": {
					"_": "搜尋面版 (%d)",
					"0": "搜尋面版"
				},
				"emptyPanes": "沒搜尋面版",
				"loadMessage": "載入搜尋面版中...",
				"clearMessage": "清空",
				"count": "{total}",
				"countFiltered": "{shown} ({total})",
				"title": "過濾條件 - %d",
				"showMessage": "顯示全部",
				"collapseMessage": "摺疊全部"
			},
			"stateRestore": {
				"emptyError": "名稱不能空白。",
				"creationModal": {
					"button": "建立",
					"columns": {
						"search": "欄位搜尋",
						"visible": "欄位顯示"
					},
					"name": "名稱：",
					"order": "排序",
					"paging": "分頁",
					"scroller": "卷軸位置",
					"search": "搜尋",
					"searchBuilder": "複合查詢",
					"select": "選擇",
					"title": "建立新狀態",
					"toggleLabel": "包含："
				},
				"duplicateError": "此狀態名稱已經存在。",
				"emptyStates": "名稱不可空白。",
				"removeConfirm": "確定要移除 %s 嗎？",
				"removeError": "移除狀態失敗。",
				"removeJoiner": "和",
				"removeSubmit": "移除",
				"removeTitle": "移除狀態",
				"renameButton": "重新命名",
				"renameLabel": "%s 的新名稱：",
				"renameTitle": "重新命名狀態"
			},
			"select": {
				"columns": {
					"_": "選擇了 %d 欄資料",
					"1": "選擇了 1 欄資料"
				},
				"rows": {
					"1": "選擇了 1 筆資料",
					"_": "選擇了 %d 筆資料"
				},
				"cells": {
					"1": "選擇了 1 格資料",
					"_": "選擇了 %d 格資料"
				}
			},
			"zeroRecords": "沒有符合的資料",
			"aria": {
				"sortAscending": "：升冪排列",
				"sortDescending": "：降冪排列"
			},
			"info": "顯示第 _START_ 至 _END_ 筆資料，共 _TOTAL_ 筆",
			"infoEmpty": "顯示第 0 至 0 筆資料，共 0 筆",
			"infoFiltered": "(從 _MAX_ 筆結果中過濾)",
			"infoThousands": ",",
			"lengthMenu": "顯示 _MENU_ 筆資料",
			"search": "搜尋：",
			"searchPlaceholder": "請輸入關鍵字",
			"thousands": ","
		} 
			});
			
			//把資料加入子table中
			var row = groupData["table2"]["row"];
			var childRow = groupData["table2"]["childRow"];
			for(i in row){
				for(j in childRow[i]){
				var childRowData = [childRow[i][j]];
				console.log(childRowData);
				$("#child_details"+i).DataTable().rows.add(childRowData).draw();
				}
			}
			
			tr.addClass('shown');
			
			//$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
			
        }
      });
	
	$('body').on('click', 'button[data-bs-target="#menu3"]', function(){
		
		if(DataTable.isDataTable('#table3')){
			$('#table3').DataTable().destroy();
			$('#table3 thead tr').empty();
			$('#table3 tbody').empty();
		}
		
		groupData["table3"] = {};
		groupData["table3"]["total"] = [];
		
		$('#table3 thead tr').append('<th>項目</th>');
		for(i in groupData["table1"]["name"]){
			groupData["table3"]["total"][i] = [];
			groupData["table3"]["total"][i] = [groupData["table1"]["name"][i],0];
			$('#table3 thead tr').append( '<th>' + groupData["table1"]["name"][i] + '</th>');
		}
		
		$('#table3').DataTable({
			ordering:false,
			"responsive":true,
			"language":{
					"processing": "處理中...",
					"loadingRecords": "載入中...",
					"paginate": {
						"first": "第一頁",
						"previous": "上一頁",
						"next": "下一頁",
						"last": "最後一頁"
					},
					"emptyTable": "目前沒有資料",
					"datetime": {
						"previous": "上一頁",
						"next": "下一頁",
						"hours": "時",
						"minutes": "分",
						"seconds": "秒",
						"amPm": [
							"上午",
							"下午"
						],
						"unknown": "未知",
						"weekdays": [
							"週日",
							"週一",
							"週二",
							"週三",
							"週四",
							"週五",
							"週六"
						],
						"months": [
							"一月",
							"二月",
							"三月",
							"四月",
							"五月",
							"六月",
							"七月",
							"八月",
							"九月",
							"十月",
							"十一月",
							"十二月"
						]
					},
					"searchBuilder": {
						"add": "新增條件",
						"condition": "條件",
						"deleteTitle": "刪除過濾條件",
						"button": {
							"_": "複合查詢 (%d)",
							"0": "複合查詢"
						},
						"clearAll": "清空",
						"conditions": {
							"array": {
								"contains": "含有",
								"equals": "等於",
								"empty": "空值",
								"not": "不等於",
								"notEmpty": "非空值",
								"without": "不含"
							},
							"date": {
								"after": "大於",
								"before": "小於",
								"between": "在其中",
								"empty": "為空",
								"equals": "等於",
								"not": "不為",
								"notBetween": "不在其中",
								"notEmpty": "不為空"
							},
							"number": {
								"between": "在其中",
								"empty": "為空",
								"equals": "等於",
								"gt": "大於",
								"gte": "大於等於",
								"lt": "小於",
								"lte": "小於等於",
								"not": "不為",
								"notBetween": "不在其中",
								"notEmpty": "不為空"
							},
							"string": {
								"contains": "含有",
								"empty": "為空",
								"endsWith": "字尾為",
								"equals": "等於",
								"not": "不為",
								"notEmpty": "不為空",
								"startsWith": "字首為",
								"notContains": "不含",
								"notStartsWith": "開頭不是",
								"notEndsWith": "結尾不是"
							}
						},
						"data": "欄位",
						"leftTitle": "群組條件",
						"logicAnd": "且",
						"logicOr": "或",
						"rightTitle": "取消群組",
						"title": {
							"_": "複合查詢 (%d)",
							"0": "複合查詢"
						},
						"value": "內容"
					},
					"editor": {
						"close": "關閉",
						"create": {
							"button": "新增",
							"title": "新增資料",
							"submit": "送出新增"
						},
						"remove": {
							"button": "刪除",
							"title": "刪除資料",
							"submit": "送出刪除",
							"confirm": {
								"_": "您確定要刪除您所選取的 %d 筆資料嗎？",
								"1": "您確定要刪除您所選取的 1 筆資料嗎？"
							}
						},
						"error": {
							"system": "系統發生錯誤(更多資訊)"
						},
						"edit": {
							"button": "修改",
							"title": "修改資料",
							"submit": "送出修改"
						},
						"multi": {
							"title": "多重值",
							"info": "您所選擇的多筆資料中，此欄位包含了不同的值。若您想要將它們都改為同一個值，可以在此輸入，要不然它們會保留各自原本的值。",
							"restore": "復原",
							"noMulti": "此輸入欄需單獨輸入，不容許多筆資料一起修改"
						}
					},
					"autoFill": {
						"cancel": "取消"
					},
					"buttons": {
						"copySuccess": {
							"_": "複製了 %d 筆資料",
							"1": "複製了 1 筆資料"
						},
						"copyTitle": "已經複製到剪貼簿",
						"excel": "Excel",
						"pdf": "PDF",
						"print": "列印",
						"copy": "複製",
						"colvis": "欄位顯示",
						"colvisRestore": "重置欄位顯示",
						"csv": "CSV",
						"pageLength": {
							"-1": "顯示全部",
							"_": "顯示 %d 筆"
						},
						"createState": "建立狀態",
						"removeAllStates": "移除所有狀態",
						"removeState": "移除",
						"renameState": "重新命名",
						"savedStates": "儲存狀態",
						"stateRestore": "狀態 %d",
						"updateState": "更新"
					},
					"searchPanes": {
						"collapse": {
							"_": "搜尋面版 (%d)",
							"0": "搜尋面版"
						},
						"emptyPanes": "沒搜尋面版",
						"loadMessage": "載入搜尋面版中...",
						"clearMessage": "清空",
						"count": "{total}",
						"countFiltered": "{shown} ({total})",
						"title": "過濾條件 - %d",
						"showMessage": "顯示全部",
						"collapseMessage": "摺疊全部"
					},
					"stateRestore": {
						"emptyError": "名稱不能空白。",
						"creationModal": {
							"button": "建立",
							"columns": {
								"search": "欄位搜尋",
								"visible": "欄位顯示"
							},
							"name": "名稱：",
							"order": "排序",
							"paging": "分頁",
							"scroller": "卷軸位置",
							"search": "搜尋",
							"searchBuilder": "複合查詢",
							"select": "選擇",
							"title": "建立新狀態",
							"toggleLabel": "包含："
						},
						"duplicateError": "此狀態名稱已經存在。",
						"emptyStates": "名稱不可空白。",
						"removeConfirm": "確定要移除 %s 嗎？",
						"removeError": "移除狀態失敗。",
						"removeJoiner": "和",
						"removeSubmit": "移除",
						"removeTitle": "移除狀態",
						"renameButton": "重新命名",
						"renameLabel": "%s 的新名稱：",
						"renameTitle": "重新命名狀態"
					},
					"select": {
						"columns": {
							"_": "選擇了 %d 欄資料",
							"1": "選擇了 1 欄資料"
						},
						"rows": {
							"1": "選擇了 1 筆資料",
							"_": "選擇了 %d 筆資料"
						},
						"cells": {
							"1": "選擇了 1 格資料",
							"_": "選擇了 %d 格資料"
						}
					},
					"zeroRecords": "沒有符合的資料",
					"aria": {
						"sortAscending": "：升冪排列",
						"sortDescending": "：降冪排列"
					},
					"info": "顯示第 _START_ 至 _END_ 筆資料，共 _TOTAL_ 筆",
					"infoEmpty": "顯示第 0 至 0 筆資料，共 0 筆",
					"infoFiltered": "(從 _MAX_ 筆結果中過濾)",
					"infoThousands": ",",
					"lengthMenu": "顯示 _MENU_ 筆資料",
					"search": "搜尋：",
					"searchPlaceholder": "請輸入關鍵字",
					"thousands": ","
				} 
					
		});
		
		for(i in groupData["table2"]["row"]){
			rowData = [groupData["table2"]["row"][i][0]];
			for(j in groupData["table1"]["name"]){
				rowData=rowData.concat(["0"]);
			}
			console.log(rowData);
			$("#table3").DataTable().rows.add([rowData]).draw();
		}

		for(i in groupData["table2"]["row"]){
			td = $('tbody tr:contains('+groupData["table2"]["row"][i][0]+') td:nth-child(2)');
			td = td[1];
			
			for(j in groupData["table1"]["name"]){
				if(groupData["table2"]["row"][i][2] == groupData["table1"]["name"][j]){
					groupData["table3"]["total"][j][1] += +groupData["table2"]["row"][i][1];
					console.log(groupData["table3"]["total"][j][1]);
					td.innerHTML = groupData["table2"]["row"][i][1];
				}else td=td.nextSibling;
			}
			
			for(k in groupData["table2"]["childRow"][i]){
				td = $('tbody tr:contains('+groupData["table2"]["row"][i][0]+') td:nth-child(2)');
				td = td[1];
				for(j in groupData["table1"]["name"]){
					if(groupData["table2"]["childRow"][i][k][0] == groupData["table1"]["name"][j]){
						groupData["table3"]["total"][j][1] += -groupData["table2"]["childRow"][i][k][1];
						td.innerHTML += -groupData["table2"]["childRow"][i][k][1];
						td.innerHTML = eval(td.innerHTML);
					}else td=td.nextSibling;
				}
				
			}
		}
		
		rowData = ["總共"];
		for(j in groupData["table1"]["name"]){
			rowData=rowData.concat([""]);
		}
		$('#table3').DataTable().rows.add([rowData]).draw();
		row = $('#table3 td:contains(總共)');
		row.html('<b>總共</b>');
		for(j in groupData["table1"]["name"]){
			row = row.next();
			row.html('<b>'+groupData["table3"]["total"][j][1]+'</b>');
		}
		saveToLS(groupData);
		
	});
	

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	    return new bootstrap.Tooltip(tooltipTriggerEl);
	  
	});
});

