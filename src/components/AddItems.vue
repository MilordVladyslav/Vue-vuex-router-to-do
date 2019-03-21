<template>
  <div class="add-item-block">
    <p :class="{ errorMessageColor: errorMessage }">{{ errorMessage || 'okay' }}</p>
    <form action="#" v-on:submit.prevent>
      <input type="text" v-model="addedItem">
      <button @click="addItem(addedItem)">Add</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AddItems',
  data () {
    return {
      addedItem: '',
      errorMessage: false
    }
  },
  computed: {
    ...mapGetters([
      'items'
    ])
  },
  methods: {
    addItem (addedItem) {
      this.errorMessage = false
      this.items.map((item) => {
        if (item.value.toLowerCase() === addedItem.toLowerCase()) {
          this.errorMessage = 'Must be unique'
        }
      })
      if (!addedItem.length) {
        this.errorMessage = 'Empty field'
      }
      if (!this.errorMessage) {
        addedItem = {
          id: this.items.length,
          value: addedItem,
          completed: false
        }
        this.$store.dispatch('addItem', addedItem, 'create').then(() => {
          this.addedItem = ''
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
