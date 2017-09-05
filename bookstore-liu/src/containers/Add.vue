<template>
    <div>
      <mheader title="添加页面"></mheader>
      <div class="add">
        <div class="group">
          <label for="bookname">书名</label>
          <input v-model="book.bookName" type="text" id="bookname" placeholder="请输入书名">
        </div>
        <div class="group">
          <label for="bookCover">书的地址</label>
          <input v-model="book.bookCover" type="text" id="bookCover" placeholder="请输入书的封面">
        </div>
        <div class="group">
          <label for="content">书的地址</label>
          <input v-model="book.content" type="text" id="content" placeholder="请输入书的内容">
        </div>
        <div class="group">
          <button @click="add">添加图示</button>
        </div>
      </div>
    </div>
</template>
<script>
  import Mheader from '../components/Mheader.vue'
  import {addBook} from '../api/index'
    export default {
        data(){
            return {
                book : {
                    bookName : '',
                    bookCover : '',
                    content : ''
                }
            }
        },
        components: {
          Mheader
        },
        methods: {
            add(){
                addBook(this.book).then(res=>{
                    this.$router.push('/list');
                })
            }
        }
    }
</script>
<style scoped lang="less">
  .add{
    display: flex;
    flex-direction: column;
    .group{
      label{
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 10px;
      }
      input{
        border: 1px solid #ccc;
        height: 30px;
      }
      button{
        height: 30px;
      }
      display: flex;
      flex-direction: column;
    }
  }
</style>
