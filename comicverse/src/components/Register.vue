<template>
  <v-app id="inspire" class="background">
    <v-img
      src="../../public/img/CapAmericaHappy.jpg"
      max-height="1009"
      max-width="1600"
    >
      <v-content>
        <v-container>
          <v-layout align-left justify-left>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-20">
                <v-toolbar dark color="teal">
                  <v-toolbar-title>Register new User</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form aria-label="Register">
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          prepend-icon="mdi-account-circle"
                          v-model="userId"
                          data-vv-name="user"
                          label="User"
                          name="userId"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          prepend-icon="person"
                          v-model="name"
                          label="Name"
                          name="name"
                        >
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          prepend-icon="mail"
                          data-vv-name="email"
                          label="Email"
                          name="email"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          id="password"
                          v-model="password"
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          :type="showPassword ? 'text' : 'password'"
                          append-icon="mdi-eye-off"
                          @click:append="showPassword = !showPassword"
                        >
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          prepend-icon="lock"
                          :type="showPasswordConfirmed ? 'text' : 'password'"
                          append-icon="mdi-eye-off"
                          @click:append="
                            showPasswordConfirmed = !showPasswordConfirmed
                          "
                          data-vv-as="password_confirmation"
                          label="Password Confirm"
                          name="password_confirmation"
                        >
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          type="date"
                          prepend-icon="event"
                          v-model="date"
                          label="Date"
                          name="date"
                        />
                      </v-flex>
                    </v-layout>

                    <v-btn @click="sendData" dark color="teal">Submit</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-dialog v-model="show" persistent width="300">
              <v-card>
                <v-card-text>
                  {{ message }}
                  <p>
                    Click on the URL to be directed to the personalized app
                    login page
                  </p>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-container>
      </v-content>
    </v-img>
  </v-app>
</template>

<script>
//import axios from "axios";
export default {
  data: () => ({
    userId: null,
    name: null,
    email: null,
    password: null,
    passsword_confirmation: null,
    date: null,
    url: null,
    message: "",
    show: false,
    userRegister: false,
    showPassword: false,
    showPasswordConfirmed: false
  }),
  methods: {
    sendData() {
      //   if (password === passsword_confirmation) {
      //     const userRegister = {
      //       user: this.userId,
      //       name: this.name,
      //       password: this.password.axios,
      //       email: this.email,
      //       date: this.date
      //     };
      //     axios
      //       .post("http://localhost:3000/register", userRegister)
      //       .then(response => {
      //         if (response.data == "error") {
      //           alert("Usuario ya registrado, por favor inténtelo de nuevo");
      //           this.$router.push("/login");
      //         } else {
      //           alert("Usuario registrado correctamente");
      //           this.$emit("sendData", this.id);
      //           //let url = '/user/' + this.id;
      //           this.$router.push("/home");
      //         }
      //       })
      //       .catch(error => {
      //         alert(error);
      //       });
      //   } else {
      //     alert("the passwords doesn´t match, try again.");
      //   }
    }
  }
};
</script>
