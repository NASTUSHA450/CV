<template>
  <div>
    <div class="container-fluid text-start">
      <div class="container p-0">
        <div class="row">
          <div class="col-12">
            <h5 class="text-uppercase">{{translation.prof}}</h5>
            <div class="hr"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 p-0" v-for="(tab, idx) in tabs" :key="idx">
            <div class="tab d-flex justify-content-center">{{ tab.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Translation from "../translations/Home.js";
export default {
  name: "Skills",
  computed: {
    translation() {
      return new Translation(this.$route.params.lang);
    },
  },
  data: () => ({
    tabs: [
      { name: "HTML 5" },
      { name: "SCSS(SASS)" },
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "Vue js" },
      { name: "Node js" },
      { name: "Figma" },
      { name: "Adobe" },
    ],
  }),
};
</script>
<style lang="sass" scoped></style>
