//var excptpname = "5-OIB1S-1";//本地测试
//var excmeid = "397648311";//本地测试

var excptpname = "5-OIB1S-1";//异常的端口名称
var excmeid = "397648311";//异常的网元ID

function showRouteView(objectid){
    console.log(" showRouteView... ");
    status_num = true;
    window.splitView.setStatus('normal');
    HTUtil.showMask();
    HTUtil.requestServer("/business/transmissionlink/showpathroute",{objectid:objectid},function(result){
    	HTUtil.hideMask();
		if(result && result.success){
			graphDataModel.clear();
			addRouteJsonToHTDataModel(result.userdata, graphDataModel);
			var data = graphView.getDataModel().getDataById(excmeid);
			if(data){
				data.setStyle("body.color","#FF7744");
			}
			
		}
    });
}

//-------------------------------右键菜单开始------------
function getTopoContextmenu(){
	var data = graphView.getDataModel().getSelectionModel().getLastData();
	var items = new Array();
	if (data == null || data=='') {
		if(status_num == true){
			var item_0 =  {
					label : '查看设备指标信息',
					action : function() {
						 status_num = false;
						 showDetailedInfo();
						 
					}
				}
			items.push(item_0);
		}else{
			var item_1 =  {
					label : '关闭设备指标信息',
					action : function() {
						status_num = true;
						closeDetailedInfo();
					}
			}
			items.push(item_1);
		}
	}
	return items;
}
function showDetailedInfo(){
	graphDataModel.each(function(data)
	{
		if(data instanceof ht.Edge){
			data.setStyle('label.opacity',1);//显示
			data.setStyle('label.background','#FFF');
			data.setStyle('label2.opacity',1);
			data.setStyle('label2.background','#FFF');
		}
	});
}
function closeDetailedInfo(){
	graphDataModel.each(function(data)
	{
		if(data instanceof ht.Edge){
			data.setStyle('label.opacity',0);
			data.setStyle('label2.opacity',0);
		}
	});
}

function createEdge(dataModelObj,id,source_id,target_id,name,tooltip,parent_id,routeObj){
	
	var source = dataModelObj.getDataById(source_id);
    var target = dataModelObj.getDataById(target_id);
    if(source!=undefined && target!=undefined && source != target){
    	var edge = new ht.Edge();
    	edge.setSource(source);
		edge.setTarget(target);
    	if(id && id!=''){
    		edge._id = id;
    	}
    	if(name && name!=''){
    		edge.setName(name);
    	}
    	if(tooltip && tooltip!=''){
    		edge.setToolTip(tooltip);
    	}
    	if(parent_id && parent_id!=''){
    		var parent = dataModelObj.getDataById(parent_id);
    		if(parent!=undefined){
    			edge.setParent(parent); 
    		}
    	}
    	
    	edge.setStyle('label2.color','black');
    	edge.setStyle('label2.font','10px sans-serif');
    	edge.setStyle('label2.position',30);
    	edge.setStyle('label2.offset.y',40);
    	edge.setStyle('label2.opacity',0);
    	edge.setStyle("label2.background","rgba(251,251,248, 0.8)");//图元文字背景
    	labelAddText2(edge,routeObj);
    	
    	edge.setStyle('label.color','black');
    	edge.setStyle('label.font','10px sans-serif');
    	edge.setStyle('label.position',32);
    	edge.setStyle('label.offset.y',40);
    	edge.setStyle('label.opacity',0);
    	edge.setStyle("label.background","rgba(251,251,248, 0.8)");//图元文字背景
    	labelAddText(edge,routeObj);
    	
    	edge.setLayer("layer1"); //设置层数
    	edge.setStyle("edge.color","#00FF00");//连线的颜色
    	edge.setStyle("edge.width", 3);//连线宽度
    	edge.setStyle("edge.expanded", false);//决定当前连续处于展开还是合并状态
    	edge.setStyle("edge.toggleable", false);//决定连线是否响应双击，进行成捆连线展开合并的切换
    	
    	edge.setStyle("flow", true);//控制此ht.Shape或ht.Edge是否可流动
    	edge.setStyle("flow.count", 2);//控制流动组的个数，默认为1
    	edge.setStyle("flow.element.count", 8);//每个流动组中的元素的个数，默认为10
    	edge.setStyle("flow.element.background", "rgba(253,216,43, 1)");//流动组中元素的背景颜色
    	edge.setStyle("flow.element.shadow.begincolor", "rgba(253,216,43, 0.2)");//表示流动组中的元素的渐变阴影的中心颜色
    	edge.setStyle("flow.element.shadow.endcolor", "rgba(253,216,43, 0)");//表示流动组中的元素的渐变阴影的边缘颜色
    	return edge;
    }
	
	
}

