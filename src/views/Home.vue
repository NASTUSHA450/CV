<template>
  <div class="container main">
    <div class="row">
      <div class="col-5 d-flex" id="about">
        <AboutMe />
      </div>
      <div class="col-7" id="profile">
        <div class="text-end">
          <div class="lang">
            <a
              @click="
                ($refs.lang.langPopUp = true),
                  ($refs.lang.langClass = 'slide-in-blurred-tr')
              "
              class="nav-link"
              id="languageSelector"
              style="text-transform: uppercase; cursor: pointer"
            >
              <img
                class="mr-1"
                :src="`/img/lang/${$route.params.lang}.png`"
                :alt="$route.params.lang"
              />
            </a>
          </div>
          
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
    <Language ref="lang" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CV",
  data:() => ({
    languages: ["en", "gr", "ru"],
  })
};
</script>
<style lang="scss" scoped></style>
