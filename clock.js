import moment from "moment";
// 현재 날짜, 시간
let now = moment();
// 시계
const formattedTime = now.format("h:mm:ss A");
console.log(formattedTime);
export default formattedTime;
