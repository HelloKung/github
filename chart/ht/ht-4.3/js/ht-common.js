ht.AlarmSeverity.CRITICAL.color = "#E1333D";
ht.AlarmSeverity.MAJOR.color = "#FFCC33";
ht.AlarmSeverity.MINOR.color = "#FFFF55";
ht.AlarmSeverity.WARNING.color = "#88AAFF";

function HTUtil() {

};

HTUtil.appPath = "http://" + window.location.host;

HTUtil.requestServer = function(url, params, successFun, errorFun, returnType, isUnMask) {
	var dataType = "json";
	if (returnType) {
		dataType = returnType
	}

	var loadIndex;
	if (isUnMask !== true) {
		loadIndex = layer.load(1, {
			shade : [ 0.1, '#fff' ]
		// 0.1透明度的白色背景
		});
	}

	$.ajax({
		url : ctx + url,
		data : params,
		type : "POST",
		timeout : 120 * 1000,
		dataType : dataType,
		success : function(data, textStatus) {
			if (loadIndex) {
				layer.close(loadIndex);
			}
			if (typeof successFun == 'function') {
				successFun(data, textStatus);
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			if (loadIndex) {
				layer.close(loadIndex);
			}
			if (isUnMask !== true) {
				if ('timeout' == textStatus) {
					layer.msg('抱歉，数据请求超时，请重试...', function() {

					});
				} else {
					layer.msg('加载页面错误...', function() {

					});
				}

			}
			if (typeof errorFun == 'function') {
				errorFun(textStatus, errorThrown);
			}
		}

	});
};

// 从URL中获取指定参数值
HTUtil.getWindowParam = function(name) {
	var str = window.location.search;
	if (str.indexOf(name) != -1) {
		var pos_start = str.indexOf(name) + name.length + 1;
		var pos_end = str.indexOf("&", pos_start);
		if (pos_end == -1) {
			return str.substring(pos_start);
		} else {
			return str.substring(pos_start, pos_end);
		}
	} else {
		return null;
	}
};

HTUtil.addGroup = function(jsonData, dataModel) {
	var group = new ht.Group();
	group._id = jsonData.id;
	group.setName(jsonData.name);
	group.setExpanded(jsonData.expanded);
	if (jsonData.parent_id != '') {
		var parent = dataModel.getDataById(jsonData.parent_id);
		if (parent != undefined) {
			group.setParent(parent);
		}
	}
	if (jsonData.toolTip != '') {
		group.setToolTip(jsonData.toolTip);
	}
	if (jsonData.children_ids != undefined) {
		for (var i = 0; i < jsonData.children_ids.length; i++) {
			var child = dataModel.getDataById(jsonData.children_ids[i]);
			if (child != undefined) {
				group.addChild(child);
			}
		}
	}
	if (jsonData.style != undefined) {
		for ( var name in jsonData.style) {
			group.setStyle(name, jsonData.style[name]);
		}
	}
	if (jsonData.alarm != undefined && jsonData.alarm.severity != '') {
		group.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonData.alarm.severity), parseInt(jsonData.alarm.alarmCount));
	}
	if (jsonData.attr != undefined) {
		for ( var name in jsonData.attr) {
			group.setAttr(name, jsonData.attr[name]);
		}
	}
	dataModel.add(group);
};

HTUtil.addGroupChildred = function(jsonData, dataModel) {
	var group = dataModel.getDataById(jsonData.id);
	if (group != undefined) {
		if (jsonData.children_ids != undefined) {
			for (var i = 0; i < jsonData.children_ids.length; i++) {
				var child = dataModel.getDataById(jsonData.children_ids[i]);
				if (child != undefined) {
					group.addChild(child);
				}
			}
		}
	}
};

HTUtil.addSubGraph = function(jsonData, dataModelObj) {
	var group = new ht.SubGraph();
	group._id = jsonData.id;
	group.setName(jsonData.name);
	group.setPosition(jsonData.position_x, jsonData.position_y);
	if (jsonData.parent_id != '') {
		var parent = dataModelObj.getDataById(jsonData.parent_id);
		if (parent != undefined) {
			group.setParent(parent);
		}
	}
	if (jsonData.toolTip != '') {
		group.setToolTip(jsonData.toolTip);
	}
	if (jsonData.children_ids != undefined) {
		for (var i = 0; i < jsonData.children_ids.length; i++) {
			var child = dataModelObj.getDataById(jsonData.children_ids[i]);
			if (child != undefined) {
				group.addChild(child);
			}
		}
	}
	if (jsonData.style != undefined) {
		for ( var name in jsonData.style) {
			group.setStyle(name, jsonData.style[name]);
		}
	}
	if (jsonData.alarm != undefined && jsonData.alarm.severity != '') {
		group.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonData.alarm.severity), parseInt(jsonData.alarm.alarmCount));
	}
	if (jsonData.attr != undefined) {
		for ( var name in jsonData.attr) {
			group.setAttr(name, jsonData.attr[name]);
		}
	}
	dataModelObj.add(group);
};

HTUtil.addSubGraphChildred = function(jsonData, dataModelObj) {
	var subGraph = dataModel.getDataById(jsonData.id);
	if (subGraph != undefined) {
		if (jsonData.children_ids != undefined) {
			for (var i = 0; i < jsonData.children_ids.length; i++) {
				var child = dataModelObj.getDataById(jsonData.children_ids[i]);
				if (child != undefined) {
					subGraph.addChild(child);
				}
			}
		}
	}
};

