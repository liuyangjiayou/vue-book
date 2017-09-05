import axios from 'axios';
//不支持jsonp 需要下载jsonp的第三方库


export function getSliders() {
  return axios.get('/api/slider')
};
export function getHot() {
  return axios.get('/api/hot')
}
export function getBook() {
  return axios.get('/api/book')
}
//添加图书需要传入一个data数据
export function addBook(data) {
  return axios.post('/api/book',data)
}
export function removeBook(id) {
  return axios.delete('/api/book?id=' + id)
}
