<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <div class="col-6">
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-text-field
                v-model="classe.name"
                label="Nome"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="classe.teacher"
                :rules="teacherRules"
                label="Professor"
                required
              ></v-text-field>
              <v-row class="my-3 mx-1">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  elevation="0"
                  @click="updateClass(classe)"
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
  name: "edit-class",
  data: () => ({
    id: null,
    valid: false,
    nameRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    teacherRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    classe: {
      id: null,
      name: "",
      teacher: "",
    },
  }),
  methods: {
    updateClass(student) {
      this.$refs.form.validate();
      if (!this.valid) return;

      const newClass = {
        id: student.id,
        name: student.name,
        email: student.email,
      };

      this.$store.commit("editClass", { newClass });
      this.$refs.form.reset();
      this.$router.push("/classes");
    },
    reset() {
      this.$refs.form.reset();
    },
    init() {
      const id = parseInt(this.$route.params.id, 10);
      this.classe = this.$store.getters.getClassById(id);
    },
  },
  created() {
    this.init();
  },
};
</script>

<style>
</style>