htconfig = {
    //中兴：#FBE9D2 ，华为：#3F6B85，烽火：#D9E0E9，
	background: '#D9E0E9',
	Color: {
    },
	Default:{        
		toolTipDelay: 100,
        toolTipContinual: true,
        
    	lineCap: 'butt',
    	tableHeaderLabelColor:"#FFFFFF",
    	tableHeaderLabelFont:"14px 微软雅黑, sans-serif",
    	tableHeaderColumnLineVisible:true,
    	tableHeaderColumnLineColor:"#FFFFFF",
    	tableHeaderBackground:"#337AB7",
    	
    	tableViewLabelColor:"#000000",
    	tableViewLabelFont:"12px 微软雅黑, sans-serif",
    	tableViewColumnLineVisible:true,
    	tableViewRowLineVisible:true,
    	tableViewRowLineColor:"#FFFFFF",
    	tableViewColumnLineColor:"#FFFFFF",
    	tableViewLabelSelectColor:"#000000",
    	tableViewSelectBackground:"#FFFFCC",
    	
    	tabViewTabGap:1,//该属性决定页签组件间距
    	tabViewLabelColor:"#FFFFFF",//"#1C4185",
    	tabViewLabelFont:"12px 微软雅黑,sans-serif",
    	tabViewTabBackground:"#8FC7DD",
    	tabViewSelectWidth:100,//该属性决定页签组件选中宽度
    	tabViewSelectBackground:"#337AB7",
    	tabViewMoveBackground: "rgba(0,0,0,0.35)",//该属性决定页签组件移动状态背景
    	tabViewInsertColor:"#1ABC9C",//该属性决定页签组件插入状态颜色
    		
		accordionViewCollapseIcon: {  //"该属性决定折叠组件展开状态图标",
            width: 14,
            height: 14,
            comps: [
                {
                  type: 'shape',
                  points: [0, 7, 14, 7, 7, 0, 7, 14],
                  segments: [1, 2, 1, 2],
                  borderWidth: 2,   
                  borderColor: '#FFFFFF'
                }
            ]
        },
        accordionViewExpandIcon: {   //"该属性决定折叠组件关闭状态图标",
            width: 16,
            height: 16,
            comps: [
                {
                  type: 'shape',
                  points: [0, 8, 16, 8],
                  segments: [1, 2],
                  borderWidth: 2,   
                  borderColor: '#FFFFFF'
                }
            ]
        },
	    accordionViewLabelColor: "#FFFFFF",//"#FFF，该属性决定折叠组件文字颜色",
	    accordionViewLabelFont: "12px 微软雅黑,sans-serif",//"12px arial, sans-serif，该属性决定折叠组件文字字体",
	    accordionViewTitleBackground: "#337AB7",//"#2C3E50，该属性决定折叠组件抬头背景",
	    accordionViewSelectBackground: "#337AB7",//"#1ABC9C，该属性决定折叠组件选中背景",
	    accordionViewSelectWidth: 3,//"3，该属性决定折叠组件选中宽度",
	    accordionViewSeparatorColor: "#FFFFFF"//"undefined，该属性决定折叠组件分隔条颜色",

    },
    Style: {
    	'edge.expanded': false,
    	'edge.center' : true,
    	'labelFont' : '12px arial',
    	'select.color': '#0000FF',
        'select.width': 1,
        'select.padding': 1
    }
}; 