HTUtil.addData = function(jsonData, dataModelObj) {
	var data = new ht.Data();
	if (jsonData.id != '') {
		data._id = jsonData.id;
	}
	data.setName(jsonData.name);
	if (jsonData.icon != '') {
		var img = ht.Default.getImage(jsonData.icon);
		if (null == img || '' == img || undefined == img) {
			if (jsonData.attr != undefined) {
				img = ht.Default.getImage(jsonData.attr.transmitMode);
				if (null == img || '' == img || undefined == img) {
					data.setIcon('UNKNOWN');
				} else {
					data.setIcon(jsonData.attr.transmitMode);
				}
			}
		} else {
			data.setIcon(jsonData.icon);
		}
	}
	if (jsonData.parent_id != '') {
		var parent = dataModelObj.getDataById(jsonData.parent_id);
		if (parent != undefined) {
			data.setParent(parent);
		}
	}
	if (jsonData.host_id != '') {
		var host = dataModelObj.getDataById(jsonData.host_id);
		if (host != undefined) {
			data.setHost(host);
		}
	}
	if (jsonData.toolTip != '') {
		data.setToolTip(jsonData.toolTip);
	}
	if (jsonData.children_ids != undefined) {
		for (var i = 0; i < jsonData.children_ids.length; i++) {
			var child = dataModelObj.getDataById(jsonData.children_ids[i]);
			if (child != undefined) {
				data.addChild(child);
			}
		}
	}
	if (jsonData.style != undefined) {
		for ( var name in jsonData.style) {
			data.setStyle(name, jsonData.style[name]);
		}
	}

	if (jsonData.alarm != undefined && jsonData.alarm.severity != '') {
		HTUtil.addAlarm(jsonData, dataModelObj);
		// data.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonData.alarm.severity),parseInt(jsonData.alarm.alarmCount));
	}
	if (jsonData.attr != undefined) {
		for ( var name in jsonData.attr) {
			data.setAttr(name, jsonData.attr[name]);
		}
	}
	dataModelObj.add(data);
};

HTUtil.convertDataArrayToHTTableDispaly = function(dataArray, dataModelObj) {
	if (dataArray && dataArray.length > 0 && dataModelObj) {
		for (var i = 0; i < dataArray.length; i++) {
			var jsonData = dataArray[i];
			var data = new ht.Data();
			data.a(jsonData);
			if (jsonData.id) {
				data._id = jsonData.id;
			}
			if (jsonData.name) {
				data.setName(jsonData.name);
			}
			if (jsonData.parentId) {
				var parent = dataModelObj.getDataById(jsonData.parentId);
				if (parent != undefined) {
					data.setParent(parent);
				}
			}
			if (jsonData.hostId) {
				var host = dataModelObj.getDataById(jsonData.hostId);
				if (host != undefined) {
					data.setHost(host);
				}
			}
			if (jsonData.toolTip) {
				data.setToolTip(jsonData.toolTip);
			}

			dataModelObj.add(data);
		}
	}
}

HTUtil.addNode = function(jsonData, dataModelObj) {
	var node = new ht.Node();
	node._id = jsonData.id;
	node.setPosition(jsonData.position_x, jsonData.position_y);
	node.setName(jsonData.name);
	var img = ht.Default.getImage(jsonData.image);
	if (null == img || '' == img || undefined == img) {
		if (jsonData.attr != undefined) {
			img = ht.Default.getImage(jsonData.attr.transmitMode);
			if (null == img || '' == img || undefined == img) {
				node.setImage('UNKNOWN');
			} else {
				node.setImage(jsonData.attr.transmitMode);
			}
		}
	} else {
		node.setImage(jsonData.image);
	}
	if (jsonData.toolTip != '') {
		node.setToolTip(jsonData.toolTip);
	}
	if (jsonData.parent_id != '') {
		var parent = dataModelObj.getDataById(jsonData.parent_id);
		if (parent != undefined) {
			node.setParent(parent);
		}
	}
	if (jsonData.host_id != '') {
		var host = dataModelObj.getDataById(jsonData.host_id);
		if (host != undefined) {
			node.setHost(host);
		}
	}
	if (jsonData.children_ids != undefined) {
		for (var i = 0; i < jsonData.children_ids.length; i++) {
			var child = dataModelObj.getDataById(jsonData.children_ids[i]);
			if (child != undefined) {
				data.addChild(child);
			}
		}
	}
	if (jsonData.style != undefined) {
		for ( var name in jsonData.style) {
			node.setStyle(name, jsonData.style[name]);
		}
	}
	if (jsonData.alarm != undefined && jsonData.alarm.severity != '') {
		var acknowledgedAlarm = jsonData.alarm.acknowledgedAlarm;
		if (acknowledgedAlarm != undefined && acknowledgedAlarm != '') {
			node.getAlarmState().setAcknowledgedAlarmCount(ht.AlarmSeverity.getByName(jsonData.alarm.severity), jsonData.alarm.alarmCount);
		} else {
			node.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonData.alarm.severity), jsonData.alarm.alarmCount);
		}
	}
	if (jsonData.attr != undefined) {
		for ( var name in jsonData.attr) {
			node.setAttr(name, jsonData.attr[name]);
			// 为电路路由图添加提示信息 jsonData.attr[name] =
			// "{A端站点:'11111',A端机房:'中国甘肃兰州XXXXXXXXXX'}"
			if ('labelMap' == name) {
				var labelMapValue = jsonData.attr[name];
				var jsonObj = HTUtil.strJsonToJsonByFunction(labelMapValue);

				node.addStyleIcon("labelIcon", {
					position : 33,
					names : [ 'labelIcon' ],
					offsetX : -50
				});
				node.a("labelMap", jsonObj);
			}
		}
	}
	dataModelObj.add(node);
};

