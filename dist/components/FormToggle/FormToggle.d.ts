export default FormToggle;
declare function FormToggle({ className, density, label, labelTip, name, readOnly, onChange, ...inputProps }: {
    [x: string]: any;
    className?: string;
    density?: string;
    label?: string;
    labelTip?: string;
    name: any;
    readOnly?: boolean;
    onChange?: () => void;
}): JSX.Element;
declare namespace FormToggle {
    namespace propTypes {
        export let className: any;
        export { DENSITY as density };
        export let label: any;
        export let labelTip: any;
        export let name: any;
        export let readOnly: any;
        export let onChange: any;
    }
}
import { DENSITY } from '../../types.js';
//# sourceMappingURL=FormToggle.d.ts.map