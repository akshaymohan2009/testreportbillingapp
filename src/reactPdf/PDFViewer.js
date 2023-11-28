
import { height } from '@mui/system';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
const PdfViewer = ({formData,testResult}) => {
    return (
        <PDFViewer  width='810px' height='700px'>
            <MyDocument formData={formData} testResult={testResult}/>
        </PDFViewer >

    )
}
export default PdfViewer