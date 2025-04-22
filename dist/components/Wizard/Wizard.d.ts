export default Wizard;
declare function Wizard({ children, className, getActions, isWizardOpen, onWizardResolve, previewText, size, stepsConfig, subTitle, title }: {
    children: any;
    className?: string;
    getActions?: any;
    isWizardOpen: any;
    onWizardResolve: any;
    previewText?: string;
    size?: string;
    stepsConfig?: any[];
    subTitle?: any;
    title: any;
}): JSX.Element;
declare namespace Wizard {
    namespace propTypes {
        export let children: any;
        export let className: any;
        export let getActions: any;
        export let isWizardOpen: any;
        export let onWizardResolve: any;
        export let previewText: any;
        export { MODAL_SIZES as size };
        export { WIZARD_STEPS_CONFIG as stepsConfig };
        export let subTitle: any;
        export let title: any;
    }
    function Step({ children }: {
        children: any;
    }): any;
}
import { MODAL_SIZES } from '../../types';
import { WIZARD_STEPS_CONFIG } from '../../types';
//# sourceMappingURL=Wizard.d.ts.map