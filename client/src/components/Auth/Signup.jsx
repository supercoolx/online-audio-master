import { Link, useNavigate } from "react-router-dom"
import userService from "services/userService"

const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        userService.signup({ name, email, password })
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
        <div className="container flex gap-10 mx-auto my-28">
            <div className="flex-1 pl-40">
                <div className="mt-5 text-4xl font-bold">Sign up today an start<br />enjoying LANDR for FREE.</div>
                <div className="mt-10 space-y-3 text-lg text-slate-400">
                    <li>Unlimited master previews with our AI-driven engine</li>
                    <li>Download 6k+ exclusive, royalty-free samples</li>
                    <li>Connect with 3m+ creators to buy and sell services</li>
                    <li>Host video calls &amp; stream high quality audio for real time collabs</li>
                    <li>Access your music anywhere with unlimited cloud storage</li>
                </div>
            </div>
            <div className="flex-1">
                <div className="bg-white rounded-sm max-w-[450px] p-10">
                    <div className="flex gap-3 items-center mt-5 before:h-[1px] after:h-[1px] before:bg-slate-400 after:bg-slate-400 before:flex-1 after:flex-1 text-slate-400">or sign up with email</div>
                    <form onSubmit={handleSubmit} className="text-black">
                        <input type="name" name="name" placeholder="Name" className="w-full px-4 py-3 mt-5 bg-transparent border outline-none border-slate-200 focus:border-slate-400" />
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 mt-3 bg-transparent border outline-none border-slate-200 focus:border-slate-400" />
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 my-3 bg-transparent border outline-none border-slate-200 focus:border-slate-400" autoComplete="on" />
                        <button type="submit" className="w-full py-3 mt-5 text-black bg-teal-400">Try LANDR for free</button>
                    </form>
                    <div className="mt-3 text-center text-slate-600">
                        Already have an account? <Link to="/login" className="underline">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup