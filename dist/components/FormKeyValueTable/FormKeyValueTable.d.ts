export default FormKeyValueTable;
declare function FormKeyValueTable({ actionButtonId, addNewItemLabel, className, defaultKey, disabled, exitEditModeTriggerItem, fieldsPath, formState, isKeyEditable, isKeyRequired, isValueRequired, keyHeader, keyLabel, keyOptions, keyValidationRules, onExitEditModeCallback, valueHeader, valueLabel, valueType, valueValidationRules }: {
    actionButtonId?: string;
    addNewItemLabel?: string;
    className?: string;
    defaultKey?: string;
    disabled?: boolean;
    exitEditModeTriggerItem?: any;
    fieldsPath: any;
    formState: any;
    isKeyEditable?: boolean;
    isKeyRequired?: boolean;
    isValueRequired?: boolean;
    keyHeader?: string;
    keyLabel?: string;
    keyOptions?: any;
    keyValidationRules?: any[];
    onExitEditModeCallback?: () => void;
    valueHeader?: string;
    valueLabel?: string;
    valueType?: string;
    valueValidationRules?: any[];
}): JSX.Element;
declare namespace FormKeyValueTable {
    namespace propTypes {
        export let actionButtonId: any;
        export let addNewItemLabel: any;
        export let className: any;
        export let defaultKey: any;
        export let disabled: any;
        export let exitEditModeTriggerItem: any;
        export let fieldsPath: any;
        export let formState: any;
        export let isKeyEditable: any;
        export let isKeyRequired: any;
        export let isValueRequired: any;
        export let keyHeader: any;
        export let keyLabel: any;
        export let keyOptions: any;
        export { INPUT_VALIDATION_RULES as keyValidationRules };
        export let onExitEditModeCallback: any;
        export let valueHeader: any;
        export let valueLabel: any;
        export let valueType: any;
        export { INPUT_VALIDATION_RULES as valueValidationRules };
    }
}
import { INPUT_VALIDATION_RULES } from '../../types';
//# sourceMappingURL=FormKeyValueTable.d.ts.map