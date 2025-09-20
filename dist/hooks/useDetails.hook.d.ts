export function useDetails({ applyDetailsChanges, applyDetailsChangesCallback, formInitialValues, isDetailsPopUp, isDetailsScreen, selectedItem }: {
    applyDetailsChanges: any;
    applyDetailsChangesCallback: any;
    formInitialValues: any;
    isDetailsPopUp: any;
    isDetailsScreen: any;
    selectedItem: any;
}): {
    DetailsContainer: {
        ({ blocker, commonDetailsStore, detailsMenu, detailsPanelClassNames, detailsPopUpSelectedTab, detailsRef, detailsStore, doNotLeavePage, formRef, isDetailsPopUp, leavePage, params, renderHeader, renderTabsContent, setBlocker, setDetailsPopUpSelectedTab, shouldDetailsBlock, withActionMenu }: {
            blocker: any;
            commonDetailsStore: any;
            detailsMenu: any;
            detailsPanelClassNames: any;
            detailsPopUpSelectedTab?: string;
            detailsRef: any;
            detailsStore: any;
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
    location: import("react-router-dom").Location<any>;
    params: Readonly<import("react-router-dom").Params<string>>;
    removeDetailsInfo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"commonDetailsStore/removeDetailsPopUpInfoContent"> | import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"commonDetailsStore/removeInfoContent">;
    setBlocker: import("react").Dispatch<import("react").SetStateAction<{}>>;
    setDetailsInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setDetailsPopUpInfoContent"> | import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "commonDetailsStore/setInfoContent">;
    shouldDetailsBlock: ({ currentLocation, nextLocation }: {
        currentLocation: any;
        nextLocation: any;
    }) => boolean;
};
//# sourceMappingURL=useDetails.hook.d.ts.map