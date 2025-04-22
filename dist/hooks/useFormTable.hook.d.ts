export function useFormTable(formState: any, exitEditModeTriggerItem: any, onExitEditModeCallback: any): {
    addNewRow: (event: any, fields: any, fieldsPath: any, newItem: any) => void;
    applyChanges: (event: any, index: any) => void;
    applyOrDiscardOrDelete: (event?: any) => void;
    bottomScrollRef: import("react").MutableRefObject<any>;
    deleteRow: (event: any, fieldsPath: any, index: any) => void;
    discardChanges: (event: any, fieldsPath: any, index: any) => void;
    discardOrDelete: (event: any, fieldsPath: any, index: any) => void;
    editingItem: any;
    editingItemRef: import("react").MutableRefObject<any>;
    enterEditMode: (event: any, fields: any, fieldsPath: any, index: any) => void;
    exitEditMode: () => void;
    getTableArrayErrors: (fieldsPath: any) => any;
    isCurrentRowEditing: (rowPath: any) => boolean;
};
//# sourceMappingURL=useFormTable.hook.d.ts.map