export function useDetails({ applyDetailsChanges, applyDetailsChangesCallback, formInitialValues, isDetailsPopUp, isDetailsScreen, selectedItem }: {
    applyDetailsChanges: any;
    applyDetailsChangesCallback: any;
    formInitialValues: any;
    isDetailsPopUp: any;
    isDetailsScreen: any;
    selectedItem: any;
}): {
    DetailsContainer: {
        ({ blocker, detailsMenu, detailsPanelClassNames, detailsPopUpSelectedTab, detailsRef, detailsStore, commonDetailsStore, doNotLeavePage, formRef, isDetailsPopUp, leavePage, params, renderHeader, renderTabsContent, setBlocker, setDetailsPopUpSelectedTab, shouldDetailsBlock, withActionMenu }: {
            blocker: any;
            detailsMenu: any;
            detailsPanelClassNames: any;
            detailsPopUpSelectedTab?: string;
            detailsRef: any;
            detailsStore: any;
            commonDetailsStore: any;
            doNotLeavePage: any;
            formRef: any;
            isDetailsPopUp?: any;
            leavePage: any;
            params: any;
            renderHeader: any;
            renderTabsContent: any;
            setBlocker: any;
            setDetailsPopUpSelectedTab?: any;
            shouldDetailsBlock: any;
            withActionMenu?: boolean;
        }): JSX.Element;
        propTypes: {
            blocker: any;
            detailsMenu: any;
            detailsPanelClassNames: any;
            detailsPopUpSelectedTab: any;
            detailsRef: any;
            detailsStore: any;
            commonDetailsStore: any;
            doNotLeavePage: any;
            formRef: any;
            isDetailsPopUp: any;
            leavePage: any;
            params: any;
            renderHeader: any;
            renderTabsContent: any;
            setBlocker: any;
            setDetailsPopUpSelectedTab: any;
            shouldDetailsBlock: any;
            withActionMenu: any;
        };
    };
    applyChanges: () => void;
    applyChangesRef: import("react").MutableRefObject<undefined>;
    blocker: {};
    cancelChanges: () => void;
    detailsPanelClassNames: string;
    detailsRef: import("react").MutableRefObject<undefined>;
    commonDetailsStore: any;
    doNotLeavePage: () => void;
    formRef: import("react").MutableRefObject<import("final-form").FormApi<any, Partial<any>>>;
    handleShowWarning: (show: any) => void;
    leavePage: () => void;
    location: any;
    params: any;
    removeDetailsInfo: any;
    setBlocker: import("react").Dispatch<import("react").SetStateAction<{}>>;
    setDetailsInfo: any;
    shouldDetailsBlock: ({ currentLocation, nextLocation }: {
        currentLocation: any;
        nextLocation: any;
    }) => boolean;
};
//# sourceMappingURL=useDetails.hook.d.ts.map