<template>
  <v-container class="container--fluid grid-list-md">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card>
          <v-card-title>用户信息</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="userInfo.username"
                    label="Username"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="userInfo.phone"
                    label="Phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="userInfo.email"
                    label="Email"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="userInfo.password"
                    label="Password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="userInfo.password2"
                    label="Confirm Password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <p class="text-bold">佣金总计</p>
                  <p>{{ (userInfo.gain && userInfo.gain.total) || 0 }}</p>
                </v-col>
                <v-col cols="12">
                  <p>所有下线</p>
                  <div v-for="child in userInfo.children" :key="child.id">
                    <v-row no-gutters>
                      <v-col cols="12" sm="4">
                        <strong>用户名：</strong> {{ child.username }}
                      </v-col>
                      <v-col cols="12" sm="4">
                        <strong>电邮：</strong> {{ child.email }}
                      </v-col>
                      <v-col cols="12" sm="4">
                        <strong>电话：</strong> {{ child.phone }}
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {},
  computed: {},
  data() {
    return {
      id: this.$route.params.id,
      userInfo: {},
    };
  },
  mounted() {
    console.log("id", this.id);
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$http.get("/users/getInfo/" + this.id).then((res) => {
        if (res.status == 200) {
          this.userInfo = res.result;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
