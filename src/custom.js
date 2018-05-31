$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaDay,listWeek'
      },
      bootstrapFontAwesome: {
        close: 'fa-times',
        prev: 'fa-chevron-left',
        next: 'fa-chevron-right',
        prevYear: 'fa-angle-double-left',
        nextYear: 'fa-angle-double-right'
      },
      handleWindowResize: true,
      defaultView: 'month',    // overview about schedules
      themeSystem: 'bootstrap4',  // options: bootstrap3, bootstrap4, jquery-ui
      // height: "100",
      aspectRatio: 1.85,             // higher ratio, smaller calendar height
      // defaultDate: '2018-05-01',
      navLinks: true,             // can click day/week names to navigate views
      editable: false,
      eventLimit: true,           // allow "more" link when too many events
      weekNumbers: false,
      weekends: false,            // dont display Weekends
      timeFormat: 'H:mm',
      minTime: '08:00:00',
      maxTime: '18:00:00',
      displayEventTime: true,     // Display event times
      resourceLabelText: 'Areas',
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      resources:
       [
         { id: 'A-ROUNDTABLE', title: 'Round Table', eventColor: 'grey' },
         { id: 'B-LONGTABLE', title: 'Long Table', eventColor: 'blue' },
         { id: 'C-MEETROOM', title: 'Meeting Room C13', eventColor: 'red' },
       ],
       events: labEvents
    });  
});