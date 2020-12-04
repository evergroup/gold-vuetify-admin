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
              <v-toolbar-title>订单列表</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="700px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    新增订单
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-autocomplete
                      class="mt-4"
                      v-model="selectedUser"
                      :items="users"
                      :loading="isLoading"
                      :search-input.sync="search"
                      hide-no-data
                      hide-selected
                      item-text="username"
                      item-value="id"
                      label="输入此订单的销售人"
                      return-object
                    ></v-autocomplete>

                    <table>
                      <tr>
                        <th></th>
                        <th>产品</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>小计</th>
                      </tr>
                      <tr v-for="(p, i) in products" :key="p.id">
                        <td>
                          <v-row no-gutters align="center">
                            <v-btn icon @click="rmProduct(p, i)"
                              ><v-icon color="red">mdi-close</v-icon></v-btn
                            >
                            <v-avatar class="ml-2 blue" size="32">
                              <img v-if="p.image" :src="p.image" />
                              <span class="white--text" v-else>PGT</span>
                            </v-avatar>
                          </v-row>
                        </td>
                        <td>{{ p.title }}</td>
                        <td>{{ p.price }}</td>
                        <td>
                          <v-text-field
                            style="width: 100px"
                            hide-details
                            outlined
                            v-model.number="p.count"
                            append-icon="mdi-plus"
                            @click:append="increment(p, i)"
                            prepend-inner-icon="mdi-minus"
                            @click:prepend-inner="decrement(p, i)"
                          >
                          </v-text-field>
                        </td>
                        <td>{{ totalPrice(p) }}</td>
                      </tr>
                      <tr>
                        <td class="py-8"></td>
                        <td></td>
                        <td></td>
                        <td><strong>总计:</strong></td>
                        <td>
                          <strong>{{ subtotal(products) }}</strong>
                        </td>
                      </tr>
                    </table>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="addOrder">
                      Place Order
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >你确定要认证通过这个订单吗?</v-card-title
                  >
                  <v-card-text
                    >请注意：认证通过后，Sales会得到佣金。</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="confirmOrder"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip small label dark :color="orderColor(item.status)">{{
              orderStatus(item.status)
            }}</v-chip>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="$router.push('/orders/' + item.id)"
            >
              mdi-eye
            </v-icon>
            <v-icon
              small
              :disabled="item.status == 1"
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
    text: "OrderNumber",
    align: "start",
    sortable: false,
    value: "orderNumber",
  },
  { text: "ID", value: "id" },
  { text: "Total (￥)", value: "total" },

  { text: "User", value: "userId" },
  { text: "Status", value: "status" },
  { text: "Actions", value: "actions", sortable: false },
];

export default {
  components: {},
  computed: {
    ...mapState(["user"]),
  },
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
      products: [],
      orderProducts: [],

      isLoading: false,
      users: [],
      selectedUser: null,
      search: null,
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新建订单" : "编辑订单";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    search(val) {
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;
      this.$http
        .post("users/search", { username: val })
        .then((res) => {
          if (res.status == 200) {
            this.users = res.result;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    this.getOrderList();
    this.getProductList();
  },
  methods: {
    ...mapMutations(["showAlert"]),
    increment(p, i) {
      p.count = p.count + 1;
      this.products.splice(i, 1, { ...p });
    },
    decrement(p, i) {
      if (p.count > 0) {
        p.count = p.count - 1;
        this.products.splice(i, 1, { ...p });
      }
    },
    totalPrice(p) {
      let count = p.count || 0;
      return p.price * count;
    },
    subtotal(products) {
      let t = 0;
      products.map((p) => {
        let count = p.count || 0;
        t += p.price * count;
      });

      return t;
    },
    orderColor(s) {
      if (!s) return "blue";
      if (s == 1) return "success";
      if (s == 2) return "warning";
      if (s == -1) return "red";
    },
    orderStatus(s) {
      if (!s) return "已提交";
      if (s == 1) return "已确认";
      if (s == 2) return "已取消";
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

    addOrder() {
      let detail = {
        userId: this.selectedUser && this.selectedUser.id,
        products: this.products,
      };
      this.$http.post("/orders/addOrder", detail).then((res) => {
        if (res.status == 200) {
          this.showAlert("Order Added");
          this.dialog = false;
          this.getOrderList();
        }
      });
    },

    confirmOrder() {
      let orderId = this.editedItem && this.editedItem.id;
      if (!orderId) {
        return this.showAlert("Error Params");
      }
      this.$http.post("/orders/confirmOrder/" + orderId).then((res) => {
        if (res.status == 200) {
          this.showAlert("Order Confirmed");
          this.dialogDelete = false;
          this.getOrderList();
        }
      });
    },

    getOrderList() {
      this.$http.get("/orders").then((res) => {
        if (res.status == 200) {
          this.desserts = res.result;
        }
      });
    },
    rmProduct(p, i) {
      this.products.splice(i, 1);
    },

    getProductList() {
      this.$http.get("/products").then((res) => {
        if (res.status == 200) {
          this.products = res.result;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: 1px solid #ccc;
}

th {
  text-align: left;
}
td {
  padding-right: 10px;
}
</style>
