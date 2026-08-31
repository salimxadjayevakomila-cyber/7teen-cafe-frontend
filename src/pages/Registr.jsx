 import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../utils/axios"; 

const Registr = () => {
    let nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); 

    const onSubmit = async (data) => {
        try {
            const payload = {
                name: data.name.trim(),
                phone: data.phone.trim(),
                password: String(data.password).trim(),
            };

            const res = await instance.post("/auth/register", payload); 
            
            // 1. User va Token ni LocalStorage-ga saqlash
            if (res.data?.token) {
                localStorage.setItem("token", res.data.token);
            }
            
            const userData = res.data?.user || res.data?.data || {
                name: payload.name,
                phone: payload.phone
            };
            localStorage.setItem("user", JSON.stringify(userData));

            // 2. Alert va yo'naltirish
            Swal.fire({
                title: 'Muvaffaqiyatli!',
                text: res.data?.message || "Ro'yxatdan o'tdingiz!",
                icon: 'success',
                background: '#1C2A20',
                color: '#FFFFFF',
                iconColor: '#FFC72C',
                confirmButtonText: 'Profilga o\'tish',
                confirmButtonColor: '#FFC72C',
                customClass: {
                    popup: 'custom-swal-popup',
                    confirmButton: 'custom-swal-btn'
                },
                timer: 2000,
                timerProgressBar: true
            }).then(() => {
                // Agar token bo'lsa to'g'ridan-to'g'ri profilga, bo'lmasa login sahifasiga o'tadi
                if (res.data?.token) {
                    window.location.href = "/profile";
                } else {
                    nav("/login");
                }
            });

        } catch(err) {
            console.error("Register Error:", err);
            const errorMsg = typeof err?.response?.data === "string" 
                ? err.response.data 
                : err?.response?.data?.message || "Ro'yxatdan o'tishda xatolik yuz berdi.";
            
            Swal.fire({
                title: 'Xatolik!',
                text: errorMsg,
                icon: 'error',
                background: '#1C2A20',
                color: '#FFFFFF',
                confirmButtonColor: '#EF4444'
            });
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <span style={styles.badge}>✦ Welcome to 7teen ✦</span>
                    <h2 style={styles.title}>Create Account</h2>
                    <p style={styles.subtitle}>Join us to unlock exclusive perks and special offers</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Name</label>
                        <input 
                            placeholder="Enter your name" 
                            style={styles.input} 
                            {...register("name", { required: true })} 
                        />
                        {errors.name && <span style={styles.errorText}>Please enter your name</span>}
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <input 
                            placeholder="+998" 
                            style={styles.input} 
                            {...register("phone", { required: true })} 
                        />
                        {errors.phone && <span style={styles.errorText}>Please enter your phone number</span>}
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            style={styles.input} 
                            {...register("password", { required: true })} 
                        />
                        {errors.password && <span style={styles.errorText}>Please enter your password</span>}
                    </div>

                    <button type="submit" style={styles.submitBtn}>
                        Sign Up ✨
                    </button>
                </form>

                <div style={styles.footer}>
                    <span style={{ color: "#9CA3AF", fontSize: "13px" }}>Already have an account? </span>
                    <Link to="/login" style={styles.loginLink}>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        minHeight: "100vh",
        backgroundColor: "#152219",  
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    card: {
        width: "100%",
        maxWidth: "420px",
        backgroundColor: "#1C2A20",  
        borderRadius: "24px",
        padding: "40px 32px",
        border: "1px solid #28392C",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        boxSizing: "border-box",
    },
    header: {
        textAlign: "center",
        marginBottom: "28px",
    },
    badge: {
        color: "#FFC72C",  
        fontSize: "11px",
        fontWeight: "800",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
    },
    title: {
        color: "#ffffff",
        fontSize: "30px",
        fontWeight: "800",
        margin: "8px 0 6px 0",
        letterSpacing: "-0.5px",
    },
    subtitle: {
        color: "#9CA3AF",
        fontSize: "13px",
        margin: 0,
        fontWeight: "500",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "18px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    label: {
        color: "#E5E7EB",
        fontSize: "13px",
        fontWeight: "700",
    },
    input: {
        width: "100%",
        backgroundColor: "#111B14",
        border: "1px solid #28392C",
        borderRadius: "14px",
        padding: "14px 16px",
        color: "#ffffff",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.2s ease",
    },
    errorText: {
        color: "#EF4444",
        fontSize: "12px",
        marginTop: "2px",
    },
    submitBtn: {
        backgroundColor: "#FFC72C",
        color: "#1C2A20",
        border: "none",
        borderRadius: "14px",
        padding: "14px",
        fontSize: "15px",
        fontWeight: "800",
        cursor: "pointer",
        marginTop: "10px",
        boxShadow: "0 4px 15px rgba(255, 199, 44, 0.25)",
        transition: "transform 0.1s ease, background-color 0.2s ease",
    },
    footer: {
        marginTop: "28px",
        textAlign: "center",
        borderTop: "1px solid #28392C",
        paddingTop: "20px",
    },
    loginLink: {
        color: "#FFC72C",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: "700",
    },
};

export default Registr;