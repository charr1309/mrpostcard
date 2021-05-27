const { Query } = require("../models");

const getRealCards = () => {
    return Query("SELECT * FROM  cards WHERE code = 100")
};
const getCalenderCards = () => {
    return Query("SELECT * FROM  cards WHERE code = 200")
};

const getSportsCards = () => {
    return Query("SELECT * FROM  cards WHERE code = 300")
};

const getHolidayCards = () => {
    return Query("SELECT * FROM  cards WHERE code = 400")
};

const getBusinessCards = () => {
    return Query("SELECT * FROM  cards WHERE code = 500")
};

module.exports = {
    getRealCards,
    getCalenderCards,
    getSportsCards,
    getHolidayCards,
    getBusinessCards,
};