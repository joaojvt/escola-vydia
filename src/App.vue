<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app dark color="grey darken-3">
      <v-divider></v-divider>

      <v-list>
        <v-list-item 
          v-for="([icon, pageName, route], i) in links"
          :key="i"
          @click="goTo(pageName, route)"
          class="d-flex align-baseline"
        >
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>


          <v-list-item-content>
              <v-list-item-title v-text="pageName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat color="teal lighten-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ page }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    drawer: false,
    page: "Home",
    links: [
      ["mdi-home", "Home", "/"],
      ["mdi-account", "Alunos", "/students"],
      ["mdi-book-open-variant", "Materias", "/classes"],
      ["mdi-file-outline", "Provas", "/exams"],
    ],
  }),
  methods: {
    goTo: function (namePage, route) {
      if (this.$route.path !== route){
        this.page = namePage;
        this.$router.push(route)
      } 
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
