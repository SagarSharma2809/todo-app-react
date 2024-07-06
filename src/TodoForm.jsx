import { ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';

import { useState } from "react";

export default function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (text != "") {
            addTodo(text);
        }
        setText("");

    }

    return (
        <ListItem>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle add todo"
                                edge="end"
                                type="submit"
                            >
                                {<CreateIcon />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </form>

        </ListItem>
    )
}