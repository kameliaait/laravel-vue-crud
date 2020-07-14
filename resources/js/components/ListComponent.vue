<template>
  <div class="container ">
    <form class="form-inline mt-5">
      <input class="form-control mr-sm-2" type="search" placeholder="Search task" aria-label="Search"
        @keyup="searchTask" v-model="q">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <add-task class="mt-5" @task-added="refresh"></add-task>
    <ul class="list-group mt-2">
      <li class="list-group-item d-flex justify-content-between align-items-center " v-for="task in tasks.data"
        :key="task.id"><a href="#"> {{task.name}}</a>
        <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal"
            @click="gettask(task.id)">
            Edit task
          </button>
          <button type="button" class="btn btn-danger" @click="deletetask(task.id)">Delete</button>
        </div>
      </li>
      <edit-task v-bind:tasktoedit="tasktoedit" @task-apdated="refresh"></edit-task>
    </ul>
    <pagination :data="tasks" @pagination-change-page="getResults" class="mt-5 "></pagination>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        tasks: {},
        tasktoedit: '',
        q: ''
      }
    },
    created() {
      axios.get('http://localhost:8000/taskslist')
        .then(response => this.tasks = response.data)
        .catch(error => console.log(error))
    },
    methods: {
      // Our method to GET results from a Laravel endpoint
      getResults(page = 1) {
        axios.get('http://localhost:8000/taskslist?page=' + page)
          .then(response => {
            this.tasks = response.data;
          });
      },
      gettask(id) {
        axios.get('/taskslist/edit/' + id)
          .then(response => {
            this.tasktoedit = response.data;
            console.log(this.tasktoedit);
          })
          .catch(error => console.log(error))
      },
      deletetask(id) {
        axios.delete('http://localhost:8000/taskslist/' + id)
          .then(response => this.tasks = response.data)
          .catch(error => console.log(error));
      },
      searchTask() {
        axios.get('http://localhost:8000/taskslist/' + this.q)
          .then(response => this.tasks = response.data)
          .catch(error => console.log(error))
      },
      refresh(tasks) {
        this.tasks = tasks.data
      }
    },
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>