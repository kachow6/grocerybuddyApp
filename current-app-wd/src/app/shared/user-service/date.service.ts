import { Injectable } from '@angular/core';

export const msPerDay: number = 86400000;

@Injectable()
export class DateService {

    // Return the number of days
    getDays(date: Date): number {
        return Date.parse( date.toJSON() ) / msPerDay;
    }
}
