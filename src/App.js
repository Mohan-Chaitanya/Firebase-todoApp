import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Todos from "./Todos"
import firebase from "firebase";

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
  <main>
    <button onClick={signInWithGoogle}>Google SignIn</button>
  </main>
);


const App = () => {
  const [user] = useAuthState(auth);
  return user ? <Todos /> : <SignIn />
}
export default App;
