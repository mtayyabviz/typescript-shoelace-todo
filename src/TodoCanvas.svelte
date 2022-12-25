<script lang="ts">
    import TodoItem from "./TodoItem.svelte"; 

    
    export let name: string ="Todo App";
    let countCheck:number=1;
	let todoCounts:number=0;
	let todoItems=[{
            id: 1, 
            name:"first todo item", 
            completedStatus: true 
        }];

    //create tasks eventhander
    function addTodo(event:Event){
		
        let todoInput:HTMLInputElement = event.target; //object's reference that is emiting event
		if(event.key ===13  || event.key ==='Enter' && todoInput.value !== '' ) {
		todoItems=[...todoItems, {
                                id:todoItems.length+1,
                                name:todoInput.value,
                                completedStatus: false
                            }]
		event.target.value='';
        
	    }
	}

    function handleDelete(event){
        console.log(event.detail.taskId)
        console.log(todoItems)
        todoItems = todoItems.filter(todoItems => todoItems.id !== event.detail.taskId)

        
     

    }

    function handleToggleComplete(event) {

        let todoDoneIndex = todoItems.findIndex(todo => todo.id === event.detail.taskId)
        let todoItemUpdated = {...todoItems[todoDoneIndex], completedStatus: !todoItems[todoDoneIndex].completedStatus}

        todoItems=[
            ...todoItems.slice(0,todoDoneIndex),
            todoItemUpdated, 
            ...todoItems.slice(todoDoneIndex+1)]
        
        console.log(todoItems);

        // countCheck=0;
        // for(let item in todoItems) {
        //     console.log(todoItems[item])
        //     if(todoItems[item].completedStatus === true){
        //         console.log("checked are"+countCheck)
        //         countCheck =countCheck+1;

            //}
            
        }

        function filterTodos(event:Event) {
            let filterChoice = event.target.value;

            if(filterChoice === 'completed')
                filterTodoItems = todoItems.filter(todo => todo.completedStatus === true);

            if(filterChoice === 'remaining')
                filterTodoItems = todoItems.filter(todo => todo.completedStatus === false);  
                
            if(filterChoice === 'all')
                filterTodoItems = todoItems
        }

        function clearCompleted(){
            todoItems =  todoItems.filter(todo => todo.completedStatus === false);
        }
        
        function checkAllTodos(){
            
            for(let index in todoItems ) {
                todoItems[index].completedStatus= true;
            }

        }

       
    $: filterTodoItems = todoItems;
    $: todoCounts =  todoItems.filter(todo => !todo.completedStatus).length;;
    
 

</script>


<!-- svelte-ignore non-top-level-reactive-declaration -->
<!-- svelte-ignore non-top-level-reactive-declaration -->
<div style="padding:5px;margin:0 auto;">
    <h1>DevTram {name}!</h1>
    <sl-input label="Enter your todo item" placeholder="Todo Item Name" clearable on:keydown={addTodo}></sl-input>

    <table style="padding-top:30px;width:100%">
        <div style="padding-top:10px;" class="nine columns">
            <sl-radio-group  name="todo-option" on:sl-change={filterTodos} value="1">
                <sl-radio-button  value="all">All</sl-radio-button>
                <sl-radio-button  value="completed">Completed</sl-radio-button>
                <sl-radio-button value="remaining">Remaining</sl-radio-button>

                


                </sl-radio-group>
                
                
              
        </div>

        <div style="float:right;padding-top:10px;text-align:right" class="three columns">
            <sl-button variant="neutral" on:click={clearCompleted} outline>Clear Completed</sl-button>

        </div>

        <tr style=""  >
            <td  ><sl-checkbox on:sl-change={checkAllTodos}>Check All</sl-checkbox>
                <span style="float:right;padding-right:10px;margin-bottom:20px;font-weight:100;font-size:14px;color:grey">{todoCounts} Todo Items Remaining</span>
            </td>
            
            

        </tr>


        <!-- repeatable element-->
        {#each filterTodoItems as todo}
            <!--- todo item here-->
          
            <TodoItem completedStatus={todo.completedStatus} todoName={todo.name} taskId={todo.id}  on:todoDelete={handleDelete} on:toggleComplete={handleToggleComplete}></TodoItem>
        {/each}
      
       
        <!-- /repeatable element-->

        


      
        

      

        
    </table>




</div>	


<style>


h1 {
		text-align: center;
		color: #1e1f5e;
		text-transform:capitalize;
		font-size: 2em;
		font-weight: 700;
		font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}

    tr{
		 line-height:200%;
	}

	td {
		border-bottom: 1px solid lightgrey;
	}


    </style>
