export default FormToggle;
declare function FormToggle({ density, label, name, onChange, ...inputProps }: {
    [x: string]: any;
    density?: string;
    label?: string;
    name: any;
    onChange?: () => void;
}): JSX.Element;
declare namespace FormToggle {
    namespace propTypes {
        export { DENSITY as density };
        export let label: any;
        export let name: any;
        export let onChange: any;
    }
}
import { DENSITY } from '../../types.js';
//# sourceMappingURL=FormToggle.d.ts.map