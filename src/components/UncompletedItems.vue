<template>
  <transition-group name="fade" mode="out-in">
    <div class="to-do-body" v-for="item in uncompletedItems" :key="item.id">
      <item :item = "item"></item>
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item.vue'
export default {
  name: 'UncompletedItems',
  computed: {
    ...mapGetters([
      'uncompletedItems'
    ])
  },
  components: {
    Item
  }
}
</script>

<style scoped>

</style>
