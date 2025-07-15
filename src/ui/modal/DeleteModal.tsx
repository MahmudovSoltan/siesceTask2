import { Button, Modal } from 'antd';

interface PropsType {
    closeBtn: () => void,
    loading: boolean,
    open: boolean,
    deleteUser: () => void
}

const DeletModal = ({ closeBtn, loading, open, deleteUser }: PropsType) => {



    return (
        <>
            <Modal
                title=""
                open={open}
                onOk={closeBtn}
                onCancel={closeBtn}
                // okText="确认"
                // cancelText="取消"
                footer={
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                        <Button onClick={closeBtn} style={{ width: "100%" }}>Ləğv et</Button>
                        <Button
                            type="primary"
                            loading={loading}
                            onClick={deleteUser}
                            style={{ width: "100%" }}
                        >
                            Sil
                        </Button>
                    </div>
                }
            >
                <p>İstifadəçini silmək istəyirsiniz?</p>
            </Modal>
        </>
    );
};

export default DeletModal