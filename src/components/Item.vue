<template>
  <div class="item">
    <div class="change-item" v-if="changeForm">
      <form v-on:submit.prevent>
        <p v-if="errorMessage" class="errorMessageColor"> {{ errorMessage }}</p>
        <input type="text"  v-model="item.value">
        <button @click="updateChangedValue()">change</button>
      </form>
    </div>
      <p v-else>
        {{item.value}}
      </p>
    <div class="actions-item">
      <div class="complete-item" @click="changeComplete()" v-show="!item.completed">
        <img src="../assets/update.png" alt="">
      </div>
      <div class="update-item" @click="changeValue()">
        <img src="../assets/update.png" alt="">
      </div>
      <div class="delete-item" @click="deleteItem()">
        <img src="../assets/update.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['item'],
  data () {
    return {
      changeForm: false,
      errorMessage: false
    }
  },
  methods: {
    changeComplete () {
      this.item.completed = true
      this.$store.dispatch('completeItem', this.item)
    },
    changeValue () {
      this.changeForm = !this.changeForm
    },
    updateChangedValue () {
      this.errorMessage = false
      if (this.item.value.length === 0) {
        this.errorMessage = 'Empty Field'
      }
      if (!this.errorMessage) {
        this.$store.dispatch('updateItem', this.item)
        this.changeForm = false
      }
    },
    deleteItem () {
      this.$store.dispatch('deleteItem', this.item)
    }
  }
}

</script>

<style scoped>

</style>