function createNode(dataModelObj,id,name,tooltip,position_x,position_y,parent_id,routeObj){
	
	var data = dataModelObj.getDataById(id);
	if(data){
		return null;
	}
	
	var node = new ht.Node();
	node.setLayer("layer2"); 
	node.setImage("me");
	if(id && id!=''){
		node._id = id;
	}
	if(name && name!=''){
		node.setName(name);
	}
//	if(tooltip && tooltip!=''){
//		node.setToolTip(tooltip);
//	}
	if(position_x && position_x!='' && position_y && position_y!=''){
		node.setPosition({x:position_x,y:position_y});
	}
	
	if(parent_id && parent_id!=''){
		var parent = dataModelObj.getDataById(parent_id);
		if(parent!=undefined){
			node.setParent(parent); 
		}
	}
	
	return node;
}




function addRouteJsonToHTDataModel(routeSeqList,dataModelObj){
	if(!routeSeqList || !dataModelObj || routeSeqList.length==0){
		return;
	}
	
	var position_start_y = 50;
	var position_step_y = 200;
	
	//遍历seq
	for(var i=0;i<routeSeqList.length;i++){
		
		var position_start_x = 100;
		var position_step_x = 400;
		
		//获取一段的串行路由列表
		var routeList = routeSeqList[i];
		if(!routeList || routeList.length==0){
			continue;
		}
		//遍历路由列表，呈现数据
		for(var j=0;j<routeList.length;j++){
			var route = routeList[j];
			
			var OBJECTID = HTUtil.NAU(route.OBJECTID);
			var ROUTESEQ = HTUtil.NAU(route.ROUTESEQ);
			var WAYSEQ = HTUtil.NAU(route.WAYSEQ);
			var DIRECTION = HTUtil.NAU(route.DIRECTION);
			var LINKTYPE = HTUtil.NAU(route.LINKTYPE);
			var A_ME_OBJECTID = HTUtil.NAU(route.A_ME_OBJECTID);
			var A_CARD_OBJECTID = HTUtil.NAU(route.A_CARD_OBJECTID);
			var A_PTP_OBJECTID = HTUtil.NAU(route.A_PTP_OBJECTID);
			var A_CTP_ID = HTUtil.NAU(route.A_CTP_ID);
			var Z_ME_OBJECTID = HTUtil.NAU(route.Z_ME_OBJECTID);
			var Z_CARD_OBJECTID = HTUtil.NAU(route.Z_CARD_OBJECTID);
			var Z_PTP_OBJECTID = HTUtil.NAU(route.Z_PTP_OBJECTID);
			var Z_CTP_ID = HTUtil.NAU(route.Z_CTP_ID);
			var A_ME_NAME = HTUtil.NAU(route.A_ME_NAME);
			var A_CARD_NAME = HTUtil.NAU(route.A_CARD_NAME);
			var A_PTP_NAME = HTUtil.NAU(route.A_PTP_NAME);
			var Z_ME_NAME = HTUtil.NAU(route.Z_ME_NAME);
			var Z_CARD_NAME = HTUtil.NAU(route.Z_CARD_NAME);
			var Z_PTP_NAME = HTUtil.NAU(route.Z_PTP_NAME);
			//指标注释--------------
			var BEGINBANDWIDTHUTI = HTUtil.NAU(route.BEGINBANDWIDTHUTI);//源端口带宽利用率
			var BEGINLASERPOWER_I = HTUtil.NAU(route.BEGINLASERPOWER_I);//源端光功率输入
			var BEGINLASERPOWER_O = HTUtil.NAU(route.BEGINLASERPOWER_O);//源端光功率输出
			var A_AVE_PACKET_LOSS = HTUtil.NAU(route.A_AVE_PACKET_LOSS);//源端平均双向丢包率
			var A_AVE_DELAY = HTUtil.NAU(route.A_AVE_DELAY);//源端平均双向时延
			var A_AVE_JITTER = HTUtil.NAU(route.A_AVE_JITTER);//源端平均双向抖动
			var ENDBANDWIDTHUTI = HTUtil.NAU(route.ENDBANDWIDTHUTI);//宿端口带宽利用率
			var ENDLASERPOWER_I = HTUtil.NAU(route.ENDLASERPOWER_I);//宿端光功率输入
			var ENDLASERPOWER_O = HTUtil.NAU(route.ENDLASERPOWER_O);//宿端光功率输出
			var Z_AVE_PACKET_LOSS = HTUtil.NAU(route.Z_AVE_PACKET_LOSS);//宿端平均双向丢包率
			var Z_AVE_DELAY = HTUtil.NAU(route.Z_AVE_DELAY);//宿端平均双向时延
			var Z_AVE_JITTER = HTUtil.NAU(route.Z_AVE_JITTER);//宿端平均双向抖动
			var A_ERR_RATE = HTUtil.NAU(route.A_ERR_RATE);//源端接收校验错误帧
			var Z_ERR_RATE = HTUtil.NAU(route.Z_ERR_RATE);//宿端接收校验错误帧
			//指标注释--------------
			
			var a_node = createNode(dataModelObj,A_ME_OBJECTID,A_ME_NAME,A_ME_NAME,position_start_x,position_start_y,null,route);
			if(a_node){
				
				dataModelObj.add(a_node);
				
				position_start_x += position_step_x;
			}
			
			var z_node = createNode(dataModelObj,Z_ME_OBJECTID,Z_ME_NAME,Z_ME_NAME,position_start_x,position_start_y,null,route);
			if(z_node){
				
				dataModelObj.add(z_node);
				
				position_start_x += position_step_x;
			}
			var link = createEdge(dataModelObj,OBJECTID,A_ME_OBJECTID,Z_ME_OBJECTID,null,null,null,route);
			if(link){
				dataModelObj.add(link);
			}
			
		}
		position_start_y += position_step_y;
	}
	
}
function labelAddText2(edge,routeObj){
	if("shanxi" == PUBLIC_PROVINCE){
		edge.setStyle('label2',
				  '网元 : '+HTUtil.NAU(routeObj.A_ME_NAME)+'\n'+
	              '板卡 : '+HTUtil.NAU(routeObj.A_CARD_NAME)+'\n'+
				  '端口 : '+HTUtil.NAU(routeObj.A_PTP_NAME)+'\n'+
				  '源端口带宽利用率 : '+HTUtil.NAU(routeObj.BEGINBANDWIDTHUTI)+'\n'+
				  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_I)+'\n'+
				  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_O)+'\n'+
				  '源端平均双向丢包率 : '+HTUtil.NAU(routeObj.A_AVE_PACKET_LOSS)+'\n'+
				  '源端平均双向时延 : '+HTUtil.NAU(routeObj.A_AVE_DELAY)+'\n'+
				  '源端平均双向抖动 : '+HTUtil.NAU(routeObj.A_AVE_JITTER)
				);
	}
	if("hunan" == PUBLIC_PROVINCE){
		
		if(HTUtil.NAU(routeObj.A_PTP_NAME)==excptpname){
			edge.setStyle("label2.background","rgba(255,98,39, 0.8)");//图元文字背景
			edge.setStyle('label2',
					  '网元 : '+HTUtil.NAU(routeObj.A_ME_NAME)+'\n'+
		              '板卡 : '+HTUtil.NAU(routeObj.A_CARD_NAME)+'\n'+
					  '端口 : '+HTUtil.NAU(routeObj.A_PTP_NAME)+'\n'+
					  '源端口带宽利用率 : '+HTUtil.NAU(routeObj.BEGINBANDWIDTHUTI)+'\n'+
					  '【越限】源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_I)+'\n'+
					  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_O)+'\n'+
					  '源端接收校验错误帧 : '+HTUtil.NAU(routeObj.A_ERR_RATE)
					);
		}else{
			edge.setStyle('label2',
					  '网元 : '+HTUtil.NAU(routeObj.A_ME_NAME)+'\n'+
		              '板卡 : '+HTUtil.NAU(routeObj.A_CARD_NAME)+'\n'+
					  '端口 : '+HTUtil.NAU(routeObj.A_PTP_NAME)+'\n'+
					  '源端口带宽利用率 : '+HTUtil.NAU(routeObj.BEGINBANDWIDTHUTI)+'\n'+
					  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_I)+'\n'+
					  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_O)+'\n'+
					  '源端接收校验错误帧 : '+HTUtil.NAU(routeObj.A_ERR_RATE)
					);
		}
	}
	if("liaoning" == PUBLIC_PROVINCE){
		edge.setStyle('label2',
				  '网元 : '+HTUtil.NAU(routeObj.A_ME_NAME)+'\n'+
	              '板卡 : '+HTUtil.NAU(routeObj.A_CARD_NAME)+'\n'+
				  '端口 : '+HTUtil.NAU(A_PTP_NAME)+'\n'+
				  '源端口带宽利用率 : '+HTUtil.NAU(routeObj.BEGINBANDWIDTHUTI)+'\n'+
				  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_I)+'\n'+
				  '源端光功率 : '+HTUtil.NAU(routeObj.BEGINLASERPOWER_O)
				);
	}
}
function labelAddText(edge,routeObj){
	if("shanxi" == PUBLIC_PROVINCE){
		edge.setStyle('label',
				  '网元 : '+HTUtil.NAU(routeObj.Z_ME_NAME)+'\n'+
	              '板卡 : '+HTUtil.NAU(routeObj.Z_CARD_NAME)+'\n'+
				  '端口 : '+HTUtil.NAU(routeObj.Z_PTP_NAME)+'\n'+
				  '宿端口带宽利用率 : '+HTUtil.NAU(routeObj.ENDBANDWIDTHUTI)+'\n'+
				  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_I)+'\n'+
				  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_O)+'\n'+
				  '宿端平均双向丢包率 : '+HTUtil.NAU(routeObj.Z_AVE_PACKET_LOSS)+'\n'+
				  '宿端平均双向时延 : '+HTUtil.NAU(routeObj.Z_AVE_DELAY)+'\n'+
				  '宿端平均双向抖动 : '+HTUtil.NAU(routeObj.Z_AVE_JITTER)
				);
	}
	if("hunan" == PUBLIC_PROVINCE){
		
		if(HTUtil.NAU(routeObj.Z_PTP_NAME)==excptpname){
			edge.setStyle("label.background","rgba(255,98,39, 0.8)");//图元文字背景
			edge.setStyle('label',
					  '网元 : '+HTUtil.NAU(routeObj.Z_ME_NAME)+'\n'+
		              '板卡 : '+HTUtil.NAU(routeObj.Z_CARD_NAME)+'\n'+
					  '端口 : '+HTUtil.NAU(routeObj.Z_PTP_NAME)+'\n'+
					  '越限宿端口带宽利用率 : '+HTUtil.NAU(routeObj.ENDBANDWIDTHUTI)+'\n'+
					  '【越限】宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_I)+'\n'+
					  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_O)+'\n'+
					  '宿端接收校验错误帧 : '+HTUtil.NAU(routeObj.Z_ERR_RATE)
					);
			
		}else{
			edge.setStyle('label',
					  '网元 : '+HTUtil.NAU(routeObj.Z_ME_NAME)+'\n'+
		              '板卡 : '+HTUtil.NAU(routeObj.Z_CARD_NAME)+'\n'+
					  '端口 : '+HTUtil.NAU(routeObj.Z_PTP_NAME)+'\n'+
					  '宿端口带宽利用率 : '+HTUtil.NAU(routeObj.ENDBANDWIDTHUTI)+'\n'+
					  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_I)+'\n'+
					  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_O)+'\n'+
					  '宿端接收校验错误帧 : '+HTUtil.NAU(routeObj.Z_ERR_RATE)
					);
		}
	}
	if("liaoning" == PUBLIC_PROVINCE){
		edge.setStyle('label',
				  '网元 : '+HTUtil.NAU(routeObj.Z_ME_NAME)+'\n'+
	              '板卡 : '+HTUtil.NAU(routeObj.Z_CARD_NAME)+'\n'+
				  '端口 : '+HTUtil.NAU(routeObj.Z_PTP_NAME)+'\n'+
				  '宿端口带宽利用率 : '+HTUtil.NAU(routeObj.ENDBANDWIDTHUTI)+'\n'+
				  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_I)+'\n'+
				  '宿端光功率 : '+HTUtil.NAU(routeObj.ENDLASERPOWER_O)
				);
	}	
}