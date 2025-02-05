import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login Form</h2>
      
      <div className="tab-group">
        <button className="tab-button active">Login</button>
        <button className="tab-button">Signup</button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="input-field"
            placeholder="Email Address"
          />
        </div>

        <div className="input-group">
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            className="input-field"
            placeholder="Password"
          />
        </div>

        <a href="#" className="forgot-password">
          Forgot password?
        </a>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          Login
        </button>

        <div className="signup-prompt">
          Not a member?
          <a href="#" className="signup-link">Signup now</a>
        </div>
      </form>
    </div>
  );
}

export default App;
