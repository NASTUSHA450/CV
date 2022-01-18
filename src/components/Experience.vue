<template>
  <div class="container-fluid text-start">
    <div class="container p-0">
      <div class="row">
        <div class="col-12">
          <h5 class="text-uppercase">{{ translation.work }}</h5>
          <div class="hr"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="kartochka" v-for="(card, i) in translation.cards" :key="i">
            <div class="d-flex flex-row">
              <h6 class="d-flex text-uppercase">{{translation.period}}:</h6>
              <p>{{ card.period }}</p>
            </div>
            <div class="d-flex flex-row">
              <h6 class="d-flex text-uppercase">{{translation.position}}:</h6>
              <p>{{ card.position }}</p>
            </div>
            <div class="d-flex flex-row">
              <h6 class="d-flex text-uppercase">{{translation.resp}}:</h6>
              <ul v-html="card.respons"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Translation from "../translations/Home.js";
export default {
  name: "Experience",
  computed: {
    translation() {
      return new Translation(this.$route.params.lang);
    },
  },
};
</script>
<style lang="scss" scoped>
.kartochka {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  &:first-of-type {
    margin-bottom: 1rem;
  }
  h6 {
    margin-right: 2rem;
  }

  li,
  ul,
  p {
    color: black;
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
}
</style>
