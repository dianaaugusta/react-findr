import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

function FindrInput(props){
    const [value, setValue] = useState('');
    return(
        <>
        <InputText tooltip={props.tooltip} value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    );
}
export default FindrInput;