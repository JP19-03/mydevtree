import { Link } from "react-router-dom";

function LoginPage() {
    return (
    <>
        <div>Login Page</div>

        <nav>
            <Link to="/auth/register">
                ¿Don't have an account? Register here
            </Link>
        </nav>
    </>
    )
}

export default LoginPage;