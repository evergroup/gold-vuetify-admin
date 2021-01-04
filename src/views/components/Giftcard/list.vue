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
              <v-toolbar-title>黄金礼券列表</v-toolbar-title>
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
                    新增礼券
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
                            v-model="editedItem.sn"
                            label="SerialNo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.code"
                            label="Activate Code"
                            type="phone"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                        
                            v-model="editedItem.product"
                            label="Product"
                          ></v-text-field>
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
            </v-toolbar>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip small label dark :color="userColor(item.status)">{{
              userStatus(item.status)
            }}</v-chip>
          </template>
          <template v-slot:item.activated="{ item }">
            <v-icon small v-if="item.activated"> mdi-check </v-icon>
            <v-icon small v-else> mdi-close </v-icon>
          </template>
           <template v-slot:item.activateTime="{ item }">
            {{ item.activateTime | date}}
          </template>
           <template v-slot:item.created="{ item }">
            {{ item.created | date}}
          </template>

          <template v-slot:item.actions="{ item }">
            <!-- <v-icon
              small
              class="mr-2"
              @click="$router.push('/users/' + item.id)"
            >
              mdi-eye
            </v-icon> -->
            <v-icon
              v-if="user.roleId == 1"
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
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
    text: "SerialNo",
    align: "start",
    sortable: false,
    value: "sn",
  },
  { text: "Code", value: "code" },
  { text: "CreateTime", value: "created" },
  { text: "已激活", value: "activated", align: "center" },
  { text: "激活时间", value: "activateTime" },
  
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
      editedIndex: -1,
      editedItem: {
      },
      defaultItem: {
      },
    };
  },
  computed: {
    ...mapState(["user"]),
    formTitle() {
      return this.editedIndex === -1 ? "新增礼券" : "编辑礼券";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  mounted() {
    this.getCardList();
  },
  methods: {
    ...mapMutations(["showAlert"]),
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      let detail = this.editedItem
      if (this.editedIndex > -1) {
        this.$http.post("/pgCards/edit", detail).then((res) => {
        if (res.status == 200) {
          this.getCardList();
        }
      });
      } else {
        this.$http.post("/pgCards/add", detail).then((res) => {
        if (res.status == 200) {
          this.getCardList();
        }
      });
      }
      this.close();
    },

    getCardList() {
      this.$http.post("/pgCards/search").then((res) => {
        if (res.status == 200) {
          this.desserts = res.result;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
