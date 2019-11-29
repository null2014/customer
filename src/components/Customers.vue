<template>
  <div class="customers container">
   <input type="text" class="form-conted" placeholder="搜索" v-model="filterInput">
    <br>
    <tr v-for="customer in filterBy(customers,filterInput)"/>
    <h1 class="page-header">用戶信息</h1>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <td>姓名</td>
          <td>電話</td>
          <td>郵箱</td>
          <td>業績</td>
          <td>詳情</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>{{customer.achievements}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/customers/'+customer.id">詳情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
    
  </div>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      filterInput:''
    }
  },
  methods:{
    fechCustomers(){
      this.$http.get("http://localhost:3000/users")
          .then(function(response){
          //console.log(response);
          this.customers=response.data;          
      })
      },
      filterBy(customer,value){
        return customer.filter(function(customer){
          return customer.name.match('value')
        })
      }
  },
   created(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert;
      
    }
    this.fechCustomers();
  },
  // updated(){
  //   this.fechCustomers();
  // }

  //  updated(){
  //   this.fechCustomers();
  // },
  
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-conted{
  width:100%;
  height: 35px;
}

</style>
