<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <div class="col-6">
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-select
                v-model="exam.student"
                :items="students"
                :rules="studentRules"
                label="Aluno"
                item-text="name"
                item-value="id"
                readonly
                required
              ></v-select>
              <v-select
                v-model="exam.class"
                :items="classes"
                :rules="classRules"
                label="Matérias"
                item-text="name"
                item-value="id"
                readonly
                required
              ></v-select>

              <v-text-field
                v-model="exam.grade"
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
                  @click="updateExam(exam)"
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
  name: "edit-student",
  data: () => ({
    valid: false,
    gradeRules: [
      (value) => !!value || "Obrigatório.",
      (value) =>
        (value && value >= 0 && value <= 10) || "Digite um número de 0 a 10",
    ],
    classRules: [(value) => !!value || "Obrigatório."],
    studentRules: [(value) => !!value || "Obrigatório."],
  }),
  methods: {
    updateExam(exam) {
      this.$refs.form.validate();
      if (!this.valid) return;

      const newExam = {
        id: exam.id,
        grade: exam.grade,
        student: this.students.find(student => exam.student.id === student.id),
        class: this.classes.find(classe => exam.class.id === classe.id),
      };

      this.$store.commit("editExam", { newExam });
      this.$refs.form.reset();
      this.$router.push("/exams");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    exam() {
      const id = parseInt(this.$route.params.id, 10);
      return this.$store.getters.getExamById(id);
    },
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