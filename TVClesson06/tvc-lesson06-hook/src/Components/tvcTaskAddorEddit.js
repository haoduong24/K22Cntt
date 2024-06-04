import React, { useEffect, useState } from 'react'

export default function tvcTaskAddorEddit({tvcOnSubmit, renderTvcTask, tvcTaskAddorEddit}) {
  console.log("tvcTaskAddorEddit:", renderTvcTask, tvcTaskAddorEddit);
  //doi tuong task
  const tvcTaskObj ={
    tvc_taskid:0,
    tvc_taskName:"",
    tvc_level:""
  }
  //const [tvcTask, settvcTask]=useState(tvcTaskObj);
  const [tvcTask, settvcTask]=useState(renderTvcTask);
  useEffect(()=>{
        settvcTask(renderTvcTask);
  },[renderTvcTask]);
  console.log("State:",tvcTask);
  //ham xu ly thay doi dieu khien
  const tvcHandleChange=(tvcEvent)=>{
    let name = tvcEvent.target.name;
    let value= tvcEvent.target.value;

    settvcTask(prev => {
      return{
        ...prev,
        [name]:value,
      }
    })
    console.log(tvcTask);
  }
  const tvcHandleSubmit=(tvcEvent)=>{
    tvcEvent.preventDefault();
    tvcOnSubmit(tvcTask);
  }

  const tvcTitle=renderTvcAddOrEdit===false?"Them moi task:":"Sua task ";
  return (
    <div>
      <h2>Them moi task</h2>
      <form>
        <div className='input-group mb-3'>
      <span className='input-group-text' id="basic-addon1"></span>
      <input type="text"
      className='tvc_taskId' value={tvcTask.tvc_taskid} onChange={tvcHandleChange} 
      class="form-control" placeholder="Usename" aria-describedby="bassic-addon1"></input>
        </div>
        <div>
          <label>Task ID</label>
          <input className='tvc_taskId' value={tvcTask.tvc_taskid} onChange={tvcHandleChange} />
        </div>
        <div>
          <label>Task Name</label>
          <input className='tvc_taskName' value={tvcTask.tvc_taskName} onChange={tvcHandleChange} />
        </div>
        <div>
          <label>Task Level</label>
          <select className='tvc_level' value={tvcTask.tvc_level} onChange={tvcHandleChange}>
            <option value={'Small'}>Small</option>
            <option value={'Medium'}>Medium</option>
            <option value={'High'}>High</option>
          </select>
        </div>
        <button onClick={tvcHandleSubmit}>Ghi lai</button>
      </form>
    </div>
  )
}
