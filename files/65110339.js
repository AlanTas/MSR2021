import React from "react";
import "./styles.css";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

const BasicTextFields = () => {
  const { rowId } = useParams();
  const testVar = 55;

  const selectedOfficeListRow = [{ id: 1 }, { id: 2 }].find(
    (i) => i.id === parseInt(rowId)
  );

  const handleSubmit = (event) => {
    console.log(rowId, testVar);
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                defaultValue={selectedOfficeListRow.town}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BrowserRouter>
        <Switch>
          <Route path="/:rowId" component={BasicTextFields} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

