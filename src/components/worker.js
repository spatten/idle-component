import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { assignWorker, retireWorker } from '../redux/actions'
import { majorScale, Card, IconButton, Paragraph, Pane, Text, Tooltip } from 'evergreen-ui'

const countString = (count, max) => {
  if (max === null) {
    return count
  } else {
    return `${count} / ${max}`
  }
}

const buildingClickers = (onAssignWorker, onRetireWorker) => (
  <>
    <IconButton icon="arrow-up" onClick={onAssignWorker}/>
    <IconButton icon="arrow-down" onClick={onRetireWorker} />
  </>
)

function Worker ({ count, max, name, icon, visible, onRetireWorker, onAssignWorker }) {
  if (visible === false) {
    return null
  }
  const showArrows = name !== 'unassigned'

  return (
    <Card width={majorScale(20)}
          height={majorScale(10)}
          padding={majorScale(1)}
          elevation={1}
          margin={majorScale(1)}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          userSelect="none"
          position="relative"
          border="muted">
      <Paragraph>{ name }</Paragraph>
      <Pane display="flex"
            flexDirection="row">
        <Paragraph marginRight={majorScale(1)} textAlign="center" marginTop="auto" marginBottom="auto">{ countString(count, max) }</Paragraph>
        { showArrows && buildingClickers(onAssignWorker, onRetireWorker)}
      </Pane>
    </Card>
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
}

const mapStateToProps = (state, ownProps) => {
  const { workers } = state
  return {
    ...workers[ownProps.name],
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
