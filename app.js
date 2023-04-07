import http from "http";
import momentFormat from "./clock.js";
// import elementMaker from "./createElement.js";
import { htmlContent } from "./htmlContent.js";
import webSocket from "ws.server";
console.log(webSocket);
// 불러온 거 확인
// console.log(momentFormat("hh:mm:ss"));
// console.log(elementMaker);

const app = http.createServer((request, response) => {
  // request.on();
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  response.end(momentFormat("h:mm:ss A"), (data) => {
    htmlContent(data);
  });
});
app.listen(3050, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 연결");
});
