<template>
  <v-container class="container--fluid grid-list-md">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card>
          <v-card-title>订单信息</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="orderInfo.orderNumber"
                    disabled
                    label="订单号码"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    disabled
                    :value="orderInfo.created | date"
                    label="订单时间"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    disabled
                    :value="orderStatus(orderInfo.status)"
                    label="订单状态"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <p class="text-bold">订单详情</p>

                  <table v-if="orderInfo.items">
                    <tr>
                      <th class="py-4"></th>
                      <th>产品</th>
                      <th>价格</th>
                      <th>数量</th>
                      <th>小计</th>
                    </tr>
                    <tr v-for="(o, i) in orderInfo.items" :key="o.id">
                      <td class="py-4">
                        <v-row no-gutters align="center">
                          <v-avatar class="ml-2 blue" size="32">
                            <img
                              v-if="o.product.image"
                              :src="o.product.image"
                            />
                            <span class="white--text" v-else>PGT</span>
                          </v-avatar>
                        </v-row>
                      </td>
                      <td>{{ o.product.title }}</td>
                      <td>{{ o.unitPrice }}</td>
                      <td>
                        {{ o.quantity }}
                      </td>
                      <td>{{ o.totalPrice }}</td>
                    </tr>
                    <tr>
                      <td class="py-8"></td>
                      <td></td>
                      <td></td>
                      <td><strong>总计:</strong></td>
                      <td>
                        <strong>{{ orderInfo.total }}</strong>
                      </td>
                    </tr>
                  </table>
                </v-col>
                <v-col cols="12">
                  <p>佣金分成</p>
                  <div v-for="child in orderInfo.gains" :key="child.id">
                    <v-row no-gutters>
                      <v-col cols="12" sm="4">
                        <strong>用户名：</strong>
                        {{ child.user && child.user.username }}
                      </v-col>
                      <v-col cols="12" sm="4">
                        <strong>比率：</strong> {{ child.rate || 0 }}
                      </v-col>
                      <v-col cols="12" sm="4">
                        <strong>总数：</strong> {{ child.money }}
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {},
  computed: {},
  data() {
    return {
      id: this.$route.params.id,
      orderInfo: {},
    };
  },
  mounted() {
    console.log("id", this.id);
    this.getOrderInfo();
  },
  methods: {
    orderStatus(s) {
      if (!s) return "已提交";
      if (s == 1) return "已确认";
      if (s == 2) return "已取消";
      if (s == -1) return "已删除";
    },
    getOrderInfo() {
      this.$http.get("/orders/getInfo/" + this.id).then((res) => {
        if (res.status == 200) {
          this.orderInfo = res.result;
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