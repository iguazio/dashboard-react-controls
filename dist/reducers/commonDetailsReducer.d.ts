export const removeDetailsPopUpInfoContent: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"commonDetailsStore/removeDetailsPopUpInfoContent">;
export const removeInfoContent: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"commonDetailsStore/removeInfoContent">;
export const resetChanges: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"commonDetailsStore/resetChanges">;
export const setChanges: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setChanges">;
export const setChangesCounter: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setChangesCounter">;
export const setChangesData: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setChangesData">;
export const setDetailsPopUpInfoContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setDetailsPopUpInfoContent">;
export const setEditMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setEditMode">;
export const setFiltersWasHandled: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setFiltersWasHandled">;
export const setInfoContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setInfoContent">;
export const showWarning: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/showWarning">;
declare const _default: import("redux").Reducer<{
    changes: {
        counter: number;
        data: {};
    };
    detailsPopUpInfoContent: {};
    editMode: boolean;
    infoContent: {};
    filtersWasHandled: boolean;
    showWarning: boolean;
}>;
export default _default;
//# sourceMappingURL=commonDetailsReducer.d.ts.map