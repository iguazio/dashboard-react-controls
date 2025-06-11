export default HiddenChipsBlock;
declare function HiddenChipsBlock({ chips, chipIndex, chipOptions, className, editConfig, handleEditChip, handleIsEdit, handleRemoveChip, handleShowElements, isEditMode, setEditConfig }: {
    chips?: any[];
    chipIndex?: number;
    chipOptions: any;
    className: any;
    editConfig?: {};
    handleEditChip: any;
    handleIsEdit?: () => void;
    handleRemoveChip: any;
    handleShowElements: any;
    isEditMode?: boolean;
    setEditConfig?: () => void;
}, { hiddenChipsCounterRef, hiddenChipsPopUpRef }: {
    hiddenChipsCounterRef: any;
    hiddenChipsPopUpRef: any;
}): import("react").ReactPortal;
declare namespace HiddenChipsBlock {
    let displayName: string;
    namespace propTypes {
        export let className: any;
        export { CHIPS as chips };
        export let chipOptions: any;
        export let chipIndex: any;
        export let editConfig: any;
        export let handleEditChip: any;
        export let handleIsEdit: any;
        export let handleRemoveChip: any;
        export let handleShowElements: any;
        export let isEditMode: any;
        export let setEditConfig: any;
    }
}
import { CHIPS } from '../../../types';
//# sourceMappingURL=HiddenChipsBlock.d.ts.map