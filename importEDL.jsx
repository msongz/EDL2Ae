function loc(text) {
	return "zh_CN" == app.isoLanguage ? text.cn : text.en
}
function strObj() {
	this.version = "2.1";
	this.copyRight = "Copyright (c) 2016 songz meng";
	this.Homepage = "weibo.com/songz";	
	this.title = {
		cn: "\u5bfc\u5165 EDL",
		en: "import EDL"
	};
	this.path = {
		cn: "\u8def\u5f84:",
		en: "path:"
	};
	this.noFile = {
		cn: "\u6587\u4ef6\u4e0d\u5b58\u5728",
		en: "file not exists"
	};
	this.imPort = {
		cn: "\u5bfc\u5165",
		en: "import"
	};
	this.cancel = {
		cn: "\u5173\u95ed",
		en: "cancel"
	};
	this.Audio = {
		cn: "\u5305\u62ec\u97f3\u9891",
		en: "include audio"
	};
	this.fps = {
		cn: "\u5e27\u901f:",
		en: "fps:"
	};
	this.height = {
		cn: "\u9ad8\u5ea6:",
		en: "height:"
	};
	this.width = {
		cn: "\u5bbd\u5ea6:",
		en: "width:"
	};
	this.fileSelect = {
		cn: "\u9009\u62e9 EDL \u6587\u6863",
		en: "select EDL file"
	};
	this.about = {
		cn: "EDL \u5bfc\u5165\u811a\u672c v2.0.jsx\\nCopyright (c) 2016 songz meng\\nhttp://weibo.com/songz\\n\\n\u6b64\u811a\u672c\u5141\u8bb8\u4f60\u901a\u8fc7\u5bfc\u5165 vegas \u7684 EDL \u6587\u4ef6\u5728 AE \u751f\u6210\u4e00\u6837\u7684\u5408\u6210",
		en: "EDL import v2.0.jsx\\nCopyright (c) 2016 songz meng\\nhttp://weibo.com/songz\\n\\nthis script allows you import the edl file exported from vegas,and creates the same composition"
	};
	this.usage = {
		cn: ">\u9996\u5148\u5728 vegas \u7c97\u526a\\n>\u7136\u540e\u9009\u62e9\u5bfc\u51fa EDL\\n>\u5728 AE \u8fd0\u884c\u6b64\u811a\u672c\\n>\u9009\u62e9\u5bfc\u51fa\u7684 EDL \u5e76\u70b9\u51fb\u5bfc\u5165\\n\\n*\u652f\u6301\u7d20\u6750\u4f38\u7f29\\n*\u652f\u6301\u7d20\u6750\u4e22\u5931",
		en: ">first edit clip in vegas\\n>then select export->EDL\\n>run the script in AE\\n>select the EDL file and click import\\n\\n*support footage stretched\\n*support missing footage"
	};
	this.compSet = {
		cn: "EDL \u5408\u6210\u8bbe\u7f6e",
		en: "EDL comp setting"
	};
	this.otherScript = {
		cn: "\u5176\u4ed6\u811a\u672c...",
		en: "other scripts..."
	};
	this.descript = {
		cn: "\u6982\u8ff0",
		en: "description"
	};
	this.use = {
		cn: "\u4f7f\u7528",
		en: "usage"
	};
	this.abt = {
		cn: "\u5173\u4e8e",
		en: "about"
	}
}
function edlHelp() {
    var res ="group { orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'], \
                            pnl: Panel { type:'tabbedpanel', \
                                aboutTab: Panel { type:'tab', text:'" + loc(str.descript) + "', \
                                aboutEt: EditText { text:'" + loc(str.about) + "', preferredSize:[200,100], properties:{multiline:true} } \
                            }, \
                                usageTab: Panel { type:'tab', text:'" + loc(str.use) + "', \
                                usageEt: EditText { text:'" + loc(str.usage) + "', preferredSize:[200,100], properties:{multiline:true} } \
                        } \
                    }, \
                    btns: Group { orientation:'row', alignment:['fill','bottom'], \
                        otherScriptsBtn: Button { text:'" + loc(str.otherScript) + "', alignment:['left','center'] }, \
                        okBtn: Button { text:'" + loc(str.cancel) + "', alignment:['right','center'] } \
                } \
            }";	
    var helpWin = new Window("palette", loc(str.abt));
    helpWin.gr = helpWin.add(res);
    helpWin.gr.btns.otherScriptsBtn.onClick = function() {
    var cmd = "";
    var url = "http://github.com/msongz";
    if ($.os.indexOf("Win") != -1) {
        if (File("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe").exists) {
            cmd += "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe " + url
        } else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) {
            cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url
            } else {
                cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url
        }
        } else {
			cmd += "open \"" + url + "\""
		}
		try {
			system.callSystem(cmd)
		} catch (e) {
			alert(e)
		}
	};
	helpWin.gr.btns.okBtn.onClick = function() {
		helpWin.close()
	};
	helpWin.center();
	helpWin.show()
}
function buildUI() {
	str = new strObj;
	var res = "palette { text:'" + str.copyRight + "',\r\n                info:Panel { orientation: 'column', alignChildren:'fill', text: '" + loc(str.title) + "', \r\n                                g1: Group { orientation: 'row', \r\n                                                    s: StaticText { text:'" + loc(str.path) + "' }, \r\n                                                    e: EditText { characters: 20 }, \r\n                                                    b: Button { text:'...',preferredSize:[35,23]}\r\n                                          },\r\n                                g2: Group { orientation:'row',alignment:'',\r\n                                                    c1: Checkbox { alignment:'left',text:'" + loc(str.Audio) + "'}, \r\n                                                    c2: Checkbox { alignment:'right',text:'allow fade in/out'}\r\n                                          }\r\n                            }, \r\n                comp:Panel{orientation:'row',alignment:'fill',text:'" + loc(str.compSet) + "',\r\n                            g3: Group { orientation: 'row',\r\n                                            width:StaticText{text:'" + loc(str.width) + "'},\r\n                                            edtxw: EditText{characters:3},\r\n                                            height:StaticText{text:'" + loc(str.height) + "'},\r\n                                            edtxh: EditText{characters:3},\r\n                                            rate:StaticText{text:'" + loc(str.fps) + "'},\r\n                                            edtxr: EditText{characters:4}\r\n                                            }\r\n                                        },\r\n              btns: Group { orientation: 'row', \r\n                                            okBtn: Button { text:'" + loc(str.imPort) + "'},\r\n                                            cancelBtn: Button { text:'" + loc(str.cancel) + "'},\r\n                                                 \r\n                                },\r\n                   helpBtn: Button{text:'?',alignment:'right',preferredSize:[25,25]}\r\n  }";
	win = new Window(res);
	win.info.g2.c2.visible = !1;
	win.comp.g3.edtxw.text = 1920;
	win.comp.g3.edtxh.text = 1080;
	win.comp.g3.edtxr.text = "25.00";
	win.comp.g3.edtxr.onChange = win.comp.g3.edtxh.onChange = win.comp.g3.edtxw.onChange = validNum;
	win.info.g1.b.onClick = function() {
		var txtFile = File.openDialog(loc(str.fileSelect), "*.txt;*.edl", !1);
		win.info.g1.e.text = txtFile ? txtFile.fsName : win.info.g1.e.text
	};
	win.btns.cancelBtn.onClick = function() {
		win.close()
	};
	win.btns.okBtn.onClick = exec;
	win.helpBtn.onClick = edlHelp;
	win.show()
}
buildUI();

