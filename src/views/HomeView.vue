<template>
  <div class="home">
    <list-component></list-component>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    ListComponent    
  },
  mounted() {
    this.$store.dispatch("getListElements");
  },
}
</script>
