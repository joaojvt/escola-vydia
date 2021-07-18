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
                v-model="teacher"
                :rules="teacherRules"
                label="Professor responsável"
                required
              ></v-text-field>
              <v-row class="my-3 mx-1">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  elevation="0"
                  @click="createClass"
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
                  Limpar
                </v-btn>

                <v-spacer></v-spacer>

                <router-link to="/classes">
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
  name: "create-class",
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    teacher: "",
    teacherRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
  }),
  methods: {
    createClass(event) {
      event.preventDefault;
      this.$refs.form.validate();

      if (!this.valid) return;

      const classe = {
        name: this.name,
        teacher: this.teacher,
      };

      this.$store.commit("addClass", { classe });
      this.$refs.form.reset();
      this.$router.push("/classes");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
