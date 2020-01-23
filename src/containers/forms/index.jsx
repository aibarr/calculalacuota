import React from 'react'
import { Paper } from '@material-ui/core'
import QuotaForm from './quotaForm'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    formPaper: {
        padding: '10%'
    }
})

export default function (props) {
    const classes = useStyles()
    return (
        <Paper className={classes.formPaper}>
            <QuotaForm onSubmit={props.onSubmit}/>
        </Paper>
    )
}