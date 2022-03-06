import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Card, Skeleton } from "antd";
import { AvailableClasses } from "models";
import { ROUTES } from "routes";

const ClassList = () => {
  const [availableClassData, setAvailableClassData] =
    useState<AvailableClasses>({} as AvailableClasses);
  const [loading, setLoading] = useState(true); // loading state of the page
  const navigate = useNavigate();
  const classStorage = useSelector((state: any) => state.class); // get class list from redux storage

  useEffect(() => {
    if (classStorage?.items) {
      setAvailableClassData(classStorage); // store the data to local state
      setLoading(false);
    }
  }, [classStorage]);

  return (
    <Row data-testid="classList">
      <Col span={24}>
        <h2>Daftar Kelas yang Tersedia</h2>
        <Row gutter={[24, 12]}>
          {loading ? (
            <Col xs={24} md={12} xl={6} xxl={4}>
              <Card>
                <Skeleton active />
              </Card>
            </Col>
          ) : (
            availableClassData?.items.map((item) => (
              <Col xs={24} md={12} xl={6} xxl={4} key={item.id}>
                <Card
                  title={item.name}
                  hoverable={true}
                  onClick={() => navigate(`${ROUTES.CLASS_DETAIL}/${item.id}`)}
                >
                  <p className="ellipsis-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint cumque explicabo animi ullam maxime corporis
                    accusantium. Quos mollitia voluptas facere necessitatibus
                    laborum nobis error magni molestiae earum quis! Inventore,
                    consectetur.
                  </p>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default ClassList;
