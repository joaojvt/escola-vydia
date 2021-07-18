<template>
  <div>
    <v-card>
      <v-card-title>
        <router-link to="/create-student">
          <v-btn color="teal" id="new-student-btn" dark> Novo </v-btn>
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
              :items="students"
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
                  @click="editStudent(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  class="ml-2"
                  title="Apagar"
                  color="red"
                  @click="deleteStudent(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </div>
        </v-row>
      </v-container>
    </v-card>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Tem certeza que quer apagar esse aluno?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete"
            >Cancelar</v-btn
          >
          <v-btn color="red darken-1" text @click="deleteStudentConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {},

  data: () => ({
    search: "",
    dialogDelete: false,
    headers: [
      { text: "Matricula", value: "id" },
      { text: "Nome", value: "name" },
      { text: "Email", value: "email" },
      { text: "Ações", value: "actions", sortable: false },
    ],
  }),

  computed: {
    students() {
      return this.$store.state.students;
    },
  },

  methods: {
    editStudent(student) {
      this.$router.push(`/edit-student/${student.id}`)
    },
    deleteStudent() {
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deleteStudentConfirm(student) {
      this.dialogDelete = false;
      this.$store.commit("deleteStudentConfirm", student);
    },
  },
};
</script>
