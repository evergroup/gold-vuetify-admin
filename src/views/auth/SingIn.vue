<template>
  <v-container class="container--fluid fill-height primary">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-5 pa-3">
          <v-card-text>
            <div class="layout column align-center black pb-4">
              <img
                src="img/icons/pg-logo.jpg"
                alt="PG Logo"
                width="160"
                height="146"
              />
              <h1 class="text-center mt-1 white--text">PG Sales System</h1>
            </div>
            <v-form class="mt-4">
              <v-text-field
                v-model="model.email"
                append-icon="mdi-account"
                name="email"
                :label="$t('login.email')"
                type="email"
                required
                autocomplete="username"
              />
              <v-text-field
                v-model="model.password"
                append-icon="mdi-lock"
                name="password"
                :label="$t('login.password')"
                type="password"
                required
                autocomplete="current-password"
              />
            </v-form>
          </v-card-text>
          <v-card-text>
            <v-row class="text-center" dense no-gutters>
              <v-col cols="12">
                <v-btn-toggle>
                  <v-btn text color="warning" @click="setUserToLogin(1)">
                    <span>Admin</span>
                  </v-btn>
                  <v-btn text color="error" @click="setUserToLogin(0)">
                    <span>Sales</span>
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <localization />
            <v-btn icon>
              <v-icon color="blue"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="red"> mdi-google </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="light-blue"> mdi-twitter </v-icon>
            </v-btn>
            <v-spacer />
            <v-btn color="primary" outlined to="/singup">
              {{ $t("login.singUp") }}
            </v-btn>
            <v-btn color="primary" :loading="loading" @click="login">
              {{ $t("login.singIn") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Localization from "../widget/AppLocalization.vue";
import { userAdmin, userEditor } from "@/api/mock";
import { mapState, mapMutations } from "vuex";

export default {
  name: "SingIn",
  components: { Localization },
  data: () => ({
    loading: false,
    model: {
      email: "hnggg6@gmail.com",
      password: "123456",
    },
  }),
  methods: {
    async login() {
      await this.$store.dispatch("LoginByEmail", {
        email: this.model.email,
        password: this.model.password,
      });
      this.$router.push("/");
    },
    setUserToLogin(id) {
      console.log("login = ", id);
    },
  },
};
</script>
