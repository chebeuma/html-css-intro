import './style.css'

function Login(){

    return(
        <div className=" login-page ">
    
        
            <form className="flex flex-col border border-black  mx-auto mt-4 w-25% md:w-6/12  space-y-4 text-center border-width-1px">
            <h1 className="text-2xl justify-items-center"><strong>LOGIN</strong></h1>
            <h2 className="text-1xl justify-items-center" >please enter your credentials to login.</h2>
            <div className="space-y-4 justify-items-center">
                <label className="flex flex-col text-start">
                    username:
                    <input className="border border-black p-3 placeholder-username rounded-md"/>
                </label>
                <label className="flex flex-col text-start">
                    password:
                    <input className="border border-black p-3 rounded-md"/>
                </label>
            </div>
            <button className="bg-green-500 p-3 text-white rounded-md">LOGIN</button>
            <p>Not registered?Create an account</p>
            </form>
          
        </div>
 
    )
}
    export default Login