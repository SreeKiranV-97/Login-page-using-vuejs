<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-2 col-sm-1"></div>
      <div class="col-lg-6 col-md-8 col-sm-10 mb-5">
        
          <div class="card mt-5 mb-5">

            <div class="card-head bg-light p-3">
              <i class="fa fa-user-plus text-dark"> Registration</i>
              <i class="fa-pull-right fa fa-question text-danger cursor" @click="signup">Already Registered</i>
            </div>

            <div class="card-body p-3 bg-primary">
              <p class="fa-pull-left mt-2 text-light">Name</p>
              <input type="text"
                  name="myname" 
                  v-model="myname"
                  class="form-control mb-2" 
                  placeholder="Enter Full Name"
              />
              <p class="fa-pull-left mt-2 text-light">User ID</p>
              <input type="text"
                  name="registerid" 
                  v-model="registerid"
                  class="form-control mb-3" 
                  placeholder="Enter Preferred UserID"
              />
              <p class="fa-pull-left mt-2 text-light">Password</p>
              <input type="password"
                  name="registerpassword" 
                  v-model="registerpassword"
                  class="form-control mb-3" 
                  placeholder="Enter Password"
              />
            </div>

            <div class="card-footer bg-light text-center p-3">
              <button class="btn btn-success" v-on:click="processfieldset" >Sign Up</button>
            </div>

          </div>
        
      </div>
      <div class="col-lg-3 col-md-2 col-sm-1">
            
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name : 'Register',
    data(){
        return{
            myname : '',
            registerid : '',
            registerpassword : '',
            fieldset : [],
            copyset : []
        }
    },
    methods:{
        signup(){
            this.$router.push("/");
        },
        processfieldset(){

            if( this.myname == ''|| this.registerid == '' || this.registerpassword == ''){
                alert ("Please fill all Details");
                this.myname = '',
                this.registerid = '',
                this.registerpassword = '';
            }else{
                this.copyset = {
                            "myname" : this.myname,
                            "registerid" : this.registerid,
                            "registerpassword" : this.registerpassword
                        }                
                this.verify();
            }

        },
        verify(){
            
            for(let i=0 ; i<this.fieldset.length ; i++){
                if(this.fieldset[i].registerid == this.registerid){
                    alert("User Already Exists !!!");
                    return;
                }
            }
                if (!this.fieldset) {
                    return;
                }

                this.fieldset.push(this.copyset);
                
                this.savereg();
        },
        savereg() {
            const parsed = JSON.stringify(this.fieldset);
            localStorage.setItem('fieldset', parsed);
            this.copyset = [];
            this.myname = '',
            this.registerid = '',
            this.registerpassword = '';
            alert("Hooray you have Registered...Now Sign In !")
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
    },
}

</script>

<style scoped>
.cursor{
    cursor: pointer;
}
</style>