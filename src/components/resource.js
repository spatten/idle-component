import React from 'react'
import { connect } from 'react-redux'
import { produceResources } from '../redux/actions'
import { Button } from 'evergreen-ui'

function Resource({ count, name, handleClick }) {
  return (
      <div className='resource'>
      <span className='resource--counter'>{count}</span>
      <Button className='resource--button' onClick={handleClick}>Mine {name}</Button>
      </div>

  )
}

const mapStateToProps = (state, ownProps) => (
  {
    count: state.resources[ownProps.name]
  }
 )


const mapDispatchToProps = (dispatch, ownProps) => {
  let resources = {}
  resources[ownProps['name']] = 1
  return {
    handleClick: () => dispatch(produceResources(resources))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resource)
