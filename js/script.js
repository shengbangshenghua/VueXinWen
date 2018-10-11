var vm = new Vue({
    el: "#app",
    data: {
        //编辑的哪个下标
        index: 0,
        //默认变量
        title: '',
        content: '',
        sort: '',
        name: '',
        time: 0,
        update: 0,
        state: true,
        //新闻列表
        news: [
            {
                "title": "新闻标题",
                "content": "新闻的具体内容",
                "sort": "军事",
                "name": "新华网",
                "time": 1539224669000,
                "update": 1539224790000,
                "state": false
            },
            {
                "title": "新闻标题",
                "content": "新闻的具体内容",
                "sort": "科技",
                "name": "新华网",
                "time": 1539224669000,
                "update": 1539224790000,
                "state": true
            },
            {
                "title": "新闻标题",
                "content": "新闻的具体内容",
                "sort": "军事",
                "name": "新华网",
                "time": 1539224669000,
                "update": 1539224790000,
                "state": true
            }
        ]
    },
    computed: {
        //当前的时间戳
        currentTime: function () {
            var timestamp = Date.parse(new Date());
            return timestamp;
        }
    },
    methods: {
        //添加新闻按钮的事件
        add: function () {
            //往数组追加数据
            this.news.unshift({
                "title": this.title,
                "content": this.content,
                "sort": this.sort,
                "name": this.name,
                "time": this.currentTime,
                "update": this.currentTime,
                "state": this.state
            })

            //把追加后的数组保存到本地存储
            localStorage.setItem('news', JSON.stringify(this.news));

            //关闭弹出来的框
            $('#tianjiaxinwen').modal('hide');
        },
        //发布状态按钮
        zhuangtai: function (index) {
            //修改布尔值
            this.news[index].state = !this.news[index].state;

            //把修改后的数组保存到本地存储
            localStorage.setItem('news', JSON.stringify(this.news));
        },
        edit: function (index) {
            console.log(index);
            this.title = this.news[index].title;
            this.content = this.news[index].content;
            this.sort = this.news[index].sort;
            this.name = this.news[index].name;
            this.time = this.news[index].time;
            this.update = this.news[index].update;
            this.state = this.news[index].state;

            //编辑的这个下标
            this.index = index;
        },
        //确认修改按钮
        save: function () {
            this.news[this.index].title = this.title;
            this.news[this.index].content = this.content;
            this.news[this.index].sort = this.sort;
            this.news[this.index].name = this.name;
            this.news[this.index].update = this.currentTime;
            this.news[this.index].state = this.state;

            //把修改后的数组保存到本地存储
            localStorage.setItem('news', JSON.stringify(this.news));

            //关闭弹出来的框
            $('#bianjixinwen').modal('hide');
        },
        del: function (index) {
            var queren = confirm("确认删除吗？");
            if (queren) {
                //删除当前内容
                this.news.splice(index, 1);

                //把修改后的数组保存到本地存储
                localStorage.setItem('news', JSON.stringify(this.news));

            }
        }
    },
    //生命周期，页面一刷新的时候执行
    created: function () {
        //把本地存储的值赋给vue的news数据
        this.news = JSON.parse(localStorage.getItem('news'));
    }
})