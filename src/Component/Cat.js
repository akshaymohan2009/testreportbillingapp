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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

const kidneyInitialState = {
    ["SERUM_CREATININE"]: {
        testName: "Serum Creatinine",
        testInterval: '0.5-1.7',
        testUnit: 'mg/dl',
        lowValue: 0.5,
        highValue: 1.7,
    },
    ["URIC_ACID"]: {
        testName: "Uric Acid",
        testInterval: '0-1',
        testUnit: 'mg/dl',
        lowValue: 0,
        highValue: 1,
    },
    ["BLOOD_UREA_NITROGEN"]: {
        testName: "Blood Urea Nitrogen",
        testInterval: '8-28',
        testUnit: 'mg/dl',
        lowValue: 8,
        highValue: 28,
    },
    ["BUN_CREATININE_RATIO"]: {
        testName: "Bun Creatinine ratio",
        testInterval: '8-28',
        testUnit: 'mg/dl',
        lowValue: 8,
        highValue: 28,
    },
}
const kidneyChangeHander = (kidneyState, action) => {
    switch (action.type) {
        case 'SERUM_CREATININE':
            kidneyState["SERUM_CREATININE"]["testValue"] = action.payload.value
            return { ...kidneyState };
        case 'URIC_ACID':
            kidneyState["URIC_ACID"]["testValue"] = action.payload.value
            return { ...kidneyState };
        case "BLOOD_UREA_NITROGEN":
            kidneyState["BLOOD_UREA_NITROGEN"]["testValue"] = action.payload.value
            return { ...kidneyState };
        case "BUN_CREATININE_RATIO":
            kidneyState["BUN_CREATININE_RATIO"]["testValue"] = action.payload.value
            return { ...kidneyState };
        default:
            return kidneyState
    }
}

