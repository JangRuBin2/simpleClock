import moment from "moment";
// 현재 날짜, 시간
let now = moment();

// format에 문자열 대입
function momentFormat(how) {
  return now.format(how);
}
// 호출
// console.log(momentFormat("h:mm:ss A"));
// console.log(allMoment.day);
export default momentFormat;

// 시계

// // 0:일~6:토
// let as = moment().day();

// const allMoment = {
//   //
//   // 시/분/초
//   time: now.format("hh:mm:ss"),
//   // AM,PM
//   formattedTime: now.format("h:mm:ss A"),
//   // 요일
//   day: now.format("dddd"),
// };
