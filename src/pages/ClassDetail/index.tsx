import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { LeftCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { api } from "api";
import { ROUTES } from "routes";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Space,
  Divider,
  Skeleton,
  Alert,
  Modal,
} from "antd";
import { ClassDetailModel } from "models";

// Model for the input values in Register form
interface RegisterForm {
  email: string;
  fullname: string;
  mentor: string;
  termsAndConditions: boolean;
}

const ClassDetail = () => {
  const params = useParams();
  const [form] = Form.useForm();
  const [classData, setClassData] = useState<ClassDetailModel>(
    {} as ClassDetailModel
  );
  const [loading, setLoading] = useState(true); // loading state of the page
  const [loadingRegister, setLoadingRegister] = useState(false); // loading state while submitting Register form
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  useEffect(() => {
    getClassDetail();
  }, []);

  // Function to get and set the data
  const getClassDetail = async () => {
    const data = await api.class.getClassDetail(Number(params.id)); // call the API to get class detail data
    setClassData(data); // store the data to local state
    setLoading(false);
  };

  // Function to render the Register form
  const renderRegisterForm = () => {
    const validateMessages = {
      required: "${label} harus diisi",
      types: {
        email: "Format ${label} tidak valid",
      },
    };

    // Function to register class when submit the form
    const registerClass = async (values: RegisterForm) => {
      setLoadingRegister(true);
      try {
        // Submit the data using API
        await api.class.joinClass({
          classId: Number(params.id),
          attendeeFullName: values.fullname,
          attendeeEmail: values.email,
        });

        // Open Success Modal
        Modal.success({
          title: "Berhasil Mendaftar Kelas",
          content: (
            <Space direction="vertical" size="middle">
              <Row>
                <Col span={24}>
                  Selamat! Kamu sudah terdaftar di kelas{" "}
                  <b>{classData?.name}</b> dengan data sebagai berikut:
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={8}>
                  Nama Lengkap
                </Col>
                <Col xs={12} md={8}>
                  : {values.fullname}
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={8}>
                  Email
                </Col>
                <Col xs={12} md={8}>
                  : {values.email}
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={8}>
                  Mentor
                </Col>
                <Col xs={12} md={8}>
                  :{" "}
                  {classData?.mentors?.find(
                    (mentor) => mentor.id === values.mentor
                  )?.name || "-"}
                </Col>
              </Row>
            </Space>
          ),
        });
        form.resetFields(); // clear the input fields in the form
        setLoadingRegister(false);
      } catch (error) {
        // Open Error Modal
        Modal.error({
          title: "Gagal Mendaftar Kelas",
          content:
            "Terjadi masalah saat mendaftar kelas. Silahkan Coba beberapa saat lagi.",
        });
        setLoadingRegister(false);
      }
    };

    return (
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={registerClass}
        autoComplete="off"
        validateMessages={validateMessages}
        data-testid="registerForm"
      >
        <Form.Item
          label="Nama Lengkap"
          name="fullname"
          rules={[{ required: true }]}
        >
          <Input disabled={loadingRegister} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input disabled={loadingRegister} />
        </Form.Item>

        <Form.Item label="Mentor" name="mentor">
          <Select disabled={loadingRegister}>
            {classData?.mentors?.map((mentor) => (
              <Select.Option value={mentor.id}>{mentor.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{ xs: { span: 24 }, sm: { offset: 8, span: 16 } }}
        >
          <Alert
            message="Jika tidak memilih mentor maka kami akan memilihkannya untuk Anda"
            type="warning"
            showIcon
            icon={<InfoCircleOutlined />}
          />
        </Form.Item>

        <Form.Item
          name="termsAndConditions"
          wrapperCol={{ xs: { span: 24 }, sm: { offset: 8, span: 16 } }}
          initialValue={termsAndConditions}
        >
          <Checkbox
            checked={termsAndConditions}
            onChange={(e: any) => setTermsAndConditions(e.target.checked)}
            disabled={loadingRegister}
          >
            Saya setuju dengan <a href="#">syarat dan ketentuan</a> yang berlaku
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{ xs: { span: 24 }, sm: { offset: 8, span: 16 } }}
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={!termsAndConditions || loadingRegister}
            loading={loadingRegister}
          >
            Daftar
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Row data-testid="classDetail">
      <Col span={24}>
        <Space size="middle">
          <Link to={ROUTES.CLASS_LIST}>
            <LeftCircleOutlined
              style={{ color: "#5c5c5c", fontSize: "24px" }}
            />
          </Link>
          <span style={{ color: "#5c5c5c", fontSize: "20px" }}>
            Detail Kelas
          </span>
        </Space>
        <Divider style={{ margin: "12px 0", border: "1px solid #757575" }} />
      </Col>
      <Col span={24}>
        <Skeleton active loading={loading}>
          <h2>{classData?.name}</h2>
          <p>{classData?.description}</p>
        </Skeleton>
        <Space direction="vertical" size="large">
          <Row gutter={[24, 12]}>
            <Col span={24}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                Daftar Mentor
              </div>
            </Col>
            {classData?.mentors?.map((mentor) => (
              <Col xs={24} md={12} xl={6} xxl={4} key={mentor.id}>
                <Card>
                  <Row>
                    <Col span={8}>
                      <img src="/images/person-dummy.jpeg" width="100%" />
                    </Col>
                    <Col>
                      <div className="mentor-name">{mentor.name}</div>
                      <p>{mentor.description}</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
            <Divider />
          </Row>
          <Row>
            <Col span={24}>
              <Card title="Daftar Sekarang" style={{ width: "100%" }}>
                <Skeleton active loading={loading}>
                  {renderRegisterForm()}
                </Skeleton>
              </Card>
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default ClassDetail;
