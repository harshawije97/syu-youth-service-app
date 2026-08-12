import { LoginForm } from "./components/login-form";

function App() {
  return (
    <main className="w-full h-screen">
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center p-16">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default App;
