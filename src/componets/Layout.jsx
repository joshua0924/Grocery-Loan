import React from "react";
import { Layout } from "antd";
//import Navbar from '../componets/Navbar';
import Sidebar from '../componets/Sidebar';
import styled from "styled-components";
const { Content } = Layout;
const StyledLayout = styled(Layout)`
  height: 100vh;
`;
const StyledContent = styled(Content)`
zIndex:3000;
  margin: 24px;
`;
function LayoutComponent({ children }) {
  return (
    <StyledLayout>
   
      <Layout>
        <Sidebar />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </StyledLayout>
  );
}
export default LayoutComponent;
