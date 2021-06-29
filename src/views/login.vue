<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-2 col-xs-3"></div>
      <div class="col-lg-6 mb-5 col-md-6 col-sm-8 col-xs-6">
        
          <div class="card mt-5 mb-5">

            <div class="card-head bg-light p-3">
              <i class="fa fa-lock text-dark"> Login</i>
              <i class="fa-pull-right fa fa-user-plus text-danger cursor" @click="registration"> Sign up</i>
            </div>

            <div class="card-body p-3 bg-primary">
              <p class="fa-pull-left mt-2 text-light">Login ID</p>
              <input type="text"
                  name="loginid" 
                  v-model="loginid"
                  class="form-control mb-2" 
                  placeholder="Enter UserID"
              />
              <p class="fa-pull-left mt-2 text-light">Password</p>
              <input type="password"
                  name="password" 
                  v-model="password"
                  class="form-control mb-3" 
                  placeholder="Enter Password"
              />
            </div>

            <div class="card-footer bg-light text-center p-3">
              <button class="btn btn-success" v-on:click="loginto" >Login</button>
            </div>

          </div>
        
      </div>
      <div class="col-lg-3 col-md-3 col-sm-2 col-xs-3">
         
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  
  data(){
      return{
          loginid : '',
          password : '',
          fieldset : [],
          flag : true
      }
  },
  methods : {
    registration(){
      this.$router.push("/register");
    },
    loginto(){
      if(this.loginid == "admin" && this.password == "admin"){
          this.$router.push("/admin");
      }else{

        for(let i=0 ; i<this.fieldset.length ; i++){
          if(this.loginid == this.fieldset[i].registerid && this.password == this.fieldset[i].registerpassword){
            
            localStorage.userid = this.fieldset[i].myname;
            this.flag = true;
            this.$router.push("/user");
            break;
            
          }else{
            this.flag = false;
          }

        }

        if(this.flag == false){
          alert ("Invalid input !");
        }

      }
    },
  },
  mounted() {
    if (localStorage.getItem('fieldset')) {
            try {
                this.fieldset = JSON.parse(localStorage.getItem('fieldset'));
        } catch(e) {
            localStorage.removeItem('fieldset');
        }
    }
    
  }
  
}

</script>

<style scoped>
.cursor{
    cursor: pointer;
}
</style>

