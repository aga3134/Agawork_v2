
new Vue({
	el: "#mainApp",
	data: {
		sortSelect: "",
		sortOption: [],
		timeCategory: [],
		issueCategory: [],
		skillCategory: [],
		project: [],
		resource: [],
		openMenu: false,
		targetCategory: [],
		targetProject: []
	},
	created:function(){
		this.sortOption = [
			{"label": "時間", "value":"time"},
			{"label": "議題", "value":"issue"},
			{"label": "技能", "value":"skill"},
		];
		this.sortSelect = "time";

		this.timeCategory = [
			{"name":"返鄉時期", desc:"2019 ~ 從高中開始出外生活，闊別20年終於再度搬回埔里。問我為什麼返鄉? 因為那些讓我進都市生活的理由，都已不再能綁住我，僅此而已。"},
			{"name":"找方向時期", desc:"2016 ~ 2019 一直都覺得自己很幸運生長在台灣，一路上遇到一大堆很幫忙很照顧我的親朋好友。在這台灣價值逐漸失落的時間點，我希望自己能夠做一些事情回饋。所以我走出公司，尋找自己可以貢獻的方向。"},
			{"name":"跨視代時期", desc:"2014 ~ 2016 跨視代科技是我和三個工研院學長一起創立的新創公司。一開始以3D影像分析技術出發，之後轉型做立體投影互動系統，後來又轉而開發虛擬實境的直播技術。"},
			{"name":"工研院時期", desc:"2008 ~ 2014 工研院電光所是我出社會第一份工作，主要做3D影視的影像處理技術開發。從前端取像、即時分析、後製生成、2D/3D轉換，各階段的技術都摸過。另外也有一些生醫研究和體感互動的專案。"},
		];

		this.issueCategory = [
			{"name":"空汙",desc:""},
			{"name":"高齡",desc:""},
			{"name":"教育",desc:""},
			{"name":"農業",desc:""},
			{"name":"其他",desc:""},
		];

		this.skillCategory = [
			{"name":"C/C++",desc:""},
			{"name":"Python",desc:""},
			{"name":"Unity",desc:""},
			{"name":"網頁平台",desc:""},
			{"name":"資料視覺化",desc:""},
			{"name":"機器學習",desc:""},
			{"name":"電腦視覺",desc:""},
			{"name":"嵌入式系統",desc:""},
		];

		this.project = [
			{"name":"",desc:"",link:[
				{"name":"",url:""}
			]},
		];

		this.UpdateProject();
	},
	methods: {
		UpdateProject: function(){
			this.targetCategory = [];
			this.targetProject = [];
			switch(this.sortSelect){
				case "time":
					this.targetCategory = this.timeCategory.slice();
					break;
				case "issue":
					break;
				case "skill":
					break;
			}
			for(var i=0;i<this.targetCategory.length;i++){
				Vue.set(this.targetCategory[i],"openDesc",false);
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
