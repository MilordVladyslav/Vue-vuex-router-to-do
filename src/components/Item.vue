<template>
  <div class="item">
    <p>
      {{item.value}}
    </p>
    <div class="actions-item">
      <div class="complete-item">
        <img src="../assets/update.png" alt="">
      </div>
      <div class="update-item">
        <img src="../assets/update.png" alt="">
      </div>
      <div class="delete-item">
        <img src="../assets/update.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['item']
}
</script>

<style scoped>

</style>
