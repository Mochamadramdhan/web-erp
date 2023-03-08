import { colors } from "../../theme/colors";

export const styles ={
    wrap: {
        backgroundColor: colors.backroud1,
        transition: 'height 0.3s ease',
        borderBottom: 'none', 
        position:'fixed'
      },
    toolbar:{
        gap: '5%', 
        justifyContent: 'space-between',
    },
    typlg:{
        color:colors.texs,
        fontWeight:'bold',
        fontFamily: colors.fontmain,
    },
    button:{
        paddingX: 5, 
        fontWeight: 'bold', 
        color: colors.main, 
        orderColor: colors.main,  
    },
    wrapmenu:{
        gap:{
            xs:5,md:10,lg:20,
        },
        alignItems:'center',
        display:'flex'
    },

}