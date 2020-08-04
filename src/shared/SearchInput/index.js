import React from "react";
import PropTypes from "prop-types";
import {makeStyles, Paper, InputBase, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "60%",
    margin: theme.spacing(2, 0),
    ["@media (max-width:900px)"]: { width: "85%" }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "80%",
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchInput = ({searchTerm , handleSubmit, handleChange}) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Search LeoVegas Movies"
        onChange={handleChange}
        value={searchTerm}
        inputProps={{"aria-label": "search google maps"}}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
