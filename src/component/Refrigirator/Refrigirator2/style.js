import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  pageContainer: {
    position: "absolute",
    top: 0,
    left: "10%",
    width: "80%",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",

  },
  heading: {
    marginBottom: "20px",
    color: "white",
    fontSize: "32px",
  },
  contentContainer: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    paddingLeft: 80,
    paddingRight: 80,

  },
  blackText: {
    color: "green",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  blackText2: {
    color: "black",
    textAlign: "left", // Align the text to the left
    paddingBottom: 5,
  },
  blackText3: {
    color: "black",
    textAlign: "left", // Align the text to the left
    paddingBottom: 5,
    fontSize: 25,

  },
  image: {
    display: "block", // To center the image horizontally
    margin: "20px auto", // To center the image vertically and add space around it
    width: "15%",
    height: "20%",
  },
  blackTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", // Align children to the left
    height: "10%", // Take full height for vertical centering
    paddingBottom: 15,
  },
  blackTextContainer2: {
    marginTop: -20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "10%", // Take full height for vertical centering
  },
  blackTextContainer3: {
    paddingBottom: 15,
  },
  greenButton: {
    padding: "10px 20px",
    margin: "0 10px", // Add some space between the buttons
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "250px", // Adjust the width of the buttons
  },
  label: {
    color:"black"
  },
  flexContainer: {
    display: "flex",
    alignItems: "center", // Aligns items vertically
    justifyContent: "center", // Aligns items horizontally
    paddingBottom: 15,
  },
  formGroup: {
    marginRight: "45%", // Add margin to the right side of the FormGroup
  },

  scrollableContainer: {
    height: "100vh", // Adjust this value as needed
    overflowY: "auto",
  },
});

export default useStyles;