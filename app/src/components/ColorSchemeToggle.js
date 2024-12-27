import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useColorScheme } from '@mui/joy/styles';

const ColorSchemeToggle = () => {
    const { mode, setMode } = useColorScheme();
    return (
        <IconButton
            size="lg"
            variant="soft"
            color="neutral"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            sx={{
                zIndex: 999,
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
};

export default ColorSchemeToggle;
