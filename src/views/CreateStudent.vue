<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-text-field
          v-model="name"
          label="Nome"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
       <v-row class="my-3 mx-1">
         <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          elevation="0"
          @click="createStudent"
        >
          Gravar
        </v-btn>
        <v-btn class="mr-4" @click="reset" elevation="0" color="indigo" dark>
          limpar
        </v-btn>

        <v-spacer></v-spacer>

        <router-link to="/students">
          <v-btn elevation="0" >Voltar</v-btn>
        </router-link>
       </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "create-student",
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    email: "",
    emailRules: [
      (value) => !!value || "Obrigatório.",
      (value) =>
        /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)$/i.test(value) ||
        "Email inválido",
    ],
  }),
  methods: {
    createStudent(event) {
      event.preventDefault;
      this.$refs.form.validate();

      if (!this.valid) return;

      this.students.push({
        id: this.students.length + 1,
        name: this.name,
        email: this.email,
      });
      this.$refs.form.reset();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>