HTUtil.strJsonToJsonByFunction = function(jsonData) {
	return (new Function("return " + jsonData))();
}

HTUtil.addCard = function(jsonData, dataModelObj) {
	var card = new ht.Card();
	card._id = jsonData.id;
	card.setName(jsonData.name);
	// node.setImage(jsonData.image);
	if (jsonData.toolTip != '') {
		card.setToolTip(jsonData.toolTip);
	}
	if (jsonData.parent_id != '') {
		var parent = dataModelObj.getDataById(jsonData.parent_id);
		if (parent != undefined) {
			card.setParent(parent);
		} else {
			return;
		}
	}
	if (jsonData.host_id != '') {
		var host = dataModelObj.getDataById(jsonData.host_id);
		if (host != undefined) {
			card.setHost(host);
			if (host.getHeight() > host.getWidth()) {
				card.setStyle("label.rotation", -Math.PI / 2);
			}
		} else {
			return;
		}
	}
	if (jsonData.children_ids != undefined) {
		for (var i = 0; i < jsonData.children_ids.length; i++) {
			var child = dataModelObj.getDataById(jsonData.children_ids[i]);
			if (child != undefined) {
				card.addChild(child);
			}
		}
	}
	if (jsonData.occupiedSlots != '') {
		var slots = jsonData.occupiedSlots.split(",");
		var slotArr = new Array(slots.length);
		for (var i = 0; i < slots.length; i++) {
			slotArr[i] = dataModelObj.getDataById(slots[i]);
		}
		card.setLayer(1);
		card.setOccupiedSlots(slotArr);
	}
	if (jsonData.style != undefined) {
		for ( var name in jsonData.style) {
			card.setStyle(name, jsonData.style[name]);
		}
	}
	if (jsonData.alarm != undefined && jsonData.alarm.severity != '') {
		card.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonData.alarm.severity), parseInt(jsonData.alarm.alarmCount));
	}
	if (jsonData.attr != undefined) {
		for ( var name in jsonData.attr) {
			card.setAttr(name, jsonData.attr[name]);
		}
	}
	dataModelObj.add(card);
}

HTUtil.addEdge = function(source, target, jsonData, dataModelObj) {
	var edge = new ht.Edge();
	edge._id = jsonData.id;
	edge.setSource(source);
	edge.setTarget(target);
	edge.setName(jsonData.name);
	if (jsonData.toolTip != '') {
		edge.setToolTip(jsonData.toolTip);
	}
	if (jsonData.style != undefined) {
		for ( var name in jsonData.style) {
			if (name == 'edge.width') {
				edge.setStyle(name, parseInt(jsonData.style[name]));
			} else {
				edge.setStyle(name, jsonData.style[name]);
			}
		}
	}
	if (jsonData.alarm != undefined && jsonData.alarm.severity != '') {
		edge.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonData.alarm.severity), parseInt(jsonData.alarm.alarmCount));
	}
	if (jsonData.attr != undefined) {
		for ( var name in jsonData.attr) {
			edge.setAttr(name, jsonData.attr[name]);
		}
	}
	dataModelObj.add(edge);
};

HTUtil.addAlarm = function(jsonAlarm, dataModelObj) {
	var alarmNode = dataModelObj.getDataById(jsonAlarm.id);
	if (alarmNode != undefined) {
		alarmNode.getAlarmState().clear();
		alarmNode.setAttr("severity", jsonAlarm.severity);
		alarmNode.setAttr("alarmCount", jsonAlarm.alarmCount);

		var acknowledgedAlarm = jsonAlarm.acknowledgedAlarm;
		if (acknowledgedAlarm != undefined && acknowledgedAlarm != '') {
			alarmNode.getAlarmState().setAcknowledgedAlarmCount(ht.AlarmSeverity.getByName(jsonAlarm.severity), jsonAlarm.alarmCount);
		} else {
			alarmNode.getAlarmState().increaseNewAlarm(ht.AlarmSeverity.getByName(jsonAlarm.severity), jsonAlarm.alarmCount);
		}
		if (alarmNode instanceof ht.Edge) {
			if (!alarmNode.getStyle("edge.expanded")) {
				alarmNode.toggle();
			}
		}
	}
};

