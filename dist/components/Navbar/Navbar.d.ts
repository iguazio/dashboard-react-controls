export default Navbar;
declare function Navbar({ children, id, setNavbarIsPinned }: {
    children: any;
    id?: string;
    setNavbarIsPinned: any;
}): JSX.Element;
declare namespace Navbar {
    export function Body({ children }: {
        children: any;
    }): JSX.Element;
    export namespace Body {
        let displayName: string;
        namespace propTypes {
            let children: any;
        }
    }
    export function Divider(): JSX.Element;
    export namespace Divider {
        let displayName_1: string;
        export { displayName_1 as displayName };
    }
    export namespace propTypes_1 {
        let children_1: any;
        export { children_1 as children };
        export let id: any;
        export let setNavbarIsPinned: any;
    }
    export { propTypes_1 as propTypes };
}
//# sourceMappingURL=Navbar.d.ts.map