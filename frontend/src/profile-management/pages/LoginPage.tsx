import { Link } from "react-router-dom";

function LoginPage() {
    return (
    <>
        <h1 className="text-4xl text-white font-bold">Log In</h1>

        <nav className="mt-10">
            <Link 
                className="text-center text-white text-lg block"
                to="/auth/register"
            >¿Don't have an account? Register here
            </Link>
        </nav>
    </>
    )
}

export default LoginPage;