
import '../index.css'
import { useState } from "react"
export default function Home(){
    const [formData,SubmitFormData] = useState({
        name:""
    })
    const [TableData,SubmitTable]=useState([])

    function HandleForm(e){
        const {name,value} = e.target
        SubmitFormData({...formData,[name]:value});
    }
    function HandleSubmit(){
        SubmitTable([...TableData,formData]);
        SubmitFormData({
            name:""
        })
    }
    function HandleDelete(indexToDelete){
        SubmitTable(TableData.filter((_, index) => index !== indexToDelete));
    }
    return(
        <div>
            <h1>MyTask</h1>
            <div class="form">
            <input 
                type="text"
                name="name"
                placeholder="Enter Name" 
                value={formData.name} 
                onChange={HandleForm}
            />
            <button id='submit' className="bg-blue-500 rounded border border-1 w-30" onClick={HandleSubmit}>Submit</button>
                <br/>
                <table className="mt-4 border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-2">SNo</th>
                            <th className="border border-gray-400 p-2">Value</th>
                            <th className="border border-gray-400 p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map((data,index)=>(
                        <tr key={index}>
                            <td className="border border-gray-400 p-2">{index+1}</td>
                            <td id="print" lassName="border border-gray-400 p-2">{data.name}</td>
                            <td><button id='delete' className="bg-red-500 rounded border border-1 w-20 ml-2" onClick={()=>HandleDelete(index)}>Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}