const movieCardStyle = {
  movieCard: {
    background: "white",
    borderRadius: "4px",
    boxShadow: "0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07)",
    width: "310px",
    margin: "1% 0",
    position: "relative",
    marginRight: "2%",
    transition: "transform 200ms ease",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  cardImage: {
    verticalAlign: "top",
    objectFit: "cover",
    width: "100%",
    height: "250px",
  },
  cardBody: {
    padding: "20px 40px 0 40px",
    "& h1, p": {
      fontFamily: "'Avenir', 'Helvetica', 'Arial', sans-serif",
    },
    "& h1": {
      color: "#232d33",
      margin: 0,
      marginBottom: "10px",
      fontSize: "1.5em",
      height: "60px",
    },
    "& p": {
      color: "#5d707b",
      margin: 0,
      padding: 0,
      marginBottom: "20px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
    },
  },
  cardFooter: {
    padding: "0px 25px 20px 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rate: {
    position: "absolute",
    top: "10px",
    right: "10px",
    borderRadius: "50%",
    height: "35px",
    width: "35px",
  },
};

export default movieCardStyle;
