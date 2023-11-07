import { Button, FormControl, FormGroup, TextField } from "@mui/material";
import "../Styles.css";

import * as yup from "yup";
import { useFormik } from "formik";

const Task10 = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Name is required").min(6),
    age: yup.number().positive().integer(),
    password: yup.string().required("Password is required").min(8),
    email: yup.string().email(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      age: null,
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
            label="age"
            variant="outlined"
            value={formik.values.age}
            style={{ width: "50%" }}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
            {...formik.getFieldProps("age")}
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

export default Task10;
