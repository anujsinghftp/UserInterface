/**
 * Created by Anurag on 23-04-2016.
 */
window.addEventListener("DOMContentLoaded",function(){
    $("#mystyle").hide();
    $("#mystyle2").hide();
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("delete").addEventListener("click",deleteTask);
    document.getElementById("save").addEventListener("click",saveTask);
    document.getElementById("load").addEventListener("click",loadTask);
    document.getElementById("search").addEventListener("click",hideshow);
    document.getElementById("sort").addEventListener("click",hideshow2);
    document.getElementById("searching").addEventListener("keyup",search);
    document.getElementById("sortby").addEventListener("keyup",sortby);
    document.getElementById("sortingorder").addEventListener("keyup",sortby);
});
function sortby(){
   var sortby= document.getElementById("sortby").value;
    var sortingorder= document.getElementById("sortingorder").value;
    if(sortby=="name"){
         l=taskOperations.taskList;
        sortedList= l.sort(function(one,two){
            if(sortingorder=="reverse"){
        return two.name.localeCompare(one.name);}
            else{
                return one.name.localeCompare(two.name);
            }
        });
        printList(taskOperations.taskList);
          // printList(sortedList);
    }
    if(sortby=="desc"){
        l=taskOperations.taskList;
        sortedList= l.sort(function(one,two){
            if(sortingorder=="reverse"){
            return two.desc.localeCompare(one.desc);}
            else{
                return one.desc.localeCompare(two.desc);
            }
        });
        printList(taskOperations.taskList);
        // printList(sortedList);
    }
    else{
        printList(taskOperations.taskList);
    }
}
function hideshow2(){
    if(document.getElementById("sort").checked){
        $('#mystyle2').slideToggle(100);
    }
    else{
        $('#mystyle2').slideToggle(100);
    }
}

function hideshow(){
    if(document.getElementById("search").checked){
        $('#mystyle').slideToggle(100);
    }
    else{
        $('#mystyle').slideToggle(100);
    }
}
var rowNo =-1;
function validate(htmlObject){
    //alert("Inside Validate Call");
    var id = htmlObject.id;
    if(!id){
        id = this.id;
        htmlObject=this;
    }

    htmlObject=htmlObject.value;
    if(!htmlObject){
        if(id==="taskName"){
            rowNo=0;
        }
        if(id==="desc"){
            rowNo=1;
        }
        document.getElementsByTagName("table")[0].rows[rowNo].cells[2].innerHTML=id+" Can't Be Blank";
        return false;
    }
    else{
        if(id==="taskName"){
            rowNo=0;
        }
        if(id==="desc"){
            rowNo=1;
        }
        document.getElementsByTagName("table")[0].rows[rowNo].cells[2].innerHTML="";
        return true;
    }
    rowNo=-1;
}

function addTask(){

    var taskName = document.getElementById("taskName");
    var taskDesc = document.getElementById("desc");
    if(taskName && taskDesc) {
      taskName.addEventListener("keyup", validate);
        var t2 = validate(taskName);
        var t3 = validate(taskDesc);
        if (t2&&t3) {

            taskOperations.addTask(taskName.value, taskDesc.value);
            printList(taskOperations.taskList);
        }
    }
    else{
        alert("HTML WRONG PLZ VERIFY")
    }


}

function deleteTask(){
    printList(taskOperations.deleteTask());
}

function saveTask(){
    if(window.localStorage){
        localStorage.taskList = JSON.stringify(taskOperations.taskList);
          alert("Data Saved...");
    }
    else
    {
        alert("Your Browser  Not Supports LocalStorage");
    }


}

function loadTask(){
    if(window.localStorage){
        if(localStorage.taskList) {
            taskOperations.taskList= JSON.parse(localStorage.taskList);
         // taskOperations.taskId= taskOperations.taskList[taskOperations.taskList.length - 1].taskId;
           // var taskList = JSON.parse(localStorage.taskList);
           // printList(taskList);
            printList( taskOperations.taskList);
        }
    }
    else
    {
        alert("Your Browser  Not Supports LocalStorage");
    }

}

function search() {
    var searchTxt = document.getElementById("searching").value;
    var searchResult = taskOperations.taskList.filter(function (task) {
        return task.name.startsWith(searchTxt);
    });
    if (searchResult.length == 0) {
        console.log("Not Found...");
        // alert("Not Found...");
    }
    else {
        printList(searchResult);
    }


}

    function printList(taskList){
    var ul =document.getElementById("taskList");
    ul.innerHTML="";
    taskList.forEach(function(taskObject){
        var li = document.createElement("li");
        li.innerHTML=taskObject.id+" "+taskObject.name + " "+taskObject.desc;
        li.className="green";
        li.addEventListener("click",toogleTask);
        ul.appendChild(li);
    });
}

function toogleTask(event){
    event.srcElement.classList.toggle("red");
 // var id=taskOperations.taskList.indexOf(event.srcElement.);
   // console.log(event.srcElement.position());
      var id = event.srcElement.innerHTML.split(" ")[0];
   // if(!(id<=taskOperations.taskList.length)){
     //   id=id-taskOperations.taskList.length;
   // }
    taskOperations.toggleTask(id);
    document.getElementById("completeCount").innerHTML="Completed "+taskOperations.completeCount();
    document.getElementById("notcompleteCount").innerHTML="Not Completed "+taskOperations.notCompleteCount();

}