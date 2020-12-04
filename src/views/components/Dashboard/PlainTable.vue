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
            <v-avatar class="blue" size="32">
              <img v-if="item.image" :src="item.image" />
              <span v-else class="white--text">PGT</span>
            </v-avatar>
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
      { text: "Image", value: "image" },
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
