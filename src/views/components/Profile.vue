<template>
  <div>
    <v-container class="container--fluid grid-list-md">
      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card flat>
            <v-card-title>基本信息</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p><b class="mr-5">用户名</b>{{ user.username }}</p>
              <p><b class="mr-5">姓名</b>{{ user.username }}</p>
              <p><b class="mr-5">电邮</b>{{ user.email }}</p>
              <p><b class="mr-5">电话</b>{{ user.phone }}</p>
            </v-card-text>
          </v-card>

          <v-card flat class="mt-4">
            <v-card-title>
              密码
              <v-spacer></v-spacer>
              <v-btn outlined @click="changePassword">修改密码</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                v-model="userInfo.oldPwd"
                type="password"
                label="旧密码"
              ></v-text-field>
              <v-text-field
                v-model="userInfo.newPwd"
                type="password"
                label="新密码"
              ></v-text-field>
              <v-text-field
                v-model="userInfo.newPwd2"
                type="password"
                label="确认新密码"
              ></v-text-field>
            </v-card-text>
          </v-card>

          <v-card flat class="mt-4">
            <v-card-title>其他信息</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p v-if="user.mother">我的上级</p>
              <v-row no-gutters v-if="user.mother">
                <v-col cols="12" sm="4">
                  <strong>用户名：</strong> {{ user.mother.username }}
                </v-col>
                <v-col cols="12" sm="4">
                  <strong>电邮：</strong> {{ user.mother.email }}
                </v-col>
                <v-col cols="12" sm="4">
                  <strong>电话：</strong> {{ user.mother.phone }}
                </v-col>
              </v-row>
              <p>所有下级</p>
              <strong v-if="!user.children || !user.children.length">
                暂时没有下级
              </strong>
              <div v-for="child in user.children" :key="child.id">
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
              <p class="mt-4">业绩统计</p>
              <v-row no-gutters>
                <v-col cols="12" sm="4">
                  <strong>我的业绩：</strong> {{ 0 }}
                </v-col>
                <v-col cols="12" sm="4">
                  <strong>我的佣金：</strong> {{ 0 }}
                </v-col>
                <v-col cols="12" sm="4">
                  <strong>团队业绩：</strong> {{ 0 }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {},
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    console.log(this.user);
  },
  methods: {
    ...mapMutations(["showAlert"]),
    changePassword() {
      let { oldPwd, newPwd, newPwd2 } = this.userInfo;
      if (!oldPwd || !newPwd || !newPwd2) return this.showAlert("请填写必填项");
      if (newPwd != newPwd2) return this.showAlert("密码不一致");
      api.changePwd(this.userInfo).then((res) => {
        if (res.status == 200) {
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
