import { BrowserRouter, Link } from "react-router-dom";
import RenderRouter, { ROUTES } from "routes";
import { Layout, Input } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

function App() {
  const onSearch = (value: string) => console.log(value);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Header className="flex-container space-between">
          <Link to={ROUTES.CLASS_LIST}>
            <h1 style={{ margin: 0, color: "white" }}>My Learn App</h1>
          </Link>
          <Input.Search
            placeholder="Cari kelas"
            allowClear
            onSearch={onSearch}
            style={{ width: 200, paddingLeft: "15px" }}
          />
        </Header>
        <Content>
          <RenderRouter />
        </Content>
        <Footer
          style={{
            backgroundColor: "#000",
            color: "white",
            textAlign: "center",
          }}
        >
          My Learn App ©2021 Created by Shanti Setiani
        </Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