HTUtil.convertJsonToHTDispaly = function(json, dataModelObj) {

	
	var jsonSubGraph = json.subgraph;
	if (jsonSubGraph != undefined) {
		for (var i = 0; i < jsonSubGraph.length; i++) {
			HTUtil.addSubGraph(jsonSubGraph[i], dataModelObj);
		}
	}

	var jsonGroup = json.group;
	if (jsonGroup != undefined) {
		for (var i = 0; i < jsonGroup.length; i++) {
			HTUtil.addGroup(jsonGroup[i], dataModelObj);
		}
	}

	var serialString = json.serialString;
	if (serialString != undefined) {
		dataModelObj.deserialize(serialString, null, true);
	}

	var jsonData = json.data;
	if (jsonData != undefined) {
		for (var i = 0; i < jsonData.length; i++) {
			HTUtil.addData(jsonData[i], dataModelObj);
		}
	}
	var jsonNode = json.node;
	if (jsonNode != undefined) {
		for (var i = 0; i < jsonNode.length; i++) {
			HTUtil.addNode(jsonNode[i], dataModelObj);
		}
	}
	var jsonCard = json.card;
	if (jsonCard != undefined) {
		for (var i = 0; i < jsonCard.length; i++) {
			HTUtil.addCard(jsonCard[i], dataModelObj);
		}
	}
	var jsonEdge = json.edge;
	if (jsonEdge != undefined) {
		for (var i = 0; i < jsonEdge.length; i++) {
			var source = dataModelObj.getDataById(jsonEdge[i].source_id);
			var target = dataModelObj.getDataById(jsonEdge[i].target_id);
			if (source != undefined && target != undefined) {
				HTUtil.addEdge(source, target, jsonEdge[i], dataModelObj);
			}
		}
	}

	var jsonAlarm = json.alarm;
	if (jsonAlarm != undefined) {
		for (var i = 0; i < jsonAlarm.length; i++) {
			HTUtil.addAlarm(jsonAlarm[i], dataModelObj);
		}
	}

	var jsonGroup = json.group;
	if (jsonGroup != undefined) {
		for (var i = 0; i < jsonGroup.length; i++) {
			HTUtil.addGroupChildred(jsonGroup[i], dataModelObj);
		}
	}

	var jsonSubGraph = json.subgraph;
	if (jsonSubGraph != undefined) {
		for (var i = 0; i < jsonSubGraph.length; i++) {
			HTUtil.addSubGraphChildred(jsonSubGraph[i], dataModelObj);
		}
	}

};

HTUtil.convertJsonToHTAlarm = function(json, dataModelObj) {
	dataModelObj.each(function(data) {
		data.setAttr("severity", undefined);
		data.setAttr("alarmCount", undefined);
		data.getAlarmState().clear();
	});
	var jsonAlarm = json.alarm;
	if (jsonAlarm != undefined) {
		for (var i = 0; i < jsonAlarm.length; i++) {
			HTUtil.addAlarm(jsonAlarm[i], dataModelObj);
		}
	}
};

// 更新表格中的数据和分页信息
// pageIndex ：当前页数
// pageRowSize：每页显示行数
// rowSize：总行数
// pageTable：pageTable对象
HTUtil.updatePageTable = function(pageIndex, pageRowSize, rowSize, pageTable) {
	console.log("HTUtil.updatePageTable pageIndex[" + pageIndex + "]pageRowSize[" + pageRowSize + "]rowSize[" + rowSize + "]");
	if (pageIndex < 1) {
		pageIndex = 1;
	}
	var pageSize = Math.floor(rowSize / pageRowSize);
	if (rowSize % pageRowSize > 0) {
		pageSize += 1;
	}
	if (pageSize < 1) {
		pageSize = 1;
	}
	if (pageIndex > pageSize) {
		pageIndex = pageSize;
	}
	var firstRowIndex = Math.min((pageIndex - 1) * pageRowSize, rowSize - 1);
	var lastRowIndex = Math.min(firstRowIndex + pageRowSize - 1, rowSize - 1);

	var pageInfo = {
		rowSize : rowSize,
		pageIndex : pageIndex,
		pageSize : pageSize,
		pageRowSize : pageRowSize,
		firstRowIndex : firstRowIndex,
		lastRowIndex : lastRowIndex
	};

	pageTable.update(pageInfo);
};

HTUtil.showMask = function(msg, area) {
	HTUtil.loadIndex = layer.load(1, {
		shade : [ 0.1, '#fff' ]
	// 0.1透明度的白色背景
	});
}

HTUtil.hideMask = function() {
	layer.close(HTUtil.loadIndex);
}

HTUtil.msg = function(msg) {
	layer.msg(msg);
}

HTUtil.confirm = function(title, msg, successFunc) {
	var dialog = new ht.widget.Dialog();
	dialog.setConfig({
		title : title,
		titleAlign : "left",
		closable : true,
		draggable : true,
		content : "<p style='font-size:11px;color:#000000;margin-left: 30px;margin-right: 30px;'>" + msg + "</p>",
		buttons : [ {
			label : "取消"
		}, {
			label : "确定",
			className : "button-yes"
		} ],
		buttonsAlign : "right",
		action : function(item, e) {
			if (item.label == '确定') {
				successFunc(item.label, item.label);
			}

			dialog.hide();
		}
	});
	dialog.show();
}

HTUtil.alert = function(title, msg) {
	if (title) {
		layer.alert(msg, {
			icon : 0,
			title : title
		});
	} else {
		layer.alert(msg, {
			icon : 0
		});
	}
}

HTUtil.alert_v3 = function(title, msg, isAutoClose, time) {
	var dialog = new ht.widget.Dialog();
	if (time) {
		time = parseInt(time);
	} else {
		time = 3000;
	}
	var lable = "确定";

	dialog.setConfig({
		title : title,
		// titleIcon: 'node_image',//ht内部注册的图片名
		content : "<br/><p style='font-size:11px;color:#000000;margin-left: 30px;margin-right: 30px;'>  " + msg + "  </p>",
		width : 300,
		height : 100,
		draggable : true,
		closable : false,
		resizeMode : "wh",
		titleBackground : "#99BBE8",
		titleColor : "#FFFFFF",
		titleAlign : "left",
		borderWidth : 2,
		buttons : [ {
			label : lable,
			action : function(button, e) {
				dialog.hide();
			}
		} ],
		buttonsAlign : "center",
		action : function(item, e) {
			console.log(item, e);
		}
	});
	dialog.show();

	if (isAutoClose) {
		window.setTimeout(function() {
			if (dialog) {
				dialog.hide();
			}
		}, time);
	}
}

