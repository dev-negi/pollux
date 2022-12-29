import React, {useState} from 'react'

import { InputTypes } from '../types'

const Input = React.forwardRef((props: InputTypes, ref: any)) => {
    const [type, setType] = useState('text');

    return (
        <label>
            {}

        </label>
    )
}
