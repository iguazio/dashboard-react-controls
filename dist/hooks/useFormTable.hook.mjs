import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { get, omit } from "lodash";
import { ARRAY_ERROR } from "final-form";
const useFormTable = (formState, exitEditModeTriggerItem, onExitEditModeCallback) => {
  const [editingItem, setEditingItem] = useState(null);
  const editingItemRef = useRef(null);
  const editingItemErrorsRef = useRef(null);
  const formStateRef = useRef(null);
  const bottomScrollRef = useRef(null);
  const onExitEditModeCallbackRef = useRef(onExitEditModeCallback);
  useLayoutEffect(() => {
    const tableErrors = get(formState == null ? void 0 : formState.errors, editingItem == null ? void 0 : editingItem.ui.fieldsPath, []);
    editingItemErrorsRef.current = get(tableErrors, editingItem == null ? void 0 : editingItem.ui.index, null);
  }, [editingItem == null ? void 0 : editingItem.ui.fieldsPath, editingItem == null ? void 0 : editingItem.ui.index, formState == null ? void 0 : formState.errors]);
  useLayoutEffect(() => {
    formStateRef.current = formState;
  }, [formState]);
  useLayoutEffect(() => {
    onExitEditModeCallbackRef.current = onExitEditModeCallback;
  }, [onExitEditModeCallback]);
  const exitEditMode = () => {
    var _a, _b;
    if ((_a = editingItemRef.current) == null ? void 0 : _a.data) {
      Object.entries((_b = editingItemRef.current) == null ? void 0 : _b.data).forEach(([fieldName]) => {
        var _a2, _b2, _c;
        (_c = formStateRef.current) == null ? void 0 : _c.form.mutators.setFieldState(
          `${(_a2 = editingItemRef.current) == null ? void 0 : _a2.ui.fieldsPath}[${(_b2 = editingItemRef.current) == null ? void 0 : _b2.ui.index}].data.${fieldName}`,
          {
            modified: false
          }
        );
      });
    }
    editingItemRef.current = null;
    setEditingItem(null);
    (onExitEditModeCallbackRef == null ? void 0 : onExitEditModeCallbackRef.current) && onExitEditModeCallbackRef.current();
  };
  useEffect(() => {
    const applyOrDiscardOrDeleteInEffect = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (editingItemRef == null ? void 0 : editingItemRef.current) {
        if (!editingItemErrorsRef.current) {
          exitEditMode();
        } else {
          if ((_b = (_a = editingItemRef.current) == null ? void 0 : _a.ui) == null ? void 0 : _b.isNew) {
            const values = get(formStateRef.current.values, (_c = editingItemRef.current) == null ? void 0 : _c.ui.fieldsPath);
            if ((values == null ? void 0 : values.length) > 1) {
              formStateRef.current.form.mutators.remove(
                (_d = editingItemRef.current) == null ? void 0 : _d.ui.fieldsPath,
                (_e = editingItemRef.current) == null ? void 0 : _e.ui.index
              );
            } else {
              formStateRef.current.form.change((_f = editingItemRef.current) == null ? void 0 : _f.ui.fieldsPath, []);
            }
          } else {
            formStateRef.current.form.mutators.update(
              (_g = editingItemRef.current) == null ? void 0 : _g.ui.fieldsPath,
              (_h = editingItemRef.current) == null ? void 0 : _h.ui.index,
              omit(editingItemRef.current, ["ui"])
            );
          }
          exitEditMode();
        }
      }
    };
    return () => {
      applyOrDiscardOrDeleteInEffect();
    };
  }, [exitEditModeTriggerItem]);
  const addNewRow = (event, fields, fieldsPath, newItem) => {
    applyOrDiscardOrDelete(event);
    formStateRef.current.form.mutators.push(fieldsPath, newItem);
    setEditingItem(() => {
      var _a;
      const newEditingItem = {
        ...newItem,
        ui: {
          isNew: true,
          fieldsPath,
          index: ((_a = fields.value) == null ? void 0 : _a.length) || 0
        }
      };
      editingItemRef.current = newEditingItem;
      return newEditingItem;
    });
    scrollIntoView();
  };
  const applyChanges = (event, index) => {
    var _a, _b;
    if (editingItemRef.current) {
      if (!editingItemErrorsRef.current) {
        if ((_a = editingItemRef.current) == null ? void 0 : _a.ui.isNew) {
          scrollIntoView();
        }
        exitEditMode();
      } else {
        Object.entries((_b = editingItemErrorsRef.current) == null ? void 0 : _b.data).forEach(([fieldName]) => {
          var _a2, _b2;
          (_b2 = formStateRef.current) == null ? void 0 : _b2.form.mutators.setFieldState(
            `${(_a2 = editingItemRef.current) == null ? void 0 : _a2.ui.fieldsPath}[${index}].data.${fieldName}`,
            {
              modified: true
            }
          );
        });
      }
    }
  };
  const deleteRow = (event, fieldsPath, index) => {
    if (editingItemRef.current && index !== editingItemRef.current.ui.index) {
      applyOrDiscardOrDelete(event);
    }
    const values = get(formStateRef.current.values, fieldsPath);
    if ((values == null ? void 0 : values.length) > 1) {
      formStateRef.current.form.mutators.remove(fieldsPath, index);
    } else {
      formStateRef.current.form.change(fieldsPath, []);
    }
    exitEditMode();
    event && event.stopPropagation();
  };
  const discardChanges = (event, fieldsPath, index) => {
    formStateRef.current.form.mutators.update(
      fieldsPath,
      index,
      omit(editingItemRef.current, ["ui"])
    );
    exitEditMode();
    event && event.stopPropagation();
  };
  const discardOrDelete = (event, fieldsPath, index) => {
    var _a, _b;
    if (!editingItemRef.current || ((_b = (_a = editingItemRef.current) == null ? void 0 : _a.ui) == null ? void 0 : _b.isNew)) {
      deleteRow(event, fieldsPath, index);
    } else {
      discardChanges(event, fieldsPath, index);
    }
  };
  const applyOrDiscardOrDelete = (event = null) => {
    var _a, _b, _c;
    if (editingItemRef == null ? void 0 : editingItemRef.current) {
      if (!editingItemErrorsRef.current) {
        applyChanges(event, (_a = editingItemRef.current) == null ? void 0 : _a.ui.index);
      } else {
        discardOrDelete(
          event,
          (_b = editingItemRef.current) == null ? void 0 : _b.ui.fieldsPath,
          (_c = editingItemRef.current) == null ? void 0 : _c.ui.index
        );
      }
    }
  };
  const enterEditMode = (event, fields, fieldsPath, index) => {
    applyOrDiscardOrDelete(event);
    setTimeout(() => {
      const editItem = fields.value[index];
      setEditingItem(() => {
        const newEditingItem = { ...editItem, ui: { fieldsPath, index } };
        editingItemRef.current = newEditingItem;
        return newEditingItem;
      });
    });
  };
  const scrollIntoView = () => {
    if (bottomScrollRef.current) {
      setTimeout(() => {
        bottomScrollRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  };
  const isCurrentRowEditing = (rowPath) => {
    return (editingItemRef == null ? void 0 : editingItemRef.current) && `${editingItemRef.current.ui.fieldsPath}[${editingItemRef.current.ui.index}]` === rowPath;
  };
  const getTableArrayErrors = (fieldsPath) => {
    if (formState.submitFailed && formState.invalid) {
      return get(formState, `errors.${fieldsPath}.${ARRAY_ERROR}`, []);
    } else {
      return [];
    }
  };
  return {
    addNewRow,
    applyChanges,
    applyOrDiscardOrDelete,
    bottomScrollRef,
    deleteRow,
    discardChanges,
    discardOrDelete,
    editingItem,
    editingItemRef,
    enterEditMode,
    exitEditMode,
    getTableArrayErrors,
    isCurrentRowEditing
  };
};
export {
  useFormTable
};
//# sourceMappingURL=useFormTable.hook.mjs.map
