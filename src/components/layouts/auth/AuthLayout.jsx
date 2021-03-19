import DocumentTitle from 'react-document-title'

const AuthLayout = ({ children, title="Default" }) => {
    return (
        <>
        <DocumentTitle title={title + " | Smart Stock"} />
        {/* css */}
        {/* <link rel="stylesheet" href="assets/css/app.css" /> */} {/* แปะตรงนี้ performance ไม่ดีบางกรณี จำเป็นต้อง support es6 ไม่จำ แคช */}
        {/* body */}
            <div className="bg-info">
                <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                    {children}
                </div>
            </div>
        {/* Javascript */}
        {/* <script src="assets/js/app.js"></script> */}
        </>
    );
};

export default AuthLayout;