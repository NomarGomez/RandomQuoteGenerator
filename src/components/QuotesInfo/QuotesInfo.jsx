import { Box } from "@material-ui/core"
import { CardHeader } from "@material-ui/core"
import { CardContent } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import {Button} from "@material-ui/core"


import {useStyles} from "./QuotesInfo.styles"

export const QuotesInfo = (props) => {
    const {data} = props

    const author = data.quoteAuthor
    
    const genre = data.quoteGenre

    const text = data.quoteText

    const classes = useStyles()

    return (
        <Box className={classes.card}>
            <CardContent className={classes.infoRoot}>
                <Typography className={classes.info}>
                    " {text} "
                </Typography>
            </CardContent>
            <CardHeader
             className={classes.authorRoot}
             title={<Button className={classes.author}>- {author}</Button>}
             subheader={genre}
            />
        </Box>
    )
}