export function useTable({ ref, selectedItem, skipTableWrapper, tableClassName }: {
    ref: any;
    selectedItem: any;
    skipTableWrapper?: boolean;
    tableClassName?: string;
}): {
    TableContainer: {
        ({ children, hideActionsMenu, mainRowItemsCount, pageData, renderDetails, selectedItem, sortProps, tableBodyRef, tableClass, tableContentRef, tableHeadRef, tableHeaders, tablePanelRef, tableRef, tableStore, tableWrapperClass, virtualizationConfig }: {
            children: any;
            hideActionsMenu?: boolean;
            mainRowItemsCount?: number;
            pageData?: any;
            renderDetails?: any;
            selectedItem?: {};
            sortProps?: any;
            tableBodyRef: any;
            tableClass: any;
            tableContentRef: any;
            tableHeadRef: any;
            tableHeaders: any;
            tablePanelRef: any;
            tableRef: any;
            tableStore?: any;
            tableWrapperClass: any;
            virtualizationConfig?: {
                tableBodyPaddingTop: number;
                startIndex: number;
                endIndex: number;
            };
        }): JSX.Element;
        propTypes: {
            children: any;
            hideActionsMenu: any;
            mainRowItemsCount: any;
            pageData: any;
            renderDetails: any;
            selectedItem: any;
            sortProps: any;
            tableBodyRef: any;
            tableClass: any;
            tableContentRef: any;
            tableHeadRef: any;
            tableHeaders: any;
            tablePanelRef: any;
            tableRef: any;
            tableStore: any;
            tableWrapperClass: any;
            virtualizationConfig: any;
        };
    };
    tableBodyRef: any;
    tableClass: string;
    tableContentRef: import("react").MutableRefObject<any>;
    tableHeadRef: import("react").MutableRefObject<any>;
    tablePanelRef: import("react").MutableRefObject<any>;
    tableRef: any;
    tableStore: any;
    tableWrapperClass: string;
};
//# sourceMappingURL=useTable.hook.d.ts.map