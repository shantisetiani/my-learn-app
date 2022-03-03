import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import RenderRouter, { ROUTES } from "routes";
import { Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { api } from "api";
import { storeClass } from "redux/action";
import { AvailableClasses } from "models";

const { Header, Content, Footer } = Layout;

function App() {
  const [openMobileSearch, setOpenMobileSearch] = useState(false);
  const [availableClasses, setAvailableClasses] = useState<AvailableClasses>(
    {} as AvailableClasses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAvailableClasses();
  }, []);

  const getAvailableClasses = async () => {
    const data = await api.class.getAvailableClasses();
    setAvailableClasses(data);
    dispatch(storeClass(data));
  };

  const onSearch = (value: string) => {
    if (value === "") {
      dispatch(storeClass(availableClasses));
    } else {
      const searchedClass =
        availableClasses?.items.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        ) || [];
      dispatch(storeClass({ items: [...searchedClass] }));
    }
  };

  const SearchClass = (
    <Input.Search
      placeholder="Cari kelas"
      allowClear
      onSearch={onSearch}
      className="input-search"
      style={{ width: 200, paddingLeft: "15px" }}
    />
  );

  const MobileSearchClass = (
    <div className="mobile-view mobile-input-search">
      <Input.Search
        placeholder="Cari kelas"
        allowClear
        onSearch={onSearch}
        style={{ width: 200, marginTop: "8px" }}
      />
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Header className="flex-container space-between">
          <Link to={ROUTES.CLASS_LIST}>
            <h1 style={{ margin: 0, color: "white" }}>My Learn App</h1>
          </Link>
          {SearchClass}
          <SearchOutlined
            style={{ color: "white" }}
            onClick={() => setOpenMobileSearch(!openMobileSearch)}
            className="mobile-view"
          />
          {openMobileSearch && MobileSearchClass}
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
