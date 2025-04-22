export default PopUpDialog;
declare function PopUpDialog({ children, className, closePopUp, customPosition, headerIsHidden, headerText, showPopUpDialog, style, tooltipText }: {
    children: any;
    className?: string;
    closePopUp?: () => void;
    customPosition?: {};
    headerIsHidden?: boolean;
    headerText?: string;
    showPopUpDialog?: boolean;
    style?: {};
    tooltipText?: string;
}, ref: any): import("react").ReactPortal;
declare namespace PopUpDialog {
    let displayName: string;
    namespace propTypes {
        export let children: any;
        export let className: any;
        export let closePopUp: any;
        export { POP_UP_CUSTOM_POSITION as customPosition };
        export let headerIsHidden: any;
        export let headerText: any;
        export let showPopUpDialog: any;
        export let style: any;
        export let tooltipText: any;
    }
}
import { POP_UP_CUSTOM_POSITION } from '../../types';
//# sourceMappingURL=PopUpDialog.d.ts.map