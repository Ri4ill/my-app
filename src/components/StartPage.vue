<template>
    <div>
        <div class="div">
            <router-link to="/tasks">cоздать задачу</router-link>
            <router-link to="/home">к списку задач</router-link>
        </div>
        <h1>
            Quick Deal 
        </h1>
    </div>
</template>
<style scoped>
    template{
        width: 100%;
    }
    h1{
        text-align: center;
    }
    .div{
        width: 50vw;
        display: flex;
        justify-content: space-around;
    }
</style>
<script>
  export default {
    name: "StartPage",
    }
  </script>
  
  