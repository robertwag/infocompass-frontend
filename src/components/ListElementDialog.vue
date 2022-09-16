<template>
  <div class="text-center">
    <v-dialog
      transition="dialog-bottom-transition"
      v-model="$parent.dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2" v-if="!newElement">
          {{ name }}
        </v-card-title>
        <v-card-title class="text-h5 grey lighten-2" v-else>
          Új lista elem
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="text"
            :value="name"
            :rules="rules"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="SaveChanges"> Mentés </v-btn>
          <v-btn color="amber" text @click="Cancel"> Mégsem </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ListElementDialog",
  props: {
    name: {
      type: String,
      default: "",
    },
    newElement: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      text: null,
      rules: [
        (value) => !!value || "A mező nem maradhat üresen!",
        (value) =>
          (value && value.length >= 1) || "A mező nem maradhat üresen!",
      ],
    };
  },
  mounted() {
    this.text = this.name;
  },
  methods: {
    SaveChanges() {

      /*

        Both operations create and update are executed in this function. The right operation is chosen based on newElement variable.
        An object check is not only advisable on the backend side, its also important on the frontend side before sending back the data.
        The name will be checked so that no null or undefined values are sent to the backend

      */

      if (this.text != null && this.text != undefined) {
        if (this.text.length > 0) {
          if (this.newElement === false) {
            const data = {
              id: this.id,
              name: this.text,
            };
            this.$store.dispatch("updateListElement", data);
          } else {
            this.$store.dispatch("addElement", this.text);
          }

          this.text = null;
          this.$parent.dialog = false;
        }
      }
    },
    Cancel() {
      this.text = null;
      this.$parent.dialog = false;
    },
  },
};
</script>

<style></style>
