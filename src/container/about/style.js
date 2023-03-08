import { colors } from "../../theme/colors"
export const styles ={
    wrap: {
        height: "100vh",
        pt: {
          xs: "90px",
          md: "95px",
          lg:'50px'
        },
        display: "flex",
        flexDirection: {xs:'column',lg:'row'},
        alignItems: "center",
				gap:'5%',
				p:2
    },
    il:{
        display: "flex",
				width:{xs:'100%',md:'75%',lg:'45%'},
        justifyContent: "center",
        mr: {
            xs: "50px",
            md: "0px",
        },
    },
		wrapabout:{
			justifyContent: "center",
			width:{xs:'100%',lg:'45%'},
			textAlign: {xs:'center',lg:'left'}
		},
		title:{
			color: colors.texs,
			fontWeight: "600",
			fontFamily: colors.fontmain,
		fontSize: {
      xs: "26px",
      md: "40px",
      lg:'50px'
    },
		},
		desc:{
			fontSize: {
        xs: "16px",
        md: "24px",
        lg:'28px'
      },
		}

}