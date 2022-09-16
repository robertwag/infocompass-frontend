<template>
  <div class="my-6">
    <v-card class="mx-auto" max-width="768" tile>
      <v-list flat>
        <v-subheader>Lista</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in list" :key="i">
            <v-list-item-content>
              <v-row justify="center">
                <v-col cols="8" class="table">
                  <v-list-item-title
                    class="table-cell vertical-middle"
                    v-text="item.name"
                  ></v-list-item-title>
                </v-col>
                <v-col cols="4">
                  <v-row justify="center">
                    <v-btn
                      class="mx-2"
                      small
                      fab
                      dark
                      color="success"
                      @click="SelectItem(i)"
                    >
                      <v-icon dark> mdi-lead-pencil </v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      small
                      fab
                      dark
                      color="error"
                      @click="DeleteItem(i)"
                    >
                      <v-icon dark> mdi-delete </v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-row justify="end" class="mx-6 my-6 py-6">
        <v-btn color="primary" @click="NewElement">ÚJ ELEM</v-btn>
      </v-row>
    </v-card>
    <list-element-dialog
      :name="selectedName"
      :newElement="newElement"
      :id="selectedId"
    ></list-element-dialog>
    <delete-dialog :name="selectedName" :id="selectedId"></delete-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListElementDialog from "./ListElementDialog.vue";
import DeleteDialog from "./DeleteDialog.vue";

export default {
  components: { ListElementDialog, DeleteDialog },
  name: "ListComponent",
  computed: {
    ...mapState({
      list: "list",
    }),
  },
  data() {
    return {
      selectedItem: null,
      selectedName: null,
      dialog: false,
      newElement: false,
      selectedId: null,
      delete: false,
      deleteId: null,
    };
  },
  methods: {
    SelectItem(index) {
      this.selectedName = this.list[index].name;
      this.selectedId = this.list[index].id;
      this.newElement = false;
      this.dialog = true;
    },
    NewElement() {
      this.newElement = true;
      this.selectedId = null;
      this.selectedName = null;
      this.dialog = true;
    },
    DeleteItem(index) {
      this.selectedName = this.list[index].name;
      this.selectedId = this.list[index].id;
      this.delete = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: table;
}

.table-cell {
  display: table-cell;
}

.vertical-middle {
  vertical-align: middle;
}
</style>
