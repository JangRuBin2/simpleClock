import { time } from "console";
import http from "http";
import momentFormat from "./clock.js";
import elementMaker from "./createElement.js";
import { htmlContent } from "./htmlContent";
// import webSocket from "ws";

// 불러온 거 확인
// console.log(momentFormat("hh:mm:ss"));
// console.log(elementMaker);
// function ss() {
//   return "ss";
// }

const app = http.createServer((request, response) => {
  // request.on();
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // let nowTime = momentFormat("h:mm:ss A");setInterval()

  response.end(htmlContent);
});
app.listen(3050, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 연결");
});
