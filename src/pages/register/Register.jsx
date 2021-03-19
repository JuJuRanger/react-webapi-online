// import AuthLayout from "../../components/layouts/auth/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    document.title = "Register Password | Smart Stock"
    // การเรียกใช้งาน React Hook Form
    // register ไม่ใช่ variable ที่สร้างเองนะ เป็น method นะครับ
    const { register, handleSubmit, reset, errors } = useForm();
    // วิธีการนำไปใช้
    // ใน input จะต้องมี name (html) และ ห้ามซ้ำกันด้วย

    // สร้างฟฟังชั่นมารับข้อมูลจาก React hook form ไปใช้
    const registerSubmit = (data, e) => {
        console.log(data);
        // console.log(e);
    };

    return (
        // <AuthLayout title="Register">
            <form
                className="card p-4 col-md-4 my-form"
                onSubmit={handleSubmit(registerSubmit)}
            >
                <h3 className="text-center mb-4">ลงทะเบียน</h3>

                <div className="mb-3 row">
                    <label
                        htmlFor="fullname"
                        className="col-md-4 col-form-label"
                    >
                        ชื่อ-สกุล
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            ref={register({ required: true })} // required
                        />
                        {errors.fullname && (
                            <p className="error">กรุณาป้อนชื่อก่อน</p>
                        )}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email" className="col-md-4 col-form-label">
                        อีเมล์
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            ref={register({ required: true })} // required
                        />
                        {errors.email && (
                            <p className="error">กรุณาป้อนอีเมล์ก่อน</p>
                        )}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        htmlFor="username"
                        className="col-md-4 col-form-label"
                    >
                        ชื่อผู้ใช้
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            ref={register({ required: true })} // required
                        />
                        {errors.username && (
                            <p className="error">กรุณาป้อน username ก่อน</p>
                        )}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        htmlFor="password"
                        className="col-md-4 col-form-label"
                    >
                        รหัสผ่าน
                    </label>
                    <div className="col-md-8">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            ref={register({ required: true })} // required
                        />
                        {errors.password && (
                            <p className="error">กรุณาป้อน password ก่อน</p>
                        )}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        htmlFor="submit"
                        className="col-md-4 col-form-label"
                    ></label>
                    <div className="col-md-8 btn-action">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            id="submit"
                            name="submit"
                            value="ลงทะเบียน"
                        />
                        &nbsp;&nbsp;
                        <input
                            type="button"
                            className="btn btn-danger"
                            // id="reset"
                            // name="reset"
                            value="ล้างข้อมูล"
                            onClick={() => reset()}
                        />
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label
                        htmlFor=""
                        className="col-md-4 col-form-label"
                    ></label>
                    <div className="col-md-8">
                        <Link to="/login">เข้าสู่ระบบ</Link>
                    </div>
                </div>
            </form>
        // </AuthLayout>
    );
};

export default Register;
