import React, { useState } from 'react'

export default function tvcTaskAddorEddit() {
  //doi tuong task
  const tvcTaskObj ={
    tvc_taskid:0,
    tvc_taskName:"",
    tvc_level:""
  }
  const [tvcTask, settvcTask]=useState(tvcTaskObj);
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
  return (
    <div>
      <h2>Them moi task</h2>
      <form>
        <div class='input-group mb-3'>
      <span class='input-group-text' id="basic-addon1"></span>
      <input type="text"
      name='tvc_taskId' value={tvcTask.tvc_taskid} onChange={tvcHandleChange} 
      class="form-control" placeholder="Usename" aria-describedby="bassic-addon1"></input>
        </div>
        <div>
          <label>Task ID</label>
          <input name='tvc_taskId' value={tvcTask.tvc_taskid} onChange={tvcHandleChange} />
        </div>
        <div>
          <label>Task Name</label>
          <input name='tvc_taskName' value={tvcTask.tvc_taskName} onChange={tvcHandleChange} />
        </div>
        <div>
          <label>Task Level</label>
          <select name='tvc_level' value={tvcTask.tvc_level} onChange={tvcHandleChange}>
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
