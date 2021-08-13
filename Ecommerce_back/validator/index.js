exports.userSignupValidator = (req, res, next) =>{

req.check("name", "name is required").notEmpty();
req.check("email", "email must be 3 to 32 charachter")
    .isLength({
            min:4, max: 32
         })
    .matches(/.+\@.+\..+/)
    .withMessage('Email must conatin @');
    
req.check("password", "password is required").notEmpty()
req.check('password')
    .isLength({min:6})
    .withMessage('Password must conatin atleast 6 characters')
    .matches(/\d/)
    .withMessage('Password must conatin a number');
    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map(error=> error.msg)[0]
        return res.status(400).json({error: firstError});
    }
next();

}