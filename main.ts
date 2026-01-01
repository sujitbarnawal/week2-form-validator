interface FormState{
    username:string,
    email:string,
    password:string,
    age:number,
    country:string
}

interface ValidationResult{
    isValid:boolean,
    error?:string
}

var form = document.getElementById('validation-form') as HTMLFormElement
var usernameInput = document.getElementById('username') as HTMLInputElement
var emailInput = document.getElementById('email') as HTMLInputElement
var passwordInput = document.getElementById('password') as HTMLInputElement
var ageInput = document.getElementById('age') as HTMLInputElement
var countrySelect = document.getElementById('country') as HTMLSelectElement


function displayError(input:HTMLElement,message:string):void{
    removeError(input)
    const error = document.createElement("div")
    error.classList="error-message"
    error.textContent=message
    input.parentElement?.appendChild(error)
}


function removeError(input:HTMLElement):void{
    const parent = input.parentElement
    const error = parent?.querySelector(".error-message")
    if(error) error.remove()
}

function ValidateUsername(username:string):ValidationResult{
    const regex=/^[a-zA-Z0-9]{3,20}$/
    if(!regex.test(username)){
        return {isValid:false,error:"Username must be 3-20 alphanumeric characters"}
    }
    return {isValid:true}

}

function ValidatePassword(password:string):ValidationResult{
    const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if(!regex.test(password)){
        return{isValid:false,error:"Password does not meet requirements"}
    }
    return {isValid:true}
}

function ValidateAge(age:number):ValidationResult{
    if(age<18 || age>120){
        return{isValid:false,error:"Age must be between 18 to 120"}
    }
    return {isValid:true}
}

async function ValidateEmail(email:string):Promise<ValidationResult>{
    try {
        await new Promise((res,rej)=>setTimeout(res,700))
        if(email.endsWith("@test.com")){
            throw new Error("This email domain is not allowed")
        }
        return{isValid:true}

    } catch (error) {
        if(error instanceof Error){
            return {isValid:false,error:error.message}
        }
        return {isValid:false,error:"Unknown email validation error"}
    }
}

form.addEventListener("submit",async(e:SubmitEvent):Promise<void>=>{
    e.preventDefault()
    removeAllErrors() 
    const formState:FormState={
        username:usernameInput.value.trim(),
        email:emailInput.value.trim(),
        password:passwordInput.value,
        age:Number(ageInput.value),
        country:countrySelect.value
    }

    let isFormValid =true
    const usernameResult = ValidateUsername(formState.username)
    if(!usernameResult.isValid){
        displayError(usernameInput,usernameResult.error!)
        isFormValid=false
    }
    
    const passwordResult = ValidatePassword(formState.password)
    if(!passwordResult.isValid){
        displayError(passwordInput,passwordResult.error!)
        isFormValid=false
    }

    const ageResult = ValidateAge(formState.age)
    if(!ageResult.isValid){
        displayError(ageInput,ageResult.error!)
        isFormValid=false
    }

    if(!formState.country){
        displayError(countrySelect,"Please select a country")
        isFormValid=false
    }

    const emailResult = await ValidateEmail(formState.email)
    if(!emailResult.isValid){
        displayError(emailInput,emailResult.error!)
        isFormValid=false
    }

    if(!isFormValid) return

    alert("Form Validated Successfully!")
    form.reset()
  
})

function removeAllErrors(): void {
    const errors = document.querySelectorAll('.error-message')
    errors.forEach(error => error.remove())
}
