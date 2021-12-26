import { Card } from "@material-ui/core"
import { CardHeader } from "@material-ui/core"
import { CardContent } from "@material-ui/core"
import { Typography } from "@material-ui/core"

export const QuotesInfo = (props) => {
    const {data} = props

    const author = data.quoteAuthor
    
    const genre = data.quoteGenre

    const text = data.quoteText

    return (
        <Card>
            <CardHeader
             title={author}
             subheader={genre}
            />
            <CardContent>
                <Typography>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}