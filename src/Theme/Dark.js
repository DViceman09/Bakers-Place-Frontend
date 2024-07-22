const {createTheme} = require("@mui/material")
const { main } = require("@popperjs/core")

export const Dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63"
        },
        secondary: {
            main: "#5a20cb"
        },
        background: {
            main: "#000000",
            default: "#0D0D0D",
            paper: "#0D0D0D"
        },
        black: {
            main: "#242b2e"
        },
        textColor:{
            main:"#111111"
        }
    },}
)