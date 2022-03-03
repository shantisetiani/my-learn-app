import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "api";
import { Row, Col, Card, Skeleton } from "antd";
import { AvailableClasses } from "models";
import { ROUTES } from "routes";

const ClassList = () => {
  const [availableClassData, setAvailableClassData] =
    useState<AvailableClasses>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAvailableClasses();
  }, []);

  const getAvailableClasses = async () => {
    const data = await api.class.getAvailableClasses();
    setAvailableClassData(data);
    setLoading(false);
  };

  return (
    <Row>
      <Col span={24}>
        <h2>Daftar Kelas yang Tersedia</h2>
        <Row gutter={[24, 12]}>
          {loading ? (
            <Col span={12}>
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
