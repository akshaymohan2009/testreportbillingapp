
import { height } from '@mui/system';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
const PdfViewer = ({formData,testResult,liverState,testWanted,kidneyState}) => {
    return (
        <PDFViewer  width='810px' height='700px'>
            <MyDocument formData={formData} testResult={testResult} testWanted={testWanted} kidneyState={kidneyState} liverState={liverState}/>
        </PDFViewer >

    )
}
export default PdfViewer