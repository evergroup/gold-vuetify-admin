<template>
  <v-card>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="products"
          hide-default-footer
          class="elevation-0 table-striped"
        >
          <template v-slot:item.image="{ item }">
            <v-avatar v-if="item.image" size="36">
              <img :src="item.image" />
            </v-avatar>
            <v-avatar v-else size="36">
              <span>PGT</span>
            </v-avatar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-btn small flat icon color="grey">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn small flat icon color="grey">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </template>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    products: [],
    headers: [
      {
        text: "ID",
        align: "center",
        sortable: false,
        value: "id",
      },
      {
        text: "Title",
        align: "left",
        value: "title",
      },
      {
        text: "Name",
        align: "left",
        value: "name",
      },
      { text: "Price", value: "price" },
      { text: "Image", value: "image" },
      { text: "Action", value: "action", align: "right" },
    ],
  }),
  methods: {
    getProductList() {
      this.$http.get("/products").then((res) => {
        if (res.status == 200) {
          this.products = res.result;
        }
      });
    },
  },
  mounted() {
    this.getProductList();
  },
};
</script>
