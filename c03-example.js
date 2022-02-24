// (function () {
//   let hotal = {
//     name: "Park",
//     roomRate: 250,
//     discount: 15,
//     offerRate: function () {
//       return this.roomRate * ((100 - 15) / 100);
//     },
//   };
// })();

let expiryMsg;
let today;
let elEnds;

function offerExpires(today) {
  let weekFromToday, day, date, month, year, dayNames, monthNames;
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  expiryMsg = "Offer expires date ";
  expiryMsg += day + " ( " + date + " " + month + " " + year + ")";
  console.log(expiryMsg);
}

today = new Date();
offerExpires(today);