HTUtil.openHTWindow = function(title, url, width, height) {

	if (!width) {
		width = document.body.clientWidth - 10;
	}
	if (!height) {
		height = document.body.clientHeight - 20;
	}

	var dialog = new ht.widget.Dialog();
	dialog.setConfig({
		title : title,
		titleAlign : 'left',
		closable : true,
		draggable : true,
		maximizable : false,
		resizeMode : "wh",
		width : width,
		height : height,
		content : '<iframe src=' + url + ' frameborder="no" style="overflow:auto;width:100%;height:100%"></iframe>'
	})
	dialog.show();
	return dialog;
};

HTUtil.openWindow = function(title, url) {
	window.open(url, title, null);
};

/*
 * 导出table控件的数据
 */
HTUtil.exportTablePaneForExl = function(fileName, tablePane, isExportSelectModel) {

	var dataModel = tablePane.getDataModel();
	var datamodeljsonstr = dataModel.serialize(0);

	var columnModel = tablePane.getColumnModel();
	var columnnamesanddisplaynames = "";
	columnModel.each(function(data) {
		var isvisible = data.isVisible();
		if (isvisible != false) {
			var name = data.getName();
			if (name) {
				var displyname = data.getDisplayName();
				columnnamesanddisplaynames += name + "&" + displyname + ","
			}
		}
	});

	var input1 = $("<input type='hidden' name = 'exp_datamodeljsonstr'>").val(datamodeljsonstr);
	var input2 = $("<input type='hidden' name = 'exp_columnnamesanddisplaynames'>").val(columnnamesanddisplaynames);
	var input3 = $("<input type='hidden' name = 'exp_filename'>").val(fileName);

	var form = $("<form method='post' action='" + ctx + "/commonExtends/export/tablepaneforexl'></form>");
	form.append(input1).append(input2).append(input3);

	if (isExportSelectModel == true) {
		var sm = dataModel.getSelectionModel();
		var seldatalist = sm.getSelection();
		console.log("HTUtil.exportTablePaneForExl seldatalist:" + seldatalist);
		if (seldatalist == null || seldatalist.size() == 0) {
			HTUtil.alert('提示', '请先选择要导出的数据。');
			return;
		} else {
			var input4 = $("<input type='hidden' name = 'exp_selectdataidstr'>").val(seldatalist + "");
			form.append(input4)
		}
	}

	form.appendTo(document.body);
	form.submit();
	document.body.removeChild(form[0]);

}

/*
 * url:访问后台controler URL fileName:导出文件的文件名(可以为空) params：参数，json的数据格式，key
 * 匹配后台controler中的入参。样例：{name1:value1,name2:value2}
 * tablePane:当前表格组件，可以实现根据当前列来导出表格（可以为空）
 */

HTUtil.exportDataForExl = function(url, fileName, params, tablePane, isModel) {
	if (url) {
		var form = $("<form method='post' action='" + ctx + url + "'></form>");
		if (params != undefined && params != null) {
			for ( var key in params) {
				var input = $("<input type='hidden' name = '" + key + "'>").val(params[key]);
				form.append(input);
			}
		}
		if (fileName != undefined && fileName != null && fileName) {
			var input = $("<input type='hidden' name = 'fileName'>").val(fileName);
			form.append(input);
		}

		// if(isModel===true){
		if (tablePane != undefined && tablePane != null && tablePane) {
			var columnModel = tablePane.getColumnModel();
			var columnnamesanddisplaynames = "";
			columnModel.each(function(data) {
				var isvisible = data.isVisible();
				if (isvisible != false) {
					var name = data.getName();
					if (name) {
						var displyname = data.getDisplayName();
						columnnamesanddisplaynames += name + "&" + displyname + ","
					}
				}
			});
			var input = $("<input type='hidden' name = 'exp_columnnamesanddisplaynames'>").val(columnnamesanddisplaynames);
			form.append(input);

			params['exp_columnnamesanddisplaynames'] = columnnamesanddisplaynames;
			params['fileName'] = fileName;
			//params['flag'] = 0;//网络质量/网络质量隐患分析重点指标/SDH/PTN成环率(湖南菜单)导出全部有flag这个参数做状态判断，所以先注释掉
		}
		// }

		form.appendTo(document.body);
		
		form.submit();
		document.body.removeChild(form[0]);
		
		/*
		// 构造表单数据
		var formData = new FormData();

		for ( var key in params) {
			formData.append(key, params[key]);
		}

		let  date1 = new Date();
		
		fileName+=date1.getFullYear()+(date1.getMonth()+1)+date1.getDate()+date1.getHours()+date1.getMinutes()+date1.getSeconds();
		
		// 创建xhr对象
		var xhr = new XMLHttpRequest();
		// 设置xhr请求的超时时间 2min
		xhr.timeout = 120000;
		// 设置响应返回的数据格式
		xhr.open('POST', ctx + url, true);
		xhr.responseType = 'blob';
		// 注册相关事件回调处理函数
		xhr.onload = function(e) {
			if (this.status == 200) {
				if (decodeURI(this.getResponseHeader("data"))&&decodeURI(this.getResponseHeader("data"))!='null') {
					HTUtil.alert("提示", decodeURI(this.getResponseHeader("data")));
				} else {
					var blob = new Blob([ this.response ], {
						type : 'application/vnd.ms-excel'
					});
					var a = document.createElement('a');
					var url = window.URL.createObjectURL(blob);
					var filename = fileName + ".xlsx";
					a.href = url;
					a.download = fileName + ".xlsx";
					a.click();
					window.URL.revokeObjectURL(url);
				}
			}
			else {
				HTUtil.alert("提示","导出失败");
			}
		};

		// 发送数据
		xhr.send(formData);*/

		// $.ajax({
		// url : ctx + url,
		// data : params,
		// type : "POST",
		// async : false,
		// timeout : 120 * 1000,
		// success : function(data, textStatus) {
		// if(typeof(data)=='object'){
		// HTUtil.alert("提示",data.message);
		// }
		// else {
		// var a = document.createElement('a');
		// var blob = new Blob([encodeURI(data)], {type:
		// 'application/vnd.ms-excel'});
		// var url = window.URL.createObjectURL(blob);
		// var filename = fileName + ".xlxs";
		// a.href = url;
		// a.download = fileName + ".xlxs";
		// a.click();
		// window.URL.revokeObjectURL(url);
		// }
		// }
		// });

		//document.body.removeChild(form[0]);
	} else {
		HTUtil.alert('错误', '导出的URL为空。');
	}
}

