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
        color:colors.texs,
        fontSize:{xs:'30px',lg:'40px'},
    },
    button:{
      width:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      mt:3,
      p:1,
      color:colors.main,
      fontWeight:'bold'
    }
  };