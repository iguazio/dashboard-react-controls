export function required(validationMsg?: string): Function;
export function checkPatternsValidity(validationRules: any[], value?: string, required?: boolean): any[];
export function checkPatternsValidityAsync(validationRules: any, value: any): Promise<any[]>;
export function getValidationRules(type: string, additionalRules?: Array<any> | any): Array<any>;
export function getInternalLabelsValidationRule(internalLabels?: string): any;
//# sourceMappingURL=validation.util.d.ts.map