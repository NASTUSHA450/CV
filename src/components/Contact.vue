<template>
  <div class="container-fluid text-start">
    <div class="contaner p-0">
      <div class="row">
        <div class="col-12">
          <h5 class="text-uppercase">{{translation.contact}}</h5>
          <div class="hr"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-for="(contact, index) in contacts" :key="index">
          <div class="contact">
            <img
              class="icon"
              :src="`/img/${contact.icon}.svg`"
              :alt="contact.name"
            />
            <a :href="contact.link">{{ contact.name }}</a>
          </div>
        </div>
        <div class="col-12">
          <div class="contact">
            <img
              class="icon"
              src="/img/ph.svg"
              alt="contact.name"
            />
            <span class="p-0">+357 95 74 2002</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Translation from "../translations/Home.js";
export default {
  name: "Contacts",
  computed: {
    translation() {
      return new Translation(this.$route.params.lang);
    },
  },
  data: () => ({
    contacts: [
      { icon: "git", link: "https://github.com/NASTUSHA450", name: "https://github.com/NASTUSHA450" },
      {
        icon: "in",
        link: "https://www.linkedin.com/in/anastasia-dragunskaya-302985196/",
        name: "https://www.linkedin.com/in/anastasia-dragunskaya-302985196/",
      },
      { icon: "email", link: "mailto:nastyadragunskaya@gmail.com ", name: "nastyadragunskaya@gmail.com " },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.icon {
  width: 30px;
  padding: 5px;
  margin-right: 1rem;
}
</style>
