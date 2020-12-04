<template>
  <v-card>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="orders"
          hide-default-footer
          class="elevation-0 table-striped"
        >
          <template v-slot:item.status="{ item }">
            <v-chip
              label
              small
              :color="orderColor(item.status)"
              text-color="white"
            >
              {{ orderStatus(item.status) }}
            </v-chip>
          </template>
        </v-data-table>
      </template>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    orders: [],
    headers: [
      {
        text: "OrderNumber",
        align: "start",
        sortable: false,
        value: "orderNumber",
      },

      { text: "Total(￥)", value: "total" },

      { text: "User", value: "userId" },
      { text: "Status", value: "status" },
    ],
  }),
  methods: {
    orderColor(s) {
      if (s == 0) return "blue";
      if (s == 1) return "success";
      if (s == 2) return "warning";
      if (s == -1) return "red";
    },
    orderStatus(s) {
      if (s == 0) return "已下单";
      if (s == 1) return "已确认";
      if (s == 2) return "已取消";
      if (s == -1) return "已删除";
    },
    getOrderList() {
      this.$http.get("/orders").then((res) => {
        if (res.status == 200) {
          this.orders = res.result;
        }
      });
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>
