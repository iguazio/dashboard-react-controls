export default ConfirmDialog;
declare function ConfirmDialog({ cancelButton, children, className, closePopUp, confirmButton, customPosition, header, isOpen, message, messageOnly, onResolve }: {
    cancelButton?: any;
    children?: any;
    className?: string;
    closePopUp?: any;
    confirmButton?: any;
    customPosition?: {};
    header?: string;
    isOpen?: boolean;
    message?: string;
    messageOnly?: boolean;
    onResolve?: any;
}): JSX.Element;
declare namespace ConfirmDialog {
    namespace propTypes {
        export { CONFIRM_DIALOG_CANCEL_BUTTON as cancelButton };
        export let children: any;
        export let className: any;
        export let closePopUp: any;
        export { CONFIRM_DIALOG_SUBMIT_BUTTON as confirmButton };
        export let customPosition: any;
        export let header: any;
        export let isOpen: any;
        export { CONFIRM_DIALOG_MESSAGE as message };
        export let messageOnly: any;
        export let onResolve: any;
    }
}
import { CONFIRM_DIALOG_CANCEL_BUTTON } from '../../types';
import { CONFIRM_DIALOG_SUBMIT_BUTTON } from '../../types';
import { CONFIRM_DIALOG_MESSAGE } from '../../types';
//# sourceMappingURL=ConfirmDialog.d.ts.map