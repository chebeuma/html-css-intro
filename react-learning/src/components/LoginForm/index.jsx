import './style.css'

function LoginForm(){
    return(
        <div className='total-page'>
      <div className=" login-page ">
            
        <form className="flex flex-col bg-white border border-white my-20  w-25% md:w-6/12  space-y-4 text-center border-width-1px">
            <form className="flex flex-col mx-auto mt-12 w-50% md:w-6/12 space-y-12 text-center border-width-4px">
                <h1 className="text-4xl justify-items-center mt-4"><strong>LOGIN</strong></h1>
                  <h2 className="text-2xs justify-items-center">please enter your credentials to login.</h2>
                     <div className="space-y-4 justify-items-center">
                     <label className="flex flex-col text-start p-0 mb-3">
                       username:
                     <input className="border border-black p-4  type-text placeholder-username rounded-md "/>
                     </label>
                     <label className="flex flex-col text-start mt-4">
                       password:
                     <input className="border border-black p-4 rounded-md"/>
                     </label>
                     </div>
                <button className="bg-green-500 p-4 text-white rounded-md mb-4">LOGIN</button>
                <p className='p-3 mt-4 text-xs'>Not registered?<span style={{color: 'green'}}>Create an account</span></p>
            </form>
            </form>
        </div>
      </div>  
 )
}

export default LoginForm