export default FormChipCellView;
declare function FormChipCellView({ chipOptions, chipSizeIsRecalculated, setChipSizeIsRecalculated, children, chips, editConfig, handleAddNewChip, handleEditChip, handleRemoveChip, handleShowElements, handleToEditMode, isDeletable, isEditable, name, setChipsSizes, setEditConfig, shortChips, showChips, showHiddenChips, validateFields, validationRules, visibleChipsMaxLength }: {
    chipOptions?: {
        background: string;
        boldValue: boolean;
        borderRadius: string;
        borderColor: string;
        density: string;
        font: string;
    };
    chipSizeIsRecalculated: any;
    setChipSizeIsRecalculated: any;
    children: any;
    chips: any;
    editConfig: any;
    handleAddNewChip: any;
    handleEditChip: any;
    handleRemoveChip: any;
    handleShowElements: any;
    handleToEditMode: any;
    isDeletable?: boolean;
    isEditable?: boolean;
    name: any;
    setChipsSizes: any;
    setEditConfig: any;
    shortChips?: boolean;
    showChips: any;
    showHiddenChips: any;
    validateFields: any;
    validationRules?: {};
    visibleChipsMaxLength?: any;
}, { chipsCellRef, chipsWrapperRef, hiddenChipsCounterRef, hiddenChipsPopUpRef }: {
    chipsCellRef: any;
    chipsWrapperRef: any;
    hiddenChipsCounterRef: any;
    hiddenChipsPopUpRef: any;
}): JSX.Element;
declare namespace FormChipCellView {
    let displayName: string;
    namespace propTypes {
        export { CHIP_OPTIONS as chipOptions };
        export let chipSizeIsRecalculated: any;
        export let setChipSizeIsRecalculated: any;
        export let children: any;
        export let chips: any;
        export let editConfig: any;
        export let formState: any;
        export let handleAddNewChip: any;
        export let handleEditChip: any;
        export let handleRemoveChip: any;
        export let handleShowElements: any;
        export let handleToEditMode: any;
        export let isDeletable: any;
        export let isEditable: any;
        export let name: any;
        export let setChipsSizes: any;
        export let setEditConfig: any;
        export let shortChips: any;
        export let showChips: any;
        export let showHiddenChips: any;
        export let validateFields: any;
        export let validationRules: any;
        export { VISIBLE_CHIPS_MAX_LENGTH as visibleChipsMaxLength };
    }
}
import { CHIP_OPTIONS } from '../../types';
import { VISIBLE_CHIPS_MAX_LENGTH } from '../../types';
//# sourceMappingURL=FormChipCellView.d.ts.map