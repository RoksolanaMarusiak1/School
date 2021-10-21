<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <div class="input-field">
        <v-text-field
          label="Логін"
          hide-details="auto"
          color="teal"
          type="email"
          v-model="email"
          shaped
          filled
        />
      </div>
      <div class="input-field">
        <v-text-field
          label="Пароль"
          hide-details="auto"
          color="teal"
          type="password"
          v-model="password"
          shaped
          filled
        />
      </div>
      <div class="card-action">
        <v-btn type="submit" color="teal" dark> Ввійти </v-btn>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$store.dispatch("login", formData);
        if (response) {
          this.$router.push("/");
        }
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>

<style scoped>
.input-field {
  margin: 25px 0px 25px 0px;
}

.card-title {
  text-align: center;
}

.card {
  width: 25%;
}
</style>