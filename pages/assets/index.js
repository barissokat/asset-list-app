import { useState } from 'react'

import Head from 'next/head'
import Navbar from '../../components/ui/organisms/navbar/Navbar'
import Widget from '../../components/ui/organisms/widgets/widget/Widget'
import TabExample from '../../components/templates/assetDemo/tabExample/TabExample'
import { Col, Row } from 'reactstrap'
import { Form, SimpleItem } from 'devextreme-react/form'

import styles from '../../styles/Home.module.css'

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
}

export default function Assets () {
  const [notes, setNotes] = useState('Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.')

  const employee = {
    ID: 7,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 'Controller',
    Picture: 'images/employees/06.png',
    BirthDate: new Date('1974/11/5'),
    HireDate: new Date('2005/05/11'),
    Notes: notes,
    Address: '4600 N Virginia Rd.'
  }

  const employee2 = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: 'John has been in the Audio/Video industry since 1990.'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Asset</title>
        <meta name='description' content='Generated by Baris' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={`container ${styles.main}`}>
        <Widget title='Some general widget'>
          <div className='content-block dx-card p-2'>

            <Row>
              <Col lg='1' className='asset-logo'>
                <div className='lightbulb' />
              </Col>
              <Col>
                <Row className='border-bottom p-2 nibble'>
                  <Col lg='2'><h3>#25656</h3></Col>
                  <Col lg='10'> <span className='badge-info'>Abandoned</span></Col>

                </Row>
                <Row className='p-2  my-1 nibble'>
                  <Col lg='3'>

                    <span className='asset-sub-title'>Address</span>
                    <span className='asset-sub-text'>Newyork City 52 Avenue</span>
                  </Col>
                  <Col lg='3'>
                    <span className='asset-sub-title'>Classification</span>
                    <span className='asset-sub-text'>SEWERMH</span>
                  </Col>
                  <Col lg='3'>
                    <span className='asset-sub-title'>Feature Class</span>
                    <span className='asset-sub-text'>GISSMANHLPT</span>
                  </Col>
                  <Col lg='3'>
                    <span className='asset-sub-title'>Asset Tag</span>
                    <span className='asset-sub-text'>M-2428-12</span>
                  </Col>
                </Row>
              </Col>

            </Row>
          </div>

          <div className='content-block dx-card p-3 my-3'>
            <TabExample employee={employee} employee2={employee2} cc={colCountByScreen} />
          </div>

          <div className='content-block dx-card p-3 my-3'>
            <Form
              id='form'
              defaultFormData={employee}
              onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
              labelLocation='top'
              colCountByScreen={colCountByScreen}
            />
          </div>

          <div className='content-block dx-card responsive-paddings p-3'>
            <Form
              formData={employee2}
              colCount={2}
            >
              <SimpleItem dataField='name' className='input-disabled' />
              <SimpleItem dataField='position' />
              <SimpleItem dataField='hireDate' />
              <SimpleItem dataField='officeNumber' />
              <SimpleItem
                dataField='notes'
                colSpan={2}
              />
            </Form>
          </div>
        </Widget>
      </main>
    </div>
  )
}
