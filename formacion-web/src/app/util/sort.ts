export class Sort {

    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base"
    });

    constructor() { }

    public startSort(property: string | number, order: string, type= ""){
        if (order === "desc") {
            this.sortOrder = -1;
        }

        return (a: { [x: string]: string; }, b: { [x: string]: string; }) => {
            return this.collator.compare(a[property], b[property]) * this.sortOrder;
            
        }
    }

}