HTUtil.initTreeViewStyle = function(treeView) {
	if (!treeView) {
		return;
	}
	treeView.getLabelColor = function(data) {
		return "#FFFFFF";
	}
	treeView.setSelectBackground('#FFE48D');
	treeView.setCollapseIcon(ctx + '/static/ht-4.3/images/tree/elbow-plus.gif');
	treeView.setExpandIcon(ctx + '/static/ht-4.3/images/tree/elbow-minus.gif');
	treeView.getIcon = function(data) {
		if (!data.getChildren() || data.getChildren().size() == 0) {
			return ctx + '/static/ht-4.3/images/tree/leaf.gif';
		} else {
			if (this.isExpanded(data)) {
				return ctx + '/static/ht-4.3/images/tree/folder-open.gif';
			} else {
				return ctx + '/static/ht-4.3/images/tree/folder.gif';
			}
		}
	};
}
// isPageModel：是否分页参数：true/alfse，可以为空，默认为 true
HTUtil.initPageRowSize = 20;
HTUtil.initPageIndex = 1;
HTUtil.initHTPageTable = function(isPageModel) {
	var dataModel = new ht.DataModel();
	var pageTablePane = new ht.widget.PageTable(dataModel);
	// 列表初始化
	pageTablePane.getTableView().drawRowBackground = function(g, data, selected, x, y, width, height) {// 绘制了列表行交替斑马线的效果
		if (this.isSelected(data)) {
			g.fillStyle = '#87A6CB';
		} else if (this.getRowIndex(data) % 2 === 0) {
			g.fillStyle = '#F1F4F7';
		} else {
			g.fillStyle = '#FAFAFA';
		}
		g.beginPath();
		g.rect(x, y, width, height);
		g.fill();
	};
	pageTablePane._tablePane.getTableHeader().setHeight(25);// 设置行高
	
	if(PUBLIC_PROVINCE == 'yunnan')  pageTablePane._tablePane.getTableHeader().setMovable(false)///设置列头不可移动
	
	
	
	pageTablePane.getTableView().setRowHeight(25);// 设置行高
	pageTablePane.getTableView().setValue = function() {
	};// 重写编辑表格方法
	pageTablePane.getTableView().setCheckMode(false);

	// 初始化分页信息
	if (isPageModel == false) {
		pageTablePane.isPageModel = false;
		pageTablePane._borderPane.setTopView(null);
		pageTablePane._borderPane.setBottomView(null);
	} else {
		pageTablePane.isPageModel = true;
		pageTablePane.setPageIndex(HTUtil.initPageIndex);
		pageTablePane.setPageRowSize(HTUtil.initPageRowSize);
		pageTablePane._borderPane.setTopView(null);
		pageTablePane._borderPane.setBottomView(pageTablePane._toolbar);
		pageTablePane._borderPane.setBottomHeight(60);
		pageTablePane.requestTotalCount = 0;
		HTUtil.updatePageTable(pageTablePane.getPageIndex(), pageTablePane.getPageRowSize(), 0, pageTablePane);
	}

	pageTablePane.totalCountRequestCount = 0;
	pageTablePane.totalCountResponseCount = 0;

	pageTablePane.loadData = function(url, params, isPagingRequest, isNotQueryTotalCount) {
		if (url == undefined) {
			return;
		}
		if (!params) {
			params = {};
		}
		console.log("HTPageTable loadData isPageModel[" + pageTablePane.isPageModel + "] isPagingRequest[" + isPagingRequest + "]");
		if (pageTablePane.isPageModel == true) {
			if (isPagingRequest != true) {
				pageTablePane.setPageIndex(HTUtil.initPageIndex);
				pageTablePane.setPageRowSize(HTUtil.initPageRowSize);
			}
			params.pageIndex = pageTablePane.getPageIndex();
			params.pageRowSize = pageTablePane.getPageRowSize();

			pageTablePane.requestUrl = url;
			pageTablePane.requestParams = params;
			pageTablePane.isNotQueryTotalCount = isNotQueryTotalCount;
		}
		HTUtil.requestServer(url, params, function(result) {
			var dataModel = pageTablePane.getDataModel();
			dataModel.clear();
			if (result && result.userdata && result.userdata.length > 0) {
				HTUtil.convertDataArrayToHTTableDispaly(result.userdata, dataModel);
				pageTablePane._firstItem.disabled = false;
				pageTablePane._previousItem.disabled = false;
				pageTablePane._nextItem.disabled = false;
				pageTablePane._lastItem.disabled = true;
			}

			// -----------更新分页信息-----------
			if (pageTablePane.isPageModel == true) {
				// 更新页面总记录数
				if (result == undefined || result.userdata == undefined || result.userdata.length == 0) {
					// 如果查询结果为空，没有必要查询数据总数
					if (isNotQueryTotalCount != true) {
						HTUtil.updatePageTable(params.pageIndex, params.pageRowSize, 0, pageTablePane);
					}
				} else {
					if (isNotQueryTotalCount != true) {
						// 如果查询结果不为空
						if (isPagingRequest != true) { // 如果不是上一页，下一页等分页操作，才重新查询数据总数
							pageTablePane.totalCountRequestCount += 1;
							console.log("HTPageTable loadData totalcount start pageTablePane.totalCountRequestCount[" + pageTablePane.totalCountRequestCount + "]");
							HTUtil.requestServer(url + "/totalcount", params, function(result) {
								if (result && result.userdata != undefined) {
									var totalcount = parseInt(result.userdata);
									pageTablePane.requestTotalCount = totalcount;
									pageTablePane.totalCountResponseCount += 1;
									console.log("HTPageTable loadData totalcount end pageTablePane.totalCountResponseCount[" + pageTablePane.totalCountResponseCount + "]");
									if (pageTablePane.totalCountRequestCount == pageTablePane.totalCountResponseCount) {
										HTUtil.updatePageTable(params.pageIndex, params.pageRowSize, totalcount, pageTablePane);
									}
								}
							}, null, null, true);
						} else {

							HTUtil.updatePageTable(params.pageIndex, params.pageRowSize, pageTablePane.requestTotalCount, pageTablePane);
						}
					}
				}
			}
			// -----------更新分页信息-------------
		});
		//---------表格列可编辑------------
		var columnModel =  pageTablePane.getTableView().getColumnModel();
		
		columnModel.each(function(data){
			//console.log(data._displayName+":"+	data.drawCell);
			if(typeof data.drawCell != 'function'){//判断列表重绘不可编辑
				data.setEditable(true);
			}
		});
	};
	if (pageTablePane.isPageModel == true) {
		// 注册点击上一页、下一页的分页事件
		pageTablePane.request = function() {
			pageTablePane.loadData(this.requestUrl, this.requestParams, true, this.isNotQueryTotalCount);
		}
	}

	return pageTablePane;
}

