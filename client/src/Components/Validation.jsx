export default function Validation(values){
    let errors = {}


    if(values.name === ''){
        errors.name = "Name Should Not Empty"
    }else if(values.name.length < 3 || values.name.length > 30){
        errors.name = "Name Must be B/W 3-30"
    }else{
        errors.name=""
    }

    if(values.email === ''){
        errors.email = "Email Should Not Empty"
    }else if(values.email.length < 3 || values.email.length > 30){
        errors.name = "Name Must be B/W 3-30"
    }else{
        errors.name=""
    }

    if(values.password === ''){
        errors.password = "Password Should Not Empty"
    }else if(values.password.length < 3 || values.password.length > 30){
        errors.password = "Password Must be B/W 3-30"
    }else{
        errors.name=""
    }
  return errors
}