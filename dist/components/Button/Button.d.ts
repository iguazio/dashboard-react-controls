export default Button;
declare function Button({ className, density, icon, iconPosition, id, label, tooltip, variant, ...restProps }: {
    [x: string]: any;
    className?: string;
    density?: string;
    icon?: any;
    iconPosition?: string;
    id?: string;
    label?: string;
    tooltip?: string;
    variant?: string;
}, ref: any): JSX.Element;
declare namespace Button {
    let displayName: string;
    namespace propTypes {
        export let className: any;
        export { DENSITY as density };
        export let icon: any;
        export let iconPosition: any;
        export let id: any;
        export let label: any;
        export let tooltip: any;
        export { BUTTON_VARIANTS as variant };
    }
}
import { DENSITY } from '../../types';
import { BUTTON_VARIANTS } from '../../types';
//# sourceMappingURL=Button.d.ts.map