import { Button, FormControl, FormGroup, TextField } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import "../Styles.css";

const Task14 = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Name is required").min(6),
    phoneNo: yup
      .number()
      .integer()
      .positive()
      .test("is-ten-digits", "Phone number must be 10 digits long", (value) =>
        value ? value.toString().length === 10 : false
      ),
    password: yup.string().required("Password is required").min(8),
    email: yup.string().email(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNo: null,
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <FormGroup className="form-group">
        <FormControl className="form-control" margin="normal">
          <TextField
            label="username"
            variant="outlined"
            value={formik.values.username}
            style={{ width: "50%" }}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            {...formik.getFieldProps("username")}
          />
        </FormControl>

        <FormControl className="form-control" margin="normal">
          <TextField
            label="phone number"
            variant="outlined"
            value={formik.values.phoneNo}
            style={{ width: "50%" }}
            error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
            helperText={formik.touched.phoneNo && formik.errors.phoneNo}
            {...formik.getFieldProps("phoneNo")}
          />
        </FormControl>

        <FormControl className="form-control" margin="normal">
          <TextField
            label="email"
            variant="outlined"
            value={formik.values.email}
            style={{ width: "50%" }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            {...formik.getFieldProps("email")}
          />
        </FormControl>

        <FormControl className="form-control" margin="normal">
          <TextField
            label="password"
            variant="outlined"
            value={formik.values.password}
            style={{ width: "50%" }}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            {...formik.getFieldProps("password")}
          />
        </FormControl>

        <Button type="submit" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </FormGroup>
    </>
  );
};

export default Task14;
