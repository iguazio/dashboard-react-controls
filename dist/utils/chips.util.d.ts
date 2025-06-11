export function getChipOptions(variant: any): {
    type: string;
    boldValue: boolean;
    background: string;
    borderColor: string;
    density: string;
    font: string;
    borderRadius: string;
};
export function cutChips(chips: any[], maxLength: any, delimiter: any): {
    visibleChips: {
        value: any;
        delimiter: any;
    }[];
    hiddenChips: {
        value: any;
        delimiter: any;
    }[];
} | {
    visibleChips: {
        value: any;
        delimiter: any;
    }[];
    hiddenChips?: undefined;
};
export function getChipLabelAndValue(chip: any): {
    chipLabel: any;
    chipValue: any;
};
//# sourceMappingURL=chips.util.d.ts.map