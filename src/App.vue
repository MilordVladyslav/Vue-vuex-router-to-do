<template>
    <div id="app">
      <div class="screen-background">
        <div class="to-do">
          <div class="to-do-header">
            <LogoType></LogoType>
            <AddItems></AddItems>
            <router-link to="/completed">
              <div class="completed">
                <p>Completed items</p>
                <p>{{completedItems.length}}</p>
              </div>
            </router-link>
            <router-link to="/uncompleted">
              <div class="uncompleted">
                <p>Uncompleted items</p>
                <p>{{uncompletedItems.length}}</p>
              </div>
            </router-link>
          </div>
          <transition name="fade" mode="out-in">
           <router-view></router-view>
          </transition>
          <div class="to-do-footer" >
            <ToDoFooter></ToDoFooter>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AddItems from './components/AddItems.vue'
import LogoType from './components/LogoType.vue'
import ToDoFooter from './components/ToDoFooter.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'items',
      'completedItems',
      'uncompletedItems'
    ])
  },
  created () {
    this.$store.dispatch('getItems')
  },
  components: {
    AddItems,
    LogoType,
    ToDoFooter
  }
}

</script>

<style lang="scss">

  @import '../node_modules/reset-css/reset.css';
  @import "./styles/all.scss";

</style>
