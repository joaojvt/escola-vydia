<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <div class="col-6">
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-select
                v-model="student"
                :items="students"
                :rules="studentRules"
                label="Aluno"
                item-text="name"
                item-value="id"
                required
              ></v-select>
              <v-select
                v-model="classe"
                :items="classes"
                :rules="classRules"
                label="Matérias"
                item-text="name"
                item-value="id"
                required
              ></v-select>

              <v-text-field
                v-model="grade"
                :rules="gradeRules"
                label="Nota"
                required
              ></v-text-field>
              <v-row class="my-3 mx-1">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  elevation="0"
                  @click="createExam"
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

                <router-link to="/exams">
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
    grade: null,
    gradeRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value >= 0 && value <= 10) || "Digite um número de 0 a 10",
    ],
    classe: null,
    classRules: [
      (value) => !!value || "Obrigatório.",
    ],
    student: {},
    studentRules: [
      (value) => !!value || "Obrigatório.",
    ],
  }),
  methods: {
    createExam() {
      this.$refs.form.validate();
      if (!this.valid) return;

      const exam = {
        grade: this.grade,
        student: this.students.find(student => this.student === student.id),
        class: this.classes.find(classe => this.classe === classe.id),
      };

      this.$store.commit("addExam", { exam });
      this.$refs.form.reset();
      this.$router.push("/exams");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
    classes() {
      return this.$store.state.classes;
    },
  },
};
</script>

<style>
</style>
