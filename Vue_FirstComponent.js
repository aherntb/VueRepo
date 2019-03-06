Vue.component("todo-item",{
    props:["todo"],
    template: "<li>{{todo.text}}</li>"
})

var app = new Vue({
    el:"#app",
    data:{
        
        listOfThings: [
            {id:0 , text:"First Item"},
            {id:1 , text:"Second Item"},
            {id:3 , text:"Third Item"}
        ]
    }
    
})