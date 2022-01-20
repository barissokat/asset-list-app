import {
  DataGrid,
  Column
} from 'devextreme-react/data-grid'

const DataGridComponent = props => {
  return (
    <div>
      <DataGrid dataSource={props.employees} keyExpr='EmployeeID' allowColumnReordering>
        <Column dataField='FullName' />
        <Column dataField='Position' />
        <Column
          dataField='BirthDate'
          dataType='date'
        />
        <Column
          dataField='HireDate'
          dataType='date'
        />
        <Column dataField='City' />
        <Column dataField='Address' />
      </DataGrid>
    </div>
  )
}

export default DataGridComponent
