export default ReadOnlyChips;
declare function ReadOnlyChips({ chipOptions, labels, ...args }: {
    [x: string]: any;
    chipOptions?: {
        type: string;
        boldValue: boolean;
        background: string;
        borderColor: string;
        density: string;
        font: string;
        borderRadius: string;
    };
    labels?: any[];
}): JSX.Element;
declare namespace ReadOnlyChips {
    namespace propTypes {
        export { CHIP_OPTIONS as chipOptions };
        export let labels: any;
    }
}
import { CHIP_OPTIONS } from '../../types';
//# sourceMappingURL=ReadOnlyChips.d.ts.map