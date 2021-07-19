<template>
  <div>
    <v-card>
      <v-card-title>
        {{student.name}}

        <v-spacer></v-spacer>

        <router-link to="/students">
          <v-btn color="teal" dark> Voltar </v-btn>
        </router-link>
      </v-card-title>

      <v-card-text>
        <h3>Provas</h3>
      </v-card-text>
      <v-container>
        <v-row>
          <div class="col-12">
            <v-data-table
              :headers="headersExams"
              :items="exams"
              :items-per-page="5"
              class="elevation-0"
            ></v-data-table>
          </div>
        </v-row>
      </v-container>
      <v-card-text>
        <h3>Matérias</h3>
      </v-card-text>
      <v-container>
        <v-row>
          <div class="col-12">
            <v-data-table
              :headers="headersClasses"
              :items="classes"
              :items-per-page="5"
              class="elevation-0"
            ></v-data-table>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "students-datails",
  data: () => ({
    headersExams: [
      { text: "ID", value: "id" },
      { text: "Matéria", value: "class.name" },
      { text: "Professor", value: "class.teacher" },
      { text: "Nota", value: "grade" }
    ],
    headersClasses: [
      { text: "ID", value: "id" },
      { text: "Matéria", value: "name" },
      { text: "Professor", value: "teacher" },
      { text: "Média", value: "averageGrade" }
    ]
  }),
  computed: {
    student() {
      const id = parseInt(this.$route.params.id, 10);
      return this.$store.getters.getStudentById(id);
    },
    classes() {
      const id = parseInt(this.$route.params.id, 10);
      return this.$store.getters.getStudentClasses(id);
    },
    exams() {
      const id = parseInt(this.$route.params.id, 10);
      return this.$store.getters.getStudentExams(id);
    }
  }
};
</script>

<style>
</style>