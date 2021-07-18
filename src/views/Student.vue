<template>
  <div>
    <v-card>
      <v-card-title>
        <v-btn color="teal" dark @click="goToCreate"> Novo </v-btn>

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
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},

  data: () => ({
    search: "",

    headers: [
      { text: "Matricula", value: "id" },
      { text: "Nome", value: "name" },
      { text: "Email", value: "email" },
      { text: "Ações", value: "actions", sortable: false },
    ],
  }),

  created() {
    this.initialize();
  },

  methods: {
    editStudent(student) {
      console.log("editar" + student.name);
    },
    deleteStudent(student) {
      console.log("deletar" + student.name);
    },
    initialize() {
      this.students = [
        {
          id: 1,
          name: "João Vitor da Silva",
          email: "joao@email.com",
          actions: "",
        },
      ];
    },
    goToCreate() {
      this.$router.push("/create-student");
    },
  },
};
</script>
