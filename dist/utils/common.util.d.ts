export function openPopUp(element: any, props: any): Promise<any>;
export function openConfirmPopUp(message: any, confirmHandler: any): Promise<any>;
export function openDeleteConfirmPopUp(header: any, message: any, confirmHandler: any): Promise<any>;
export function isEveryObjectValueEmpty(obj: any): boolean;
export function areArraysEqual(firstArray: any, secondArray: any, omitBy?: any[]): any;
export function getErrorDetail(error: Error): string;
export function getErrorMsg(error: Error, defaultError: string): string;
export function getTransitionEndEventName(): string;
export function getScssVariableValue(variableName: any): string;
export function getViewMode(search: any): string;
export function performDetailsActionHelper(changes: any, dispatch: any, filtersWasHandled?: boolean): Promise<boolean>;
export function copyToClipboard(textToCopy: any, dispatch: any): void;
export function roundFloats(value: any, precision: any): any;
export function generateUrlFromRouterPath(link: any): string;
//# sourceMappingURL=common.util.d.ts.map