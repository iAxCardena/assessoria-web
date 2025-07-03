import { createTheme } from "@mui/material";

/* Cores
#f6ebd9 Albescent White (background)?
#edbbb5 terciaria
#b47773 primaria
#965b59 secundaria
#ffebe1 
#644435
#fdc862 warning
#5cb85c success
#fc4b6c error
#f3f3f5
#f1f1f1
#e5e5e5
#272c33
#55565a
*/

export const theme = createTheme({
  palette: {
    primary: {
		main: '#b47773',
		dark: '#965b59',
		light: '#edbbb5',
		contrastText: '#FFF',
    },
    secondary: {
		main: '#644435',
    },
    background: {
      	default: '#f6ebd9',
		paper: '#f0eaea'
    },
    text: {
        primary: '#55565a'
    },
    warning: {
      	main: '#fdc862'
    },
    success: {
      	main: '#5cb85c',
    },
    error: {
      	main: '#fc4b6c'
    }
  },
});


// allow configuration using `createTheme`
// declare module "@mui/material/styles" {
//     interface PaletteOptions {
//         neutral?: PaletteOptions["primary"];
//     }
// }

  // Update the Button's color prop options
// declare module "@mui/material/Button" {
//     interface ButtonPropsColorOverrides {
//         neutral: true;
//     }
// }

// Update the Switch's color prop options
// declare module "@mui/material/Switch" {
//     interface SwitchPropsColorOverrides {
//         neutral: true;
//     }
// }

export default theme;