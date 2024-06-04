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
   const tvcHandleSubmit = (tvcParam) => {
    if (tvcAddOrEdit === false) {
      // khi thêm mới
      setTvcListTasks((prev) => {
        return [...prev, tvcParam];
      });
    } else {
      // submit khi sửa
      for (let i = 0; i < tvcListTasks.length; i++) {
        if (tvcListTasks[i].tvc_taskId == tvcParam.tvc_taskId) {
          tvcListTasks[i] = tvcParam;
        }
      }
      //  setTvcListTasks(tvcListTasks);
      setTvcListTasks((prev) => {
        return [...prev];
      });
    }
  };
   //ham xu ly đón dữ liệu sửa
   // lữu trữ strate
   const task={tvc_taskId:0, tvc_taskName:"HD", tvc_level:"small"}
   const[tvcTask,settvcTask]=useState(task); // dùng để render form
   // quản lí form khi thêm / sửa
   const[tvcAddorEdit,setTvcAddorEdit] = useState(false); // Them 
   const HandleEdit=(param)=>{
      settvcTask(param);
      setTvcAddorEdit(true);
   }
  return (
    
    <div className="container-border">
    <h1>Dương Hào</h1>
    <hr/>
    <div>
      {/*Danh sach list task*/}
      <tvcListTask rendertvcListTasks ={tvcListTasks}
                    onTvcEdit={tvcHandleEdit}/>
    </div>
    <div>
      <tvcTaskAddorEddit tvcOnSubmit={tvcHandleSubmit}
                          renderTvcAddOrEdit={tvcAddorEdit}
                          renderTvcTask={tvcTask}/>
    </div>
    </div>
  );
}

export default App;
