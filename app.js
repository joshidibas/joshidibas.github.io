const app = new Vue({
    el :'#app',
    data:{
        jsonarray:[{"desc":"Add a new Task","status": false},{"desc":"Sample Task","status":true}],
        localStorageitem:'',
        newtodo: '',
        checkvalue:false,
        todos:[]
    },
    methods:{
        addTask(){
            if(this.newtodo != "" || this.newtodo.Trim().length > 0){
                this.todos.push({
                    desc : this.newtodo,
                    status : false
                });
                this.newtodo = '';
                localStorage.setItem('todolist', JSON.stringify(this.todos));
            }
        },
        removeTask(index){
            this.todos.splice(index,1)
            localStorage.setItem('todolist', JSON.stringify(this.todos));
        },
        donecheck(){
            localStorage.setItem('todolist', JSON.stringify(this.todos));
        },
        clearall(){
            this.todos = [];
            window.localStorage.clear();
        },
        clearcompleted(){
            var list = this.todos;
            list.forEach(e => {
                if(e.status == true){
                    this.todos.splice(list.indexOf(e), 1);
                }
            });
            if(this.todos.length == 0){
                window.localStorage.clear();
            }else{
                localStorage.setItem('todolist', JSON.stringify(this.todos));
            }
        },
        defaultvalues(){
            
            this.localStorageitem = localStorage.getItem('todolist');
            if(this.localStorageitem == 'undefined'|| this.localStorageitem == undefined|| this.localStorageitem == ""){
                localStorage.setItem("todolist", JSON.stringify(this.jsonarray));
                this.localStorageitem = localStorage.getItem('todolist');
            }
            this.todos = $.parseJSON(this.localStorageitem);
        }
    },
    beforeMount(){
        this.defaultvalues();
     },
})