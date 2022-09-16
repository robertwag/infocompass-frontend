import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  getters: {},
  mutations: {
    setListElements(state, data) {

      // Sort the elements alphabetically

      data = data.sort((a, b) => a.name.localeCompare(b.name));
      state.list = data;
    },
  },
  actions: {
    getListElements({ commit }) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/List`)
        .then((response) => {
          commit("setListElements", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateListElement({ commit }, data) {
      axios
        .put(`${process.env.VUE_APP_BASE_URL}/List`, data)
        .then((response) => {
          commit("setListElements", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addElement({ commit }, name) {
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/List?name=${name}`)
        .then((response) => {
          commit("setListElements", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteElement({ commit }, id) {
      axios
        .delete(`${process.env.VUE_APP_BASE_URL}/List?id=${id}`)
        .then((response) => {
          commit("setListElements", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  modules: {},
});
