/**
 * Finance Secretary v1:
 * should fetch calendar title which starts with a $ string in the last 7 days
 * add the numbers that come after the $ sign
 */

function myFunction() {
  var today = new Date(); //creates a var named today and stores today's date into it. Blank gives today's date by default
  var dateSevenDaysAgo = new Date(today.getTime() - 24 * 60 * 60 * 1000 * 7);

  console.log(dateSevenDaysAgo);
  var eventsToday = CalendarApp.getOwnedCalendarById(
    "lzh.carey@gmail.com"
  ).getEventsForDay(today);
  var firstEventOfToday = eventsToday[0].getTitle();

  //fetching logic

  var eventsLastSevenDays = CalendarApp.getOwnedCalendarById(
    "lzh.carey@gmail.com"
  ).getEvents(dateSevenDaysAgo, today);
  // console.log(eventsLastSevenDays);

  eventsThatStartWithDollarSign = [];

  for (var i = 0; i < eventsLastSevenDays.length; i++) {
    if (eventsLastSevenDays[i].getTitle().startsWith("$")) {
      eventsThatStartWithDollarSign.push(eventsLastSevenDays[i].getTitle());
      // console.log(eventsThatStartWithDollarSign);
    }
  }

  console.log("test push from clasp");
}
