<template>
    <nav>
      <router-link to="/home">
        <i class="iconfont .icon-smallscreen_fill:before"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont .icon-fullscreen:before"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont .icon-collection_fill:before"></i>
        <span>添加</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont .icon-add:before"></i>
        <span>收藏</span>
      </router-link>
    </nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped lang="less">
  nav{
    height: 60px;
    display: flex;
    flex: 1;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    width: 100%;
    background-color: #fff;
    align-items: center;
    a{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
    .active{
      color: orange;
    }
  }
</style>
