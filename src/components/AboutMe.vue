<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="picture"></div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h2 class="text-uppercase">{{translation.nastya}}</h2>
        </div>
      </div>
    </div>
    <div class="container text-start mt-4">
        <div class="row">
            <div class="col-12">
                <h5 class="text-uppercase m-0">{{translation.about}}</h5>
                <div class="hr"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>{{translation.text}}:</p>
            </div>
        </div>
        <div class="row p-0">
            <div class="col-12 p-0" v-for="(guide, index) in translation.guides" :key='index'>
                <ul>
                    <li>{{guide.name}}</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Translation from "../translations/Home.js";
export default {
  name: "AboutMe",
  computed: {
    translation(){
      return new Translation(this.$route.params.lang);
    }
  },
};
</script>
<style lang="scss" scoped>
.picture {
  margin-top: 3rem;
  height: 225px;
  width: 225px;
  border-radius: 1000px;
  border: 5px solid #ffff;
  background-color: #e5e5e5;
  background-image: url("/img/1619091119899.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h5{
    color: #ffff;
}
p, ul{
    color: #ffffff;
    margin-bottom: 7px;
    font-size: 18px;
}
.hr{
    background-color: #ffffff;
    margin-bottom: 1rem;
}
</style>
