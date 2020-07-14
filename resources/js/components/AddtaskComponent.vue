<template>
    <div>

      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add a task
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">new task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="exampleFormControlTextarea1" >Task:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="name"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="addtask" data-dismiss="modal" id="submit">Save task</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
    	data(){
    		return {
    			name:''
    		}
    	},
    	methods:{
    		addtask(){
    			axios.post('http://localhost:8000/taskslist', {
                name: this.name,
                


                 })
                .then(response=>
                //console.log(response);
                this.$emit('task-added',response))
                .catch(error=>console.log(error));

    		}
    	}
       
    }
</script>
