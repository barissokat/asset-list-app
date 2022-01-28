import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import { Form } from 'devextreme-react'
import { SimpleItem } from 'devextreme-react/form'

import StepZilla from 'react-stepzilla'

import Form1 from '../form1/Form1'
import Form2 from '../form2/Form2'
import Task from '../task/Task'

export default class TabExample extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
    }

    this.steps =
    [
      { name: 'Step 1', component: <Form1 className='py-3' employee={this.props.employee} cc={this.props.cc} /> },
      { name: 'Step 2', component: <Form2 className='py-3' employee={this.props.employee} cc={this.props.cc} /> },
      { name: 'Step 3', component: <Form1 className='py-3' employee={this.props.employee} cc={this.props.cc} /> },
      { name: 'Step 4', component: <Form2 className='py-3' employee={this.props.employee} cc={this.props.cc} /> },
      { name: 'Step 5', component: <Form1 className='py-3' employee={this.props.employee} cc={this.props.cc} /> }
    ]
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render () {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1') }}
            >
              Basic Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') }}
            >
              Spare Parts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3') }}
            >
              Meters
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4') }}
            >
              Manifacturers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5') }}
            >
              Work Orders
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12' className='my-3'>
                <div className='step-progress'>
                  <StepZilla
                    steps={this.steps}
                    nextButtonCls='btn btn-sm btn-primary my-5'
                    backButtonCls='btn btn-sm btn-primary my-5 mx-3'
                  /* nextTextOnFinalActionStep={"Save"} */
                    prevBtnOnLastStep
                  />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='12' className='py-2'>
                <Form
                  formData={this.props.employee2}
                  colCount={2}
                >
                  <SimpleItem dataField='name' />
                  <SimpleItem dataField='position' />
                  <SimpleItem dataField='hireDate' />
                  <SimpleItem dataField='officeNumber' />
                  <SimpleItem
                    dataField='notes'
                    colSpan={2}
                  />
                </Form>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId='3'>
            <Row>
              <Col sm='12' className='py-2'>
                <Form2 />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId='4'>
            <Row>
              <Col sm='12' className='py-2'>
                <Form
                  formData={this.props.employee2}
                  colCount={2}
                >
                  <SimpleItem dataField='name' />
                  <SimpleItem dataField='position' />
                  <SimpleItem dataField='hireDate' />
                  <SimpleItem dataField='officeNumber' />
                  <SimpleItem
                    dataField='notes'
                    colSpan={2}
                  />
                </Form>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId='5'>
            <Row>
              <Col sm='12' className='py-2'>

                <Task />

              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    )
  }
}
