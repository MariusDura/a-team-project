$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('.calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: [
            {
                title: 'Miegojimas',
                start: new Date(y, m, 1)
            },
            {
                title: 'Eiti į paskaitas',
                start: new Date(y, m, 12),
                end: new Date(y, m, 14)
            }
        ]
    });
});