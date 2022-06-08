function xender(x)
{
   return document.querySelector(x);
}


var tasker = xender('#tasker');
var task = xender('#task');
var set = xender('#set');
var task_timer = xender('#task_timer');
tasker.addEventListener("click", () => {
    if (task.value.length === 0 || set.value.length === 0 || task_timer.value.length === 0) {
        alert("please Complete the Task Manager")
    }
    else{
        document.querySelector('#taskViewer').innerHTML += `<div class="task" \>
        <span id="taskname">
        ${set.value}<p>${task.value}</p><input type="submit" class="deleted" id='delete' value=" Delete"></button></span>
        </div>`;
       
           var current = document.querySelectorAll(".deleted");
           for (let j = 0; j < current.length; j++) {
               current[j].onclick = function () 
               {
                   this.parentNode.remove();
               }
               var completed= document.querySelectorAll(".task")

               for (let i = 0; i < completed.length; i++) {
                   completed[i].onclick = function()
                   {
                       this.classList.toggle('completed');
                   }
                   
               }
           }
        var count = task_timer.value;
        var time = count * 60
        var done = xender('.countdown');
       
       function fun ()
       {
           const min = Math.floor(time/60)
           const sec = time % 60
          done.innerHTML = `${min}: ${sec}`
          time--
          
         if (time < 1) {
         document.querySelector('.message').innerHTML = "Your have run out of time"
         }
         
        clearInterval(time)
        return false 
       }
       
       setInterval(fun, 1000)
       document.querySelector('#newtask input').value = "";  
           
    }
   
})




