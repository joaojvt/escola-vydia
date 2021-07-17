<template>
  <v-container>
    <v-row class="d-flex flex-column" align="center">
      <h1 class="my-6">Bem-vindo!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, est
        accusantium recusandae necessitatibus cum provident eveniet veniam.
        Nesciunt soluta, quos, dolore, ipsum quae enim in excepturi veniam
        reiciendis provident ipsam
      </p>
      <img class="mt-12" src="@/assets/img/book_lover.svg" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
p {
  max-width: 700px;
  text-align: justify;
}
img {
  max-height: 550px;
}
</style>
