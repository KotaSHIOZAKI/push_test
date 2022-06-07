var express = require('express');
var router = express.Router();

// applicationKey = "test";
// clientKey = "hoge";

// const NCMB = require('ncmb');
// const ncmb = new NCMB(applicationKey, clientKey);

// var user = new ncmb.User({userName:"hoge", password:"hogepass"});

// console.log(user);

//var Push = require('https://cdnjs.cloudflare.com/ajax/libs/push.js/0.0.11/push.min.js');
// console.log(Push);


//test_array = [];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title : 'Express'});
// });
router.get('/', function(req, res, next) {
  res.render('push');
});
// router.post('/', async function(req, res, next) {
//   // const push = new ncmb.Push();

//   // push
//   //   .set("immediateDeliveryFlag", true)
//   //   .set("message", req.body['msg'])
//   //   .set("target", ["ios"]);
//   // try {
//   //   await push.send();
//   //   console.log('送信完了');
//   // } catch (e) {
//   //   console.log(e);
//   //   console.error('送信失敗');
//   // }

//   // Push.create(req.body['msg']);
//   // Push.clear();

//   // Push.create("Push.jsのデモ!", {
//   //   body: "何かの通知処理", // 表示テキスト
//   //   timeout: 4000, // 自動的に閉じる時間 * 4秒
//   //   onClick: function () {
//   //    // 通知バーをクックした時のイベント
//   //    window.focus(); // フォーカス
//   //    this.close(); // 通知を閉じる
//   //   }
//   // });
//   //test_array.unshift(req.body['msg']);

//   //console.log(test_array);

//   Push.create('更新情報');
  
//   res.redirect('/');
// });

module.exports = router;
