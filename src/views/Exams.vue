<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <router-link to="/create-exam">
          <v-btn color="teal" dark> Nova </v-btn>
        </router-link>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          class="shrink"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-container>
        <v-row>
          <div class="col-12">
            <v-data-table
              :headers="headers"
              :items="exams"
              :items-per-page="5"
              :search="search"
              class="elevation-0"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  color="primary"
                  class="mr-2"
                  title="Editar"
                  @click="editExam(item)"
                >
                  mdi-pencil
                </v-icon>
              </template>
            </v-data-table>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Exams',
  data: () => ({
    search: '',
    dialogDelete: false,
    headers: [
      { text: "ID", value: "id" },
      { text: "Aluno", value: "student.name" },
      { text: "Matéria", value: "class.name" },
      { text: "Nota", value: "grade" },
      { text: "Ações", value: "actions", sortable: false },
    ],
  }),
  computed: {
    exams() {
      return this.$store.state.exams;
    }
  },
  methods: {
    editExam(exam) {
      this.$router.push(`/edit-exam/${exam.id}`)
    },
  }
};
</script>
