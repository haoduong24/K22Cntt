import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  //Mock data
  const tvc_listTasks = [
    { tvc_taskId:1, tvc_taskName:"Học lập trình frontend", tvc_level:"Small" },
    { tvc_taskId:2, tvc_taskName:"Học lập trình reactjs",tvc_level:"Medium"},
    { tvc_taskId:3, tvc_taskName:"Lập trình với Frontend - Reactjs",tvc_level:"High"},
    { tvc_taskId:4, tvc_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",tvc_level:"Small"},
   ]
   // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
   const[tvcListTasks,settvcListTasks]=useState(tvc_ListTasks); 
   const tvcHandleSubmit =(tvcParam)=>{
    console.log("app:",tvcParam);
    settvcListTasks(prev =>{
      return{
        ...prev,
        tvcParam
      }
    })
   }
  return (
    
    <div className="container-border">
    <h1>Dương Hào</h1>
    <hr/>
    <div>
      {/*Danh sach list task*/}
      <tvcListTask rendertvcListTasks ={tvcListTasks}/>
    </div>
    <div>
      <tvcTaskAddorEddit tvcOnSubmit={tvcHandleSubmit}/>
    </div>
    </div>
  );
}

export default App;
