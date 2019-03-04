//异步加载页面
function acturl(u,n){
    $("#a_contbox").css("display","none");
    $("#a_contbox").removeClass("lodbox");
    $.ajax({
		type: 'GET',
		url: website + u,
		data: {},
		dataType: "html",
		success: function(data){
            $(".a_menu ul li").each(function(){
                $(this).removeClass("no");
            })
            $(".a_menu ul li").eq(n).addClass("no");
			$("#a_contbox").html(data);
            $("#a_contbox").addClass("lodbox");
            $("#a_contbox").css("display","inherit");
		},
		error:function(data){
			alert("* 错误提示：没有找到该页面！");
			return false;
		}
	});
}
//跳转页面
function jumpUrl(url,headstyle,param){
    console.log(url);
    if(headstyle=="1"){
        $(".pg_head").removeClass("witersty");
        $(".pg_head").addClass("bulesty");
    }else{
        $(".pg_head").removeClass("bulesty");
        $(".pg_head").addClass("witersty");
    }
    $("#pageConts").removeClass("lodbox");
    $.ajax({
		type: 'GET',
		url: website + url,
		data: param,
		dataType: "html",
		success: function(data){
			$("#pageConts").html(data);
            $("#pageConts").addClass("lodbox");
		},
		error:function(data){
			alert("* 错误提示：没有找到该页面！");
			return false;
		}
	});
}
//radio选择事件
function rdCk(obj){
    $(obj).parent().find("span").each(function(){
        $(this).removeClass("rd_on");
    });
    $(obj).addClass("rd_on");
    $(obj).parent().find("input").val($(obj).attr("data-val"));
}
//checkbox选择事件
function chkCk(obj){
    var chkval = '';
    if($(obj).hasClass("rd_on")==false){
        $(obj).addClass("rd_on");
    }else{
        $(obj).removeClass("rd_on");
    }
    $(obj).parent().find("span").each(function(){
        if($(this).hasClass("rd_on")==true){
            chkval = chkval + "," + $(this).attr("data-val");
        }
    });
    chkval = chkval.substring(1,chkval.length);
    $(obj).parent().find("input").val(chkval);
}
//数字加减
function updownNum(obj){
    var num = $(obj).parent().find("input").val();
    if(isNaN(num)==true || num==""){
        num = 0;
    }else{
        num = parseInt(num);
    }
    
    if($(obj).text()=="+"){
        num = num + 1;
    }
    
    if($(obj).text()=="-"){
        num = num - 1;
    }
    if(num<=0){
        num = 0;
    }
    $(obj).parent().find("input").val(num);
}
//menu切换事件
function menuCont(n){
    $("body").find("titbox").each(function(){
        $(this).removeClass("on");
    });
    $("body").find("list").each(function(){
        $(this).css("display","none");
    });
    $("body").find("titbox").eq(n).addClass("on");
    $("body").find("list").eq(n).css("display","block");
}
//去掉undefind
function cundefind(n,t){
    var resualt = "";
    if(n==undefined){
        if(t==0){
            resualt = "";
        }else{
            resualt = 0;
        }
    }else{
        resualt = n;
    }
    return resualt;
}
/*员工在职状态*/
function returnEmpStatus(n){
    var empStatus = '';
    if(n!=null){
        if(n=="1"){
            empStatus = "正常";
        }else if(n=="2"){
            empStatus = "正式";
        }else if(n=="3"){
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
//加载个人信息
function getEmpInfo(){
    if($.session.get('accessToken')==undefined){
        window.location.href=website + "login.html";
    }else{
        $(".head img").attr("src",$.session.get('faceimg'));
        $(".empinof").html('<p>发起人：'+$.session.get('realname')+'<span>'+returnEmpStatus($.session.get('empStatus'))+'</span></p><p>部门：'+ $.session.get('departName') +'</p>');
        
        $("#empId").val($.session.get('id'));
        $("#empName").val($.session.get('realname'));
        
        var myDate = new Date();
        //获取当前年
        var year=myDate.getFullYear();
        //获取当前月
        var month=myDate.getMonth()+1;
        //获取当前日
        var date=myDate.getDate(); 
        var week = "";
        if(myDate.getDay()==0) week="周日";
        if(myDate.getDay()==1) week="周一";
        if(myDate.getDay()==2) week="周二";
        if(myDate.getDay()==3) week="周三";
        if(myDate.getDay()==4) week="周四";
        if(myDate.getDay()==5) week="周五";
        if(myDate.getDay()==6) week="周六";

        $("#week").text(week);
        $("#empDate").text(year+"-"+month+"-"+date);
    }
    
}
function getFormatDate(style){
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    var second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
    if(style=="yyyy-mm-dd"){
        return year + "-" + month + "-" + date;
    }
    if(style=="yyyy mm dd"){
        return year + "年" + month + "月" + date;
    }
    if(style=="yyyy/mm/dd"){
        return year + "/" + month + "/" + date;
    }
    if(style=="yyyy-mm-dd hh:mm:ss"){
        return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
    }
    if(style=="hh:mm:ss"){
        return hour+":"+minute+":"+second;
    }
    if(style=="mm:ss"){
        return minute+":"+second;
    }
    if(style=="mm ss"){
        return minute+"分"+second+"秒";
    }
    if(style=="hh mm ss"){
        return hour+"时"+minute+"分"+second+"秒";
    }
}
function getWeek(){
    var myDate = new Date();
    //获取当前年
    var year=myDate.getFullYear();
    //获取当前月
    var month=myDate.getMonth()+1;
    //获取当前日
    var date=myDate.getDate(); 
    var week = "";
    if(myDate.getDay()==0) week="周日";
    if(myDate.getDay()==1) week="周一";
    if(myDate.getDay()==2) week="周二";
    if(myDate.getDay()==3) week="周三";
    if(myDate.getDay()==4) week="周四";
    if(myDate.getDay()==5) week="周五";
    if(myDate.getDay()==6) week="周六";
    
     $("html").find("week").each(function(){$(this).html(week)});
}
//转换请假状态
function holidayStuts(n){
    var result = '';
    if(n==1){
        result = '通过';
    }else if(n==2){
        result = '不通过';
    }else if(n==3){
        result = '待审核';
    }else{
        result = n;
    }
    return result;
}
//采购审核状态转换
function purchareStutas(n){
    var pcs = '';
    if(n==1){
        pcs = '<font color="green">通过</font>';
    }else if(n==2){
        pcs = '<font color="red">不通过</font>';
    }else if(n==3){
        pcs = '<font color="#ff8f27">待审核</font>';
    }else if(n==4){
        pcs = '<font color="grey">审核中</font>';
    }else if(n==null){
        pcs = '<font color="#f1f1f1">解锁发起审核</font>';
    }else{
        pcs = n;
    }
    return pcs;
}
//转换请假类型
function holidayType(n){
    var result = '';
    if(n==1){
        result = '事假';
    }else if(n==2){
        result = '病假';
    }else if(n==3){
        result = '其他';
    }else{
        result = n;
    }
    return result;
}
//去掉null
function clearNull(n,type){
    var result = "";
    if(n==null || n=="null"){
        result = type;
    }else{
        result = n;
    }
    return result;
}
//打卡
function empClockIn(JsonStringData){
    console.log(JSON.stringify(JsonStringData));
    var url = wapUrl + "/employee/empClockIn"
    $.ajax({
        type: 'POST',
		url: url,
		data: JSON.stringify(JsonStringData),
		dataType: "json",
		contentType:"application/json;charset=UTF-8",
		headers:{accessToken:$.session.get('accessToken')},
        success:function(data){
            var code = data.code;
            console.log(JSON.stringify(data));
            if(code=="000000"){
                
                if(JsonStringData.startWork!=""){
                    alert("签到成功！");
                }
                if(JsonStringData.endWork!=""){
                    alert("签退成功！");
                }
                window.location.href = 'index.html?{"url":"page/signAdd.html","title":"签到","headstyle":"1","param":[]}';
            }else if(code=="002003"){
                $.session.clear();
				//$(location).attr('href', '../login.html');
            }else{
                alert("* 错误提示："+ data.msg +"！");
            }
        },
        error:function(data){
			alert("* 错误提示：服务器请求出错！");
			return false;
		}
    });
}
//获取打卡列表
function getClockInList(JsonStringData){
    console.log(JSON.stringify(JsonStringData));
    var result = "";
    var url = wapUrl + "/employee/getClockInList";
    $.ajax({
        type: 'POST',
		url: url,
		data: JsonStringData,
		dataType: "json",
		contentType:"application/json;charset=UTF-8",
		headers:{accessToken:$.session.get('accessToken')},
        success:function(data){
            console.log(JSON.stringify(data));
            var code = data.code;
            if(code=="000000"){
                loadList(data);
            }else if(code=="002003"){
                $.session.clear();
				$(location).attr('href', '../login.html');
            }else{
                result = "{}";
                alert("* 错误提示："+ data.msg +"！");
            }
        },
        error:function(data){
			alert("* 错误提示：服务器请求出错！");
			return false;
		}
    });
}
//异步数据加载，封装异步请求
//参数说明：JsonStringData：接口传入数据，url：请求接口地址|tips:前缀带“/”，type：请求类型|0位json格式|1为post参数
function ajaxPostApi(JsonStringData,url,type){
    console.log(JSON.stringify(JsonStringData));
    var result = "";
    var url = wapUrl + url;
    if(type==0){
        var ctype = "application/json;charset=UTF-8";
    }else{
        var ctype = "application/x-www-form-urlencoded";
        JsonStringData = JSON.parse(JsonStringData);
    }
    $.ajax({
        type: 'POST',
		url: url,
		data: JsonStringData,
		dataType: "json",
		contentType:ctype,
		headers:{accessToken:$.session.get('accessToken')},
        success:function(data){
            console.log(JSON.stringify(data));
            var code = data.code;
            if(code=="000000"){
                requestData(data);//回调函数名：requestData，回调数据格式：json对象
            }else if(code=="002003"){
                $.session.clear();
				$(location).attr('href', '../login.html');
            }else{
                result = "{}";
                alert("* 错误提示："+ data.msg +"！");
            }
        },
        error:function(data){
            console.log(JSON.stringify(data));
			alert("* 错误提示：服务器请求出错！");
			return false;
		}
    });
}
//渲染列表页面
function drawListPage(jsonObj){
    var tempHtml = $("template").html();
    if(tempHtml.indexOf("{$")<0){
        var nodenum = 0;
    }else{
        var nodenum = tempHtml.split("{$").length-1;
    }
    $.each(jsonObj.data.list,function(i,items){
        for(var x=0;x<nodenum;x++){
            var label = tempHtml.substring(tempHtml.indexOf("{$"),tempHtml.indexOf("$}")+2);
            var cellName = label.replace("{$","").replace("$}","");
            for (var key in items){
                if(key==cellName){
                    tempHtml = tempHtml.replace(label,items[key]);
                }
            }
        }
        tempHtml = tempHtml + $("template").html();
    });
    $("list").html(tempHtml.replace($("template").html(),""));
    drawSession();//解析session数据
    getChStutas();//解析状态数据
    getChType();//解析请假类型
}
//解析内容页面
function drawContentPage(jsonObj){
    console.log(jsonObj);
    var tempHtml = $(".cont").html();
    if(tempHtml.indexOf("{$")<0){
        var nodenum = 0;
    }else{
        var nodenum = tempHtml.split("{$").length-1;
    }
    $.each(jsonObj.data.list,function(i,items){
        for(var x=0;x<nodenum;x++){
            var label = tempHtml.substring(tempHtml.indexOf("{$"),tempHtml.indexOf("}")+1);
            var cellName = label.replace("{$","").replace("}","");
            for (var key in items){
                if(key==cellName){
                    tempHtml = tempHtml.replace(label,items[key]);
                }
            }
        }
    });
    $(".cont").html(tempHtml);//填充模版
    drawSession();//解析session数据
    getChStutas();//解析状态数据
    getChType();//解析请假类型
    holidayClearNull();
}
//渲染session数据
function drawSession(){
    $("html").find("realname").each(function(){$(this).html($.session.get('realname'))});
    $("html").find("username").each(function(){$(this).html($.session.get('username'))});
    $("html").find("uuid").each(function(){$(this).html($.session.get('uuid'))});
    $("html").find("id").each(function(){$(this).html($.session.get('id'))});
    $("html").find("phonenumber").each(function(){$(this).html($.session.get('phonenumber'))});
    $("html").find("createtime").each(function(){$(this).html($.session.get('createtime'))});
    $("html").find("faceimg").each(function(){$(this).html($.session.get('faceimg'))});
    $("html").find("deptid").each(function(){$(this).html($.session.get('deptid'))});
    $("html").find("empStatus").each(function(){$(this).html(returnEmpStatus($.session.get('empStatus')))});
    $("html").find("departName").each(function(){$(this).html($.session.get('departName'))});
    
    $("html").find("input").each(function(){
        if($(this).attr("data-type")=="session"){
            if($(this).attr("data-name")=="realname"){$(this).val($.session.get('realname'));}
            if($(this).attr("data-name")=="username"){$(this).val($.session.get('username'));}
            if($(this).attr("data-name")=="uuid"){$(this).val($.session.get('uuid'));}
            if($(this).attr("data-name")=="id"){$(this).val($.session.get('id'));}
            if($(this).attr("data-name")=="phonenumber"){$(this).val($.session.get('phonenumber'));}
            if($(this).attr("data-name")=="createtime"){$(this).val($.session.get('createtime'));}
            if($(this).attr("data-name")=="faceimg"){$(this).val($.session.get('faceimg'));}
            if($(this).attr("data-name")=="deptid"){$(this).val($.session.get('deptid'));}
            if($(this).attr("data-name")=="empStatus"){$(this).val($.session.get('empStatus'));}
            if($(this).attr("data-name")=="departName"){$(this).val($.session.get('departName'));}
        }
    });
    
}

//时间控件封装
function dataTimeBox(obj){
    var type = $(obj).attr("data-type");
    var shwmode = $(obj).attr("show-mode");
    var currYear = (new Date()).getFullYear();	
	var currDay = (new Date()).getDate()-1;
	var currMonth = (new Date()).getMonth()+1;
	if(currMonth<10){
		currMonth='0'+currMonth;
	}
	var currdate=currYear+"-"+currMonth+"-"+currDay
	baseTime=currYear+"-"+currMonth+"-"+currDay;
	
	var lastDay = new Date();//获取当前时间  
	lastDay.setDate(lastDay.getDate()-1);//设置天数 -1 天 
	
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.default = {
		preset: 'date', //日期
		theme: 'android-ics light', //皮肤样式
		display: 'modal', //显示方式 
		mode: 'scroller', //日期选择模式
		dateFormat: type,
		dateOrder : 'yyyymmdd', //面板中日期排列格式
		lang: 'zh',
		showNow: false,
		nowText: "今天",
		maxDate: lastDay, //设置最大可选日期（必须日期格式）
		startYear: currYear - 10, //开始年份
		endYear: currYear + 10,//结束年份
		onSelect:function(Value,inst){ //选中时触发事件
			var t=Value.replace(/-/g,"")
			baseTime=Value
            if(shwmode=="0"){
                $(obj).val(Value.split("-")[0]+"-"+Value.split("-")[1]+"-"+Value.split("-")[2]);
            }else{
                $(obj).text(Value.split("-")[0]+"-"+Value.split("-")[1]+"-"+Value.split("-")[2]);
            }
			
		},
	};
 
	$(obj).mobiscroll($.extend(opt['date'], opt['default']));
    if(shwmode=="0"){
        $(obj).val(currdate);
    }else{
        $(obj).text(currdate);
    }
	
	$("iframe").height($(window).height());
}


















