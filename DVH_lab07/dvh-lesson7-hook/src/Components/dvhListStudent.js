import React from 'react'

export default function dvhListStudent({renderdvhListStudents, removeItem, editItem}) {

    //render data

    let dvhElementStudent = renderdvhListStudents.map((Student, index) => {
        return ( 
            <>
                <tr key={index}>
                    <td>{index +1}</td>
                    <td>{Student.dvh_Id}</td>
                    <td>{Student.dvh_StudentName}</td>
                    <td>{Student.dvh_age}</td>
                
                    <td>
                        <input
                            type="checkbox"
                            checked={Student.dvh_IsActive}
                            readOnly
                        />
                    </td>
                    <td>
                        <button className='btn btn-success' onClick={() => editItem(Student)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => removeItem(Student.dvh_Id)}>Remove</button>
                    </td>
                </tr>

            </>
        )
    })
    
  return (
    <div>
        <h2>Danh sach cac nhiem vu</h2>
        <table className='table table-bordered'>
            <thead>
                    <tr>
                        <th>STT</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student age</th>
                        <th>active</th>
                        
                    </tr>
            </thead>

            <tbody>
                {dvhElementStudent}
            </tbody>
        </table>
    </div>
  )
}   