const liverChangeHander = (liverState, action) => {
    switch (action.type) {
        case 'TBILIRUBIN_RESULT':
            liverState["TBILIRUBIN_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case 'DBILIRUBIN_RESULT':
            liverState["DBILIRUBIN_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "SGOT_RESULT":
            liverState["SGOT_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "SGPT_RESULT":
            liverState["SGPT_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "ALK_PHOS_RESULT":
            liverState["ALK_PHOS_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "TOLPROTEIN_RESULT":
            liverState["TOLPROTEIN_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "ALBUMIN_RESULT":
            liverState["ALBUMIN_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "GLOBULIN_RESULT":
            liverState["GLOBULIN_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        case "AGRATIO_RESULT":
            liverState["AGRATIO_RESULT"]["testValue"] = action.payload.value
            return { ...liverState };
        default:
            return liverState;
    }
}
const LiverInitialState = {
    ["TBILIRUBIN_RESULT"]: {
        testName: "Total Bilirubin",
        testInterval: '0-0.2',
        testUnit: 'mg/dl',
        lowValue: 0,
        highValue: 0.2,
    },
    ["DBILIRUBIN_RESULT"]: {
        testName: "Direct Bilirubin",
        testInterval: '0-0.1',
        testUnit: 'mg/dl',
        lowValue: 0,
        highValue: 0.1,
    },
    SGOT_RESULT: {
        testName: "SGOT (AST)",
        testInterval: '13-15',
        testUnit: 'IU/L',
        lowValue: 13,
        highValue: 15,
    },
    SGPT_RESULT: {
        testName: "SGPT (ALT)",
        testInterval: '10-109',
        testUnit: 'IU/L',
        lowValue: 10,
        highValue: 109,
    },
    ["ALK_PHOS_RESULT"]: {
        testName: "Alkaline Phospate",
        testInterval: '1-114',
        testUnit: 'IU/L',
        lowValue: 1,
        highValue: 114,
    },
    ["TOLPROTEIN_RESULT"]: {
        testName: "Total Protein",
        testInterval: '5.4-7.5',
        testUnit: 'gm/dl',
        lowValue: 5.4,
        highValue: 7.5,
    },
    ["ALBUMIN_RESULT"]: {
        testName: "Albumin",
        testInterval: '2.3-3.1',
        testUnit: 'g/dl',
        lowValue: 2.3,
        highValue: 3.1,
    },
    ["GLOBULIN_RESULT"]: {
        testName: "Globulin",
        testInterval: '2.5-4.5',
        testUnit: 'g/dl',
        lowValue: 2.5,
        highValue: 4.5,
    },
    ["AGRATIO_RESULT"]: {
        testName: "A/G Ratio",
        testInterval: '0.8-2.0',
        testUnit: '-',
        lowValue: 0.8,
        highValue: 2.0,
    },
}


const initialState = {
    WBC: {
        testName: "Total Leukocyte Count (WBC)",
        testInterval: '11-12',
        testUnit: '10^g/L',
        lowValue: 5.50,
        highValue: 19.50,
    },
    differtial: {
        differtial: 'Y'
    },
    Neutrophils: {
        testName: "Neutrophils",
        testUnit: '10^g/L',
        lowValue: 1.80,
        highValue: 12.60,
    },
    Lymophocytes: {
        testName: "Lymphocytes",
        testUnit: '10^g/L',
        lowValue: 0.80,
        highValue: 7.90,
    },
    Monocytes: {
        testName: "Monocytes",
        testUnit: '10^g/L',
        lowValue: 0.00,
        highValue: 1.80,
    },
    Eosinophils: {
        testName: "Eosinophils",
        testUnit: '10^g/L',
        lowValue: 0.00,
        highValue: 1.90,
    },
    Neu: {
        testName: "Neu %",
        lowValue: 0.300,
        highValue: 0.85,
    },
    Lym: {
        testName: "Lym %",
        lowValue: 0.1,
        highValue: 0.53,
    },
    Mon: {
        testName: "Mon %",
        lowValue: 0.000,
        highValue: 0.100,
    },
    Eos: {
        testName: "Eos %",
        lowValue: 0.000,
        highValue: 0.11
    },
    RBC: {
        testName: "Red Blood Cell (RBC)",
        testInterval: '10-40',
        testUnit: '10^g/L',
        lowValue: 5.10,
        highValue: 11.20,
    },
    Hemoglobin: {
        testName: "Hemoglobin (HGB)",
        testUnit: 'g/L',
        lowValue: 85,
        highValue: 162,
    },
    Hct: {
        testName: "Hematocrit value (HCT)",
        lowValue: 0.26,
        highValue: 0.51,
    },
    Mcv: {
        testName: "Mean Corpusclar Volume (MCV)",
        testUnit: 'fL',
        lowValue: 35.0,
        highValue: 54.0,
    },
    Mch: {
        testName: "Mean Cell Heamoglobin (MCH)",
        testUnit: 'pg',
        lowValue: 11.8,
        highValue: 18.0,
    },
    Mchc: {
        testName: "Mean cell Haemoglobin,CON (MCHC)",
        testUnit: 'g/L',
        lowValue: 300,
        highValue: 380,
    },
    RDWCV: {
        testName: "RDW - CV",
        lowValue: 0.132,
        highValue: 0.256,
    },
    RDWSD: {
        testName: "RDW - SD",
        testUnit: 'FL',
        lowValue: 23.7,
        highValue: 45.6,
    },
    Platelet: {
        testName: "Platelet Count",
        testUnit: '10^9/L',
        lowValue: 100,
        highValue: 518,
    },
    MPV: {
        testName: "MPV",
        testUnit: 'fL',
        lowValue: 8.2,
        highValue: 16.3,
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
        highValue: 7.0,
    }

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

export default function Cat() {
    const [formData, setFormData] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [testWanted, setTestWanted] = React.useState('');
    const [state, dispatch] = React.useReducer(testResultReducer, initialState);
    const [liverState, LiverDispatch] = React.useReducer(liverChangeHander, LiverInitialState);
    const [KidneyState, kidneyDispatch] = React.useReducer(kidneyChangeHander, kidneyInitialState);
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

    ];
    const liverRow = [
        createData('Total Bilirubin', <TextField name="tbilirubin" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "TBILIRUBIN_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="0-0.2" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Direct Bilirubin', <TextField name="dbilirubin" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "DBILIRUBIN_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="0-0.1" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('SGOT (AST)', <TextField name="sgot" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "SGOT_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="13-15" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('SGPT (ALT)', <TextField name="sgpt" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "SGPT_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="10-109" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Alkaline Phosphate', <TextField name="alkalinephosphate" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "ALK_PHOS_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="1-114" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Total Protein', <TextField name="totalprotein" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "TOLPROTEIN_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="5.4-7.5" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Albumin', <TextField name="albumin" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "ALBUMIN_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="2.3-3.1" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Globulin', <TextField name="globulin" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "GLOBULIN_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="2.5-4.5" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('A/G Ratio', <TextField name="agratio" id="outlined-basic" onChange={(e) => { resultLiverChangeHander(e, "AGRATIO_RESULT") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="0.8-2.0" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
    ]
    const kidneyRow = [
        createData('Serum Creatinine', <TextField name="S_CREATININE" id="outlined-basic" onChange={(e) => { resultKidneyChangeHander(e, "SERUM_CREATININE") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="0-0.2" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Uric Acid', <TextField name="U_ACID" id="outlined-basic" onChange={(e) => { resultKidneyChangeHander(e, "URIC_ACID") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="0-0.1" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Blood Urea Nitrogen', <TextField name="B_U_NITROGEN" id="outlined-basic" onChange={(e) => { resultKidneyChangeHander(e, "BLOOD_UREA_NITROGEN") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="13-15" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),
        createData('Bun Creatinine Ratio', <TextField name="B_C_RATIO" id="outlined-basic" onChange={(e) => { resultKidneyChangeHander(e, "BUN_CREATININE_RATIO") }} label="Outlined" variant="outlined" />, <TextField id="outlined-basic" defaultValue="13-15" label="Outlined" variant="outlined" />, <FormControlLabel control={<Checkbox />} label="Label" />),

    ]

    function resultLiverChangeHander(event, test) {
        LiverDispatch({ type: test, payload: { name: event.target.name, value: event.target.value } })
    }
    function resultKidneyChangeHander(event, test) {
        kidneyDispatch({ type: test, payload: { name: event.target.name, value: event.target.value } })
    }
    function resultChangeHander(event, test) {
        dispatch({ type: test, payload: { name: event.target.name, value: event.target.value } })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function checkboxChangeHandler(e) {
        setTestWanted((prevState) => {
            return { ...prevState, [e.target.value]: e.target.checked }
        })
    }
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
                Cat Details
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
                <Grid item xs={12} sm={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Label placement</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Complete Blood Count"
                                control={<Checkbox color="success" />}
                                label="Complete Blood Count"
                                labelPlacement="end"
                                onChange={checkboxChangeHandler}
                            />
                            <FormControlLabel
                                value="liver function test"
                                control={<Checkbox color="success" />}
                                label="Liver Function Test"
                                labelPlacement="end"
                                onChange={checkboxChangeHandler}

                            />
                            <FormControlLabel
                                value="Renal function test"
                                control={<Checkbox color="success" />}
                                label="Renal Function Test"
                                labelPlacement="end"
                                onChange={checkboxChangeHandler}

                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                {testWanted["Complete Blood Count"] != undefined && testWanted["Complete Blood Count"] == true && <Accordion slotProps={{ transition: { unmountOnExit: true } }} sx={{ minWidth: 700, marginTop: '20px' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"

                    >
                        <Typography component="span">Complete Blood Count</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700, marginTop: '20px' }} aria-label="customized table">
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
                        </Typography>
                    </AccordionDetails>
                </Accordion>}
                {testWanted["liver function test"] != undefined && testWanted["liver function test"] == true && <Accordion slotProps={{ transition: { unmountOnExit: true } }} sx={{ minWidth: 700, marginTop: '20px' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"

                    >
                        <Typography component="span">Liver Function Test</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700, marginTop: '20px' }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">Test</StyledTableCell>
                                            <StyledTableCell align="center">Result</StyledTableCell>
                                            <StyledTableCell align="center">Reference Interval</StyledTableCell>
                                            <StyledTableCell align="center">Reference Range</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {liverRow.map((row) => (
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
                        </Typography>
                    </AccordionDetails>
                </Accordion>}
                {testWanted["Renal function test"] != undefined && testWanted["Renal function test"] == true && <Accordion slotProps={{ transition: { unmountOnExit: true } }} sx={{ minWidth: 700, marginTop: '20px' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"

                    >
                        <Typography component="span">Renal Function Test</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700, marginTop: '20px' }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">Test</StyledTableCell>
                                            <StyledTableCell align="center">Result</StyledTableCell>
                                            <StyledTableCell align="center">Reference Interval</StyledTableCell>
                                            <StyledTableCell align="center">Reference Range</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {kidneyRow.map((row) => (
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
                        </Typography>
                    </AccordionDetails>
                </Accordion>}
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
                    <PdfViewer testWanted={testWanted} formData={formData} testResult={state} liverState={liverState} kidneyState={KidneyState}/>
                </Dialog>
            </Grid>
        </React.Fragment>
    );
}