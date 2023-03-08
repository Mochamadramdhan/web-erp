import { colors } from "../../theme/colors";
import { font } from "../../theme/font";

export const styles ={
    wrapPrice:{
        alignItems:'flex-end',
        height: '100%',
    },
    head:{
        fontWeight:'bold',
        fontFamily:font.main,
        mb:15
    },
    global:{
        ul: { margin: 0, padding: 0, listStyle: 'none' }
    },
   warptier:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    mb: 6,
   },
   button:{
        paddingX: 5, 
        fontWeight: 'bold', 
        borderColor: colors.main, 
        backgroundColor:colors.main,
        marginTop:'auto'
   }
}