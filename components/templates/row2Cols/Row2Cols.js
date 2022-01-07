import RecentActivityAcrossSystem from '../../ui/organisms/widgets/recentActivityAcrossSystem/RecentActivityAcrossSystem'
import Widget from '../../ui/organisms/widgets/widget/Widget'

const Row2Cols = () => {
  return (
    <div id='row2Cols' className='row mt-3'>
      <div className='col'>
        <div>
          <Widget title='Some general widget' />
        </div>
        <div className='mt-3'>
          <Widget title='Some general widget' />
        </div>
      </div>
      <div className='col'>
        <RecentActivityAcrossSystem title='Recent activity across system' />
      </div>
    </div>
  )
}

export default Row2Cols
