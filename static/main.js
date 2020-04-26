
new Vue({
	el: "#mainApp",
	data: {
		sortSelect: "",
		sortOption: [],
		categorySelect: "",
		timeCategory: [],
		issueCategory: [],
		skillCategory: [],
		project: [],
		resource: [],
		partner: [],
		openMenu: false,
		targetCategory: [],
		targetProject: {}
	},
	created:function(){
		this.sortOption = [
			{label: "時間", value:"time"},
			{label: "議題", value:"issue"},
			{label: "技能", value:"skill"},
		];
		this.sortSelect = "time";

		this.timeCategory = [
			{name:"返鄉時期", desc:"2019 ~ 從高中開始出外生活，闊別20年終於再度搬回埔里。到處跳了好幾個坑，發現每個坑都會連回自己家鄉，反正事情都是要做，就從自己家鄉開始做起吧！"},
			{name:"找方向時期", desc:"2016 ~ 2019 一直都覺得自己很幸運生長在台灣，一路上遇到一大堆很幫忙很照顧我的親朋好友。在這台灣價值逐漸失落的時間點，我希望自己能夠做一些事情回饋。所以我走出公司，尋找自己可以貢獻的方向。"},
			{name:"跨視代時期", desc:"2014 ~ 2016 跨視代科技是我和三個工研院學長一起創立的新創公司。一開始以3D影像分析技術出發，之後轉型做立體投影互動系統，後來又轉而開發虛擬實境的直播技術。"},
			{name:"工研院時期", desc:"2008 ~ 2014 工研院電光所是我出社會第一份工作，主要做3D影視的影像處理技術開發。從前端取像、即時分析、後製生成、2D/3D轉換，各階段的技術都摸過。另外也有一些生醫研究和體感互動的專案。"},
		];

		this.issueCategory = [
			{name:"空汙",desc:"現代社會極度依賴石化燃料，除了造成地球暖化，汙染物排放也讓空氣品質受到極大影響。因此需要大家一起關心，共同監督。"},
			{name:"水資源",desc:"在水龍頭打開就會有水的時代，人與河川的距離越來越遠。但是水的問題沒事則已，一出事就會對生活、生態造成重大影響，不能等閒視之。"},
			{name:"高齡",desc:"台灣將在2026年進入超高齡社會，目前看到的偏鄉沒落、健保虧損、勞動力短缺都只是剛開始而已，面對越來越老的人口組成，你準備好了嗎?"},
			{name:"教育",desc:"現有的教育體制中，國中要拚高中、高中要拚大學，拚出了社會還是不知道自己到底在拚什麼，一大堆人學非所用。這樣浪費生命的制度是否有解?"},
			{name:"農業",desc:"自古以來民以食為天，農業在現代社會卻總是受到不公平的對待，違章工廠、農地豪宅、非法移工、供需失衡，亂象環生的國安產業是否能走出一條新路?"},
			{name:"生態環境",desc:"生態多樣性直接影響了地球對各種變化的耐受能力，但人總以為自己能獨立於生態而生存，殊不知今日我們對生態所做的，日後必將十倍百倍奉還到自己身上。"},
			{name:"其他",desc:"之前的工作成果，多半是技術導向，不是針對特定議題提出解決方案。"},
		];

		this.skillCategory = [
			{name:"網頁平台",desc:"以網頁為媒介，供大家編輯內容、參與合作的工具。"},
			{name:"資料視覺化",desc:"以網頁為媒介，將複雜龐大的資料以直覺互動的方式視覺化，方便大家參考研究。"},
			{name:"遊戲設計",desc:"就是遊戲設計。"},
			{name:"電腦視覺",desc:"設計演算法讓電腦從影像上分析計算出需要的資訊、或是以機器學習的方式辨識影像內容。"},
			{name:"嵌入式系統",desc:"以嵌入式開發板實作的專案。"},
		];

		this.project = [
			{
				name:"群眾標註",desc:"群眾標註是讓公民科學社群分享影像資訊與知識的工具，產出的資料集可以提供機器學習(AI訓練)，也可以提供社群學習(新手訓練)。",
				link:[
					{"name":"測試連結",url:"https://commutag.agawork.tw"},
					{"name":"Demo影片",url:"https://www.youtube.com/watch?v=PKVwInFUcRQ"},
					{"name":"開放原始碼",url:"https://github.com/aga3134/CommuTag"},
				],
				photo: "/static/image/project/CommutagThumb.jpg",
				time: ["返鄉時期"],
				issue: ["農業","生態環境"],
				skill: ["網頁平台","電腦視覺"],
			},
			{
				name:"山河事件簿",desc:"在水龍頭打開就會有水的時代，人與河川的距離越來越遠。但你知道山河的一舉一動仍深深影響著你的命運嗎?「山河事件簿」集結與水相關的開放資料，帶你來看人與水互動之間所刻下的一道道歷史印記。",
				link:[
					{"name":"網站連結",url:"https://riverlog.lass-net.org/"},
					{"name":"開放原始碼",url:"https://github.com/aga3134/RiverLog"},
					{"name":"民生公共物聯網2019競賽二獎",url:"https://www.facebook.com/groups/LASSnet/permalink/2459780144272581/"},
				],
				photo: "/static/image/project/RiverlogThumb.jpg",
				time: ["返鄉時期"],
				issue: ["水資源"],
				skill: ["資料視覺化"],
			},
			{
				name:"土砲1號",desc:"本專案目的在提供簡單的範例以ROS架構整合載具驅動、視覺偵測、手臂驅動、搖桿控制，不包含3D定位、SLAM、自動控制的部份。 ",
				link:[
					{"name":"開放原始碼",url:"https://github.com/aga3134/topower_v1"}
				],
				photo: "/static/image/project/TopowerV1Thumb.jpg",
				time: ["返鄉時期"],
				issue: ["農業"],
				skill: ["嵌入式系統","電腦視覺"],
			},
			{
				name:"樂樂活大解析",desc:"針對智榮基金會 未來長者需求線上問卷調查 開發的視覺化工具。",
				link:[
					{"name":"網站連結",url:"http://code.dataqualia.com:8001/"},
					{"name":"開放原始碼",url:"https://github.com/aga3134/HappyLiving"},
					{"name":"龍吟研論新聞稿",url:"http://ccc.stansfoundation.org/?p=4505"},
				],
				photo: "/static/image/project/HappyLivingThumb.jpg",
				time: ["找方向時期"],
				issue: ["高齡"],
				skill: ["資料視覺化"],
			},
			{
				name:"台灣の死亡筆記本",desc:"凡名字被寫入這筆記的人...都不會怎樣... 但這趨勢不搞清楚，怎麼死的你都不知道!",
				link:[
					{"name":"網站連結",url:"https://deathnote.agawork.tw/"},
					{"name":"開放原始碼",url:"https://github.com/aga3134/DeathNoteTW"},
				],
				photo: "/static/image/project/DeathNoteThumb.jpg",
				time: ["找方向時期"],
				issue: ["高齡"],
				skill: ["資料視覺化"],
			},
			{
				name:"Unihub 有你好棒",desc:"【有你好棒 UniHub】致力於協助大學和企業翻轉學習。這個專案建立一個課程平台，整合開課、報名、金流、問卷等流程。",
				link:[
					{"name":"網站連結",url:"https://unihub.hfcc.com.tw/"},
					{"name":"FB粉專",url:"https://www.facebook.com/unihub.hfcc/"}
				],
				photo: "/static/image/project/UnihubThumb.jpg",
				time: ["找方向時期"],
				issue: ["教育"],
				skill: ["網頁平台"],
			},
			{
				name:"VisTEDS",desc:"TEDS(Taiwan Emission Data System)為環保署統計的台灣全年空污源排放資料，這個專案針對TEDS9.0 的資料(2013年)做視覺化呈現。",
				link:[
					{"name":"網站連結",url:"https://teds.agawork.tw/"},
					{"name":"開放原始碼",url:"https://github.com/aga3134/VisTEDS"},
				],
				photo: "/static/image/project/VisTEDSThumb.jpg",
				time: ["找方向時期"],
				issue: ["空汙"],
				skill: ["資料視覺化"],
			},
			{
				name:"物種救援",desc:"在毀滅來臨之前，你能拯救多少種族?謹以此遊戲向齊柏林導演致敬，您的遺志大家會繼續傳承下去的...",
				link:[
					{"name":"Demo影片",url:"https://www.youtube.com/watch?v=cmJOBnnjONs"}
				],
				photo: "/static/image/project/OnTheRescueOfSpeciesThumb.jpg",
				time: ["找方向時期"],
				issue: ["生態環境"],
				skill: ["遊戲設計"],
			},
			{
				name:"紫豹在哪裡",desc:"紫豹在哪裡整合長期空汙相關資料，並以視覺化動態呈現在地圖上，所有人皆可依數據為基礎進行討論，進一步發展空汙解決方案。",
				link:[
					{"name":"網站連結",url:"https://purbao.lass-net.org/"},
					{"name":"開放原始碼",url:"https://github.com/aga3134/AirPollution"},
					{"name":"今周刊報導",url:"https://www.businesstoday.com.tw/article/category/80392/post/201712060008/"},
					{"name":"BBC Click Demo",url:"https://youtu.be/UvGmhvqrTWU?t=996"}
				],
				photo: "/static/image/project/PurbaoThumb.jpg",
				time: ["找方向時期"],
				issue: ["空汙"],
				skill: ["資料視覺化"],
			},
			{
				name:"360度影片即時逢合技術",desc:"360影片即時縫合技術使用GPU平行運算，將六路廣視角相機影像依數學模型映射接合。搭配視訊直播技術，就可提供虛擬實境現場演出。",
				link:[
					{"name":"影片Demo",url:"https://www.youtube.com/watch?v=a1_J8Drx0IY"},
					{"name":"跨視代科技官網",url:"https://www.hyperimmersion.com/live360"},
				],
				photo: "/static/image/project/VR360Thumb.jpg",
				time: ["跨視代時期"],
				issue: ["其他"],
				skill: ["電腦視覺"],
			},
			{
				name:"XDFantasy",desc:"XDFantasy是一個多投影面的立體互動系統。用多投影面組合出沉浸式立體空間，可讓虛擬物體跳出框架之外，達到觸手可及的互動效果。",
				link:[
					{"name":"沉浸型Demo",url:"https://www.youtube.com/watch?v=HICINk9guu0"},
					{"name":"桌上型Demo",url:"https://www.youtube.com/watch?v=Ed8MH51mqgY"},
				],
				photo: "/static/image/project/XDFThumb.jpg",
				time: ["跨視代時期"],
				issue: ["其他"],
				skill: ["電腦視覺","遊戲設計"],
			},
			{
				name:"3D Analyzer",desc:"3D Analyzer是一個可即時分析立體內容品質，提供相關警示的系統。可大幅節省3D電影拍攝的試誤時間，有效提升拍攝效率。",
				link:[
					{"name":"論文",url:"https://www.semanticscholar.org/paper/Automatically-optimizing-stereo-camera-system-based-Tseng-Huang/8db192731dd7f33f6060487b731e58d498750061"},
					{"name":"專利",url:"https://patents.google.com/patent/TW201325204A/zh"},
				],
				photo: "/static/image/project/AnalyzerThumb.jpg",
				time: ["跨視代時期"],
				issue: ["其他"],
				skill: ["電腦視覺"],
			},
			{
				name:"內視鏡影像立體化技術",desc:"內視鏡影像立體化技術利用操作內視鏡的位置變化，以移動視差估算影像深度，進而產生立體效果，增加手術的準確度。",
				link:[
					{"name":"專利",url:"https://patents.google.com/patent/WO2014027229A1/en"},
					{"name":"專利",url:"https://patents.google.com/patent/TW201224829A"},
				],
				photo: "/static/image/project/EndoscopeThumb.jpg",
				time: ["工研院時期"],
				issue: ["其他"],
				skill: ["電腦視覺"],
			},
			{
				name:"立體影像生成技術",desc:"立體影像生成技術針對雙攝影機拍攝的影像進行後製處理，優化觀看舒適度，並轉換成各種3D螢幕所需的影像格式。",
				link:[
					{"name":"論文",url:"https://www.semanticscholar.org/paper/Perceptual-based-stereoscopic-content-analysis-and-Huang-Luo/79d09f8fcbe502c096e3b0b2b12c9e0ecf46654a"},
					{"name":"專利",url:"https://patents.google.com/patent/US20120044244A1/"},
				],
				photo: "/static/image/project/StereoMatchingThumb.jpg",
				time: ["工研院時期"],
				issue: ["其他"],
				skill: ["電腦視覺"],
			},
			{
				name:"自動化2D轉3D技術",desc:"自動化2D轉3D技術可將原先2D影視製作的內容自動轉換為3D立體內容。雖說轉換成本可以很低，但通常立體效果不如其他方案。",
				link:[
					{"name":"論文",url:"https://www.spiedigitallibrary.org/conference-proceedings-of-spie/7526/75260D/A-2D-to-3D-video-and-image-conversion-technique-based/10.1117/12.838571.short"},
					{"name":"專利",url:"https://patents.google.com/patent/US9030469B2/en"},
				],
				photo: "/static/image/project/2Dto3DThumb.jpg",
				time: ["工研院時期"],
				issue: ["其他"],
				skill: ["電腦視覺"],
			},
		];

		this.resource = [
			{name:"紫豹在哪裡 - 數據整合與視覺化", url:"https://docs.google.com/presentation/d/1ph8RMDUBXt6e9ak1hsL0R6vewnF73MxWu039WC4StuY/edit?usp=sharing"},
			{name:"博祖克筆記", url:"https://docs.google.com/presentation/d/1PGMrBhTGOpq4-8BR4YcZKVg2uvUmLzW6_dFsw9G8o0U/edit?usp=sharing"},
			{name:"資訊系統展開 - 以博祖克為例", url:"https://docs.google.com/presentation/d/1PeHAHwBCPo3AAv9b-Zhv3wgh83Zw4o12CtuJz15o-_g/edit?usp=sharing"},
			{name:"Gazebo ROS 筆記", url:"https://docs.google.com/presentation/d/1muNr2O8b6jmT14wjB4Wg6bemzFTR8tDCssFb5uOeGw8/edit?usp=sharing"},
		];

		this.partner = {
			long: [
				{name:"Goodwork",url:"/static/image/partner/goodwork.png"},
				{name:"中研院",url:"/static/image/partner/sinica.png"},
				{name:"工研院",url:"/static/image/partner/itri.png"},
				{name:"龍吟研論",url:"/static/image/partner/ccc.png"},
				{name:"中興大學",url:"/static/image/partner/nchu.png"},
				{name:"水泥角民宿",url:"/static/image/partner/kidstaomi.png"},
			],
			mid: [
				{name:"LASS",url:"/static/image/partner/lass.jpg"},
				{name:"HCOS",url:"/static/image/partner/hcos.jpg"},
				{name:"FBTUG",url:"/static/image/partner/fbtug.png"},
				{name:"Unihub",url:"/static/image/partner/unihub.png"},
			],
			short: [
				{name:"綠舟農場",url:"/static/image/partner/green_ark.jpg"},
				{name:"龍坑農場",url:"/static/image/partner/lungkengpuli.jpg"},
			]
		};
		
		this.UpdateProject();
	},
	methods: {
		UpdateProject: function(){
			this.targetCategory = [];
			this.targetProject = {};
			switch(this.sortSelect){
				case "time":
					this.targetCategory = this.timeCategory.slice();
					break;
				case "issue":
					this.targetCategory = this.issueCategory.slice();
					break;
				case "skill":
					this.targetCategory = this.skillCategory.slice();
					break;
			}
			for(var i=0;i<this.targetCategory.length;i++){
				Vue.set(this.targetCategory[i],"openDesc",false);
				this.targetProject[this.targetCategory[i].name] = [];
			}
			this.categorySelect = this.targetCategory[0].name;

			for(var i=0;i<this.project.length;i++){
				var p = this.project[i];
				var category = p[this.sortSelect];
				for(var j=0;j<category.length;j++){
					var c = category[j];
					this.targetProject[c].push(p);
				}
			}
		},
		ScrollToAnchor: function(name){
			var anchor = $('[name="' + name + '"]');
			if(anchor.length > 0){
				var target = Quasar.scroll.getScrollTarget(anchor[0]);
				var offset = anchor[0].offsetTop;
			    Quasar.scroll.setScrollPosition(target,offset,500);
			}
		}
	}
});
