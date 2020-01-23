import React, { useState } from 'react'
import { TextField, InputAdornment, FormGroup, Button, FormControlLabel, Checkbox } from '@material-ui/core'

export default function (props) {
    const [amount, setAmount] = useState(0)
    const [quota, setQuota] = useState(2)
    const [interest, setInterest] = useState(2)
    const [iMode, setIntMode] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSubmit({ amount, quota, interest: !iMode ? parseFloat(interest) / 100 : (parseFloat(interest) / 100) / 12 })
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <TextField
                    id='amount-input'
                    autoFocus
                    label='Monto Total'
                    type='number'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    inputProps={{
                        min: 0,
                        startAdorndment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    id='quota-quantity-input'
                    label='Numero de Cuotas'
                    type='number'
                    value={quota}
                    onChange={e => setQuota(e.target.value)}
                    inputProps={{
                        min: 2
                    }}
                />
                <FormGroup row>
                    <TextField
                        id='quota-quantity-input'
                        label='Interés'
                        type='number'
                        value={interest}
                        onChange={e => setInterest(e.target.value)}
                        inputProps={{
                            min: 0,
                            step: 0.01
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={iMode}
                                onChange={() => setIntMode(!iMode)}
                                value='imode'
                                color="primary"
                            />
                        }
                        label="Anual"
                    />
                </FormGroup>
            </FormGroup>
            <Button type='submit'>Calcular</Button>
        </form>
    )
}


