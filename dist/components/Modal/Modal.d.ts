export default Modal;
declare function Modal({ actions, children, className, noHeader, onClose, previewText, show, size, subTitle, title }: {
    actions?: any[];
    children: any;
    className?: string;
    noHeader?: boolean;
    onClose: any;
    previewText?: string;
    show?: boolean;
    size?: string;
    subTitle?: any;
    title?: string;
}): JSX.Element;
declare namespace Modal {
    namespace propTypes {
        export let actions: any;
        export let children: any;
        export let className: any;
        export let noHeader: any;
        export let onClose: any;
        export let previewText: any;
        export let show: any;
        export { MODAL_SIZES as size };
        export let subTitle: any;
        export let title: any;
    }
}
import { MODAL_SIZES } from '../../types';
//# sourceMappingURL=Modal.d.ts.map