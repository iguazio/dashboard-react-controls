export const VIEW_SEARCH_PARAMETER: "view";
export const FULL_VIEW_MODE: "full";
export const DENSITY_DENSE: "dense";
export const DENSITY_NORMAL: "normal";
export const DENSITY_MEDIUM: "medium";
export const DENSITY_CHUNKY: "chunky";
export const BACKSPACE: "Backspace";
export const CLICK: "Click";
export const DELETE: "Delete";
export const TAB: "Tab";
export const TAB_SHIFT: "Tab+Shift";
export const PRIMARY_BUTTON: "primary";
export const SECONDARY_BUTTON: "secondary";
export const TERTIARY_BUTTON: "tertiary";
export const DANGER_BUTTON: "danger";
export const LABEL_BUTTON: "label";
export namespace validation {
    namespace BEGIN_END_NOT_WITH {
        let LABEL: string;
        let NAME: string;
    }
    namespace BEGIN_END_WITH {
        let LABEL_1: string;
        export { LABEL_1 as LABEL };
        let NAME_1: string;
        export { NAME_1 as NAME };
    }
    namespace BEGIN_NOT_WITH {
        let LABEL_2: string;
        export { LABEL_2 as LABEL };
        let NAME_2: string;
        export { NAME_2 as NAME };
    }
    namespace BEGIN_WITH {
        let LABEL_3: string;
        export { LABEL_3 as LABEL };
        let NAME_3: string;
        export { NAME_3 as NAME };
    }
    namespace END_NOT_WITH {
        let LABEL_4: string;
        export { LABEL_4 as LABEL };
        let NAME_4: string;
        export { NAME_4 as NAME };
    }
    namespace END_WITH {
        let LABEL_5: string;
        export { LABEL_5 as LABEL };
        let NAME_5: string;
        export { NAME_5 as NAME };
    }
    namespace MUST_CONTAIN_EXACTLY_ONE {
        let LABEL_6: string;
        export { LABEL_6 as LABEL };
        let NAME_6: string;
        export { NAME_6 as NAME };
    }
    namespace MUST_HAVE_DOT_AFTER_AT {
        let LABEL_7: string;
        export { LABEL_7 as LABEL };
        let NAME_7: string;
        export { NAME_7 as NAME };
    }
    namespace MUST_NOT_BE {
        let LABEL_8: string;
        export { LABEL_8 as LABEL };
        let NAME_8: string;
        export { NAME_8 as NAME };
    }
    namespace NO_CONSECUTIVE_CHARACTER {
        let LABEL_9: string;
        export { LABEL_9 as LABEL };
        let NAME_9: string;
        export { NAME_9 as NAME };
    }
    namespace NOT_CONTAIN {
        let LABEL_10: string;
        export { LABEL_10 as LABEL };
        let NAME_10: string;
        export { NAME_10 as NAME };
    }
    namespace ONLY_AT_THE_BEGINNING {
        let LABEL_11: string;
        export { LABEL_11 as LABEL };
        let NAME_11: string;
        export { NAME_11 as NAME };
    }
    namespace REQUIRED {
        let LABEL_12: string;
        export { LABEL_12 as LABEL };
        let NAME_12: string;
        export { NAME_12 as NAME };
    }
    namespace VALID_CHARACTERS_WITH_REFIX {
        let LABEL_13: string;
        export { LABEL_13 as LABEL };
        let NAME_13: string;
        export { NAME_13 as NAME };
    }
    namespace VALID_CHARACTERS {
        let LABEL_14: string;
        export { LABEL_14 as LABEL };
        let NAME_14: string;
        export { NAME_14 as NAME };
    }
}
export const BADREQUEST_ERROR_STATUS_CODE: 400;
export const FORBIDDEN_ERROR_STATUS_CODE: 403;
export const NOTFOUND_ERROR_STATUS_CODE: 404;
export const CONFLICT_ERROR_STATUS_CODE: 409;
export const INTERNAL_SERVER_ERROR_STATUS_CODE: 500;
export const BAD_GATEWAY_ERROR_STATUS_CODE: 502;
export const SERVICE_UNAVAILABLE_ERROR_STATUS_CODE: 503;
export const GATEWAY_TIMEOUT_STATUS_CODE: 504;
export const MODAL_SM: "sm";
export const MODAL_MD: "md";
export const MODAL_LG: "lg";
export const MODAL_MIN: "min";
export const MODAL_MAX: "max";
export const MAIN_TABLE_ID: "main-table";
export const MAIN_TABLE_BODY_ID: "main-table-body";
export const BUTTON_COPY_URI_CELL_TYPE: "buttonCopyURI";
//# sourceMappingURL=constants.d.ts.map