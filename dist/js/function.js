function makeTips(){
    alert("功能开发中，敬请期待");
}
/* 
获取URL地址参数
name:参数名
url:获取参数的url
*/
function getQueryString(url,name) {
	alert(url);
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = url.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
/*收缩展开数据面板
obj：this*/
function hidebox(obj){
	if($(obj).html()=='<i class="fa fa-minus"></i>'){
		$(obj).html('<i class="fa fa-plus" aria-hidden="true"></i>');
	}else{
		$(obj).html('<i class="fa fa-minus"></i>');
	}
	$(obj).parent().parent().parent().find(".box-body").animate({height: 'toggle'}, "normal");
}
/*员工在职状态*/
function returnEmpStatus(n){
    var empStatus = '';
    if(n!=null){
        if(n=="1"){
            empStatus = "正常离职";
        }else if(n=="2"){
            empStatus = "正式员工";
        }
        else if(n=="3"){
            empStatus = "试用期";
        }else if(n=="4"){
            empStatus = "辞退";
        }else if(n=="5"){
            empStatus = "自离";
        }else if(n=="6"){
            empStatus = "劝退";
        }else if(n=="7"){
            empStatus = "开除";
        }
    }else{
        empStatus = '待入职';
    }
    
    return empStatus;
}
//员工层级转换
function returnEmpType(n){
    var empType = '';
    if(n!=null){
        if(n=="1"){
            empType = "管理层";
        }else if(n=="0"){
            empType = "保安员";
        }
    }else{
        empType = '-';
    }
    
    return empType;
}
//员工保险状态
function returnInsuranceType(n){
    var insuranceType = '';
    if(n!=null){
        if(n.indexOf("1").toString()!="-1"){
            insuranceType = insuranceType + "【养老保险】";
        }
        if(n.indexOf("2").toString()!="-1"){
            insuranceType = insuranceType + "【医疗保险】";
        }
        if(n.indexOf("3").toString()!="-1"){
            insuranceType = insuranceType + "【失业保险】";
        }
        if(n.indexOf("4").toString()!="-1"){
            insuranceType = insuranceType + "【工伤保险】";
        }
        if(n.indexOf("5").toString()!="-1"){
            insuranceType = insuranceType + "【生育保险】";
        }
        if(n.indexOf("6").toString()!="-1"){
            insuranceType = insuranceType + "【商业保险】";
        }
    }else{
        insuranceType = '-';
    }
    
    return insuranceType;
}
//审核状态
function returnAudit(n){
    var audit = "";
    if(n=="0"){
        audit = "通过"
    }else if(n=="1"){
        audit = "不通过";
    }else if(n=="2"){
        audit="待审核";
    }
    return audit;
}
//将时间戳转换为日期
function timeToDate(data) {
    var d = new Date(data*1000);//时间戳记得乘以1000再进行处理
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}
//封存状态转换
function fileStorageStuts(n){
    var storage="";
    if(n=="0" || n==null){
        storage = "<font color='#f00'>待封存</font>"
    }else if(n=="1"){
        storage = "<font color='#666'>已封存</font>"
    }
    return storage;
}
//培训类型转换
function trainType(n){
    var ttp = "";
    if(n=="0"){
        ttp = "岗前培训";
    }else if(n=="1"){
        ttp = "在岗培训";
    }else if(n=="3"){
        ttp = "上岗培训";
    }
    return ttp;
}
//培训内容转换
function trainContent(n){
    var tct = "";
    if(n!=null){
        if(n.indexOf("1").toString()!="-1"){
            tct = tct + "【岗位职责】"
        }
        if(n.indexOf("2").toString()!="-1"){
            tct = tct + "【消防培训】"
        }
        if(n.indexOf("3").toString()!="-1"){
            tct = tct + "【仪容仪表】"
        }
        if(n.indexOf("4").toString()!="-1"){
            tct = tct + "【其他】"
        }
    }
    return tct;
}
//培训审核状态转换
function trainStatus(n){
    var tss = "";
    if(n=="0"){
        tss = '<font color="#999">待审核</font>';
    }else if(n=="1"){
        tss = '<font color="#00a8ff">审核中</font>';
    }else if(n=="2"){
        tss = '<font color="#ff8f27">不通过</font>';
    }else if(n=="3"){
        tss = '<font color="red">通过</font>';
    }
    return tss;
}
//培训状态转换
function acceptanceStatus(n){
    var aps = "";
    if(n=="1"){
        aps = '<font color="#999">执行中</font>';
    }else if(n=="2"){
        aps = '<font color="#00a8ff">查验中</font>';
    }else if(n=="3"){
        aps = '<font color="#ff8f27">通过</font>';
    }else if(n=="4"){
        aps = '<font color="red">不通过</font>';
    }
    return aps;
}
//去掉null、值
function outNull(n){
    var r = '';
    if(n==null){
        if(isNaN(parseFloat(n))==true){
            r = '0';
        }else{
            r = '-';
        }
    }else{
        r=n;
    }
    return r;
}
//调用员工列表弹窗,获取弹窗数据
function getEmpList(type,idName,NameName){
    $(".modal-body").html("");//清空body中的数据
    
    var schempName = $("#schempName").val();
	var schphone = $("#schphone").val();
	var pageNo = $("#pageNo").val();
    if(schempName==undefined){
        schempName = "";
    }
    if(schphone==undefined){
        schphone = "";
    }
    if(pageNo==undefined){
        pageNo = "1";
    }
    
    $("#modal-default .modal-dialog").css("width","");
    $(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="col-xs-3"><input type="text" class="form-control" placeholder="姓名" name="schempName" id="schempName" value=""></div><div class="col-xs-5"><input type="text" class="form-control" placeholder="手机号" name="schphone" id="schphone" value=""></div><button type="button" class="btn btn-primary" onClick="searchList(this)" title="搜索"><i class="fa fa-search" aria-hidden="true"></i></button>');
    $(".modal-footer").html('<button type="button" class="btn btn-primary pull-left" id="closeModal" data-dismiss="modal">关闭</button><button type="button" class="btn btn-primary" onClick="checkEmp(this)">确定选择</button>');
    
	var url = depUrl + "/employee/creator/getEmployee";
	$.ajax({
		type: 'POST',
		url: url,
		data: {"empName":schempName,"phone":schphone,"pageNo":pageNo},
		dataType: "json",
		contentType:"application/x-www-form-urlencoded",
		headers:{accessToken:$.session.get('accessToken')},
		success: function(data){
			var code = data.code;
			var empHtml = "";
			if(code=="000000"){
				$.each(data.data.list,function(i,items){
                    if(type==0){
                        empHtml = empHtml + '<div style="height:40px; line-height:40px; width:100%; border-bottom:#f1f1f1 1px solid; overflow:hidden;"><div class="col-xs-3"><label><input type="checkbox" name="uid" value="'+items.id+'">'+items.empRealname+'</label></div><div class="col-xs-5">'+items.phone+'</div></div>';
                    }else{
                        empHtml = empHtml + '<div style="height:40px; line-height:40px; width:100%; border-bottom:#f1f1f1 1px solid; overflow:hidden;"><div class="col-xs-3"><label><input type="radio" name="uid" value="'+items.id+'">'+items.empRealname+'</label></div><div class="col-xs-5">'+items.phone+'</div></div>';
                    }
				});
				$(".modal-body").html(empHtml);
			}else{
				$(".modal-body").text("* 错误提示："+ data.msg +"！");
			}
			//分页显示
			$('#compact-pagination').pagination({
				pages: data.data.pages,
				cssStyle: 'compact-theme',
				displayedPages: 7,
				currentPage: pageNo
			});
		},
		error:function(data){
			$(".modal-body").text("* 错误提示："+ data.msg +"！");
			return false;
		}
	});
    $("#modal-default").attr("data-ip-id",idName);
    $("#modal-default").attr("data-ip-name",NameName);
	$("#modal-default").attr("data-id",type);
}
//选中员工列表当中的员工
function checkEmp(obj){
	var dataid = $("#modal-default").attr("data-id");
    var idName = $("#modal-default").attr("data-ip-id");
    var NameName = $("#modal-default").attr("data-ip-name");
    var fillInIdName = "" + idName + "_lb";
	$("input[name=uid]").each(function(){
		if(this.checked){
			if(dataid==0){
                $("#"+fillInIdName).append('<label class="checkbtn">'+$(this).parent().text()+'<input type="hidden" value="'+$(this).parent().text()+'" name="'+NameName+'" id="'+NameName+'"><input type="hidden" value="'+$(this).val()+'" name="'+idName+'" id="'+idName+'"><i class="fa fa-times-circle" aria-hidden="true" onClick="delEmp(this)"></i></label>');
			}else{
				$("#"+fillInIdName).html('<label class="checkbtn">'+$(this).parent().text()+'<input type="hidden" value="'+$(this).parent().text()+'" name="'+NameName+'" id="'+NameName+'"><input type="hidden" value="'+$(this).val()+'" name="'+idName+'" id="'+idName+'"><i class="fa fa-times-circle" aria-hidden="true" onClick="delEmp(this)"></i></label>')
			}
		}
	});
    $('#closeModal').trigger("click");
}
//删除选中的员工
function delEmp(obj){
	$(obj).parent().remove();
}

//将封装的数据填充到表单
function loadData(jsonStr){
	var obj = eval("("+jsonStr+")");
	var key,value,tagName,type,arr;
	for(x in obj){
		key = x;
		value = obj[x];
		
		$("[name='"+key+"'],[name='"+key+"[]']").each(function(){
			tagName = $(this)[0].tagName;
			type = $(this).attr('type');
			if(tagName=='INPUT'){
				if(type=='radio'){
					$(this).attr('checked',$(this).val()==value);
				}else if(type=='checkbox'){
					arr = value.split(',');
					for(var i =0;i<arr.length;i++){
						if($(this).val()==arr[i]){
							$(this).attr('checked',true);
							break;
						}
					}
				}else{
					$(this).val(value);
				}
			}else if(tagName=='SELECT' || tagName=='TEXTAREA'){
				$(this).val(value);
			}
			
		});
	}
}
//函数名：选中所有的checkbox
function selectAllCheckbox(idName){
	var ids = "";
    if($("#AllChk").is(':checked')==false){
        $("input[name='"+idName+"']").each(function(){
            $(this).prop("checked", false);
        });
    }else{
        $("input[name='"+idName+"']").each(function(){
             ids = ids + '{"'+idName+'":'+$(this).val()+'}'+ ",";
		     $(this).prop("checked",true);
        });
    }
	if(ids!=""){
		ids = ids.substr(0,ids.length-1);
	}
    ids = "["+ids+"]";
    if(ids=="[]"){
        ids="";
    }
	$("#numisDel").attr("data-id",ids);
}
//函数名：选中单条checkbox数据
function selectOneUid(obj){
	var ids = "";
    var idtemp = $(obj).val();
    var objstu = $(obj).is(':checked');
    var idName = $(obj).attr("name");
	$("input[name='"+idName+"']").each(function(){
        if($(this).parent().parent().parent().attr("data-smcat")==idtemp && objstu == true){
            $(this).prop("checked",true);
        }
        if($(this).parent().parent().parent().attr("data-smcat")==idtemp && objstu == false){
            $(this).prop("checked",false);
        }
		if($(this).is(':checked')==true){
			ids = ids + '{"'+idName+'":'+$(this).val()+'}'+ ",";
		}
	});
	if(ids!=""){
		ids = ids.substr(0,ids.length-1);
	}
    ids = "["+ids+"]";
    if(ids=="[]"){
        ids="";
    }
	$("#numisDel").attr("data-id",ids);
}
//采购审核状态转换
function purchareStutas(n){
    var pcs = '';
    if(n=="1"){
        pcs = '<font color="green">通过</font>';
    }else if(n=="2"){
        pcs = '<font color="red">不通过</font>';
    }else if(n=="3"){
        pcs = '<font color="#ff8f27">待审核</font>';
    }else if(n=="4"){
        pcs = '<font color="grey">审核中</font>';
    }else if(n==null){
        pcs = '<font color="#f1f1f1">解锁发起审核</font>';
    }
    return pcs;
}
//点击表格tr 选中该行事件
function checkTr(obj){
    if($(obj).find("input").prop("checked")==true){
        $(obj).find("input").prop("checked",false);
    }else{
        $(obj).find("input").prop("checked",true);
    }
}
//数据锁定
function lockData(url,backurl,ids){
    if(ids=="-1"){
        ids = $("#numisDel").attr("data-id");
    }
    if(confirm("确定要锁定/解锁?")){
        if(ids=="" || ids=="{}" || ids=="{'id':}"){
            alert("请选择要操作的记录");
            return false;
        }else{
            //ids = "["+JSON.stringify(ids)+"]";
            console.log(JSON.stringify(ids));
            $.ajax({
                type:"POST",
                url:url,
                data:JSON.stringify(ids),
                dataType: "json",
		        contentType:"application/json;charset=utf-8;",
                headers:{accessToken:$.session.get('accessToken')},
                success:function(data){
                    var code = data.code;
                    if(code=="000000"){
                        autoJumpURL(backurl);
                    }else if(code=="002003"){
                        alert("当前登录已失效,请重新登录");
                        $.session.clear();
                        $(location).attr('href', 'login.html');
                    }else{
                        $("#roleselect").text("* 错误提示："+ data.msg +"！");
                    }
                },
                error:function(data){
                    $(".box-footer error").text("* 错误提示："+ data.msg +"！");
                    return false;
                }
            });
        }
    }
}
//获取公司列表
function getCompanyList(obj){
    //初始化弹出框
    $(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="col-xs-3"><input type="text" class="form-control" placeholder="公司名称" name="companyName" id="companyName" value=""></div><button type="button" class="btn btn-primary" onClick="searchList(this)" title="搜索"><i class="fa fa-search" aria-hidden="true"></i></button>');
    $(".modal-footer").html('<button type="button" class="btn btn-primary pull-left" id="closeModal" data-dismiss="modal">关闭</button><button type="button" class="btn btn-primary" onClick="checkComp(this)">确定选择</button>');
    $(".modal-dialog").css("width","70%");
    
    var finame = $(obj).attr("fill-id-name");
    
    var url = depUrl + "/employee/securityCompany/get";
	var pageNo = $("#pageNo").val();
    var companyName = $("#companyName").val();
    $.ajax({
        type: 'POST',
		url: url,
		data: {"pageNo":pageNo,"companyName":companyName},
		dataType: "json",
		contentType:"application/x-www-form-urlencoded",
		headers:{accessToken:$.session.get('accessToken')},
        success:function(data){
            var editUrl = '';
            var param = '';
            var code = data.code;
            if(code=="000000"){
                var headHtml = '<table id="example" class="table table-bordered table-hover" fill-id-name="'+finame+'"><thead><tr><th width="8"></th><th>编号</th><th>公司名称</th><th>所在地</th><th>法人</th><th>联系人</th><th>联系电话</th></tr></thead><tbody>';
                var footHtml = '</tbody></table>';
                var listHtml = '';
                if(data.total=="0"){
                    listHtml = '<tr><td colspan="8"><font color="#999999">数据空空如也，喝一杯咖啡休息一下吧！</font></td></tr>';
                }else{
                    $.each(data.data.list,function(i,items){
                        listHtml = listHtml + '<tr onClick="checkTr(this)" style="cursor: pointer"><td><label><input type="radio" name="id" value="'+items.companyId+'"></label></td><td>'+items.companyNum+'</td><td>'+items.companyName+'</td><td>'+items.companyAddress+'</td><td>'+items.accountName+'</td><td>'+items.contactName+'</td><td>'+items.companyPhone+'</td></tr>';
                    });
                }
                $(".modal-body").html(headHtml+listHtml+footHtml);
            }else if(code=="002003"){
                $.session.clear();
				$(location).attr('href', 'login.html');
            }else{
               $(".modal-body").text("* 错误提示："+ data.msg +"！"); 
            }
            //分页显示
			$('#compact-pagination').pagination({
				pages: data.data.pages,
				cssStyle: 'compact-theme',
				displayedPages: 7,
				currentPage: pageNo
			});
        },
        error:function(data){
			alert(data.msg);
			$(".modal-body").text("* 错误提示：服务器请求出错！");
			return false;
		}
    });
}
//填充选中公司信息
function checkComp(obj){
    var fillIdName = $(".modal-body").find("table").attr("fill-id-name");
    $(".modal-body").find("input").each(function(){
        if($(this).prop("checked")==true){
            $("#"+fillIdName).text($(this).parents("tr").find("td").eq(2).text());
            $("#"+fillIdName).parent().find("input").eq(0).val($(this).parents("tr").find("td").eq(2).text());//第一个input为公司名称
            $("#"+fillIdName).parent().find("input").eq(1).val($(this).val());//第二个input为公司id
        }
    });
    $('#closeModal').trigger("click");
}
//删除选中的公司
function delCompanyName(obj){
    $(obj).text("");
    $(obj).parent().find("input").eq(0).val("");
    $(obj).parent().find("input").eq(1).val("");
}

//获取小区列表
function getProjectList(obj){
    //初始化弹出框
    $(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="col-xs-3"><input type="text" class="form-control" placeholder="小区名称" name="s_projectName" id="s_projectName" value=""></div><button type="button" class="btn btn-primary" onClick="searchList(this)" title="搜索"><i class="fa fa-search" aria-hidden="true"></i></button>');
    $(".modal-footer").html('<button type="button" class="btn btn-primary pull-left" id="closeModal" data-dismiss="modal">关闭</button><button type="button" class="btn btn-primary" onClick="checkProj(this)">确定选择</button>');
    $(".modal-dialog").css("width","70%");
    
    var finame = $(obj).attr("fill-id-name");
    var dmode = $(obj).attr("data-mode");
    
    var url = depUrl + "/employee/project/get";
	var pageNo = $("#pageNo").val();
    var projectName = $("#s_projectName").val();
    
    var jsonData = '{"pageNo":'+pageNo+',"projectName":"'+projectName+'"}'
    
    $.ajax({
        type: 'POST',
		url: url,
		data: jsonData,
		dataType: "json",
		contentType:"application/json;charset=utf-8",
		headers:{accessToken:$.session.get('accessToken')},
        success:function(data){
            var editUrl = '';
            var param = '';
            var code = data.code;
            if(code=="000000"){
                var headHtml = '<table id="example" class="table table-bordered table-hover" fill-id-name="'+finame+'" data-mode="'+dmode+'"><thead><tr><th width="8"></th><th>编号</th><th>项目名称</th><th>所属物业公司</th><th>联系人</th><th>联系电话</th></tr></thead><tbody>';
                var footHtml = '</tbody></table>';
                var listHtml = '';
                if(data.total=="0"){
                    listHtml = '<tr><td colspan="7"><font color="#999999">数据空空如也，喝一杯咖啡休息一下吧！</font></td></tr>';
                }else{
                    $.each(data.data.list,function(i,items){
                        if(dmode=="1"){
                            listHtml = listHtml + '<tr onClick="checkTr(this)" style="cursor: pointer"><td><label><input type="radio" name="id" value="'+items.id+'" onClick="selectOneUid(this)"></label></td><td>'+items.projectNum+'</td><td>'+items.projectName+'</td><td>'+items.companyName+'</td><td>'+items.contactName+'</td><td>'+items.contactPhone+'</td></tr>';
                        }else{
                            listHtml = listHtml + '<tr onClick="checkTr(this)" style="cursor: pointer"><td><label><input type="checkbox" name="id" value="'+items.id+'" onClick="selectOneUid(this)"></label></td><td>'+items.projectNum+'</td><td>'+items.projectName+'</td><td>'+items.companyName+'</td><td>'+items.contactName+'</td><td>'+items.contactPhone+'</td></tr>';
                        }
                        
                    });
                }
                $(".modal-body").html(headHtml+listHtml+footHtml);
            }else if(code=="002003"){
                $.session.clear();
				$(location).attr('href', 'login.html');
            }else{
               $(".modal-body").text("* 错误提示："+ data.msg +"！"); 
            }
            //分页显示
			$('#compact-pagination').pagination({
				pages: data.data.pages,
				cssStyle: 'compact-theme',
				displayedPages: 7,
				currentPage: pageNo
			});
        },
        error:function(data){
			alert(data.msg);
			$(".modal-body").text("* 错误提示：服务器请求出错！");
			return false;
		}
    });
}
//填充选中的小区
function checkProj(obj){
    var fillIdName = $(".modal-body").find("table").attr("fill-id-name");
    var dmode = $(".modal-body").find("table").attr("data-mode");
    $(".modal-body").find("input").each(function(){
        if($(this).prop("checked")==true){
            if(dmode=="1"){
                $("#"+fillIdName).html('<span style="cursor: pointer;" onclick="delProjectName(this)">'+$(this).parents("tr").find("td").eq(2).text()+'</span>');
                $("#"+fillIdName).parent().find("input").eq(0).val($(this).parents("tr").find("td").eq(2).text());//第一个input为公司名称
                $("#"+fillIdName).parent().find("input").eq(1).val($(this).val());//第二个input为公司id
            }else{
                $("#"+fillIdName).append('<label class="checkbtn" data-mode="'+dmode+'"  onclick="delProjectName(this)">'+$(this).parents("tr").find("td").eq(2).text()+'<input name="projectName" value="'+$(this).parents("tr").find("td").eq(2).text()+'" type="hidden"><input name="projectId" value="'+$(this).val()+'" type="hidden"><i class="fa fa-times-circle" aria-hidden="true"></i></label>');
            }
            
            
        }
    });
    $('#closeModal').trigger("click");
}
//删除选中小区
function delProjectName(obj){
    if($(obj).attr("data-mode")=="0"){
        $(obj).remove();
    }else{
        $(obj).text("");
        $(obj).parent().find("input").eq(0).val("");
        $(obj).parent().find("input").eq(1).val("");
    }
}
//工资发放状态
function salaryStatus(n){
    var result = '';
    if(n=="1"){
        result = '<font color="green">已发放</font>';
    }else if(n=="2"){
        result = '<font color="darkorange">待发放</font>';
    }else if(n=="3"){
        result = '审批中';
    }
    return result;
}
//判断表单
//t:判断类型，0非空判断，1数字判断，2电话判断，3身份证判断
//n:判断表单名称
//ft:判断表单类型
function publicJudgeForm(t,n,ft){
    var yes = 0;
    if(t==0){
        if(ft=="input"){
            if($("input[name="+n+"]").val()==""){
                $("input[name="+n+"]").parents(".input-group").find("error").text($("input[name="+n+"]").attr("placeholder")+"不能为空！");
                yes = 1;
            }else{
                $("input[name="+n+"]").parents(".input-group").find("error").text("");
            }
        }
        if(ft=="checkbox"){
            if ($("input[name="+n+"]").prop('checked')) {
                $("input[name="+n+"]").parents(".input-group").find("error").text($("input[name="+n+"]").attr("placeholder")+"不能为空！");
                yes = 1;
            }else{
                $("input[name="+n+"]").parents(".input-group").find("error").text("");
            }
        }
    }else if(t==1){
        if(ft=="input"){
            if($.isNumeric($("input[name="+n+"]").val())==false){
                $("input[name="+n+"]").parents(".input-group").find("error").text($("input[name="+n+"]").attr("placeholder")+"必须全部为数字！");
                yes = 1;
            }else{
                $("input[name="+n+"]").parents(".input-group").find("error").text("");
            }
        }
    }else if(t==2){
        var pattern = /^1[34578]\d{9}$/;
        if(pattern.test($("input[name="+n+"]").val())==false){
            $("input[name="+n+"]").parents(".input-group").find("error").text($("input[name="+n+"]").attr("placeholder")+"手机号码格式错误！");
            yes = 1;
        }else{
            $("input[name="+n+"]").parents(".input-group").find("error").text("");
        }
    }else if(t==3){
        var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(pattern.test($("input[name="+n+"]").val())==false){
            $("input[name="+n+"]").parents(".input-group").find("error").text($("input[name="+n+"]").attr("placeholder")+"身份证号码格式错误！");
            yes = 1;
        }else{
            $("input[name="+n+"]").parents(".input-group").find("error").text("");
        }
    }else{
        yes = 0;
    }
    return yes;
}
//公用函数：删除信息
//id：需要删除的信息的id值
//apiUrl：访问的接口
//backUrl：回调的地址
function publicDeleteInfo(id,apiUrl,backUrl){
    if(id=="-1"){
        id = $("#numisDel").attr("data-id");
    }
    if(confirm("确定要删除该信息?")){
        if(id==""){
            alert("请选择要操作的记录");
            return false;
        }else{
            var url = depUrl + apiUrl;
            $.ajax({
                type:"POST",
                url:url,
                data:id,
                dataType: "json",
                contentType:"application/json;charset=UTF-8",
                headers:{accessToken:$.session.get('accessToken')},
                success:function(data){
                    var code = data.code;
                    if(code=="000000"){
                        alert("删除成功");
                        autoJumpURL(backUrl);
                    }else if(code=="002003"){
                        alert("当前登录已失效,请重新登录");
                        $.session.clear();
                        $(location).attr('href', 'login.html');
                    }else{
                        alert("* 错误提示："+ data.msg +"！");
                    }
                },
                error:function(data){
                    alert("* 错误提示："+ data.message +"！");
                    return false;
                }
            });
        }
    }
}
//公用函数：锁定信息
//id：需要锁定的信息id
//apiUrl：访问的接口
//backUrl：回调的地址
function publicLockInfo(id,apiUrl,backUrl){
    if(id=="-1"){
        id = $("#numisDel").attr("data-id");
    }
    if(confirm("确定要锁定/解锁该信息?")){
        if(id==""){
            alert("请选择要操作的记录");
            return false;
        }else{
            var url = depUrl + apiUrl;
            $.ajax({
                type:"POST",
                url:url,
                data:id,
                dataType: "json",
                contentType:"application/json;charset=UTF-8",
                headers:{accessToken:$.session.get('accessToken')},
                success:function(data){
                    var code = data.code;
                    if(code=="000000"){
                        autoJumpURL(backUrl);
                    }else if(code=="002003"){
                        alert("当前登录已失效,请重新登录");
                        $.session.clear();
                        $(location).attr('href', 'login.html');
                    }else{
                        alert("* 错误提示："+ data.msg +"！");
                    }
                },
                error:function(data){
                    alert("* 错误提示："+ data.message +"！");
                    return false;
                }
            });
        }
    }
}


//----------------封装图片上传组件 开始-----------------------//
function loadJNMImgUpload(){
    $(document).find(".loadJNMImgUpload").each(function(){
        var dataType = $(this).attr("data-type");
        var dataAccept = $(this).attr("data-accept");
        var dataId = $(this).attr("data-id");
        
        var ImgUploadHtml = '<input id="'+dataId+'" class="filepath" onchange="JNMUploadImg(this)" type="file" accept="'+dataAccept+'" '+dataType+' style="display: none"><imgwarp></imgwarp></div><label for="'+dataId+'" class="upload-btn">+</label><input name="'+dataId+'" value="" type="hidden" />';
        
        $(this).html(ImgUploadHtml);
    });
    
}

function JNMUploadImg(obj){
    var dataId = $(obj).parents(".loadJNMImgUpload").attr("data-id");
    var imgsInfo = document.getElementById(dataId).files;
    var dataType = $(obj).parents(".loadJNMImgUpload").attr("data-type");
    
    console.log(imgsInfo);
    
    var imgHtml = '';
    var imgsSrc = '';
    for(var i=0;i<imgsInfo.length;i++){
        var reads= new FileReader();
        reads.readAsDataURL(imgsInfo[i]);
        reads.onload=function (e) {
            imgHtml = '<div class="upload-img" onmouseover="showJNMUploadImgActionBox(this)" onmouseout="hideJNMUploadImgActionBox(this)"><img src="'+this.result+'"><div class="action"><i class="fa fa-arrow-left" onClick="JNMUploadImgActionlft(this)"></i><i class="fa fa-trash" onClick="JNMUploadImgActionDel(this)"></i><i class="fa fa-search-plus" onClick="showJNMUploadBigImg(this)"></i><i class="fa fa-arrow-right marnone" onClick="JNMUploadImgActionrgt(this)"></i></div>';
            $(obj).parents(".loadJNMImgUpload").find("imgwarp").append(imgHtml);
            
            if(imgsSrc==""){
                imgsSrc = this.result;
            }else{
                imgsSrc = imgsSrc + "," + this.result;
            }
            $(obj).parents(".loadJNMImgUpload").find("input[name="+dataId+"]").val(imgsSrc);
        };
    }
    if(dataType==""){//如果只允许上传一张图片
        if($(obj).parents(".loadJNMImgUpload").find("imgwarp")==""){//还没上传图片
            $(obj).parents(".loadJNMImgUpload").append('<label for="'+dataId+'" class="upload-btn">+</label>');
        }else{
            $(obj).parents(".loadJNMImgUpload").find("label").remove();
        }
    }
}
//图片处理动作
function showJNMUploadImgActionBox(obj){
    $(obj).find(".action").show();
}
function hideJNMUploadImgActionBox(obj){
    $(obj).find(".action").hide();
}
//图片处理动作
//删除
function JNMUploadImgActionDel(obj){
    var dataId = $(obj).parents(".loadJNMImgUpload").attr("data-id");
    var dataType = $(obj).parents(".loadJNMImgUpload").attr("data-type");
    if($(obj).parents(".loadJNMImgUpload").find(".upload-img").length==1 && dataType==""){
        $(obj).parents(".loadJNMImgUpload").append('<label for="'+dataId+'" class="upload-btn">+</label>');
    }
    
    //删除的时候清除对应的value值
    var imgsSrc = $(obj).parents(".loadJNMImgUpload").find("input[name="+dataId+"]").val();
    var shouldeDelImgSrc = $(obj).parents(".upload-img").find("img").attr("src");
    
    var endImgsSrc = '';
    endImgsSrc = imgsSrc.replace(","+shouldeDelImgSrc,"");
    endImgsSrc = imgsSrc.replace(shouldeDelImgSrc+",","");
    endImgsSrc = imgsSrc.replace(shouldeDelImgSrc,"");
    
    $(obj).parents(".loadJNMImgUpload").find("input[name="+dataId+"]").val(endImgsSrc);
    
    $(obj).parents(".upload-img").remove();
}
//左移
function JNMUploadImgActionlft(obj){
    var prev_uploadImg = $(obj).parents(".upload-img").prev();
    if($(obj).parents(".upload-img").length != 0){
        prev_uploadImg.before($(obj).parents(".upload-img"));
    }else {
        alert("已经最左边!");
    }
}
//右移
function JNMUploadImgActionrgt(obj){
    var next_uploadImg = $(obj).parents(".upload-img").next();
    if($(obj).parents(".upload-img").length != 0){
        next_uploadImg.after($(obj).parents(".upload-img"));
    }else {
        alert("已经最右边!");
    }
}
//点击图片预览
function showJNMUploadBigImg(obj){
    var imgSrc = $(obj).parents(".upload-img").find("img").attr("src");
    $("#ajaxcontent").append("<mask onClick='hidsNMUploadBigImg()'></mask>");
    $("#ajaxcontent").append("<img src="+imgSrc+" class='showJNMUploadBigImg'>");
}
//退出图片预览
function hidsNMUploadBigImg(){
    $("#ajaxcontent").find("mask").remove();
    $("#ajaxcontent").find(".showJNMUploadBigImg").remove();
}


//------------------------封装图片上传组件 结束 -------------------------//