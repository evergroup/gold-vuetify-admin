<template>
  <v-row dense class="panel-group">
    <panel-group-item
      title="All Members"
      icon="mdi-account-multiple"
      color="orange"
      chart="newVisitis"
      :start="0"
      :end="userCount"
      :duration="2600"
    />
    <panel-group-item
      title="Messages"
      icon="mdi-message-bulleted"
      color="blue"
      chart="messages"
      :start="0"
      :end="msgCount"
      :duration="3000"
    />
    <panel-group-item
      title="Purchases"
      icon="mdi-cart"
      color="blue-grey"
      chart="purchases"
      :start="0"
      :end="orderCount"
      :duration="3200"
    />
    <panel-group-item
      title="Productions"
      icon="mdi-currency-usd"
      color="green"
      chart="shoppings"
      :start="0"
      :end="productions"
      :duration="3600"
    />
  </v-row>
</template>

<script>
import PanelGroupItem from "./PanelGroupItem.vue";

export default {
  name: "PanelGroup",
  components: {
    PanelGroupItem,
  },
  data() {
    return {
      userCount: 0,
      msgCount: 0,
      orderCount: 0,
      productions: 0,
    };
  },
  methods: {
    getStats() {
      api.getStats().then((res) => {
        if (res.status == 200) {
          let s = res.result;
          this.userCount = s.userCount;
          this.msgCount = s.msgCount;
          this.orderCount = s.orderCount;
          this.productions = s.productions;
        }
      });
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>
