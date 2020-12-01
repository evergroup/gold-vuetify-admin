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
              <v-toolbar-title>产品列表</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    新增产品
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-file-input
                            show-size
                            truncate-length="15"
                            prepend-icon="mdi-camera"
                            v-model="editedItem.file"
                            label="Image"
                          ></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.title"
                            label="Title"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.price"
                            label="Price (￥)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.desc"
                            label="Description"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            v-model="editedItem.body"
                            label="Body"
                          ></v-textarea>
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
                    >你确定要删除这个条目吗?</v-card-title
                  >
                  <v-card-text
                    >请注意：我们并不会真正删除，只是对用户隐藏此条目。</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.active="{ item }">
            <v-icon small v-if="item.active"> mdi-check </v-icon>
            <v-icon small v-else> mdi-close </v-icon>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
    text: "Title",
    align: "start",
    sortable: false,
    value: "title",
  },
  { text: "Name", value: "name" },
  { text: "Price (￥)", value: "price" },
  { text: "Body", value: "body" },
  { text: "Description", value: "desc" },
  { text: "Active", value: "active" },
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
    formTitle() {
      return this.editedIndex === -1 ? "新增产品" : "编辑产品";
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
    this.getProductList();
  },
  methods: {
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
      let detail = { id: this.editedItem.id, active: false };
      this.editProduct(detail);
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
        this.addProduct(this.editedItem);
      }
      this.close();
    },

    getProductList() {
      this.$http.get("/products").then((res) => {
        if (res.status == 200) {
          this.desserts = res.result;
        }
      });
    },
    async addProduct(detail) {
      if (detail.file) {
        detail.image = await api.upload(detail.file);
      }

      this.$http.post("/products/add", detail).then((res) => {
        if (res.status == 200) {
          this.desserts.push(res.result);
        }
      });
    },
    editProduct(detail) {
      this.$http.post("/products/edit", detail).then((res) => {
        if (res.status == 200) {
          this.getProductList();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
