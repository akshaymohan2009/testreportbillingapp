import React from 'react';
import ReactPDF, { Page, Text, Image, Font, View, Document, StyleSheet } from '@react-pdf/renderer';
import logo from '../assets/WhatsApp_Image_2023-11-05_at_11.06.09_PM-removebg-preview.png';
import addresspng from '../assets/icons8-address-64.png';
import phoneImage from '../assets/icons8-phone-50.png';
import RobotoSlabThin from '../assets/font/Roboto_slab/RobotoSlab-Light.ttf';
import RobotoSlabbold from '../assets/font/Roboto_slab/RobotoSlab-Bold.ttf';
import dayjs from 'dayjs';

Font.register({
  family: 'RobotoSlab',
  fonts: [
    { src: RobotoSlabThin, fontWeight: 200 },
    { src: RobotoSlabbold, fontWeight: 600 }
  ]
});

const styles = StyleSheet.create({
  page: { padding: 10 },
  container: {
    display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',
    fontFamily: 'RobotoSlab', position: 'relative'
  },
  leftContent: { fontSize: 13, lineHeight: 1.4, marginLeft: 'auto' },
  rightContent: { marginRight: 'auto', width: '200', height: '150', objectFit: 'contain' },
  boldText: { fontFamily: 'RobotoSlab', fontWeight: 700 },
  addressstyle: { position: 'absolute', top: 24, left: 390, width: '25px', height: '25px' },
  phonestyle: { position: 'absolute', top: 100, left: 390, width: '25px', height: '25px' },
  detailscontainer: {
    width: '100%', border: '2px solid black',
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
    flexWrap: 'wrap', padding: '3px', fontSize: '12px'
  },
  detailtext: { width: '48%', marginBottom: '2px', fontFamily: 'RobotoSlab', fontWeight: 700 },
  detailAns: { fontFamily: 'RobotoSlab', fontWeight: 300 },
  reportText: { textAlign: 'center', marginTop: '10px', fontSize: 16, fontFamily: 'RobotoSlab', fontWeight: 700 },
  testcontainer: { marginTop: '2px', display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'RobotoSlab', fontWeight: 700 },
  title: { fontSize: 14, fontWeight: 'bold', width: '29%' },
  underline: { borderBottomColor: 'black', borderBottomWidth: 2 },
  testvaluecontainer: { marginTop: '2px', display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'RobotoSlab' },
  testvaluecontainerlow: { marginTop: '2px', display: 'flex', flexDirection: 'row', alignItems: 'center', color: "blue", fontFamily: 'RobotoSlab' },
  testvaluecontainerhigh: { marginTop: '2px', display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'red', fontFamily: 'RobotoSlab' },
  value: { fontSize: 11, fontWeight: 'bold' },
  pageNumber: { position: 'absolute', fontSize: 12, bottom: 30, left: 0, right: 0, textAlign: 'center', color: 'grey' },
});


// ✅ Reusable Header + Patient Details
const HeaderAndPatientDetails = ({ formData }) => (
  <>
    <View style={styles.container}>
      <Image style={styles.rightContent} src={logo} />
      <Image style={styles.addressstyle} src={addresspng} />
      <Image style={styles.phonestyle} src={phoneImage} />
      <Text style={styles.leftContent}>
        Near <Text style={styles.boldText}>Ponoor 19</Text>, Bus Stop, {"\n"}
        Balussery, Main Road,{"\n"} Kozhikode,673573{"\n"}{"\n"}{" "}
        <Text style={styles.boldText}>+91 963 293 4315</Text>
      </Text>
    </View>

    <View style={styles.detailscontainer}>
      <Text style={styles.detailtext}>
        Patient Name:<Text style={styles.detailAns}> {formData.ClientName}</Text>
      </Text>
      <Text style={styles.detailtext}>
        Patient Name:<Text style={styles.detailAns}> {formData.PatientName}</Text>
      </Text>
      <Text style={styles.detailtext}>
        Date:<Text style={styles.detailAns}> {dayjs(formData.registeredon).format("DD/MM/YYYY h:mm A")}</Text>
      </Text>
      <Text style={styles.detailtext}>
        Age / Sex:<Text style={styles.detailAns}> {formData.Age} / {formData.sex}</Text>
      </Text>
      <Text style={styles.detailtext}>
        Weight:<Text style={styles.detailAns}> {formData.Weight}</Text>
      </Text>
      <Text style={styles.detailtext}>
        Referred by:<Text style={styles.detailAns}> {formData.referedby}</Text>
      </Text>
      <Text style={styles.detailtext}>
        Breed:<Text style={styles.detailAns}> {formData.Breed}</Text>
      </Text>
    </View>
  </>
);


