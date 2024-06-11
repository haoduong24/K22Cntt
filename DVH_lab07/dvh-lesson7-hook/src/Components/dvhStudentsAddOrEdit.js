import React, { useEffect, useState } from 'react'

export default function dvhStudentsAddOrEdit({nhpOnSubmit, StudentEdit, isEdit}) {
    // Doi tuong Student
    
    const [dvhStudent, setdvhStudent] = useState(StudentEdit);
    
    useEffect(() => {
        setdvhStudent(StudentEdit);
    }, [StudentEdit])
    //Ham xu ly su kien thay doi tren dieu khien

    const dvhHandleChange = (dvhEvent) => {
        let name = dvhEvent.target.name;
        let value = dvhEvent.target.value;
        
        setdvhStudent(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const dvhHandleSubmit = (dvhEvent) => {
        dvhEvent.preventDefault();
        dvhOnSubmit(dvhStudent);
    }
  return (
    <div>
        <h2>{isEdit ? 'Update Student' : 'Them moi Student'}</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Student ID</span>
                <input name='nhp_Id' value={dvhStudent.nhp_Id} onChange={dvhHandleChange}/>
            </div>
            <div>
                <label>Student Name</label>
                <input name='nhp_StudentName' value={dvhStudent.nhp_StudentName} onChange={dvhHandleChange}/>
            </div>
            <div>
                <label> age</label>
                <input name='nhp_age' value={dvhStudent.nhp_age} onChange={dvhHandleChange}/>
            </div>
            <div className="form-group mb-3">
            <label>Hoạt động:</label>
            <div className="form-check">
              <input
                type="checkbox"
                name='nhp_IsActive'
                checked={dvhStudent.nhp_IsActive}
                onChange={dvhHandleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
            <button onClick={dvhHandleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}