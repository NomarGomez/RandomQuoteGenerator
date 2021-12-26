import { Button } from "@material-ui/core"
import { Icon } from "@material-ui/core"
import { Box } from "@material-ui/core"
import { useStyles } from "./ButtonGenerateQuote.styles"

export const ButtonGenerateQuote = (props) => {
    const icon = <Icon>autorenew</Icon>
    const classes = useStyles()
    const { click } = props
    return (
        <Button endIcon={icon} className={classes.root} onClick={click}>
            Random
        </Button>
    )
}

