export const CONSTANTS = {
    backEndUrl: "http://localhost:8082/api/books",
    emptyBookObj: { title: "", author: "", genre: "", publicationYear: 0,  rating: 0, }

}

export const Util = {
    handleEditInputChange: (callBackFun, nameValueObj) => {
        const { name, value } = nameValueObj;
        callBackFun((prevObj) => ({
            ...prevObj,
            [name]: value,
        }));
    }
}