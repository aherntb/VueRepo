var theApp = new Vue({
    el: "#app",
    data:{
        message: "Hello from Vue!",
        value : 3
    }


})

var theApp2 = new Vue({
    el: "#app2",
    data:{
        message: "You loaded this page on "+ new Date().toLocaleString()
    }
})

var theApp3 = new Vue({
    el:"#app3",
    data:{
        seen: true
    }

})

var theApp4 = new Vue({
    el: "#app4",
    data:{
        todo: [
            {text: "Garden"},
            {text: "Garage"},
            {text: "Windows"}
        ],
        title:"The list of things to do"
    }
})

var theApp5 = new Vue({
    el:"#app5",
    data:{
        message: "Hello from my first Vue.js App"
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split("").reverse().join("")
        }
    }
})

var theApp6 = new Vue({
    el:"#app6",
    data:{
        message: "Hello from Vue"
    },
    methods:{
        reversMyMessage:function(){
            this.message = this.message.split("").reverse().join("")
        }
    }
})

var theApp7 = new Vue({
    el:"#app7",
    data:{
        item: "",
        message: "Please add items to this list:",
        myList: [    
                     
        ]
    },
    methods:{
        addToList:function(){
             this.myList.push({text: this.item})
             this.item = ""
        },
        removeFromList:function(){
            this.myList.pop()
        }
    }
})
