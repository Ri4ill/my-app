<template>
    <div>
        <router-link to="/tasks">Создать задачу</router-link>
        <h2>Список задач</h2>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <p>{{task}}</p>
                <button @click="deleteTask(index)">Удалить</button>
                <button @click="activ(index)">изменить</button>
                <form :class="{ 'active': activeIndex === index }" @submit.prevent="editT({index,newtask})">
                    <input type="text" v-model="newtask">
                    <button type="submit">ok</button>
                </form>
            </li>
        </ul>
    </div>
</template>
  
<script>
    import { mapState, mapActions } from 'vuex';
    
    export default {
        name: "HomePage",
        data() {
            return {
                newtask: "",
                activeIndex: null
            };
        },
        computed: {
            ...mapState(['tasks'])
        },
        methods: {
            ...mapActions(['deleteTask','editTask']),
            activ(index){
                if (this.activeIndex === index) {
                    this.activeIndex = null;
                } else {
                    this.activeIndex = index;
                }   
            },
            editT({index,newtask}) {
                if (newtask !== "") {
                    this.activ(index); 
                    this.editTask({index,newtask});
                    this.newtask = ""
                }
            }
        }
    };
</script>
<style scoped>
    form{
        display: none;
    }
    button{
        padding: 20px 12px;
        background-color: aliceblue;
        cursor: pointer;
        border:0;
        margin-right: 2px;
    }
    .active{
        display: flex;
    }
</style>
  
  