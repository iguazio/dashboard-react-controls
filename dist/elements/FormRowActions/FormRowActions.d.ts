export default FormRowActions;
declare function FormRowActions({ applyChanges, deleteButtonIsHidden, deleteRow, disabled, discardOrDelete, editingItem, fieldsPath, hidden, index }: {
    applyChanges: any;
    deleteButtonIsHidden?: boolean;
    deleteRow: any;
    disabled?: boolean;
    discardOrDelete: any;
    editingItem?: any;
    fieldsPath: any;
    hidden?: boolean;
    index: any;
}): JSX.Element;
declare namespace FormRowActions {
    namespace propTypes {
        export let applyChanges: any;
        export let deleteButtonIsHidden: any;
        export let deleteRow: any;
        export let disabled: any;
        export let discardOrDelete: any;
        export { FORM_TABLE_EDITING_ITEM as editingItem };
        export let fieldsPath: any;
        export let hidden: any;
        export let index: any;
    }
}
import { FORM_TABLE_EDITING_ITEM } from '../../types';
//# sourceMappingURL=FormRowActions.d.ts.map