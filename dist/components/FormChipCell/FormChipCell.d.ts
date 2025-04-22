export default FormChipCell;
declare function FormChipCell({ chipOptions, className, delimiter, formState, initialValues, isEditable, label, name, onClick, shortChips, validationRules, validator, onExitEditModeCallback, visibleChipsMaxLength }: {
    chipOptions?: {
        background: string;
        boldValue: boolean;
        borderRadius: string;
        borderColor: string;
        density: string;
        font: string;
    };
    className?: string;
    delimiter?: any;
    formState: any;
    initialValues: any;
    isEditable?: boolean;
    label?: any;
    name: any;
    onClick?: () => void;
    shortChips?: boolean;
    validationRules?: {};
    validator?: any;
    onExitEditModeCallback?: any;
    visibleChipsMaxLength?: any;
}): JSX.Element;
declare namespace FormChipCell {
    namespace propTypes {
        export { CHIP_OPTIONS as chipOptions };
        export let className: any;
        export let delimiter: any;
        export let formState: any;
        export let initialValues: any;
        export let isEditable: any;
        export let label: any;
        export let name: any;
        export let onClick: any;
        export let onExitEditModeCallback: any;
        export let shortChips: any;
        export let validationRules: any;
        export let validator: any;
        export let visibleChipsMaxLength: any;
    }
}
import { CHIP_OPTIONS } from '../../types';
//# sourceMappingURL=FormChipCell.d.ts.map