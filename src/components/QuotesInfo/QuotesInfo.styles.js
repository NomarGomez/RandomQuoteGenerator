import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        marginTop: "5rem",
        width: "80%",
        justifyContent: "center"
    },
    infoRoot: {
        textAlign: "center",
        minWidth: "100%",
    },
    info: {
        fontSize: "1.5rem",
    },
    authorRoot: {
        textAlign: "center",
        fontSize: "1.3rem",
        minWidth: "100%",
        height:"100px"
    },
    author: {
        fontSize: "1.3rem",
        minWidth: "100%",
        height:"8rem"
    }
}))