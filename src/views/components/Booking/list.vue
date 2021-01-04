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
              <v-toolbar-title>预约取货列表</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <!-- <v-dialog v-model="dialog" max-width="500px">
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
              </v-dialog> -->
            </v-toolbar>
          </template>
          <!-- <template v-slot:item.status="{ item }">
            <v-chip small label dark :color="userColor(item.status)">{{
              userStatus(item.status)
            }}</v-chip>
          </template> -->
          <template v-slot:item.claimed="{ item }">
            <v-icon small v-if="item.claimed"> mdi-check </v-icon>
            <v-icon small v-else> mdi-close </v-icon>
          </template>
           <template v-slot:item.timeslot="{ item }">
            {{ item.timeslot | date}}
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
              small
              v-if="user.roleId == 1"
              :disabled="item.claimed == 1"
              @click="deleteItem(item)"
            >
              mdi-checkbox-multiple-marked
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-chip label> no bookings yet </v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline"
          >你确定这个首金券预约已经兑换了吗?</v-card-title
        >
        <v-card-text
          >请注意：兑换确认后，此预约就完结。</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="confirmBooking"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    text: "Name",
    align: "start",
    sortable: false,
    value: "name",
  },
  { text: "Phone", value: "phone" },
  { text: "Email", value: "email" },
  { text: "Products", value: "products" },
  { text: "DateTime", value: "timeslot", align: "center" },
  { text: "已提兑", value: "claimed", align: "center" },
  { text: "CreateTime", value: "created" },
  
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
      },
      defaultItem: {
      },
    };
  },
  computed: {
    ...mapState(["user"]),
    formTitle() {
      return this.editedIndex === -1 ? "新增预约" : "编辑预约";
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
    this.getBookingList();
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
        this.$http.post("/pgBookings/edit", detail).then((res) => {
        if (res.status == 200) {
          this.getCardList();
        }
      });
      } else {
        this.$http.post("/pgBookings/add", detail).then((res) => {
        if (res.status == 200) {
          this.getCardList();
        }
      });
      }
      this.close();
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
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    confirmBooking() {
      let bookId = this.editedItem && this.editedItem.id;
      if (!bookId) {
        return this.showAlert("Error Params");
      }
      this.$http.post("/pgBookings/confirm/" + bookId).then((res) => {
        if (res.status == 200) {
          this.showAlert("预约已兑换");
          this.dialogDelete = false;
          this.getBookingList();
        }
      });
    },

    getBookingList() {
      this.$http.post("/pgBookings/search").then((res) => {
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
