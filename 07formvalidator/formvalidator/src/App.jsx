import { useState } from "react";
import "./App.css";

function App() {
  const [Formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState();

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  const validateForm = () => {
    let newErrors = {};

    if (!Formdata.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!Formdata.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!Formdata.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(Formdata.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!Formdata.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(Formdata.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!Formdata.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(Formdata.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }
    if (!Formdata.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (Formdata.confirmPassword !== Formdata.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
    if (!Formdata.age) {
      newErrors.age = "Age is required";
    } else if (!isValidAge(Formdata.age)) {
      newErrors.age =
        "You must be at least 18 years old and not older than 100 years";
    }
    if (!Formdata.gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...FormData,
      [name]: value,
    });
    console.log(Formdata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form Submitted", Formdata);
    } else {
      console.log("Form Validation Failed");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            name="firstName"
            value={FormData.firstName}
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          {/* {errors.firstName && <div className="error">{errors.firstName}</div>} */}
        </div>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={FormData.lastName}
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          {/* {errors.lastName && <div className="error">{errors.lastName}</div>} */}
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={FormData.email}
            placeholder="Enter your  email"
            onChange={handleChange}
          />
          {/* {errors.email && <div className="error">{errors.email}</div>} */}
        </div>
        <div>
          <label>Number : </label>
          <input
            type="text"
            name="number"
            value={FormData.phoneNumber}
            placeholder="Enter your  phone number"
            onChange={handleChange}
          />
          {/* <div className="error">{errors.phoneNumber}</div> */}
        </div>
        <div>
          <label> Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={FormData.confirmPassword}
            placeholder=" your password"
            onChange={handleChange}
          />
          {/* {errors.password && <div className="error">{errors.password}</div>} */}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={FormData.confirmPassword}
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          {/* {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )} */}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={FormData.age}
            placeholder="Enter your age"
            onChange={handleChange}
          />
          {/* {errors.age && <div className="error">{errors.age}</div>} */}
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={FormData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {/* {errors.gender && <div className="error">{errors.gender}</div>} */}
        </div>

        {/* <div>
          <label>Interests:</label>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={FormData.interests.includes("coding")}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={FormData.interests.includes("sports")}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={FormData.interests.includes("reading")}
            />
            Reading
          </label>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
