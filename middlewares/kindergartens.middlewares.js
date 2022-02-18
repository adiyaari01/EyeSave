const { body, validationResult } = require('express-validator');

exports.kindergartenCreateValidation = [
    body('_name',"Is not valid").isString().isLength({ min : 1, max : 15 }),
    body('_address').isString().isLength({ min : 5, max : 35 }),
    body('_phone').isNumeric().isLength({ min : 9, max : 10 }),
];

// const { body, validationResult } = require('express-validator');

// exports.childrenCreateValidation = [
//     body('_id',"Is not valid").isNumeric().isLength({ min : 9, max : 9 }),
//     body('_firstName',"Is not valid").isString().isLength({ min : 2, max : 10 }),
//     body('_lastName',"Is not valid").isString().isLength({ min : 2, max : 10 }),
//     body('_address').isString().isLength({ min : 5, max : 35 }),
//     body('_birthdate',"Date is not valid (yyyy/mm/dd)").isDate()

// ];