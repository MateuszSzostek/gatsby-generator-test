import _ from "lodash";

const asyncFunc = async (callback: Function) => {
    await callback();
};

const nullHandler = (data: any) => {
    if (data === null || typeof data === null || typeof data === "undefined")
        return false;
    else if (typeof data === "string" && data.length === 0) return false;
    else if (Array.isArray(data) && data.length === 0) return false;
    else {
        return true;
    }
};

const getRandomItems = (array: any[], amount: number) => {
    return _.sampleSize(array, amount ? amount : 1);
};

const groupArrayToSmallerByValue = (array: any[], splitByValue: number) => {
    const result = [];

    while (array.length > 0) {
        const chunk = array.splice(0, splitByValue);
        result.push(chunk);
    }

    return result;
};

const translateToLink = (name: string) => {
    const slug = `/product/${name
        .replaceAll(" ", "-")
        .replaceAll(".", "-")
        .replaceAll(",", "-")
        .replaceAll("%", "")
        .replaceAll(":", "")
        .replaceAll(";", "")
        .replaceAll("+", "-plus-")
        .toLowerCase()}`;
    return slug;
};

export {
    asyncFunc,
    nullHandler,
    getRandomItems,
    translateToLink,
    groupArrayToSmallerByValue,
};
