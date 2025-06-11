export default TableHead;
declare function TableHead({ content, hideActionsMenu, mainRowItemsCount, selectedItem, sortProps }: {
    content: any;
    hideActionsMenu?: boolean;
    mainRowItemsCount: any;
    selectedItem: any;
    sortProps?: any;
}, ref: any): JSX.Element;
declare namespace TableHead {
    let displayName: string;
    namespace propTypes {
        export let content: any;
        export let hideActionsMenu: any;
        export let mainRowItemsCount: any;
        export let selectedItem: any;
        export { SORT_PROPS as sortProps };
    }
}
import { SORT_PROPS } from '../../types';
//# sourceMappingURL=TableHead.d.ts.map