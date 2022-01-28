import { Form } from 'devextreme-react'

export default function Form1 (props) {
  return (
    <Form
      id='form1'
      defaultFormData={props.employee}
      labelLocation='top'
      colCountByScreen={props.cc}
    />
  )
}
