import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { assignWorker, retireWorker } from '../redux/actions'
import { majorScale, IconButton, Paragraph, Pane } from 'evergreen-ui'
import IdleCard from './idleCard'

const countString = (count, max) => {
  if (max === null) {
    return count
  } else {
    return `${count} / ${max}`
  }
}

const buildingClickers = (onAssignWorker, onRetireWorker, count, max, unassignedCount) => (
  <>
    <IconButton
      icon="arrow-up"
      disabled={(max && count >= max) || unassignedCount === 0}
      onClick={onAssignWorker}/>
    <IconButton
      icon="arrow-down"
      disabled={count <= 0}
      onClick={onRetireWorker}
    />
  </>
)

function Worker ({ count, max, name, icon, visible, onRetireWorker, onAssignWorker, unassignedCount }) {
  if (visible === false) {
    return null
  }
  const showArrows = name !== 'unassigned'

  return (
    <IdleCard>
      <Paragraph>{ name }</Paragraph>
      <Pane display="flex"
            flexDirection="row"
            marginTop={majorScale(1)}>

        <Paragraph marginRight={majorScale(1)} textAlign="center" marginTop="auto" marginBottom="auto">{ countString(count, max) }</Paragraph>
        { showArrows && buildingClickers(onAssignWorker, onRetireWorker, count, max, unassignedCount)}
      </Pane>
    </IdleCard>
  )
}

Worker.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string,
  max: PropTypes.number,
  name: PropTypes.string,
  visible: PropTypes.bool,
  onAssignWorker: PropTypes.func,
  onRetireWorker: PropTypes.func,
  unassignedCount: PropTypes.number,
}

const mapStateToProps = (state, ownProps) => {
  const { workers } = state
  return {
    ...workers[ownProps.name],
    unassignedCount: workers.unassigned.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAssignWorker: () => dispatch(assignWorker(ownProps.name)),
    onRetireWorker: () => dispatch(retireWorker(ownProps.name))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Worker)
