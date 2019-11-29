<template>
  <div class="details container"><Alert v-if="alert" v-bind:message="alert"></Alert>
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">{{customer.name}}</h1>
    <span class="pull-right">
    <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">編輯</router-link>
    <button class="btn btn-default" @click="deleteCustomer">刪除</button>
    </span>
    <ul class="list-group">
      <li class="list-group-tiem">電話：{{customer.phone}}</li>
      <li class="list-group-tiem">郵箱：{{customer.email}}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-tiem">學歷：{{customer.education}}</li>
      <li class="list-group-tiem">職業：{{customer.profession}}</li>
    </ul>

    <ul class="list-group">
      <li class="list-group-tiem">畢業學校：{{customer.graduationschool}}</li>
      <li class="list-group-tiem">個人簡介：{{customer.profile}}</li>
    </ul>

  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customerdetails',
  data () {
    return {
      customer:"",
      alert:''
    
    }
  },
  methods:{
    fechCustomers(id){
      //console.log(id);
      this.$http.get("http://localhost:3000/users/"+id)
          .then(function(response){
          this.customer=response.data;
          console.log(this.customer);
          
      })
      },
      deleteCustomer(id){
        //console.log(id)
        id = this.customer.id
        this.$http.delete("http://localhost:3000/users/" + id).then(function(response){
          this.$router.push({path:"/",query:{alert:"删除用户成功"}})
        })

      }
  },
  // 這是一個大坑
    created(){
      this.fechCustomers(this.$route.params.id);
      //console.log(id);
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-tiem{
  list-style: none;
}

</style>
