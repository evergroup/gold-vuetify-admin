<template>
  <v-menu
    offset-y
    origin="center center"
    :nudge-bottom="10"
    transition="scale-transition"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon text v-on="on">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0" two-line subheader>
      <v-subheader>Notifications</v-subheader>
      <v-divider />
      <!--<v-divider inset/>-->
      <!--<v-subheader inset>Files</v-subheader>-->
      <v-list-item v-for="item in messages" :key="item.id" avatar @click="1">
        <v-list-item-avatar>
          <v-icon :class="[item.iconClass]">
            {{ item.icon || "mdi-folder" }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.created | date }}</v-list-item-subtitle>
          <div>{{ item.body }}</div>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon ripple @click="delMessage(item.id)">
            <v-icon color="grey lighten-1"> mdi-delete </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- <v-divider /> -->
    <!-- <v-footer>Show All</v-footer> -->
  </v-menu>
</template>

<script>
export default {
  name: "AppNotification",
  data: () => ({
    messages: [],
    items: [
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Photos",
        subtitle: "Jan 9, 2014",
      },
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Recipes",
        subtitle: "Jan 17, 2014",
      },
      {
        icon: "mdi-folder",
        iconClass: "grey lighten-1 white--text",
        title: "Work",
        subtitle: "Jan 28, 2014",
      },
    ],
    items2: [
      {
        icon: "mdi-message",
        iconClass: "blue white--text",
        title: "Vacation itinerary",
        subtitle: "Jan 20, 2014",
      },
      {
        icon: "mdi-alarm",
        iconClass: "amber white--text",
        title: "Kitchen remodel",
        subtitle: "Jan 10, 2014",
      },
    ],
  }),
  methods: {
    getMessages() {
      api.getMessages(1).then((res) => {
        if (res.status == 200) {
          this.messages = res.result;
        } else {
        }
      });
    },
    delMessage(id) {
      api.delMessage(id).then((res) => {
        if (res.status == 200) {
          this.getMessages();
        } else {
        }
      });
    },
  },
  mounted() {
    this.getMessages();
  },
};
</script>
