import React from 'react'
import {connect} from 'react-redux'
import {RequestStatus} from '../../utils/RequestStatus'

const UserInfo = (props) => {
  if (props.isLoading) {
    return <div style={{color: 'orange'}}>Loading!</div>
  }

  if (props.isError) {
    return <div style={{color: 'red'}}>Data fetch error!</div>
  }

  return <div>FirstName: {props.firstName}</div>
}

const UserInfoContainer = connect((state) => ({
  firstName: state.userInfo.firstName,
  isLoading: state.userInfo.requestStatus === RequestStatus.Request,
  isError: state.userInfo.requestStatus === RequestStatus.Failure,
}))(UserInfo)

export {UserInfoContainer as UserInfo}
