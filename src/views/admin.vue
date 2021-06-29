<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-4">
        <img src="/image/1.jpg" alt="doctune" class="img-fluid imglogo">
      </div>
      <div class="col-lg-5 col-md-5 col-sm-5">
        <h1 class="text-secondary text-center mt-2">Admin's DashBoard</h1>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-3">
        <div class="border bg-light rounded mt-2">
          <label class="text-success m-3"> Welcome Admin </label>    
          <button class="btn btn-primary btn-sm m-2" @click="gotohome"> Log Out </button>
        </div>
      </div>
      <div class="col-lg-1 col-sm-1"></div>
    </div>

    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <table class="table table-bordered mt-5">
          <thead class="text-danger">
            <tr>
              <th>Name</th>  
              <th>Login ID</th>  
              <th>Password</th>
              <th>Action</th>
            </tr>        
          </thead>
          <tbody v-for="(field , n) in fieldset" :key="field.registerid">
            <tr>
              
                <td> {{field.myname}} </td>
                <td> {{field.registerid}} </td>
                <td> {{field.registerpassword}} </td>
                <td> <button class="btn btn-danger" @click="deletefield(n)"> Delete </button> </td>
              
            </tr>
          </tbody>
        </table>
        
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Admin',
  data(){
    return{
      fieldset : [],
    }
  },
  mounted() {
    if (localStorage.getItem('fieldset')) {
            try {
                this.fieldset = JSON.parse(localStorage.getItem('fieldset'));
        } catch(e) {
            localStorage.removeItem('fieldset');
            }
        }
  },
  methods:{
    gotohome(){
      this.$router.push("/");
    },
    deletefield(id) {
      this.fieldset.splice(id, 1);
      this.savereg();
    },
    savereg() {
      const parsed = JSON.stringify(this.fieldset);
      localStorage.setItem('fieldset', parsed);
    },
  }
}

</script>

<style scoped>
.imglogo{
    height: 75px !important;
}
</style>
