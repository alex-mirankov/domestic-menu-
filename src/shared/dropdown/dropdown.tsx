import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export interface DropdownProps {
    list: { key: string; label: string }[];
    label: string;
    value?: string[];
    onSelect?: (value: string[], key?: string) => void;
}

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function Dropdown({ list, label, onSelect, value }: DropdownProps) {
    const [resultValue, setResultValue] = React.useState<string[]>(value || []);

    const handleChange = (event: SelectChangeEvent<typeof resultValue>) => {
        const {
            target: { value },
        } = event;
        setResultValue(value as string[]);
        if (onSelect) {
            onSelect(value as string[]);
        }
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                    {label}
                </InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={resultValue}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => (
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {list.map((name) => (
                        <MenuItem key={name.key} value={name.label}>
                            <Checkbox
                                checked={resultValue.indexOf(name.label) > -1}
                            />
                            <ListItemText primary={name.label} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Dropdown;
