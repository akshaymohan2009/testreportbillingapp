import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MenuItem from '@mui/material/MenuItem';
import { Button, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PdfViewer from '../reactPdf/PDFViewer';

const initialState = {
    WBC: {
        testName: "Total Leukocyte Count (WBC)",
        testInterval: '11-12',
        testUnit: '10^g/L',
        lowValue: 6.00,
        highValue: 17.00,
    },
    differtial: {
        differtial: 'Y'
    },
    Neutrophils: {
        testName: "Neutrophils",
        testUnit: '10^g/L',
        lowValue: 3.20,
        highValue: 12.30,
    },
    Lymophocytes: {
        testName: "Lymphocytes",
        testUnit: '10^g/L',
        lowValue: 0.80,
        highValue: 5.30,
    },
    Monocytes: {
        testName: "Monocytes",
        testUnit: '10^g/L',
        lowValue: 0.00,
        highValue: 1.50,
    },
    Eosinophils: {
        testName: "Eosinophils",
        testUnit: '10^g/L',
        lowValue: 0.00,
        highValue: 1.50,
    },
    Neu: {
        testName: "Neu %",
        lowValue: 0.430,
        highValue: 0.850,
    },
    Lym: {
        testName: "Lym %",
        lowValue: 0.090,
        highValue: 0.400,
    },
    Mon: {
        testName: "Mon %",
        lowValue: 0.000,
        highValue: 0.100,
    },
    Eos: {
        testName: "Eos %",
        lowValue: 0.000,
        highValue: 0.100
    },
    RBC: {
        testName: "Red Blood Cell (RBC)",
        testInterval: '10-40',
        testUnit: '10^g/L',
        lowValue: 5.10,
        highValue: 8.50,
    },
    Hemoglobin: {
        testName: "Hemoglobin (HGB)",
        testUnit: 'g/L',
        lowValue: 110,
        highValue: 195,
    },
    Hct: {
        testName: "Hematocrit value (HCT)",
        lowValue: 0.325,
        highValue: 0.580,
    },
    Mcv: {
        testName: "Mean Corpusclar Volume (MCV)",
        testUnit: 'fL',
        lowValue: 60.0,
        highValue: 76.0,
    },
    Mch: {
        testName: "Mean Cell Heamoglobin (MCH)",
        testUnit: 'pg',
        lowValue: 20.0,
        highValue: 27.0,
    },
    Mchc: {
        testName: "Mean cell Haemoglobin,CON (MCHC)",
        testUnit: 'g/L',
        lowValue: 300,
        highValue: 380,
    },
    RDWCV: {
        testName: "RDW - CV",
        lowValue: 0.108,
        highValue: 0.172,
    },
    RDWSD: {
        testName: "RDW - SD",
        testUnit: 'FL',
        lowValue: 29.1,
        highValue: 46.3,
    },
    Platelet: {
        testName: "Platelet Count",
        testUnit: '10^9/L',
        lowValue: 117,
        highValue: 490,
    },
    MPV: {
        testName: "MPV",
        testUnit: 'fL',
        lowValue: 7.6,
        highValue: 14.1,
    },
    PDW: {
        testName: "PDW",
        testUnit: 'g/L',
        lowValue: 12.0,
        highValue: 17.5,
    },
    PCT: {
        testName: "PCT",
        testUnit: 'mL/L',
        lowValue: 0.90,
        highValue: 5.20,
    },
    PLCC: {
        testName: "P - LCC",
        testUnit: '10^9/L',
        lowValue: 25,
        highValue: 148,
    },
    PLCR: {
        testName: "P - LCR",
        lowValue: 0.115,
        highValue: 0.550,
    },


};
const testResultReducer = (state, action) => {
    switch (action.type) {
        case 'RBC_RESULT':
            state["RBC"]["testValue"] = action.payload.value
            return { ...state };
        case 'WBC_RESULT':
            state["WBC"]["testValue"] = action.payload.value
            return { ...state };
        case "NEUTROPHILS_RESULT":
            state["Neutrophils"]["testValue"] = action.payload.value
            return { ...state };
        case "LYMPHOCYTES_RESULT":
            state["Lymophocytes"]["testValue"] = action.payload.value
            return { ...state };
        case "MONOCYTES_RESULT":
            state["Monocytes"]["testValue"] = action.payload.value
            return { ...state };
        case "EOSINOPHILS_RESULT":
            state["Eosinophils"]["testValue"] = action.payload.value
            return { ...state };
        case "NEU_RESULT":
            state["Neu"]["testValue"] = action.payload.value
            return { ...state };
        case "LYM_RESULT":
            state["Lym"]["testValue"] = action.payload.value
            return { ...state };
        case "MON_RESULT":
            state["Mon"]["testValue"] = action.payload.value
            return { ...state };
        case "EOS_RESULT":
            state["Eos"]["testValue"] = action.payload.value
            return { ...state };
        case "Hemoglobin_RESULT":
            state["Hemoglobin"]["testValue"] = action.payload.value
            return { ...state };
        case "HCT_RESULT":
            state["Hct"]["testValue"] = action.payload.value
            return { ...state };
        case "MCH_RESULT":
            state["Mch"]["testValue"] = action.payload.value
            return { ...state };
        case "MCHC_RESULT":
            state["Mchc"]["testValue"] = action.payload.value
            return { ...state };
        case "MCV_RESULT":
            state["Mcv"]["testValue"] = action.payload.value
            return { ...state };
        case "RDWCV_RESULT":
            state["RDWCV"]["testValue"] = action.payload.value
            return { ...state };
        case "RDWSD_RESULT":
            state["RDWSD"]["testValue"] = action.payload.value
            return { ...state };
        case "Platelet_RESULT":
            state["Platelet"]["testValue"] = action.payload.value
            return { ...state };
        case "MPV_RESULT":
            state["MPV"]["testValue"] = action.payload.value
            return { ...state };
        case "PDW_RESULT":
            state["PDW"]["testValue"] = action.payload.value
            return { ...state };
        case "PCT_RESULT":
            state["PCT"]["testValue"] = action.payload.value
            return { ...state };
        case "PLCC_RESULT":
            state["PLCC"]["testValue"] = action.payload.value
            return { ...state };
        case "PLCR_RESULT":
            state["PLCR"]["testValue"] = action.payload.value
            return { ...state };

        default:
            return state;
    }
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function createData(Test, Result, rangeInterval, rangeGraph) {
    return { Test, Result, rangeInterval, rangeGraph };
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddressForm() {
    const [formData, setFormData] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [state, dispatch] = React.useReducer(testResultReducer, initialState);
    console.log(state)
    const rows = [
        createData('WBC', <TextField name="wbcTest" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "WBC_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="6.00-17.00" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Neutrophils', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "NEUTROPHILS_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Lymphocytes', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "LYMPHOCYTES_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Monocytes', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "MONOCYTES_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Eosionphils', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "EOSINOPHILS_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('neu %', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "NEU_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Lym %', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "LYM_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Mon %', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "MON_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Eos %', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "EOS_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('RBC', <TextField name="rbcTest" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "RBC_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="5.10-8.5" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Hemoglobin (HGB)', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "Hemoglobin_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Hemotocrit Value (HCT)', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "HCT_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Mean Corpuscular Volume (MCV)', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "MCV_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Mean Cell Haemoglobin (MCH)', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "MCH_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Mean cell Haemoglobin, CON (MCHC)', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "MCHC_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('RDW - CV ', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "RDWCV_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('RDW - SD', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "RDWSD_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Platelet Count', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "Platelet_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('MPV', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "MPV_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('PDW', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "PDW_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('PCT', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "PCT_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('P - LCC', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "PLCC_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('P - LCR', <TextField name="neutrophils" id="outlined-basic" onChange={(e) => { resultChangeHander(e, "PLCR_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="3.20-12.30" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),

    ];
    function resultChangeHander(event, test) {
        dispatch({ type: test, payload: { name: event.target.name, value: event.target.value } })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    };
    const handleChangeDateTime = (name, value) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Patient Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="ClientName"
                        name="ClientName"
                        label="Client Name"
                        value={formData.ClientName}
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="PatientName"
                        name="PatientName"
                        label="Patient Name"
                        value={formData.PatientName}
                        autoComplete="given-name"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="Age"
                        name="Age"
                        label="Age"
                        value={formData.Age}
                        autoComplete="family-name"
                        variant="standard"
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                        <Select
                            labelId="sex"
                            name="sex"
                            id="sex"
                            label="sex"
                            fullWidth
                            onChange={handleChange}
                        >
                            <MenuItem value='Male'>Male</MenuItem>
                            <MenuItem value='Female'>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date Time"
                            name="registeredon"
                            value={formData.registeredon}
                            fullWidth
                            format="DD/MM/YYYY h:mm A"
                            defaultValue={dayjs()}
                            onChange={(newValue) => handleChangeDateTime("registeredon", newValue)}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="Weight"
                        name="Weight"
                        label="Weight"
                        fullWidth
                        value={formData.Weight}
                        autoComplete="family-name"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                        required
                        id="Breed"
                        name="Breed"
                        label="Breed"
                        fullWidth
                        value={formData.Breed}
                        autoComplete="family-name"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="Referedby"
                        name="referedby"
                        value={formData.referedby}
                        label="Refered By"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, marginTop:'20px' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Test</StyledTableCell>
                                <StyledTableCell align="center">Result</StyledTableCell>
                                <StyledTableCell align="center">Reference Interval</StyledTableCell>
                                <StyledTableCell align="center">Reference Range</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        {row.Test}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.Result}</StyledTableCell>
                                    <StyledTableCell align="center">{row.rangeInterval}</StyledTableCell>
                                    <StyledTableCell align="center">{row.rangeGraph}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        sx={{ mt: 3, ml: 1 }}
                        onClick={handleClickOpen}
                    >
                        Download PDF
                    </Button>
                </Grid>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <PdfViewer formData={formData} testResult={state} />
                </Dialog>
            </Grid>
        </React.Fragment>
    );
}