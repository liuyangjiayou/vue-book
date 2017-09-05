<template>
    <div>
      <mheader title="列表页"></mheader>
      <ul class="list">
        <li v-for="book in books">
          <!--图片懒加载-->
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
            <button @click="remove(book.id)">删除</button>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
  import Mheader from '../components/Mheader.vue'
  import {getBook,removeBook} from '../api/index'
    export default {
        data(){
            return { books : []}
        },
        created(){
            getBook().then(res=>{
                 this.books = res.data;
            })
        },
        components: {
            Mheader
        },
        methods: {
            remove(id){
                removeBook(id).then(res=>{
//                    前台数据删除掉 我需要将这一项删除
                    this.books = this.books.filter(function (item) {
                      return item.id != id
                    })
                })
            }
        }
    }
</script>
<style scoped lang="less">
  .list{
    button{
      margin-top: 5px;
    }
    li{
      display: flex;
      border-bottom : 1px solid #ccc ;
      padding : 10px;
      img{
        width: 100px;
        height: 90px;
      }
      div{
        h3{
          color: #666;
          margin: 5px 0;
          height: 40px;
          line-height: 40px;
        }
        display: flex;
        flex-direction: column;
      }
    }
    img[lazy='loaded']{
      animation : fadeIn 0.5s;
    }
  }
  @keyframes fadeIn {
    form{opacity: 0}
    to{opacity: 1}
  }
</style>
