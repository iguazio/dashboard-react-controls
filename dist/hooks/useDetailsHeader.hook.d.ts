export function useDetailsHeader({ handleCancel, handleShowWarning, isDetailsPopUp, pageData }: {
    handleCancel: any;
    handleShowWarning: any;
    isDetailsPopUp: any;
    pageData: any;
}): {
    DetailsHeaderContainer: {
        ({ actionButton, actionsMenu, applyChanges, applyChangesRef, cancelChanges, commonDetailsStore, getCloseDetailsLink, getDefaultCloseDetailsLink, handleActionClick, handleCancelClick, handleRefresh, headerRef, isDetailsPopUp, isDetailsScreen, location, navigate, pageData, params, renderCustomElements, renderStatus, renderTitle, selectedItem, showAllVersions, tab, viewMode, withActionMenu, withToggleViewBtn }: {
            actionButton?: any;
            actionsMenu: any;
            applyChanges: any;
            applyChangesRef: any;
            cancelChanges: any;
            commonDetailsStore: any;
            getCloseDetailsLink?: any;
            getDefaultCloseDetailsLink: any;
            handleActionClick: any;
            handleCancelClick: any;
            handleRefresh?: any;
            headerRef: any;
            isDetailsPopUp?: boolean;
            isDetailsScreen: any;
            location: any;
            navigate: any;
            pageData: any;
            params: any;
            renderCustomElements?: any;
            renderStatus?: any;
            renderTitle: any;
            selectedItem: any;
            showAllVersions?: any;
            tab?: string;
            viewMode?: string;
            withActionMenu?: boolean;
            withToggleViewBtn?: boolean;
        }): JSX.Element;
        propTypes: {
            actionButton: any;
            actionsMenu: any;
            applyChanges: any;
            applyChangesRef: any;
            cancelChanges: any;
            commonDetailsStore: any;
            getCloseDetailsLink: any;
            getDefaultCloseDetailsLink: any;
            handleActionClick: any;
            handleCancelClick: any;
            handleRefresh: any;
            headerRef: any;
            isDetailsPopUp: any;
            isDetailsScreen: any;
            location: any;
            navigate: any;
            pageData: any;
            params: any;
            renderCustomElements: any;
            renderStatus: any;
            renderTitle: any;
            selectedItem: any;
            showAllVersions: any;
            tab: any;
            viewMode: any;
            withActionMenu: any;
            withToggleViewBtn: any;
        };
    };
    actionButton: any;
    commonDetailsStore: any;
    handleActionClick: (event: any, handler: any) => Promise<void>;
    handleBackClick: () => void;
    handleCancelClick: () => void;
    headerRef: import("react").MutableRefObject<undefined>;
    location: any;
    navigate: any;
    params: any;
    showAllVersions: any;
    viewMode: string;
    withToggleViewBtn: any;
};
//# sourceMappingURL=useDetailsHeader.hook.d.ts.map