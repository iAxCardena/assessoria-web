import { Autocomplete, Box, TextField } from '@mui/material';
import ddiList from '../../assets/json/ddi.json';

export default function ListaSuspensa({label = "", selectId, itens, isDDISelect}) {
    const handleSelectedItemChange = (event) => {
        console.log(event)
    }

    if(isDDISelect) {
        return(
            <Autocomplete
                id={selectId}
                sx={{'& input': {
                    height: '8px',
                }}}
                defaultValue={"55"}
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
                        <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                        />
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
                    onChange={(event) => handleSelectedItemChange(event)}
                    label={label}
                    renderInput={(params) => <TextField label={label} key={params.value} {...params} />}
                />
            </>
        )
    }
}