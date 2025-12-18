export function getSupportedLocale(): string;
export const supportedLocale: string;
export function formatDatetime(datetime: any, invalidDateMessage: any, options?: {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}, locale?: string): any;
export function getFormatTime(time: any): {
    hour: any;
    minute: any;
};
export function getTimeElapsedByDate(creationDate: any): any;
export function getDateAndTimeByFormat(date: any, dateFormat: any): any;
export function sortListByDate(list: any[], field: any, isAscending?: boolean): any[];
//# sourceMappingURL=datetime.util.d.ts.map