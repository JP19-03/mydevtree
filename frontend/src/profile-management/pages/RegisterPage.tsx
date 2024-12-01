import { Link } from "react-router-dom";

function RegisterPage() {
    return (  
    <>
        <div>Register Page</div>

        <nav>
            <Link to="/auth/login">
                Already have an account? Login here
            </Link>
        </nav>
    </>
    );
}

export default RegisterPage;