export default function validation(inputs) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
    
    let errors = {};
    
    (!inputs.email) ? errors.email = 'Email is required' : errors.email = '';
    (inputs.email.length > 35) ? errors.email = 'Email must cant be more than 35 characters' : errors.email = '';
    (!regexEmail.test(inputs.email)) ? errors.email = 'Email is invalid' : errors.email = '';
    (!regexPassword.test(inputs.password)) ? errors.password = 'Password is invalid' : errors.email = '';
    return errors

}