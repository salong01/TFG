<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-start justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="userId"
                    prepend-icon="person"
                    type="text"
                  >
                  </v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    name="password"
                    prepend-icon="lock"
                    :type="showPassword ? 'text' : 'password'"
                    append-icon="mdi-eye-off"
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="checkCredentials" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    showPassword: false,
    userId: null,
    password: null,
    usuario: "Saxulin",
    pass: "Eiscue"
  }),
  methods: {
    checkCredentials() {
      alert(this.usuario + " " + this.userId);
      alert(this.pass + " " + this.password);
      if (this.usuario == this.userId && this.pass == this.password) {
        alert("Credenciales correctas");
        this.$router.push("/");
      } else {
        alert("No coinciden las credenciales");
      }
    }
  }
};
</script>
