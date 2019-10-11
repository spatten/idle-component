import React from 'react'
import { connect } from 'react-redux'
import { createBuilding } from '../redux/actions'
import { majorScale, Button, Card, Text } from 'evergreen-ui'

function Building({ count, name, icon, handleClick }) {
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
          border="muted">
      <Text>{count}</Text>
      <Button onClick={handleClick}
              marginTop={majorScale(1)}
              iconBefore={icon}>
        Build {name}
      </Button>
    </Card>

  )
}

const mapStateToProps = (state, ownProps) => (
  {
    ...state.buildings[ownProps.name]
  }
)


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(createBuilding(ownProps["name"]))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Building)
