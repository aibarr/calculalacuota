import React, { useState } from 'react'
import { TextField, InputAdornment, FormGroup } from '@material-ui/core'

export default function (props) {
    const [amount, setAmount] = useState(0)
    const [quota, setQuota] = useState(2)

    return (
        <form>
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
            </FormGroup>
        </form>
    )
}


