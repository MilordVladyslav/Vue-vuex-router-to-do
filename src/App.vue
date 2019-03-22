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
  // methods: {
  //   ...mapActions([
  //     'getItems'
  //   ])
  // },
  // watch: {
  //   ...mapActions([
  //     'getItems'
  //   ])
  // },

  components: {
    AddItems,
    LogoType,
    ToDoFooter
  }
}

</script>

<!--  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>-->

<style lang="scss">

  @import '../node_modules/reset-css/reset.css';
  @import "./styles/all.scss";
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
/*#nav {*/
  /*padding: 30px;*/
  /*a {*/
    /*font-weight: bold;*/
    /*color: #2c3e50;*/
    /*&.router-link-exact-active {*/
      /*color: #42b983;*/
    /*}*/
  /*}*/
/*}*/
</style>
