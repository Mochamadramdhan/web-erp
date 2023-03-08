import { colors } from "../../theme/colors";
export const styles = {
    wrap: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "#fff",
      padding: "24px",
      borderRadius: "10px",
      minWidth: "400px",
      gap:5
    },
    title:{
        fontWeight:'bold',
        color:colors.main,
        fontSize:{xs:'30px',lg:'50px'},
    }
  };