// treeDataModel 菜单名称 访问URL 上级节点 节点图标
HTUtil.addDataToMenuTree = function(treeDataModel, name, url, parent, icon) {
	var data = new ht.Data();
	data.setName(name);
	if (icon) {
		data.setIcon(icon);
	}
	if (url) {
		data.setAttr("url", url);
	}
	if (parent) {
		data.setParent(parent);
	}
	treeDataModel.add(data);
	return data;
}

HTUtil.layerConfirm = function(prompt, confirmFanc, cancelFanc) {
	layer.confirm(prompt, {
		btn : [ '确定', '取消' ], // 按钮
		yes : confirmFanc,
		cancel : function() {
			return;
		}
	});
}

HTUtil.isEmptyTablePane = function(tablePane) {
	var flag = true;
	if (tablePane && tablePane._tablePane && tablePane._tablePane.getDataModel() && tablePane._tablePane.getDataModel().size() > 0) {
		flag = false;
	}
	return flag;
}

/*
 * select_id : bootstrap-select 控件ID tablePane：表格组件对象
 * select_status:初始化选中状态
 * select_data:初始化选中的表头列（数组）例如：['地市','厂家']
 * 
 */
HTUtil.initColumnModelFilter = function(select_id, tablePane,select_status,select_data) {
	
	
	
	if (!select_id || !tablePane) {
		return;
	}
	var currentEm = $("#" + select_id);
	var columnModel = tablePane.getColumnModel();

	if (!currentEm) {
		return;
	}
	if (!columnModel) {
		return;
	}
	var htmlOptions = "";

	var values = [];

	currentEm.selectpicker({
		noneSelectedText : '请选择',
		width : '35px',
		windowPadding : 10,
		dropdownAlignRight : 'auto',
		dropupAuto : true,
		size : 10,
		windowPadding : '20px'
	});

	columnModel.each(function(data) {
		var name = data.getDisplayName();
		if (name) {

			var option = '<option value="' + name + '">' + name + '</option>';
			htmlOptions += option;
			if(data.isVisible()){
				values.push(name);
			};
		}
	});
	// 将所有列的名称添加到select元素中
	currentEm.html(htmlOptions);
	// 默认选中所有（根据select_status判断是选中所有 还是初始化选中select_data）
	if(select_status && select_data){
		// 清空选中状态
		columnModel.each(function(column) {
			column.setVisible(false);
			// 对增量部分重新设置是否可见
			var name = column.getDisplayName();
			for (var i = 0; i < select_data.length; i++) {
				if (name == select_data[i]) {
					column.setVisible(true);
					break;
				}
			}
		});
		currentEm.selectpicker('val', select_data);
	}else{
		currentEm.selectpicker('val', values);
	}
	currentEm.selectpicker('refresh');// 刷新组件

	currentEm.prev().prev().children().css("width", "0%");

	// 注册选中变化事件
	currentEm.on('changed.bs.select', function(e) {
		var selectedArray = currentEm.val();
		var columnModel = tablePane.getColumnModel();
		
		// 清空选中状态
		columnModel.each(function(column) {
			if(column.getDisplayName()){
				//console.log(column._id);
				column.setVisible(false);
			}
		});
		// 全部选中
		columnModel.each(function(column) {
			// 对增量部分重新设置是否可见
			var name = column.getDisplayName();
			for (var i = 0; i < selectedArray.length; i++) {
				if (name == selectedArray[i]) {
					column.setVisible(true);
					break;
				}
			}
		});
	});
	
	//保存自定义列
	currentEm.on('hidden.bs.select', function(e) {
		if(tablePane.pageUrl){
			HTUtil.saveUserDefinedCol(tablePane,tablePane.pageUrl);
		}
	});
	
    
    //根据用户自定义列重置显示列
	HTUtil.queryUserDefinedCol(tablePane,currentEm);

}

