import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FromDTO } from './FormDTO';
import { IFormOutput  } from './Interfaces';

export const ONE_HOUR_SECONDS = 1*60*60*1000;

export class CalendarCreator {
    static createCalendar(id: string): Calendar {
        let calendarEl: HTMLElement = document.getElementById(id) as HTMLElement;
        return new Calendar(calendarEl, {
            plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            locale: 'ru',
        });
    }

    static createEvent(dto: IFormOutput): any {
        let endDate = new Date();
        if (dto.date) {
            endDate = new Date(dto.date.getTime());
            endDate.setTime(dto.date.getTime() + (ONE_HOUR_SECONDS))
        }
        const event = {
            id: '',
            title: dto.nick,
            start: dto.date,
            end: endDate,
        };
        return event;
    }
}