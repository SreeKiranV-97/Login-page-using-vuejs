<template>
    <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3">
            <img src="/image/2.jpg" alt="doctunelogo" class="img-fluid imglogo">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <h1 class="text-secondary text-center mt-2"> Welcome to Doctune {{userid}}</h1>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
            <button class="btn btn-primary mt-2" @click="gotohome"> Log Out </button>
        </div>
        
        </div>

        <div class="row mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="border bg-light m-5 rounded">
                    <i class="fa fa-file-contract fa-3x m-4 mb-2"></i>
                    <p class="text-dark">Doctune</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="border bg-light m-5 rounded">
                    <i class="far fa-copyright fa-3x m-4 mb-2"></i>
                    <p class="text-dark">SreeKiran V</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="border bg-light m-5 rounded">
                    <i class="fab fa-instagram fa-3x m-4 mb-2"></i>
                    <p class="text-dark">___skv__</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="border bg-light m-5 rounded">
                    <i class="fab fa-linkedin fa-3x m-4 mb-2"></i>
                    <p class="text-dark">SreeKiran V</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "User",
  data(){
      return{
          userid : ''
      }
  },
  methods:{
      gotohome(){
          this.$router.push("/");
      }
    },
  mounted() {
        if (localStorage.userid) {
            this.userid = localStorage.userid;
        }
    }
};
</script>

<style scoped>

.imglogo{
    height: 75px !important;
}

</style>
