const Widgetsbox = props => {
  return (
    <div id='widgets' className='mt-4'>
      <div className='row border'>
        <div className='col p-4'>
          <h3>Total assets</h3>
          <div className='d-flex'>
            <div className='d-flex w-50'>
              <p>
                71,897
                <span className='ms-2'>
                  from 70,46
                </span>
              </p>
            </div>
            <div className='w-50'>
              <span className='badge rounded-pill bg-success'> 12%</span>
            </div>
          </div>
        </div>
        <div className='col p-4 border-start'>
          <h3>Work order close rate</h3>
          <div className='d-flex'>
            <div className='d-flex w-50'>
              <p>
                58.16%
                <span className='ms-2'>
                  from 56,14%
                </span>
              </p>
            </div>
            <div className='w-50'>
              <span className='badge rounded-pill bg-success'> 2.02%</span>
            </div>
          </div>
        </div>
        <div className='col p-4 border-start'>
          <h3>Broken asset rate</h3>
          <div className='d-flex'>
            <div className='d-flex w-50'>
              <p>
                24.57%
                <span className='ms-2'>
                  from 28.62%
                </span>
              </p>
            </div>
            <div className='w-50'>
              <span className='badge rounded-pill bg-danger'> 4.05%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widgetsbox
