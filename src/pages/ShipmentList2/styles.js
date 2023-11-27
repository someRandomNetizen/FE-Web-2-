import { makeStyles } from "@mui/styles";
import backgroundImage from "../../images/background.jpg";

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
  inlineContainer: {

  },
  heading: {
    marginBottom: "20px",
    color: "white",
    fontSize: "32px",
  },

  lineText: {
    fontSize: "18px", // Adjust the font size
    color: "blue", // Adjust the text color

  },

  shipmentImage: {
    width: "330px", // Adjust the image width
    height: "230px", // Make the image cover the full height
    display: "block", // Remove any inline spacing issues
    marginLeft: "-13px", // Adjust as needed
    marginTop: "-35px",
    marginBottom: "-35px",
    zIndex: 1, // Place the image above other content
    objectFit: "cover", // Make the image cover the container
  },

  div0: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    justifyContent: "center",
    paddingBottom: "20px", // Adjust spacing as needed
  },

  div11: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    justifyContent: "center",
    marginTop: "10px", // Adjust spacing as needed
    marginLeft: 70,
    paddingBottom: 40,
  },

  div1: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    justifyContent: "center",
    marginTop: "10px", // Adjust spacing as needed
    marginLeft: 30,
    paddingBottom: 60,
  },

  lineText2: {
    marginBottom: 0,
    fontSize: "16px", // Adjust the font size
    color: "black", // Adjust the text color
    maxWidth: 200, // Set the maximum width for the text container
    overflow: "hidden",
    wordWrap: "break-word", // Allow words to wrap to the next line
  },

  div13: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    justifyContent: "center",
    marginTop: "10px", // Adjust spacing as needed
    marginLeft: 30,
    paddingBottom: 60,
  },

  div4: {
    paddingBottom: 0,
    alignItems: "flex-start", // Align items to the left
    
  },

  lineText3: {
    fontSize: "18px", // Adjust the font size
    color: "blue", // Adjust the text color

  },

  shipmentContainer: {
    width: "80%",
    background: "white",
    padding: "10px", // Adjust the padding to move the gray border closer to the content
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "black",
    border: "2px solid white", // Add this line to create a gray border
    display: "flex", /* Use flexbox layout */
    alignItems: "center", /* Align items vertically in the center */
    align: "center",
    justifyContent: "center",
    marginLeft: 150,
  },

  shipmentContainer2: {
    background: "white",
    padding: "10px", // Adjust the padding to move the gray border closer to the content
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "black",
    border: "2px solid gray", // Add this line to create a gray border
    display: "flex", /* Use flexbox layout */
    alignItems: "center", /* Align items vertically in the center */
    width: "100%",
    position: "relative", // Add this to make sure the absolute positioning of the image works
    overflow: "hidden", // Hide any overflowing content
    justifyContent: "center",
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
    overflowY: "scroll", // Keep the scrolling property here
    background: `url(${backgroundImage})`,

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

  },
  formGroup: {
    marginRight: "45%", // Add margin to the right side of the FormGroup
  },

  scrollableContainer: {
    height: "100vh", // Adjust this value as needed

  },
  div10: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align items to the left
    justifyContent: "center",
    marginTop: "10px", // Adjust spacing as needed
    paddingBottom: 115,
    marginLeft: "auto",
    paddingRight: 20,
  },
});

export default useStyles;