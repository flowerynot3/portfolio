/** SNS API **/

// 카카오
window.kakaoAsyncInit = function () {
  Kakao.Story.createShareButton({
    container: '#kakaostory-share-button'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//developers.kakao.com/sdk/js/kakao.story.min.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'kakao-js-sdk'));

// 네이버
function share() {
  //카카오는 안그래도 되지만 네이버 같은경우는 마이유알엘을 해당 유알엘로 변경해줘야함
  var myurl = 'https://cafe.naver.com/csslick';
  var url = encodeURI(encodeURIComponent(myurl));
  var title = encodeURI(myform.title.value);
  var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
  document.location = shareURL;
}