import { Link, useNavigate } from "react-router-dom"
import userService from "services/userService"

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userService.login({ email, password })
            .then(res => {
                if (res.data.success) {
                    localStorage.setItem("token", res.data.token);
                    navigate('/');
                }
                else alert(res.data.message);
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="w-[300px] mx-auto my-10">
            <div className="flex justify-center">
                <Link to="/"><img src="/logo.png" className="w-20" alt="logo" /></Link>
            </div>
            <div className="mt-5 text-3xl font-bold text-center">Log in to LANDR</div>
            <div className="mt-2 text-center text-slate-400">Or <Link to="/signup" className="underline">Create Account</Link></div>
            <div className="flex gap-3 items-center mt-5 before:h-[1px] after:h-[1px] before:bg-slate-600 after:bg-slate-600 before:flex-1 after:flex-1 text-slate-500">or log in with email</div>
            <form onSubmit={handleSubmit} className="mt-5">
                <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 bg-transparent border outline-none border-slate-400 focus:border-slate-200" />
                <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 my-3 bg-transparent border outline-none border-slate-400 focus:border-slate-200" autoComplete="on" />
                <Link to="forgot-password" className="underline text-slate-400">Forgot password?</Link>
                <label className="flex gap-3 mt-3 cursor-pointer">
                    <input type="checkbox" name="remember" id="remember" />
                    Keep me logged in
                </label>
                <button type="submit" className="w-full py-3 mt-5 text-black bg-teal-400">Log In</button>
            </form>
        </div>
    )
}

export default Login;