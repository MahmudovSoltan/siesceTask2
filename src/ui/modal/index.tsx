import { Button, Form, Input, Modal } from "antd";
import { useEffect } from "react";
import type { IUserInfo } from "../../types/uset.type";

interface PropsType {
    open: boolean;
    loading: boolean;
    closeBtn: () => void;
    onSubmit: (values: IUserInfo) => void;
    initialValues: {
        id?: string,
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
    };
}

const CustomModal = ({ open, loading, closeBtn, onSubmit, initialValues, formErrors }: PropsType) => {
    const [form] = Form.useForm();


    useEffect(() => {
        if (open) {
            form.setFieldsValue(initialValues);
        }
    }, [open, initialValues, form]);

    const handleFinish = (values: IUserInfo) => {
        onSubmit({ ...values, id: initialValues.id });
    };

    return (
        <Modal
            title="İstifadəçini redaktə et"
            open={open}
            onCancel={closeBtn}
            onOk={() => form.submit()}
            confirmLoading={loading}
            footer={
                <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                    <Button onClick={closeBtn} style={{ width: "100%" }}>Ləğv et</Button>
                    <Button
                        type="primary"
                        loading={loading}
                        onClick={() => form.submit()}
                        style={{ width: "100%" }}
                    >
                        Yadda saxla
                    </Button>
                </div>
            }
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item label="Ad" name="firstName" rules={[{ required: true, message: "Zəhmət olmasa ad daxil edin" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Soyad" name="lastName" rules={[{ required: true, message: "Zəhmət olmasa soyad daxil edin" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Düzgün email daxil edin" }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Telefon nömrəsi"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Telefon nömrəsi daxil edin" }]}
                    validateStatus={formErrors?.["phonenumber"] ? "error" : ""}
                    help={formErrors?.["phonenumber"]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal >
    );
};

export default CustomModal;
