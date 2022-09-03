// import { useState } from 'react'

// const initialForm ={
//     name:"",
//     email:"",
//     password:""
// }

// function Form() {
//     const [form,setForm] = useState(initialForm)
//     const [name,setName]=useState("")

//     const handleInput =(event)=>{
//         console.log('value',event.target.value)
//             setName(event.target.value)
//             setForm(prevForm) =>({...prevForm,name:event.target.value})
//     }
//     console.log('name', name)
    
//     return(
//        <form className="flex flex-col border border-black mt-4 w-full md:w-6/12 lg:w-3/12 mx-auto space-y-4">
//        <h1 className="text-3xl"><strong>register</strong></h1>
//        <div className="space-y-4">
//        <label className="flex flex-col text-start">
//        name:
//        <input className="border border-black p-2 rounded-md"name='name' onChange={handleInput}/>
//         </label>
//         <label className="flex flex-col text-start">
//        email:
//     <input className="border border-black p-2 rounded-md" name='name' onChange={handleInput}/>
//       </label>
//        <label className="flex flex-col text-start">
//         password:
//         <input className="border border-black p-2"name='name' onChange={handleInput}/>
//        </label>
//        </div>

       
//       <button className="bg-blue-500 p-2 text-white rounded-md">submit</button>
//       </form>
//     )
// }
// export default Form