function validNum() {
	var inPut = this.text;
	if (isNaN(inPut) || 4 > inPut) this.text = 4
}
function Max(arr) {
	return Math.max.apply(null, arr)
}
function read(txt) {
	var txtRead = [];
	if (txt.exists) {
		for (txt.open("r"); !txt.eof;) txtRead[txtRead.length] = txt.readln().split(";");
		txt.close()
		for (i = 0; i< txtRead.length;i++) for(j = 0;j<txtRead[i].length;j++) txtRead[i][j]=clean(txtRead[i][j]);
	} else alert(loc(str.noFile));
	return txtRead
}
function clean(text) {
    var reg = /(^\s)|(\s$)|(\")/g;
    return text.replace(reg, "");
}
function map(arr, refer) {
	for (var txtMap = [], d = 0; d < arr.length; d++) {
		tempObj = {};
		refLine = arr[refer];
		otherLine = arr[d];
		for (x = 0; x < refLine.length; x++) tempObj[refLine[x]] = otherLine[x];
		txtMap.push(tempObj)
	}
	return txtMap
}
function uniArr(arr) {
	var b = {},
		uArr = [];
	for (i = 0; i < arr.length; i++) b[arr[i]] || (uArr.push(arr[i]), b[arr[i]] = !0);
	return uArr
}
function matchObj(txtMap, itemName, itemVal) {
	var d = [],e = [],f = [],g = [];
	for (i = 1; i < txtMap.length; i++) txtMap[i][itemName] == itemVal ? (d.push(txtMap[i].FileName), e.push(i)) : (f.push(txtMap[i].FileName), g.push(i));
	return {
		path: d,
		num: e,
		audio: f,
		anum: g
	}
}
function itemIndex(importPath) {
	var importID = [],
		importIndex = [];
	for (i = 0; i < importPath.length; i++) try {
		importObj = new ImportOptions(File(File.encode(importPath[i]))), fileImported = app.project.importFile(importObj), fileImported.parentFolder = edlFolder, importID.push(fileImported.id)
	} catch (e) {
		fileImported = app.project.importPlaceholder(File(importPath[i]).displayName, width, height, frameRate, 1E4), fileImported.parentFolder = edlFolder, importID.push(fileImported.id)
	}
	for (t = 0; t < importID.length; t++) for (j = 1; j <= aeItem.length; j++) aeItem[j].id == importID[t] && importIndex.push(j);
	return importIndex
}
function exec() {
	app.beginUndoGroup("import edl");
	compName = "edl-" + File(win.info.g1.e.text).displayName;
	width = parseInt(win.comp.g3.edtxw.text);
	height = parseInt(win.comp.g3.edtxh.text);
	frameRate = win.comp.g3.edtxr.text;
	txt = File(File.encode(win.info.g1.e.text));
	aeItem = app.project.items;
	edlComp = aeItem.addComp(compName, width, height, 1, 100, frameRate);
	edlFolder = aeItem.addFolder(compName);
	edlComp.parentFolder = edlFolder;
	mapEDL = map(read(txt), 0);
	typeVDO = matchObj(mapEDL, "MediaType", "VIDEO");
	finalPath = win.info.g2.c1.value ? uniArr(typeVDO.path.concat(typeVDO.audio)) : uniArr(typeVDO.path);
	finalIndex = itemIndex(finalPath);
	mtchNum = win.info.g2.c1.value ? typeVDO.num.concat(typeVDO.anum) : typeVDO.num;
	for (z = 0; z < mtchNum.length; z++) for (w = 0; w < finalIndex.length; w++) aeItem[finalIndex[w]].name == File(mapEDL[mtchNum[z]].FileName).displayName && edlComp.layers.add(aeItem[finalIndex[w]]).moveToEnd();
	maxOutPoint = [];
	for (q = 1; q <= edlComp.numLayers; q++) {
		var vv = mapEDL[mtchNum[q - 1]],
			ae = edlComp.layer(q);
		ae.audioEnabled = !1;
		ae.stretch = 100 / parseFloat(vv.PlayRate);
		ae.startTime = (parseFloat(vv.StartTime) - parseFloat(vv.StreamStart)) / 1E3;
		ae.inPoint = parseFloat(vv.StartTime) / 1E3;
		ae.outPoint = (parseFloat(vv.StartTime) + parseFloat(vv.Length)) / 1E3;
		maxOutPoint.push(ae.outPoint)
	}
	edlComp.duration = Max(maxOutPoint);
	try {
		for (h = typeVDO.num.length; h < edlComp.numLayers; h++) edlComp.layer(h + 1).audioEnabled = !0, edlComp.layer(h + 1).enabled = !1, edlComp.layer(h + 1).label = 2
	} catch (e) {
		alert(e)
	}
	edlComp.openInViewer();
	app.endUndoGroup()
};
