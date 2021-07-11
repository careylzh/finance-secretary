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
      /**
       * IMPENDING UGLY CODE: THE FOLLOWING LINE PERFORMS 3 FUNCTIONS:
       * reference title of each event
       * replace dollar sign in the title
       * pushes replaced title into new array*/
      eventsThatStartWithDollarSign.push(
        parseInt(eventsLastSevenDays[i].getTitle().replace("$", ""))
      );
      //console.log(eventsThatStartWithDollarSign);
      console.log(eventsThatStartWithDollarSign.reduce((a, b) => a + b, 0));
    }
  }

  console.log("test push from clasp");
}
