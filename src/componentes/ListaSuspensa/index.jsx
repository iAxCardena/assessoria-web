import Select from "react-select"
import * as Flags from "country-flag-icons/react/3x2"

export default function ListaSuspensa({label = "", itens, isDDISelect}) {
    const Flag = Flags['br'.toUpperCase()];

    const options = [
        { value: '+55', label: '+55 - Brasil', country: 'br' },
        { value: '+1', label: '+1 - Estados Unidos', country: 'us' },
        { value: '+49', label: '+49 - Alemanha', country: 'uk' }
    ]

    return(
        <>
        {/* <Flag/> */}
        <Select
            isSearchable={true}
            isClearable={true}
            label={label}
            options={itens}
        />
        </>
    )
}