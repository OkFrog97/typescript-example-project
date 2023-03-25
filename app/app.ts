import { Button } from './classes/Button'
import { FormAdapter } from './classes/FormAdapter'
import { CalendarCreator } from './classes/CalendarCreator'
import { IFormOutput } from './classes/Interfaces';

/**
 * SOLID
 */

document.addEventListener('DOMContentLoaded', () => {
    const calendar = CalendarCreator.createCalendar('calendar');
    calendar.render();
    const form = new FormAdapter('taskForm');
    const button = new Button('tstBtn');
    //const storage = new Storage();
    button.onClick(()=>{
        const dto = form.getFormsObject(); 
        const calendarEvent = CalendarCreator.createEvent(dto);
        calendar.addEvent(calendarEvent);
    });
});
