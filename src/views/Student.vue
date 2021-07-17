<template>
  <div>
    <v-from ref="form" v-model="valid" lazy-validation>
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
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          elevation="0"
          @click="validate"
        >
          Gravar
        </v-btn>
        <v-btn class="mr-4" @click="reset" elevation="0" color="indigo" dark>
          limpar
        </v-btn>
      </v-container>
    </v-from>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
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
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
