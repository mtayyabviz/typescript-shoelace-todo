<script lang="ts">
    import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';

    export let taskId;
    export let todoName;
	export let completedStatus;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();


    function todoDelete(){
        dispatch('todoDelete', {taskId: taskId})

    }


    function toggleComplete(event){
        
       
        dispatch('toggleComplete', {taskId: taskId})
        
        console.log("event dispatched"+taskId)
    }

   


</script>

<!-- html/svelte markup-->
<tr style=""  >
    <td>

        <sl-checkbox  contenteditable="true"  checked={completedStatus} on:sl-change|capture={ toggleComplete} class:item-checked={completedStatus}>{todoName}</sl-checkbox>

       
            <!-- svelte-ignore a11y-click-events-have-key-events -->
        
        <div class="remove-todo" on:click={todoDelete}>x</div>
      
    </td>
</tr>


<style>

.remove-todo {
    cursor:pointer;
    float:right;padding-right:10px;font-weight:700

}


.item-checked {
		text-decoration: line-through;
	}
</style>