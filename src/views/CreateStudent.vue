<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <div class="col-6">
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
                <v-btn
                  class="mr-4"
                  @click="reset"
                  elevation="0"
                  color="indigo"
                  dark
                >
                  limpar
                </v-btn>

                <v-spacer></v-spacer>

                <router-link to="/students">
                  <v-btn elevation="0" dark color="teal">Voltar</v-btn>
                </router-link>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </div>
    </v-row>
  </v-container>
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
    createStudent() {
      this.$refs.form.validate();

      if (!this.valid) return;

      const student = {
        name: this.name,
        email: this.email,
      };

      this.$store.commit("addStudent", { student });
      this.$refs.form.reset();
      this.$router.push("/students");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>