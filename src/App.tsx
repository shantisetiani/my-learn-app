import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import RenderRouter, { ROUTES } from "routes";
import { Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { api } from "api";
import { storeClass } from "redux/action";
import { AvailableClasses } from "models";

const { Header, Content, Footer } = Layout;

// Model for Parameter of SearchClass component
interface SearchClassParams {
  path: string;
  goToClassList: () => void;
}

// Model for Parameter of onSearch function
interface onSearchParams extends SearchClassParams {
  value: string;
}

function App() {
  const [openMobileSearch, setOpenMobileSearch] = useState(false); // state to show/hide input search (mobile view)
  const [availableClasses, setAvailableClasses] = useState<AvailableClasses>(
    {} as AvailableClasses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getAvailableClasses();
    // eslint-disable-next-line
  }, []);

  // Function to get and set the data
  const getAvailableClasses = async () => {
    const data = await api.class.getAvailableClasses(); // call the API to get data
    setAvailableClasses(data); // store the data to local state
    dispatch(storeClass(data)); // store the data to redux storage
  };

  // Function to search in the available classes
  const onSearch = ({ value, path, goToClassList }: onSearchParams) => {
    if (path !== ROUTES.CLASS_LIST) {
      goToClassList();
    }
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

  // Function to render input search class
  const renderSearchClass = ({ path, goToClassList }: SearchClassParams) => (
    <Input.Search
      placeholder="Cari kelas"
      allowClear
      onSearch={(value) => onSearch({ value, path, goToClassList })}
      className="input-search"
      style={{ width: 200, paddingLeft: "15px" }}
      data-testid="inputSearch"
    />
  );

  // Function to render input search class (mobile view)
  const renderMobileSearchClass = ({
    path,
    goToClassList,
  }: SearchClassParams) => (
    <div className="mobile-view mobile-input-search">
      <Input.Search
        placeholder="Cari kelas"
        allowClear
        onSearch={(value) => onSearch({ value, path, goToClassList })}
        style={{ width: 200, marginTop: "8px" }}
      />
    </div>
  );

  const HeaderComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Function to go to Class List page
    const goToClassList = () => navigate(ROUTES.CLASS_LIST);

    return (
      <Header className="flex-container space-between">
        <Link to={ROUTES.CLASS_LIST}>
          <h1 style={{ margin: 0, color: "white" }}>My Learn App</h1>
        </Link>
        {renderSearchClass({ path: location.pathname, goToClassList })}
        <SearchOutlined
          style={{ color: "white" }}
          onClick={() => setOpenMobileSearch(!openMobileSearch)}
          className="mobile-view"
        />
        {openMobileSearch &&
          renderMobileSearchClass({ path: location.pathname, goToClassList })}
      </Header>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <HeaderComponent />
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
