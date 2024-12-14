import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insert } from './reduxcrud/useraction'


const UserComponent = () => {
    const alldata = useSelector((state)=>state.data)
    console.log("all data");
    console.log(alldata);
    
    
    const [data,setData]=useState({
        name:"",
        age:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const dispatch = useDispatch()
    const saveData = (e)=>{
        e.preventDefault()
        console.log(data);
        dispatch(insert(data))
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name: <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
        <br /><br />
        Age: <input type="number" name="age" id="age" value={data.age} onChange={handleChange} />
        <br /><br />
        <input type="submit" name="save" value="Save" />
        <br /><br />
      </form>
      <br /><br />
      <table>
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
        </thead>
    <tbody>
        {
          alldata.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                </tr>
            )
          })  
        }
    </tbody>
      </table>
    </div>
  )
}

export default UserComponent