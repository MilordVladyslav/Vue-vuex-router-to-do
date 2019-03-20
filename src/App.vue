<template>
    <div id="app">
      <div class="screen-background">
        <div class="to-do">
          <div class="to-do-header">
            <LogoType></LogoType>
            <AddItems></AddItems>
            <completed-items></completed-items>
            <uncompleted-items></uncompleted-items>
          </div>
          <div class="to-do-body">
            <item></item>
          </div>
          <div class="to-do-footer">
            <ToDoFooter></ToDoFooter>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AddItems from './components/AddItems.vue'
import CompletedItems from './components/CompletedItems.vue'
import Item from './components/Item.vue'
import LogoType from './components/LogoType.vue'
import ToDoFooter from './components/ToDoFooter.vue'
import UncompletedItems from './components/UncompletedItems.vue'

export default {
  name: 'App',
  components: {
    AddItems,
    CompletedItems,
    Item,
    LogoType,
    ToDoFooter,
    UncompletedItems
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
