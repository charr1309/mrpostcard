import Query from "../models";

const getRealCards = (code) => {
    return Query("SELECT * FROM  cards WHERE code = ?", [code])
};
const getCalenderCards = (code) => {
    return Query("SELECT * FROM  cards WHERE code = ?", [code])
};

const getSportsCards = (code) => {
    return Query("SELECT * FROM  cards WHERE code = ?", [code])
};

const getHolidayCards = (code) => {
    return Query("SELECT * FROM  cards WHERE code = ?", [code])
};

const getBusinessCards = (code) => {
    return Query("SELECT * FROM  cards WHERE code = ?", [code])
};

export default {
    getRealCards,
    getCalenderCards,
    getSportsCards,
    getHolidayCards,
    getBusinessCards,
};