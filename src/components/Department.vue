<template>
  <div class="department container">
    <h1 class="page-header">部門信息</h1>
    <button type="primariy" @click="addDepartment">添加部門</button>
    <table class="table table-striped">
      <thead>
        <tr>
        <td>部門名字</td>
        <td>部門領導</td>
        <td>部門地址</td>
        <td>部門人數</td>
        </tr>
      </thead>
      <tbody v-for="department in departments">
        <td >{{department.departName}}</td>
        <td>{{department.depHeader}}</td>
        <td>{{department.adress}}</td>
        <td>{{department.counts}}</td>
      </tbody>
    </table>
     

  </div>
</template>

<script>
export default {
  name: 'Department',
  data () {
    return {
      departments:[],
      
    }
  },
  methods:{
    fetchDepartments(){
      this.$http.get("http://localhost:3000/department")
          .then(function(response){
            console.log(response)
          this.departments=response.data;          
      })
      },
      addDepartment(){
        this.$router.push({path:"/addDepartment"})
      }
  },
  created(){
  
    this.fetchDepartments();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
