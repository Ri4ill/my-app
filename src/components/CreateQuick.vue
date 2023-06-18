<template>
    <div>
        <router-link to="/home">К списку задач</router-link>
        <h2>Форма создания задачи</h2>
        <form @submit.prevent="createTask">
          <input type="text" v-model="task" placeholder="Заголовок" />
          <button type="submit">Создать</button>
        </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        task: ''
      };
    },
    methods: {
      ...mapActions(['addTask']),
      createTask() {
        if(this.task !== ""){
          this.addTask(this.task);
          console.log(this.task)
          this.task ='';
        }
      }
    }
  };
</script>
<style>
  button{
    background-color: aliceblue;
    cursor: pointer;
    border:0;
    margin-left: 2px;
    }
</style>