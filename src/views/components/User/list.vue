<template>
  <v-container class="container--fluid grid-list-md">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>用户列表</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template
                  v-if="user.roleId == 1"
                  v-slot:activator="{ on, attrs }"
                >
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    新增用户
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.username"
                            label="Username"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.phone"
                            label="Phone"
                            type="phone"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            type="email"
                            v-model="editedItem.email"
                            label="Email"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="editedItem.password"
                            label="Password"
                            type="password"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="editedItem.password2"
                            type="password"
                            label="Confirm Password"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-autocomplete
                            v-model="editedItem.motherId"
                            :items="desserts"
                            item-text="username"
                            item-value="id"
                            label="选择上级，若不填 视为一级代理"
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >你确定要认证通过这个用户吗?</v-card-title
                  >
                  <v-card-text
                    >请注意：实名认证通过后，此用户可以进行销售活动。</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="confirmUser"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip small label dark :color="userColor(item.status)">{{
              userStatus(item.status)
            }}</v-chip>
          </template>
          <template v-slot:item.emailVerified="{ item }">
            <!-- <v-icon small v-if="item.emailVerified"> mdi-check </v-icon>
            <v-icon small v-else> mdi-close </v-icon> -->
            <v-chip small label dark :color="userColor(item.emailVerified)">{{
              userStatus(item.emailVerified)
            }}</v-chip>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="$router.push('/users/' + item.id)"
            >
              mdi-eye
            </v-icon>
            <v-icon
              v-if="user.roleId == 1"
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              :disabled="item.emailVerified"
              v-if="user.roleId == 1"
              small
              @click="deleteItem(item)"
            >
              mdi-checkbox-multiple-marked
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations } from "vuex";
const headers = [
  {
    text: "ID",
    value: "id",
  },
  {
    text: "Username",
    align: "start",
    sortable: false,
    value: "username",
  },
  { text: "Email", value: "email" },
  { text: "Status", value: "emailVerified", align: "center" },
  { text: "Phone", value: "phone" },
  // { text: "Status", value: "status" },
  { text: "ReferCode", value: "referCode" },
  { text: "Actions", value: "actions", sortable: false },
];

export default {
  components: {},
  computed: {},
  data() {
    return {
      headers,
      desserts: [],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    };
  },
  computed: {
    ...mapState(["user"]),
    formTitle() {
      return this.editedIndex === -1 ? "新增用户" : "编辑用户";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    ...mapMutations(["showAlert"]),
    userColor(s) {
      if (!s) return "blue";
      if (s == 1) return "success";
      if (s == 2) return "warning";
      if (s == -1) return "red";
    },
    userStatus(s) {
      if (!s) return "注册";
      if (s == 1) return "认证通过";
      if (s == 2) return "签约";
      if (s == -1) return "已删除";
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        // this.desserts.push(this.editedItem);
        this.addUser(this.editedItem);
      }
      this.close();
    },

    getUserList() {
      this.$http.post("/users/search").then((res) => {
        if (res.status == 200) {
          this.desserts = res.result;
        }
      });
    },
    addUser(detail) {
      this.$http.post("/users/addUser", detail).then((res) => {
        if (res.status == 200) {
          this.getUserList();
        }
      });
    },
    confirmUser() {
      let userId = this.editedItem && this.editedItem.id;
      if (!userId) {
        return this.showAlert("Error Params");
      }
      api.confirmUser(userId).then((res) => {
        if (res.status == 200) {
          this.showAlert("User Confirmed");
          this.dialogDelete = false;
          this.getUserList();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
