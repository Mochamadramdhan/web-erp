import { colors } from "../../theme/colors";
import { font } from "../../theme/font";

export const styles ={
    wrap:{
        pt:20,
        pb:12
    },
    txthead:{
        mb:6,
        textAlign:"center"
    },
    contact:{
        fontWeight:'bold',
        fontFamily:font.main
    },
    avatar:{
        color:colors.main,
    },
    title:{
        display:{
            xs:'none',
            md:'flex'
        }
    },
    foot:{
        gap:3,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:{xs:'column',md:'row'},
    }
}
