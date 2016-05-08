/**
 * Created by Anurag on 23-04-2016.
 */
function Task(id, name,desc){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.isCompleted = false;
}

var taskOperations= {
    taskList: [],
    taskId: 0,
    addTask: function (name, desc) {
        this.taskId++;
        var task = new Task(this.taskId, name, desc);
        this.taskList.push(task);

    },
    toggleTask:function(id){
        this.taskList[id-1].isCompleted=!this.taskList[id-1].isCompleted;
    },
    completeCount:function() {
        return this.taskList.filter(function (taskObject) {
            return taskObject.isCompleted;
        }).length;
    },

    notCompleteCount:function(){
            return  this.taskList.filter(function(taskObject){
                return !taskObject.isCompleted;
            }).length;
        },
    deleteTask:function(){
        return this.taskList= this.taskList.filter(function(taskObject){
            return !taskObject.isCompleted;
        });
    }
}