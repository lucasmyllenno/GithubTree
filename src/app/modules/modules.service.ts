import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModulesService {

    public convertDateToLocaleString(date: string | undefined): string | undefined {
        return date ? new Date(date).toLocaleDateString() : date;
    }

    public openLink(url: string | undefined): void {
        if (url) {
            window.open(url, '_blank');
        }
    }
}
