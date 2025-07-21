import { useFormik } from "formik";
import * as Yup from "yup";

//  validation 
const validationSchema = Yup.object({
  fullName: Yup.string() .required("Full Name is required").min(4, "Must be at least 4 characters"),
  email: Yup.string() .email("Invalid email format") .required("Email is required"),
  password: Yup.string() .required("Password is required") .min(6, "Password must be at least 6 characters"),
  grade: Yup.string().required("Grade is required"),
  gender: Yup.string().required("Gender is required"),
});

export default function StudentForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      grade: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    alert(`${values.fullName}, your form has been submitted!`);

    },
  });

  const { values, errors, touched, handleChange, handleSubmit , resetForm } = formik;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" ,backgroundColor:"black" }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit} >

        {/* Full Name */}
        <div>
          <label>Full Name:</label><br />
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && touched.fullName && (
            <p style={{ color: "red" }}>{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        {/* Grade */}
        <div>
          <label>Grade:</label><br />
          <select name="grade" value={values.grade} onChange={handleChange}>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
          {errors.grade && touched.grade && (
            <p style={{ color: "red" }}>{errors.grade}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label><br />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={values.gender == "Male"}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={values.gender == "Female"}
            onChange={handleChange}
          /> Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={values.gender == "Other"}
            onChange={handleChange}
          /> Other
          {errors.gender && touched.gender && (
            <p style={{ color: "red" }}>{errors.gender}</p>
          )}
        </div>

        {/* Submit */}
        <div style={{ marginTop: "10px" , }}>
          <button type="submit">Submit</button>
          <button style={{ marginTop: "10px" , marginLeft:"10px"}} type="button" onClick={() => resetForm()}>Reset</button>
        </div>
      </form>
    </div>
  );
}