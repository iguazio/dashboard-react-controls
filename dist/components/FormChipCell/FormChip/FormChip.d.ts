export default FormChip;
declare function FormChip({ chip, chipIndex, chipOptions, editConfig, handleEditChip, handleRemoveChip, handleToEditMode, isEditable, keyName, meta, setChipsSizes, setEditConfig, validationRules, valueName }: {
    chip: any;
    chipIndex: any;
    chipOptions?: {
        background: string;
        boldValue: boolean;
        borderRadius: string;
        borderColor: string;
        density: string;
        font: string;
    };
    editConfig: any;
    handleEditChip: any;
    handleRemoveChip: any;
    handleToEditMode: any;
    isEditable?: boolean;
    keyName?: string;
    meta: any;
    setChipsSizes: any;
    setEditConfig: any;
    validationRules?: {};
    valueName?: string;
}, ref: any): JSX.Element;
declare namespace FormChip {
    let displayName: string;
    namespace propTypes {
        export let chip: any;
        export let chipIndex: any;
        export { CHIP_OPTIONS as chipOptions };
        export let editConfig: any;
        export let handleEditChip: any;
        export let handleRemoveChip: any;
        export let handleToEditMode: any;
        export let isEditable: any;
        export let keyName: any;
        export let meta: any;
        export let setChipsSizes: any;
        export let setEditConfig: any;
        export let validationRules: any;
        export let valueName: any;
    }
}
import { CHIP_OPTIONS } from '../../../types';
//# sourceMappingURL=FormChip.d.ts.map