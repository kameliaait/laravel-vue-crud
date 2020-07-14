<template>
    
<!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="editFormControlTextarea1" >Task:</label>
    <textarea class="form-control" id="editFormControlTextarea1" rows="3" v-model="tasktoedit.name" ></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="update">Save task</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      props:['tasktoedit'],
      data(){
        return {
          
        }
      },
    	methods:{
        update(){
          axios.patch('http://localhost:8000/taskslist/edit/'+this.tasktoedit.id, {
               name: this.tasktoedit.name
                
                 })
                .then(response=>
                //console.log(response);
                this.$emit('task-apdated',response))
                .catch(error=>console.log(error));

        },
      }
      }


  </script>  
    