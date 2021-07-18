<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <div class="col-6">
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-text-field
                v-model="student.name"
                label="Nome"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="student.email"
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
                  @click="updateStudent(student)"
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
  name: "edit-student",
  data: () => ({
    id: null,
    valid: false,
    nameRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    emailRules: [
      (value) => !!value || "Obrigatório.",
      (value) =>
        /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)$/i.test(value) ||
        "Email inválido",
    ],
    student: {
      id: null,
      name: '',
      email: '',
    }
  }),
  methods: {
    updateStudent(student) {
      this.$refs.form.validate();
      if (!this.valid) return;

      const newStudent = {
        id : student.id,
        name: student.name,
        email: student.email
      }

      this.$store.commit("editStudent", { newStudent });
      this.$refs.form.reset();
      this.$router.push("/students");
    },
    reset() {
      this.$refs.form.reset();
    },
    init(){
      const id = parseInt(this.$route.params.id, 10)
      this.student = this.$store.getters.getStudentById(id)
    }
  },
  created(){
    this.init()
  },
};
</script>

<style>
</style>