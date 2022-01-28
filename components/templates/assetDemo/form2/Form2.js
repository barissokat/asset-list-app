import React from 'react'

import {
  Form,
  SimpleItem,
  GroupItem,
  TabbedItem,
  Tab,
  TabPanelOptions
} from 'devextreme-react/form'
import { TextArea } from 'devextreme-react'

const employee = {
  name: 'John Heart',
  position: 'CEO',
  hireDate: new Date(2012, 4, 13),
  officeNumber: 901,
  phone: '+1(213) 555-9392',
  skype: 'jheart_DX_skype',
  email: 'jheart@dx-email.com',
  notes: 'John has been in the Audio/Video industry since 1990.'
}

const Form2 = () => {
  return (
    <Form
      formData={employee}
      colCount={2}
    >
      <GroupItem caption1='Employee'>
        <SimpleItem dataField='name' />
        <SimpleItem dataField='position' />
        <SimpleItem dataField='hireDate' />
        <SimpleItem dataField='officeNumber' />
        <SimpleItem dataField='officeNumber' />
      </GroupItem>
      <GroupItem caption1='Personal Information'>
        <TabbedItem className='py-2'>
          <TabPanelOptions height1={260} />
          <Tab title='Meter Options'>
            <SimpleItem dataField='phone' />
            <SimpleItem dataField='skype' />
            <SimpleItem dataField='email' />
          </Tab>
          <Tab title='Meter Notes'>
            <TextArea
              dataField='address'
              height={120}
              maxLength='1024'
              defaultValue='Address information'
            />
          </Tab>
        </TabbedItem>
      </GroupItem>
    </Form>
  )
}

export default Form2
