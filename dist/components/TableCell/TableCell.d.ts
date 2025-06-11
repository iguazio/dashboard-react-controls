export default TableCell;
declare function TableCell({ cellData, className, firstCell, item, link, onClick, selectItem, selectedItem, showExpandButton, toggleRow }: {
    cellData: any;
    className?: string;
    firstCell?: boolean;
    item: any;
    link?: string;
    onClick?: any;
    selectItem?: () => void;
    selectedItem?: {};
    showExpandButton?: boolean;
    toggleRow?: any;
}): JSX.Element;
declare namespace TableCell {
    namespace propTypes {
        let cellData: any;
        let className: any;
        let firstCell: any;
        let item: any;
        let link: any;
        let onClick: any;
        let selectItem: any;
        let selectedItem: any;
        let showExpandButton: any;
        let toggleRow: any;
    }
}
//# sourceMappingURL=TableCell.d.ts.map