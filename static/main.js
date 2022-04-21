
new Vue({
	el: "#mainApp",
	data: {
		content: null,
		sortSelect: "",
		categorySelect: "",
		openMenu: false,
		targetCategory: [],
		targetProject: {},
		loading: true
	},
	created:function(){
		$.get("static/content.json",function(result){
			this.content = result;
			this.loading = false;
			this.UpdateProject();
		}.bind(this));
		this.sortSelect = "time";
	},
	methods: {
		UpdateProject: function(){
			this.targetCategory = [];
			this.targetProject = {};
			switch(this.sortSelect){
				case "time":
					this.targetCategory = this.content.timeCategory.slice();
					break;
				case "issue":
					this.targetCategory = this.content.issueCategory.slice();
					break;
				case "skill":
					this.targetCategory = this.content.skillCategory.slice();
					break;
			}
			for(var i=0;i<this.targetCategory.length;i++){
				Vue.set(this.targetCategory[i],"openDesc",false);
				this.targetProject[this.targetCategory[i].name] = [];
			}
			this.categorySelect = this.targetCategory[0].name;

			for(var i=0;i<this.content.project.length;i++){
				var p = this.content.project[i];
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
