import { isEqual, toComparable } from "./helpers";

describe("toComparable", () => {

    it("Primitive", () => {
        expect(toComparable(1)).toBe(1);
    });

    it("Object", () => {
        const testObject = { text: 1 };
        expect(toComparable(testObject)).toBe(testObject);
    });

    it("Date", () => {
        const testDate = new Date(2018, 9, 9);
        expect(toComparable(testDate)).toBe(testDate.getTime());
    });
});

describe("isEqual", () => {

    it("Primitive", () => {
        expect(isEqual(1, 1)).toBe(true);
    });

    it("Empty Array", () => {
        const testArray1 = [];
        const testArray2 = [];
        expect(isEqual(testArray1, testArray2)).toBe(true);
    });

    it("Empty Array and null", () => {
        const testArray1 = [];
        const testArray2 = null;
        expect(isEqual(testArray1, testArray2)).toBe(false);
        expect(isEqual(testArray2, testArray1)).toBe(false);
    });

    it("Date", () => {
        const testDate1 = new Date(2018, 9, 9);
        const testDate2 = new Date(2018, 9, 9);
        expect(isEqual(testDate1, testDate2)).toBe(true);
    });
});
