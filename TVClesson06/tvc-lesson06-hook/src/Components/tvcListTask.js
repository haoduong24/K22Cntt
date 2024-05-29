import React from 'react'

export default function tvcListTask({rendertvcLiskTasks}) {
  console.log(rendertvcLiskTasks);

  //render data
  let tvcElementTask  = rendertvcLiskTasks.map((task,index)=>{
    return(
      <>
      <tr key={index}>
        <td>{index+1}</td>
        <td>{task.tvc_taskId}</td>
        <td>{task.tvc_taskName}</td>
        <td>{task.tvc_task_level}</td>
        <td>
          <button className='btn btn-success'>Edit</button>
          <button className='btn btn-danger'>Remove</button>
        </td>
      </tr>
      </>
    )
  })
  return (
    <div>
      <h2>Danh sach cac nhiem vu</h2>
        <table className='table table-bordered'>
            <thread>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thread>
            <tbody>
                
            </tbody>
        </table>
    </div>
  )
}
