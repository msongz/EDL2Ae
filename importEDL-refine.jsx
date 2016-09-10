function loc(a) {
	return "zh_CN" == app.isoLanguage ? a.cn : a.en
}
function strObj() {
	this.title = {
		cn: "\u5bfc\u5165 EDL",
		en: "import EDL"
	};
	this.version = "2.0";
	this.copyRight = "Copyright (c) 2016 songz meng";
	this.Homepage = "weibo.com/songz";
	this.path = {
		cn: "\u8def\u5f84:",
		en: "path:"
	};
	this.help = {
		cn: "",
		en: ""
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
		en: "EDL import v2.0.jsx\\nCopyright (c) 2016 songz meng\\nhttp://msongz.site\\n\\nthis script allows you import the edl file exported from vegas,and creates the same composition"
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
	var a = "group { orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'], \r\n                            pnl: Panel { type:'tabbedpanel', \r\n                                aboutTab: Panel { type:'tab', text:'" + loc(str.descript) + "', \r\n                                aboutEt: EditText { text:'" + loc(str.about) + "', preferredSize:[200,100], properties:{multiline:true} } \r\n                            }, \r\n                                usageTab: Panel { type:'tab', text:'" + loc(str.use) + "', \r\n                                usageEt: EditText { text:'" + loc(str.usage) + "', preferredSize:[200,100], properties:{multiline:true} } \r\n                        } \r\n                    }, \r\n                    btns: Group { orientation:'row', alignment:['fill','bottom'], \r\n                        otherScriptsBtn: Button { text:'" + loc(str.otherScript) + "', alignment:['left','center'] }, \r\n                        okBtn: Button { text:'" + loc(str.cancel) + "', alignment:['right','center'] } \r\n                } \r\n            }",
		b = new Window("palette", loc(str.abt));
	b.gr = b.add(a);
	b.gr.btns.otherScriptsBtn.onClick = function() {
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
		}		try {
			system.callSystem(cmd)
		} catch (b) {
			alert(b)
		}
	};
	b.gr.btns.okBtn.onClick = function() {
		b.close()
	};
	b.center();
	b.show()
}
function buildUI() {
	str = new strObj;
	var a = "palette { text:'" + str.copyRight + "',\r\n                info:Panel { orientation: 'column', alignChildren:'fill', text: '" + loc(str.title) + "', \r\n                                g1: Group { orientation: 'row', \r\n                                                    s: StaticText { text:'" + loc(str.path) + "' }, \r\n                                                    e: EditText { characters: 20 }, \r\n                                                    b: Button { text:'...',preferredSize:[35,23]}\r\n                                          },\r\n                                g2: Group { orientation:'row',alignment:'',\r\n                                                    c1: Checkbox { alignment:'left',text:'" + loc(str.Audio) + "'}, \r\n                                                    c2: Checkbox { alignment:'right',text:'allow fade in/out'}\r\n                                          }\r\n                            }, \r\n              \tcomp:Panel{orientation:'row',alignment:'fill',text:'" + loc(str.compSet) + "',\r\n\t\t                        g3: Group { orientation: 'row',\r\n\t\t                                        width:StaticText{text:'" + loc(str.width) + "'},\r\n\t\t                                        edtxw: EditText{characters:3},\r\n\t\t                                        height:StaticText{text:'" + loc(str.height) + "'},\r\n\t\t                                        edtxh: EditText{characters:3},\r\n\t\t                                        rate:StaticText{text:'" + loc(str.fps) + "'},\r\n\t\t                                        edtxr: EditText{characters:4}\r\n\t\t                                        }\r\n\t\t                                    },\r\n\t\t          btns: Group { orientation: 'row', \r\n\t\t                                        okBtn: Button { text:'" + loc(str.imPort) + "'},\r\n\t\t                                        cancelBtn: Button { text:'" + loc(str.cancel) + "'},\r\n                                                 \r\n\t\t                            },\r\n                   helpBtn: Button{text:'?',alignment:'right',preferredSize:[25,25]}\r\n\t}";
	win = new Window(a);
	win.info.g2.c2.visible = !1;
	win.comp.g3.edtxw.text = 1920;
	win.comp.g3.edtxw.onChange = validNum;
	win.comp.g3.edtxh.text = 1080;
	win.comp.g3.edtxh.onChange = validNum;
	win.comp.g3.edtxr.text = "25.00";
	win.comp.g3.edtxr.onChange = validNum;
	win.info.g1.b.onClick = function() {
		var a = File.openDialog(loc(str.fileSelect), "*.txt;*.edl", !1);
		filexx = a;
		win.info.g1.e.text = a.fsName;
		return filexx
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
	var a = this.text;
	if (isNaN(a) || 0 > a) this.text = 1
}
function Max(a) {
	return Math.max.apply(null, a)
}
function read(a) {
	var b = [];
	if (a.exists) {
		for (a.open("r"); !a.eof;) b[b.length] = a.readln().split(";");
		a.close()
	} else alert("no file");
	return b
}
function clean(a) {
	reg1 = /^\s/;
	reg2 = /"/g;
	if ("string" == typeof a) return a.replace(reg1, "").replace(reg2, "")
}
function map(a, b) {
	for (var c = [], d = 0; d < a.length; d++) {
		tempObj = {};
		refLine = a[b];
		otherLine = a[d];
		for (x = 0; x < refLine.length; x++) tempObj[clean(refLine[x])] = clean(otherLine[x]);
		c.push(tempObj)
	}
	return c
}
function uniArr(a) {
	var b = {},
		c = [];
	for (i = 0; i < a.length; i++) b[a[i]] || (c.push(a[i]), b[a[i]] = !0);
	return c
}
function matchObj(a, b, c) {
	matchPath = [];
	matchNum = [];
	matchAudio = [];
	matchANum = [];
	a = map(read(a), 0);
	for (i = 1; i < a.length; i++) a[i][b] == c ? (matchPath.push(a[i].FileName), matchNum.push(i)) : (matchAudio.push(a[i].FileName), matchANum.push(i));
	return {
		arr: a,
		path: matchPath,
		num: matchNum,
		audio: matchAudio,
		anum: matchANum
	}
}
function indexItm(a) {
	var b = [],
		c = [];
	for (i = 0; i < a.length; i++) try {
		importObj = new ImportOptions(File(File.encode(a[i]))), fileImported = app.project.importFile(importObj), fileImported.parentFolder = edlFolder, b.push(fileImported.id)
	} catch (d) {
		fileImported = app.project.importPlaceholder(File(a[i]).displayName, width, height, frameRate, 1E4), fileImported.parentFolder = edlFolder, b.push(fileImported.id)
	}
	for (t = 0; t < b.length; t++) for (j = 1; j <= aeItem.length; j++) aeItem[j].id == b[t] && c.push(j);
	return c.sort(function(a, b) {
		return a - b
	})
}
function exec() {
	app.beginUndoGroup("import edl");
	var a = "edl-" + File(win.info.g1.e.text).displayName,
		b = parseInt(win.comp.g3.edtxw.text),
		c = parseInt(win.comp.g3.edtxh.text),
		d = win.comp.g3.edtxr.text;
	edl = File(File.encode(win.info.g1.e.text));
	aeItem = app.project.items;
	edlComp = aeItem.addComp(a, b, c, 1, 100, d);
	edlFolder = aeItem.addFolder(a);
	edlComp.parentFolder = edlFolder;
	mtchVDO = matchObj(edl, "MediaType", "VIDEO");
	finalPath = uniArr(mtchVDO.path.concat(mtchVDO.audio));
	finalItemIndex = indexItm(finalPath);
	matchNumb = win.info.g2.c1.value ? matchNum.concat(matchANum) : matchNum;
	for (z = 0; z < matchNumb.length; z++) for (w = 0; w < finalItemIndex.length; w++) aeItem[finalItemIndex[w]].name == File(mtchVDO.arr[matchNumb[z]].FileName).displayName && edlComp.layers.add(aeItem[finalItemIndex[w]]).moveToEnd();
	maxOutPoint = [];
	for (q = 1; q <= edlComp.numLayers; q++) a = mtchVDO.arr[matchNumb[q - 1]], edlComp.layer(q).audioEnabled = !1, edlComp.layer(q).stretch = 100 / parseInt(a.PlayRate), edlComp.layer(q).startTime = parseInt(a.StartTime) / 1E3 - parseInt(a.StreamStart) / 1E3, edlComp.layer(q).inPoint = parseInt(a.StartTime) / 1E3, edlComp.layer(q).outPoint = parseInt(a.StartTime) / 1E3 + parseInt(a.Length) / 1E3, maxOutPoint.push(edlComp.layer(q).outPoint);
	edlComp.duration = Max(maxOutPoint);
	try {
		for (h = matchNum.length; h < edlComp.numLayers; h++) edlComp.layer(h + 1).audioEnabled = !0, edlComp.layer(h + 1).enabled = !1, edlComp.layer(h + 1).label = 2
	} catch (e) {}
	app.endUndoGroup();
	edlComp.openInViewer()
};