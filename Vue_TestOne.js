var app = new Vue({
el:"#app",
data: {
    dynamicMessage: "This is a dynamic message"
},
methods:{
    disappear:function(){
        this.dynamicMessage = ""
    }
}



})