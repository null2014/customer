<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">添加用戶</h1>
    <form v-on:submit="addCustomers">
      <div clas="well">
        <h4>用戶信息</h4>
        <div class="form-group">
          <label>姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
       </div>
       <div class="form-group">
          <label>電話</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
       </div>
       <div class="form-group">
          <label>郵箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
       </div>
        <div class="form-group">
          <label>學歷</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education">
       </div>
       <div class="form-group">
          <label>職業</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
       </div>
       <div class="form-group">
          <label>畢業學校</label>
            <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
       </div>
        <div class="form-group">
          <label>個人簡介</label>
            <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
            <textarea type="text" rows=5 class="form-control" placeholder="profile" v-model="customer.profile"/>
       </div>
       <button type="submit" class="btn btn-primary">提交</button>
       <router-link class="btn btn-primary" to="/">返回</router-link>

      </div>
    </form>
  </div>
</template>

<script>
import alert from './Alert'

export default {
  name: 'add',
  data () {
    return {
      customer:{},
      alert:"",
    
    }
  },
  methods:{
    addCustomers(e){
      if(!this.customer.name || !this.customer.phone || !this.customer.email){
        console.log("請輸入姓名電話郵箱！！！");
        this.alert="請輸入姓名電話郵箱！！！";
       
      }else{
        let newCustomer={
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          education:this.customer.education,
          profile:this.customer.profile,
          profession:this.customer.profession,
          graduationschool:this.customer.graduationschool,
        }
        this.$http.post("http://localhost:3000/users",newCustomer).then(function(response){
         //console.log(newCustomer);
          this.$router.push({path:"/",query:{alert:"用戶添加成功！！！"}});
    })
      }
    e.preventDefault();
    
    }
 
},
components:{
  alert,
}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
