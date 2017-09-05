//后台只负责接口
let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');

function read(callback) {
  fs.readFile('./book.json','utf8',function (err,data) {
    data = data.length == 0 ? [] : JSON.parse(data);
    callback(data)
  })
}
// data需要写入的数据，callback写入成功后
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback)
}
http.createServer(function (req,res) {
  let { pathname, query} = url.parse(req.url,true);
  let id = query.id;
  if(pathname == '/api/slider'){
    return res.end(JSON.stringify(sliders))
  }
  if( pathname == '/api/hot'){
    read(function (data) {
      var books = data.reverse().slice(0,6);
      res.end(JSON.stringify(books))
    });
    return
  }
  //图书的增删改查
  if(pathname == '/api/book'){
    switch (req.method){
      case 'GET':
        read(function (data) {
          res.end(JSON.stringify(data))
        });
        break;
      case 'POST':
        //发过来的请求体默认就是对象 直接接收就可以了
        var str = '';
        req.on('data',function (data) {
          str += data
        });
        req.on('end',function () {
          var book = JSON.parse(str);
          read(function (books) {//读取所有的书获取最后一项的ID 累计额
            book.id = books.length > 0?books[books.length-1].id+1 : 1;
            books.push(book);//将新书放入书库
            write(books,function () {
              res.end(JSON.stringify(book))
            })
          })
        });
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => id != item.id);
          write(books,function () {
            res.end(JSON.stringify({}))
          })
        });
        break;
      case 'PUT':
        break
    }
  }




}).listen(4000);
