<template>
  <div id="app">
    <!--这是解决内容被Tab覆盖的问题-->
    <div class="content">
      <!--这是为了解决缓存的问题-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from './components/Tab.vue'
export default {
    data(){

    },
    components : {
        Tab
    }

}
</script>

<style scoped>
  .content{
    margin-bottom: 65px;
  }
</style>
