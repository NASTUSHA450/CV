<template>
  <div
    @click="closePopup('outside')"
    class="col-12 px-0 lang-modal-wrapper"
    v-if="langPopUp == true"
  >
    <div
      @click="closePopup('inside')"
      :class="`row lang-modal-body p-md-5 p-3 ${langClass}`"
    >
      <p @click="langPopUp = false" class="big" id="closeLangPopup">&times;</p>
      <div
        @click="changeLanguage(lang.abb)"
        v-for="(lang, idx) in languages"
        :key="idx"
        class="lang-flag col-lg-2 col-md-6 px-0"
      >
        <img class="mb-2" :src="`/img/lang/${lang.abb}.png`" :alt="lang.name" />
        <p>
          {{ lang.nameOriginal }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Language",
  data: () => ({
    langPopUp: false,
    langClass: "slide-in-blurred-tr",
    currentLang: "en",
    languages: [
      {
        name: "English",
        nameOriginal: "English",
        abb: "en",
      },
      {
        name: "Russian",
        nameOriginal: "Русский язык",
        abb: "ru",
      },
      {
        name: "Greek",
        nameOriginal: "Ελληνικά",
        abb: "gr",
      },
    ],
  }),
  methods: {
    changeLanguage(lang) {
      this.$store.commit('resetLocale');
      this.$store.commit('setLocale', lang)
      let routeName = this.$route.path.split(`/${this.$route.params.lang}/`);
      // console.log(routeName)
      this.currentLang = lang;
      this.langClass = "slide-out-blurred-tr";
      setTimeout(() => {
        this.langPopUp = false;
        this.$router.replace(`/${lang}/${routeName[1]}`);
      }, 700);
    },
    closePopup(part) {
      if (part == "outside") {
        this.langPopUp = false;
      } else {
        this.langPopUp = true;
      }
      // console.log(part)
    },
  },
};
</script>

<style scoped lang="scss">
.lang-modal-wrapper {
  padding: 5rem;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.37);
  .lang-modal-body {
    position: relative;
    #closeLangPopup {
      position: absolute;
      display: flex;
      justify-content: end;
      right: 2%;
      top: 4%;
      font-size: 30px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: #007bff;
      }
    }
    border-radius: 10px;
    // border-top-right-radius: 0px;
    background-color: rgb(241, 241, 241);
    color: #00162c;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
    box-shadow: 0px 0px 60px 20px #ffffff59;
    p {
      font-size: 0.75rem;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .lang-flag {
      border-radius: 10px;
      padding: 1rem;
      cursor: pointer;
      transition: box-shadow 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      //   box-shadow: 0px 0px 5px #acacac59;
      img {
        max-width: 50px;
        height: 30px;
      }
      &:hover {
        box-shadow: inset 0px 0px 5px rgb(204, 204, 204);
      }
    }
  }
}
@media only screen and (max-width:1360px){
  .lang-modal-wrapper{
    align-items: flex-start;
    padding-top: 30%;
  }
}
@media only screen and (max-width:600px){
  .lang-modal-wrapper{
    .lang-modal-body{
      width: 70%;
      #closeLangPopup {
      position: absolute;
      right: 5%;
      top: 0;
      font-size: 30px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        transform: rotate(180deg) scale(1.3);
        color: #007bff;
      }
    }
    }
  }
}

.slide-in-blurred-tr {
  -webkit-animation: slide-in-blurred-tr 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-tr 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}
.slide-out-blurred-tr {
  -webkit-animation: slide-out-blurred-tr 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: slide-out-blurred-tr 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
}
@-webkit-keyframes slide-in-blurred-tr {
  0% {
    -webkit-transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate(0, 0) skew(0deg, 0deg);
    transform: translate(0, 0) skew(0deg, 0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-tr {
  0% {
    -webkit-transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate(0, 0) skew(0deg, 0deg);
    transform: translate(0, 0) skew(0deg, 0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@-webkit-keyframes slide-out-blurred-tr {
  0% {
    -webkit-transform: translate(0, 0) skew(0deg, 0deg);
    transform: translate(0, 0) skew(0deg, 0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}
@keyframes slide-out-blurred-tr {
  0% {
    -webkit-transform: translate(0, 0) skew(0deg, 0deg);
    transform: translate(0, 0) skew(0deg, 0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    transform: translate(1000px, -1000px) skew(-80deg, -10deg);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}
</style>