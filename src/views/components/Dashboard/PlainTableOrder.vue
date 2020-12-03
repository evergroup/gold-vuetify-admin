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
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-left">
              {{ props.item.total }}
            </td>
            <td class="text-left">
              {{ props.item.price }}
            </td>
            <td class="text-left">
              <v-chip
                label
                small
                :color="getColorByStatus(props.item.status)"
                text-color="white"
              >
                {{ props.item.status }}
              </v-chip>
            </td>
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

      { text: "Total (￥)", value: "total" },

      { text: "User", value: "userId" },
      { text: "Status", value: "status" },
    ],
    colors: {
      processing: "blue",
      sent: "red",
      delivered: "green",
    },
  }),
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
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
