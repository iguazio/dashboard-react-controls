export default FormSelect;
declare function FormSelect({ className, density, disabled, hideSelectedOption, label, multiple, name, onChange, options, preventWidthOverflow, required, scrollToView, search, selectedItemAction, tooltip, withSelectedIcon, withoutBorder }: {
    className?: string;
    density?: string;
    disabled?: boolean;
    hideSelectedOption?: boolean;
    label?: string;
    multiple?: boolean;
    name: any;
    onChange?: any;
    options: any;
    preventWidthOverflow?: boolean;
    required?: boolean;
    scrollToView?: boolean;
    search?: boolean;
    selectedItemAction?: any;
    tooltip?: string;
    withSelectedIcon?: boolean;
    withoutBorder?: boolean;
}): JSX.Element;
declare namespace FormSelect {
    namespace propTypes {
        export let className: any;
        export { DENSITY as density };
        export let disabled: any;
        export let hideSelectedOption: any;
        export let label: any;
        export let multiple: any;
        export let name: any;
        export let onChange: any;
        export let options: any;
        export let preventWidthOverflow: any;
        export let required: any;
        export let scrollToView: any;
        export let search: any;
        export let selectedItemAction: any;
        export let tooltip: any;
        export let withSelectedIcon: any;
        export let withoutBorder: any;
    }
}
import { DENSITY } from '../../types';
//# sourceMappingURL=FormSelect.d.ts.map