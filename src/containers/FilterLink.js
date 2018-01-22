// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../redux/action'
// import Link from '../components/Link'
import React from 'react'
import { NavLink } from 'react-router-dom'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick () {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
    >
    {children}
  </NavLink>
)

export default FilterLink