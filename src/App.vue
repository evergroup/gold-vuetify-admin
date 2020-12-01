<template>
  <v-app>
    <v-snackbar top :timeout="3000" @input="hideAlert" v-model="errShow">{{
      errText
    }}</v-snackbar>
    <router-view />
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["errShow", "errText"]),
  },
  methods: {
    ...mapMutations(["hideAlert"]),
  },
};
</script>
