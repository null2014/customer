<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <form v-on:submit="updateCustomer">
    <div clas="well">
        <h4>用戶編輯</h4>
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
          <label>畢業學校</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education">
       </div>
       <div class="form-group">
          <label>個人簡介</label>
            <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
            <textarea type="text" rows=5 class="form-control" placeholder="profile" v-model="customer.profile"/>
       </div>
       <button class="btn btn-primary" type="submit">編輯</button>
       <router-link class="btn btn-primary" to="/">返回</router-link>
    </div>
   </form>
  </div>
</template>

<script>
import alert from './Alert'
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: 'edit',
  data () {
    return {
      customer:'',
      alert:''
      
    
    }
  },
  methods:{
    fechCustomers(id){
      //console.log(id);
      this.$http.get("http://localhost:3000/users/"+id).then(function(response){
          this.customer = response.data;
          console.log(this.customer);
      })
  },   
  updateCustomer(e){
    if(!this.customer.name || !this.customer.phone ||!this.customer.email){
      this.alert='請輸入用戶名郵箱和電話！！！';
    }else{
       let updateCustomer={
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          education:this.customer.education,
          profile:this.customer.profile,
          profession:this.customer.profession,
          graduationschool:this.customer.graduationschool,
        }
        //this.$route.params.id  這種方式獲取
        this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer).then(function(res){
          console.log(res);
          this.$router.push({path:'/',query:{alert:'更新用戶信息成功'}})
        })
        e.preventDefault();
        
    }
  }
  // updateCustomer(e){
  //   if (!this.customer.name || !this.customer.phone || !this.customer.email){
  //     alert = '請輸入用戶名郵箱和電話！！！';
  //   }else{
  //      let updateCustomer={
  //         name:this.customer.name,
  //         phone:this.customer.phone,
  //         email:this.customer.email,
  //         education:this.customer.education,
  //         profile:this.customer.profile,
  //         profession:this.customer.profession,
  //         graduationschool:this.customer.graduationschool,
  //       }
  //       axios.put("http://localhost:3000/users/"+id,updateCustomer).then(function(res){
  //         console.log(res)
  //         this.$router.push({path:'./',query:{alert:'更新用戶信息成功'}})
  //       })
  //   }
  // }
},
 created(){
      this.fechCustomers(this.$route.params.id);
      //console.log(id)
  },
  components:{
    alert,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
