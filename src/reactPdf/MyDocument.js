import React from 'react';
import ReactPDF, { Page, Text, Image, Font, View, Document, StyleSheet, Svg } from '@react-pdf/renderer';
import logo from '../assets/WhatsApp_Image_2023-11-05_at_11.06.09_PM-removebg-preview.png'
import addresspng from '../assets/icons8-address-64.png'
import phoneImage from '../assets/icons8-phone-50.png'
import RobotoSlabThin from '../assets/font/Roboto_slab/RobotoSlab-Light.ttf'
import RobotoSlabbold from '../assets/font/Roboto_slab/RobotoSlab-Bold.ttf'
import dayjs from 'dayjs';
import { ListItemSecondaryAction } from '@mui/material';
// Font.register({
//   family: 'Roboto',
//   src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2'
// },
// );
Font.register({
  family: 'RobotoSlab',
  fonts: [
    {
      src: RobotoSlabThin,
      fontWeight: 200
    },
    {
      src: RobotoSlabbold,
      fontWeight: 600
    }
  ]
},
);
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'RobotoSlab',
    // flexGrow:1,
    position: 'relative'
  },
  leftContent: {
    fontSize: 13,
    lineHeight: 1.4,
    marginLeft: 'auto',
  },
  rightContent: {
    marginRight: 'auto',
    width: '200',
    height: '150',
    objectFit: 'contain'
  },
  boldText: {
    fontFamily: 'RobotoSlab',
    fontWeight: 700
  },
  addressstyle: {
    // marginLeft:'270px',
    // marginTop:'-30px',
    position: 'absolute',
    top: 24,
    left: 390,
    width: '25px',
    height: '25px'
  },
  phonestyle: {
    // marginTop:'70px',
    position: 'absolute',
    top: 100,
    left: 390,
    width: '25px',
    height: '25px'
  },
  detailscontainer: {
    // backgroundColor:'red',
    width: '100%',
    // height:'100px',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '3px',
    fontSize: '12px'
  },
  detailtext: {
    width: '48%',
    marginBottom: '2px',
    fontFamily: 'RobotoSlab',
    fontWeight: 700
  },
  detailAns: {
    fontFamily: 'RobotoSlab',
    fontWeight: 300
  },
  reportText: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: 16,
    fontFamily: 'RobotoSlab',
    fontWeight: 700
  },
  testcontainer: {
    marginTop: '2px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    fontFamily: 'RobotoSlab',
    fontWeight: 700
  },
  title: {
    // marginRight: 25,
    fontSize: 14,
    fontWeight: 'bold',
    width: '29%',
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  testvaluecontainer: {
    marginTop: '2px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    fontFamily: 'RobotoSlab',
  },
  testvaluecontainerlow: {
    marginTop: '2px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    color:"blue",
    fontFamily: 'RobotoSlab',

  },
  testvaluecontainerhigh: {
    marginTop: '2px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    color:'red',
    fontFamily: 'RobotoSlab',
  },
  value: {
    fontSize: 11,
    fontWeight: 'bold',
    // width: '25%',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
// Create Document Component
const MyDocument = ({ formData, testResult }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        <Image style={styles.rightContent} src={logo}></Image>
        <Image style={styles.addressstyle} src={addresspng}></Image>
        <Image style={styles.phonestyle} src={phoneImage}></Image>
        <Text style={styles.leftContent}>Near <Text style={styles.boldText}>Ponoor 19</Text>, Bus Stop, {"\n"}Balussery, Main Road,{"\n"} Kozhikode,673573{"\n"}{"\n"} <Text style={styles.boldText}>+91 963 293 4315</Text></Text>
      </View>
      <View style={styles.detailscontainer}>
      <Text style={styles.detailtext}>Patient Name:<Text style={styles.detailAns}> {formData.ClientName}</Text></Text>
        <Text style={styles.detailtext}>Patient Name:<Text style={styles.detailAns}> {formData.PatientName}</Text></Text>
        <Text style={styles.detailtext}>Date: <Text style={styles.detailAns}>  {dayjs(formData.registeredon).format('DD/MM/YYYY h:mm A')}</Text></Text>
        <Text style={styles.detailtext}>Age / Sex:<Text style={styles.detailAns}>  {formData.Age} / {formData.sex}</Text></Text>
        <Text style={styles.detailtext}>Weight:<Text style={styles.detailAns}>  {formData.Weight}</Text></Text>
        <Text style={styles.detailtext}>Referred by:<Text style={styles.detailAns}>  {formData.referedby}</Text></Text>
        <Text style={styles.detailtext}>Breed:<Text style={styles.detailAns}>   {formData.Breed}</Text></Text>
      </View>
      <Text style={styles.reportText}>HAEMATOLOGY</Text>
      <Text style={styles.reportText}>COMPLETE BLOOD COUNT(CBC)</Text>
      <View style={styles.testcontainer}>
        <Text style={ {fontSize: 14,fontWeight: 'bold',width: '40%'}}>Test</Text>
        <Text style={ {fontSize: 14,fontWeight: 'bold',width: '15%'}}>Result</Text>
        <Text style={ {fontSize: 14,fontWeight: 'bold',width: '15%'}}>Unit</Text>
        <Text style={ {fontSize: 14,fontWeight: 'bold',width: '15%'}}>Ref. Ranges</Text>
        <Text style={ {fontSize: 14,fontWeight: 'bold',width: '15%'}}></Text>
      </View>
      <View style={styles.underline}></View>
      {
        Object.keys(testResult).map((key) => (
          <View key={key} style={testResult[key].testValue>testResult[key].highValue?styles.testvaluecontainerhigh:testResult[key].testValue<testResult[key].lowValue?styles.testvaluecontainerlow:styles.testvaluecontainer}>
            {testResult[key].differtial=="Y"?<Text style={ {fontSize: 12,fontWeight: 'bold',width: '40%'}}>Diffrential Leukocyte Count</Text>:<Text></Text>}
            <Text style={ {fontSize: 12,fontWeight: '400',width: '40%'}}>{testResult[key].testName}</Text>
            <Text style={ {fontSize: 12,fontWeight: 'bold',width: '15%'}}>{testResult[key].testValue}</Text>
            <Text style={ {fontSize: 12,fontWeight: 'normal',width: '15%'}}>{testResult[key].testUnit}</Text>
            <Text style={ {fontSize: 12,fontWeight: 'bold',width: '15%'}}>{testResult[key].lowValue} - {testResult[key].highValue}</Text>
            {testResult[key].testValue>testResult[key].highValue?<Text style={ {fontSize: 12,fontWeight: 'bold',width: '15%'}}>HIGH</Text>:testResult[key].testValue<testResult[key].lowValue?<Text style={ {fontSize: 12,fontWeight: 'bold',width: '15%'}}>LOW</Text>:<Text style={styles.value}></Text>}
          </View>
        ))
      }
      <View style={styles.underline}></View>
      <View style={{textAlign:"center",fontSize:14, fontFamily: 'RobotoSlab', fontWeight:'bold'}}><Text>----End of Result----</Text></View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);



// ReactPDF.render(<MyDocument />);

export default MyDocument