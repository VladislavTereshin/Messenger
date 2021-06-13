import { withStyles, Theme, TextField } from "@material-ui/core";

export const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            },
            '&:hover': {
                '& fildset': {
                    borderColor: 'transparent',

                },

            },
        },
        '& .MuiOutlinedInput-input': {
            padding: 0,
        },
        '& .MuiInputBase-input': {
            margin: '10px',
        },
    },
}))(TextField);