/*
 * 用户自定义列显示查询方法
 * tablePane：表格组件,需要存在pageUrl属性：当前页面url，如：/pages/business/transmission/specified/specified.jsp
 * bs_select：自定义列组件对象·
 * 
*/
HTUtil.queryUserDefinedCol = function(tablePane,bs_select) {
	if (!tablePane || !tablePane.pageUrl) {
		return;
	}
	let columNameArr = new Array();
	let columDisplayNameArr=[];
	let columnModel = tablePane.getColumnModel();
	columnModel.each(function(data) {
		var name = data.getName();
		var displayName= data.getDisplayName();
		if (name && displayName) {
			if(data.isVisible()){
				columNameArr.push(name);
			}
		}
	});
	
	HTUtil.requestServer("/common/user_defined_col/query_by_condition", {
			pageurl:tablePane.pageUrl,
			viewcols:columNameArr.toString()
		}, function(result){
			if(!result || result.success == false){
				return;
			}
			let userColumNameArr = result.userdata.split(",");
			if(bs_select){
				bs_select.selectpicker('val', userColumNameArr);
			}
			
			// 清空选中状态
			columnModel.each(function(column) {
				if(column.getDisplayName()){
					//console.log(column._id);
					column.setVisible(false);
				}
			});
			
			let userColumDisplayNameArr = new Array();
			// 全部选中
			columnModel.each(function(column) {
				// 对增量部分重新设置是否可见
				var name = column.getName();
				//console.log(name,userColumNameArr);
				for (var i = 0; i < userColumNameArr.length; i++) {
					
					if (name == userColumNameArr[i]) {
						let displayName = column.getDisplayName();
					
						userColumDisplayNameArr.push(displayName);
						column.setVisible(true);
						break;
					}
				}
			});
			
			//console.log(columDisplayNameArr,userColumDisplayNameArr);
			
			bs_select.selectpicker('val', userColumDisplayNameArr);
		}
	); 
}

/*
 * 用户自定义列显示保存方法
 * tablePane：表格组件,需要存在pageUrl属性：当前页面url，如：/pages/business/transmission/specified/specified.jsp
*/
HTUtil.saveUserDefinedCol = function(tablePane) {
	if (!tablePane || !tablePane.pageUrl) {
		return;
	}
	let columNameArr = new Array();
	let columnModel = tablePane.getColumnModel();
	columnModel.each(function(data) {
		var name = data.getName();
		if (name) {
			if(data.isVisible()){
				columNameArr.push(name);
			};
		}
	});
	
	HTUtil.requestServer("/common/user_defined_col/update_by_condition", {
			pageurl:tablePane.pageUrl,
			viewcols:columNameArr.toString()
		}, function(result){
			if(!result || result.success == false){
				return;
			}
		}
	); 
}

HTUtil.NAU = function(v) {
	if (v == undefined || v == null) {
		v = "";
	} else {
		v;
	}
	return v;
}

HTUtil.isExceptionIndexValue = function(indexValue) {

	indexValue = indexValue.trim();

	if (indexValue == null || indexValue == "null" || indexValue == "" || indexValue == "99999" || indexValue == "99998" || indexValue == "99997" || indexValue == "65535" || indexValue == "-65535"
			|| indexValue == "99999.00" || indexValue == "99998.00" || indexValue == "99997.00" || indexValue == "65535.00" || indexValue == "-65535.00") {
		return true;
	} else {
		return false;
	}
}

HTUtil.getExceptionIndexValue = function(type) {
	var defExcStr = "--/--";
	if (type == 1) {
		defExcStr = "";
	} else if (type == 2) {

	} else if (type == 3) {

	}
	return defExcStr;
}
// HT表格组件，存取列排序函数，用于自定义排序逻辑
HTUtil.setHtTableSortFunc = function(v1, v2, d1, d2) {
	v1 = parseFloat(v1);
	v2 = parseFloat(v2);
	if (v1 === v2) {
		return 0;
	}
	if (v1 > v2) {
		return -1;
	} else {
		return 1;
	}
}

HTUtil.createColumnDivForInAndOut = function(text_in,text_out){
    var div = document.createElement('div');
    div.setAttribute('align', 'center');
    if(name_i){
        var div_t = document.createElement('div');
        div_t.style.paddingTop = '5px';
        div_t.style.color = 'black';
        div_t.innerHTML = text_in;
        div.appendChild(div_t);
    }

    if(name_o){
        var div_b = document.createElement('div');
        div_b.style.paddingTop = '5px';
        div_b.style.color = 'black';
        div_b.innerHTML = text_out;
        div.appendChild(div_b);
    }
    return div;
}


