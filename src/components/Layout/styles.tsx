import styled from 'styled-components'
import { Paper as MuiPaper } from '@material-ui/core'
import { spacing } from '@material-ui/system'

const Root = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  &.MuiPaper-root {
    box-shadow: none;
    background: transparent;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 50px 30px;
`

export { Root, AppContent, MainContent, Container }
