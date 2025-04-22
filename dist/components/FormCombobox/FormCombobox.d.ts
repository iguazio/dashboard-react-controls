export default FormCombobox;
declare function FormCombobox({ comboboxClassName, density, disabled, hideSearchInput, inputDefaultValue, inputPlaceholder, invalidText, label, maxSuggestedMatches, name, onBlur, onChange, onFocus, required, rules, selectDefaultValue, selectOptions, selectPlaceholder, suggestionList, validator, withoutBorder }: {
    comboboxClassName?: string;
    density?: string;
    disabled?: boolean;
    hideSearchInput?: boolean;
    inputDefaultValue?: string;
    inputPlaceholder?: string;
    invalidText?: string;
    label?: string;
    maxSuggestedMatches?: number;
    name: any;
    onBlur?: any;
    onChange?: any;
    onFocus?: any;
    required?: boolean;
    rules?: any[];
    selectDefaultValue?: {
        label: string;
        id: string;
        className: string;
    };
    selectOptions: any;
    selectPlaceholder?: string;
    suggestionList?: any[];
    validator?: any;
    withoutBorder?: boolean;
}): JSX.Element;
declare namespace FormCombobox {
    namespace propTypes {
        export let comboboxClassName: any;
        export { DENSITY as density };
        export let disabled: any;
        export let hideSearchInput: any;
        export let inputDefaultValue: any;
        export let inputPlaceholder: any;
        export let invalidText: any;
        export let label: any;
        export let maxSuggestedMatches: any;
        export let name: any;
        export let onBlur: any;
        export let onChange: any;
        export let onFocus: any;
        export let required: any;
        export let rules: any;
        export let selectDefaultValue: any;
        export let selectOptions: any;
        export let selectPlaceholder: any;
        export { COMBOBOX_SUGGESTION_LIST as suggestionList };
        export let validator: any;
        export let withoutBorder: any;
    }
}
import { DENSITY } from '../../types';
import { COMBOBOX_SUGGESTION_LIST } from '../../types';
//# sourceMappingURL=FormCombobox.d.ts.map