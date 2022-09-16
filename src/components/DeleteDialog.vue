<template>
  <div class="text-center">
    <v-dialog
      transition="dialog-bottom-transition"
      v-model="$parent.delete"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ name }} törlése
        </v-card-title>

        <v-card-text>
          Biztosan törölni kívánja <strong>{{ name }}</strong> elemet a
          listáról?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="Cancel"> Nem </v-btn>
          <v-btn color="error" text @click="DeleteItem"> Törlés </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DeleteDialog",
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    Cancel() {
      this.$parent.delete = false;
    },
    DeleteItem() {
      this.$store.dispatch("deleteElement", this.id);
      this.$parent.delete = false;
    },
  },
};
</script>

<style></style>
