import { Autocomplete, Box, TextField } from '@mui/material';
import ddiList from '../../assets/json/ddi.json';

export default function ListaSuspensa({label = "", value, onChange, selectId, itens, isDDISelect}) {
    const handleSelectedDdiChange = (event) => {
        try {
            onChange(event.target.lastChild.data)
        } catch (error) {}
    }
    const handleSelectedItemChange = (event) => {
        onChange(event.target.textContent)
    }

    if(isDDISelect) {
        return(
            <Autocomplete
                id={selectId}
                sx={{'& input': {
                    height: '8px',
                }}}
                value={value !== undefined ? ("+"+value) : ""}
                onChange={(event) => handleSelectedDdiChange(event)}
                options={ddiList}
                autoHighlight
                renderOption={(props, option) => {
                    const { key, ...optionProps } = props;
                    return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                    );
                }}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label={label}
                    slotProps={{
                        htmlInput: {
                        ...params.inputProps,
                        autoComplete: 'new-password',
                        },
                    }}
                    />
                )}
            />
        )
    } else {
        return(
            <>
                <Autocomplete
                    disablePortal
                    sx={{'& input': {
                        height: '8px',
                    }}}
                    options={itens}
                    value={value !== undefined ? value : null}
                    onChange={(event) => handleSelectedItemChange(event)}
                    label={label}
                    renderInput={(params) => <TextField label={label} key={params.value} {...params} />}
                />
            </>
        )
    }
}