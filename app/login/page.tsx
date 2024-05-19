import { login, signup, signInWithGoogle } from './action'

export default function LoginPage() {
  return (
    <form className=''>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div>
        <button className='bg-orange-400 mr-4' formAction={login}>Log in</button>
        <button className='bg-orange-400 mr-4' formAction={signup}>Sign up</button>
        <button className='bg-orange-400 mr-4' formAction={signInWithGoogle}>Sign in with google</button>
      </div>
    </form>
  )
}