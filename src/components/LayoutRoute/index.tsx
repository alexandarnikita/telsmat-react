import React from 'react'
import { Route as RouterRoute, RouteProps as RouterRouteProps, RouteComponentProps } from 'react-router-dom'

import Layout, { LayoutProps } from '../Layout'

// Disallow passing custom render method
interface Props extends Omit<RouterRouteProps, 'render'> {
  layout?: React.FC<LayoutProps>
  component: React.ComponentType<RouteComponentProps>
  isAnonym?: boolean
}

const LayoutRoute = ({ layout = Layout, isAnonym = false, component, ...props }: Props) => (
  <RouterRoute
    {...props}
    render={innerProps => {
      return React.createElement(layout, { isAnonym }, React.createElement(component, innerProps))
    }}
  />
)

export default LayoutRoute
