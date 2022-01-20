import DataGrid from '../../../molecules/dataGrid/DataGridComponent'

import { employees } from '../../../../../employees'

import styles from './RecentActivityAcrossSystem.module.css'

const RecentActivityAcrossSystem = props => {
  return (
    <div id='RecentActivityAcrossSystem' className={`${styles.widget}`}>
      <h6 className={styles.widget__title}>{props.title}</h6>
      <DataGrid employees={employees} />
    </div>
  )
}

export default RecentActivityAcrossSystem
