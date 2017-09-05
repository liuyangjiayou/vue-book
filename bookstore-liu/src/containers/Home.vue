<template>
  <div>
    <mheader title="首页"></mheader>
    <div v-if="sliders.length">
      <slider :data="sliders"></slider>
      <h3>最新上架</h3>
      <ul class="hot">
        <li v-for="hot in hots">
          <img :src="hot.bookCover" alt="">
          <span>{{hot.bookName}}</span>
        </li>
      </ul>
      <loading v-if="isLoading"></loading>
    </div>
  </div>
</template>
<script>
  import {getSliders, getHot} from '../api/index'
  console.log(getSliders);
  import Slider from '../components/Slider.vue'
  import Loading from '../components/Loading.vue'
  import Mheader from '../components/Mheader.vue'
  export default {
    data(){
      return {
        sliders: [],
        hots: [],
        isLoading : true
      }
    },
    created(){
      getSliders().then(res => {
        this.sliders = res.data;
      }).catch(err => {
        console.log(err);
      });
      getHot().then(res => {
        this.hots = res.data;
        this.isLoading = false
      }).catch(err => {
        console.log(err);
      })
    },
    components: {
      Slider,
      Loading,
      Mheader
    },
    methods: {}
  }
</script>
<style scoped lang="less">
  h3{
    color: #666;
    padding-left: 10px;
    font-weight: normal;
  }
  .hot{
    display: flex;
    flex-wrap: wrap;
    li{
      text-align: center;
      display: flex;
      width: 33.33%;
      flex-direction: column;
    span{
      height: 40px;
      line-height: 40px;
    }
      img{
        width: 100%;
        height: 124px;
      }
    }
  }
</style>
