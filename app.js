import http from "http";

const app = http.createServer((request, response) => {
  response.writeHead(200);
  response.end(console.log("서버 정상 연결"));
});
app.listen(3050, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 연결");
});
