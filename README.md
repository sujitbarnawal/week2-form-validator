# Form Validation Tool

A robust, TypeScript-powered form validation tool with custom validation rules and real-time feedback. This application provides comprehensive client-side form validation with user-friendly error messages and intuitive UI.

## 🌟 Features

- **Real-time Validation**: Instant feedback as users fill out the form
- **Custom Validation Rules**: Comprehensive validation logic for different field types
- **TypeScript Powered**: Type-safe validation logic for reliability
- **Username Validation**: Alphanumeric characters only, 3-20 characters length
- **Email Validation**: RFC-compliant email address validation
- **Password Strength**: Enforces strong passwords with multiple criteria
- **Age Verification**: Ensures age is within acceptable range (18-120)
- **Country Selection**: Dropdown for selecting country with validation
- **User-Friendly Messages**: Clear, descriptive error messages
- **Responsive Design**: Works seamlessly on all devices
- **Clean UI**: Modern, intuitive interface with visual feedback

## 🚀 Live Demo

Check out the live application: [Form Validator](https://week2-form-validator.vercel.app)

## 📋 Validation Rules

### Username
- Length: 3-20 characters
- Format: Alphanumeric characters only (letters and numbers)
- No special characters or spaces allowed

### Email Address
- Must be a valid email format
- Contains @ symbol and domain
- RFC-compliant validation

### Password
- Minimum 8 characters
- Must contain at least:
  - 1 uppercase letter (A-Z)
  - 1 lowercase letter (a-z)
  - 1 number (0-9)

### Age
- Must be a number
- Range: 18 to 120 years
- Ensures user meets minimum age requirement

### Country
- Must select a valid country from the dropdown
- Options include: Nepal, India, China, Bhutan, and Other


## 📁 Project Structure

```
week2-form-validator/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── main.ts             # TypeScript validation logic
├── main.js             # Compiled JavaScript (generated)
└── README.md          # Project documentation
```

## 💻 Usage

1. **Fill out the form fields**:
   - Enter a username (3-20 alphanumeric characters)
   - Provide a valid email address
   - Create a strong password (min 8 chars with mixed case and numbers)
   - Enter your age (18-120)
   - Select your country from the dropdown

2. **Real-time Validation**:
   - Each field validates as you type or lose focus
   - Error messages appear below invalid fields
   - Valid fields show success indicators

3. **Submit the Form**:
   - Click "Validate & Submit" button
   - All fields must pass validation
   - Success message appears upon valid submission
   - Form data can be processed or sent to backend

## 🎨 Technologies Used

- **TypeScript**: Type-safe validation logic
- **JavaScript**: Client-side interactivity
- **HTML5**: Semantic form structure
- **CSS3**: Modern styling and responsive design
- **Vercel**: Deployment platform

## 🔧 Validation Implementation

The form validator uses TypeScript to ensure type safety and robust validation:

```typescript
// Example validation structure
interface FormData {
  username: string;
  email: string;
  password: string;
  age: number;
  country: string;
}

// Validation functions check each field against specific rules
// Error messages are displayed dynamically
```


## 📱 Responsive Design

The form validator is fully responsive and adapts to:
- Desktop screens (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## 🚀 Deployment

This project is deployed on Vercel for seamless hosting and automatic deployments.



## 🧪 Testing

To test the form validator:

1. **Valid Input Test**: Enter all fields with valid data
2. **Invalid Input Test**: Try various invalid inputs for each field
3. **Edge Cases**: Test boundary values (e.g., exactly 3 chars for username)
4. **Empty Fields**: Submit form with empty fields
5. **Special Characters**: Test username with special characters