// ✅ Main Document
const MyDocument = ({ formData, testResult, liverState, testWanted, kidneyState }) => {
  const showCBC = testWanted["Complete Blood Count"];
  const showLFT = testWanted["liver function test"];
  const showRFT = testWanted["Renal function test"]

  // Case: If no tests are selected
  if (!showCBC && !showLFT && !showRFT) {
    return (
      <Document>
        <Page style={styles.page}>
          <HeaderAndPatientDetails formData={formData} />
          <View style={{ marginTop: 40, textAlign: "center" }}>
            <Text style={{ fontSize: 16, fontFamily: 'RobotoSlab', fontWeight: 'bold' }}>
              No test selected
            </Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      {/* CBC Page (if selected) */}
      {showCBC && (
        <Page key="cbc" style={styles.page}>
          <HeaderAndPatientDetails formData={formData} />

          <Text style={styles.reportText}>HAEMATOLOGY</Text>
          <Text style={styles.reportText}>COMPLETE BLOOD COUNT (CBC)</Text>

          <View style={styles.testcontainer}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: '40%' }}>Test</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Result</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Unit</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Ref. Ranges</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}></Text>
          </View>

          <View style={styles.underline}></View>

          {Object.keys(testResult).map((key) => (
            <View
              key={key}
              style={
                testResult[key].testValue > testResult[key].highValue
                  ? styles.testvaluecontainerhigh
                  : testResult[key].testValue < testResult[key].lowValue
                    ? styles.testvaluecontainerlow
                    : styles.testvaluecontainer
              }
            >
              {testResult[key].differtial === "Y" ? (
                <Text style={{ fontSize: 12, fontWeight: 'bold', width: '40%' }}>
                  Differential Leukocyte Count
                </Text>
              ) : <Text></Text>}

              <Text style={{ fontSize: 12, fontWeight: '400', width: '40%' }}>{testResult[key].testName}</Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>{testResult[key].testValue}</Text>
              <Text style={{ fontSize: 12, fontWeight: 'normal', width: '15%' }}>{testResult[key].testUnit}</Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>
                {testResult[key].lowValue} - {testResult[key].highValue}
              </Text>
              {testResult[key].testValue > testResult[key].highValue ? (
                <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>HIGH</Text>
              ) : testResult[key].testValue < testResult[key].lowValue ? (
                <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>LOW</Text>
              ) : <Text style={styles.value}></Text>}
            </View>
          ))}

          <View style={styles.underline}></View>
          <View style={{ textAlign: "center", fontSize: 14, fontFamily: 'RobotoSlab', fontWeight: 'bold' }}>
            <Text>----End of Result----</Text>
          </View>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
      )}

      {/* LFT Page (if selected) */}
      {/* LFT + RFT Page (combined) */}
      {(showLFT || showRFT) && (
        <Page key="lft_rft" style={styles.page}>
          {/* Show header only if CBC is not present (so this is the first page) */}
          {!showCBC && <HeaderAndPatientDetails formData={formData} />}

          {/* ✅ LFT Section */}
          {showLFT && (
            <>
              <Text style={styles.reportText}>HAEMATOLOGY</Text>
              <Text style={styles.reportText}>Liver Function Test</Text>

              <View style={styles.testcontainer}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '40%' }}>Test</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Result</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Unit</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Ref. Ranges</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}></Text>
              </View>

              <View style={styles.underline}></View>

              {Object.keys(liverState).map((key) => (
                <View
                  key={key}
                  style={
                    liverState[key].testValue > liverState[key].highValue
                      ? styles.testvaluecontainerhigh
                      : liverState[key].testValue < liverState[key].lowValue
                        ? styles.testvaluecontainerlow
                        : styles.testvaluecontainer
                  }
                >
                  <Text style={{ fontSize: 12, fontWeight: '400', width: '40%' }}>
                    {liverState[key].testName}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>
                    {liverState[key].testValue}
                  </Text>
                  <Text style={{ fontSize: 12, width: '15%' }}>
                    {liverState[key].testUnit}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>
                    {liverState[key].lowValue} - {liverState[key].highValue}
                  </Text>
                  {liverState[key].testValue > liverState[key].highValue ? (
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>HIGH</Text>
                  ) : liverState[key].testValue < liverState[key].lowValue ? (
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>LOW</Text>
                  ) : (
                    <Text style={styles.value}></Text>
                  )}
                </View>
              ))}

              {/* Add spacing between LFT and RFT sections */}
              {showRFT && <View style={{ marginTop: 15 }}></View>}
            </>
          )}

          {/* ✅ RFT Section */}
          {showRFT && (
            <>
              <Text style={styles.reportText}>HAEMATOLOGY</Text>
              <Text style={styles.reportText}>Renal Function Test</Text>

              <View style={styles.testcontainer}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '40%' }}>Test</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Result</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Unit</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}>Ref. Ranges</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '15%' }}></Text>
              </View>

              <View style={styles.underline}></View>

              {Object.keys(kidneyState).map((key) => (
                <View
                  key={key}
                  style={
                    kidneyState[key].testValue > kidneyState[key].highValue
                      ? styles.testvaluecontainerhigh
                      : kidneyState[key].testValue < kidneyState[key].lowValue
                        ? styles.testvaluecontainerlow
                        : styles.testvaluecontainer
                  }
                >
                  <Text style={{ fontSize: 12, fontWeight: '400', width: '40%' }}>
                    {kidneyState[key].testName}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>
                    {kidneyState[key].testValue}
                  </Text>
                  <Text style={{ fontSize: 12, width: '15%' }}>
                    {kidneyState[key].testUnit}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>
                    {kidneyState[key].lowValue} - {kidneyState[key].highValue}
                  </Text>
                  {kidneyState[key].testValue > kidneyState[key].highValue ? (
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>HIGH</Text>
                  ) : kidneyState[key].testValue < kidneyState[key].lowValue ? (
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%' }}>LOW</Text>
                  ) : (
                    <Text style={styles.value}></Text>
                  )}
                </View>
              ))}
            </>
          )}

          <View style={styles.underline}></View>
          <View style={{ textAlign: 'center', fontSize: 14, fontFamily: 'RobotoSlab', fontWeight: 'bold' }}>
            <Text>----End of Result----</Text>
          </View>

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
            fixed
          />
        </Page>
      )}

    </Document>
  );
};

export default MyDocument;
