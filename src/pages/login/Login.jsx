// import AuthLayout from "../../components/layouts/auth/AuthLayout";
// import { Link, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

// useHistory เป็นเครื่องมือสำหรับเปลี่ยนหน้าไปมา จะส่งหน้าไปไหน จะใช้คำสั่ง history.push

const Login = () => {
    // สร้างตัวแปรแบบ State ไว้รับค่าจากฟอร์ม
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // สร้างตัวแปรสำหรับเปลี่ยนหน้า
    // let history = useHistory(); // history.push('/backend/dashboard')

    // เช็คว่าถ้าเคย Login แล้ว (มีค่า Local Storage key fullname แล้ว) ให้ getDirect ไปหน้า dashboard เลย
    if (localStorage.getItem('fullname') != null) {
        // history.push('/backend/dashboard')
        window.location = '/backend/dashboard'
    }

    // สร้างฟังชั่นการ submit form แบบง่ายๆ
    const jujuSubmit = (e) => {
        e.preventDefault();

        // console.log('username: ' + username ,'password: ' + password);

        if (username === "2407" && password === "1234") {
            // alert("login succuss");
            let timerInterval;
            Swal.fire({
                html: "กำลังเข้าสู่ระบบ <b></b>",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent();
                        if (content) {
                            const b = content.querySelector("b");
                            if (b) {
                                b.textContent = Swal.getTimerLeft();
                            }
                        }
                    }, 2000);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                // ถ้าเกิดเวลา timer หมดแล้วให้ส่งไปหน้า backend
                if (result.dismiss === Swal.DismissReason.timer) {
                    // ส่งไปหน้า Backend / Dashboard
                    // history.push("/backend/dashboard");
                    window.location = '/backend/dashboard'

                    // เก็บชื่อผู้ใช้ลง Local Storage
                    localStorage.setItem('fullname', 'Samit Koyom')
                    /* // เราสามารถเช็ค localstorage ได้ ปกติแล้วมันจะเก้บไว้ที่ browser
                    // inspect แล่้วไปที่ application
                    // หา Storage และ Local Storage
                    // และจะมี Session Storage มันคือ เก็บค่าไว้ เมื่อปิด Browser ก็จะหายไป
                    // แต่ Local Storage มันจะยังอยู่ใน Browser ของเครื่องนั้นๆ ตลอดยกเว้น clear cacth หรือ cookies */
                    /* local storage จะใช้แค่ set กับ get */
                }
            });
        } else {
            // alert("login fail");
            Swal.fire({
                title: "มีข้อผิดพลาด!",
                text: "ข้อมูลเข้าระบบไม่ถูกต้อง",
                icon: "error",
                confirmButtonText: "ลองใหม่อีกครั้ง",
                allowOutsideClick: false,
                allowEscapeKey: true,
            });
        }
    };

    document.title = "Login | Smart Stock"
    return (
        // <AuthLayout title="Login">
            <form className="card p-4 col-md-4 my-form" onSubmit={jujuSubmit}>
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>

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
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
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
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
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
                            value="เข้าสู่ระบบ"
                        />
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label
                        htmlFor=""
                        className="col-md-4 col-form-label"
                    ></label>
                    <div className="col-md-8">
                        <Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link>
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label
                        htmlFor=""
                        className="col-md-4 col-form-label"
                    ></label>
                    <div className="col-md-8">
                        <Link to="/register">ลงทะเบียน</Link>
                    </div>
                </div>
            </form>
        // </AuthLayout>
    );
};

export default Login;
