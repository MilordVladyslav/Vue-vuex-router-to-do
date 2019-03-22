<template>
  <div>
    <transition-group name="fade" mode="out-in">
      <div class="to-do-body" v-for="item in completedItems" :key="item.id">
          <item :item = "item"></item>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item.vue'
export default {
  name: 'CompletedItems',
  computed: {
    ...mapGetters([
      'completedItems'
    ])
  },
  components: {
    Item
  }
}
</script>

<style scoped>

</style>
