const useStyles = makeStyles(() => ({
  h5: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.h5} variant="h5">
          Lorem Ipsum Lorem Ipsum
        </Typography>
        <Grid item>
          <Grid container item justify="flex-end" direction="row">
            <Button variant="contained">b1</Button>
            <Button variant="contained">b2</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

