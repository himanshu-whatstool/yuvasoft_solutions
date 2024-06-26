import { useContext, useState, useEffect } from "react"
import { BlogListContext } from "../context/formContext"
import { Close } from '@mui/icons-material';

export const MyFunc = () => {
  return (
    <section>
      <MyForms />
      <TableUi />
    </section>
  )
}

export const MyForms = () => {

  const { addPost } = useContext(BlogListContext)

  const [userId, setUserId] = useState('')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const handleMobile = (val) => {
    let checkedVal = val?.replace(/[^0-9]/ig, '')
    setMobile(checkedVal)
  }
  const [email, setEmail] = useState('')


  const [formStatus, setFormStatus] = useState(true)
  const validateForm = () => {
    if (name?.length !== 0 && userId?.length !== 0 && mobile?.length !== 0 && email?.length !== 0) {
      setFormStatus(false)
    } else {
      setFormStatus(true)
    }
  }
  useEffect(() => {
    validateForm()
  }, [name, email, mobile, userId])

  const handleSubmit = () => {
    const payload = {
      userId,
      name,
      mobile,
      email,
    }
    setUserId(''), setName(''), setMobile(''), setEmail('')
    addPost(payload)
    console.log('submit', payload);
  }

  return (
    <section className="container">
      <div className="row mt-5">
        <section className='col-7'>
          <div>
            <label htmlFor="foruserid">User_ID</label>
            <input onChange={(e) => setUserId(e.target.value)} value={userId} type="text" className="form-control" id="foruserid" placeholder="Enter User_ID" />
          </div>
          <div className='mt-3'>
            <label htmlFor="forname">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="forname" placeholder="Enter your name" />
          </div>
          <div className='mt-3'>
            <label htmlFor="fornumber">Mobile Number</label>
            <input onChange={(e) => handleMobile(e.target.value)} maxLength={10} value={mobile} type="number" className="form-control" id="fornumber" placeholder="Enter Number" />
          </div>
          <div className='mt-3'>
            <label htmlFor="foremail">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="foremail" placeholder="Enter your email" />
          </div>
          <div>
            <button disabled={formStatus ? true : false} onClick={() => handleSubmit()} className="btn btn-sm text-white mt-4" style={{ background: '#616874', padding: '10px 28px' }} >Submit</button>
          </div>
        </section>
      </div>
    </section>
  )
}

export const TableUi = () => {

  const { postList } = useContext(BlogListContext)

  const { deletePost } = useContext(BlogListContext)
  // onClick={() => deletePost(item.id)} ><Close style={{ fontSize: '12px', cursor: 'pointer' }} /></span>

  return (
    <section className="container" style={{ marginTop: '40px' }}>
      <div className="row">
        <div className="col-10">
          <section>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  postList.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                        <td onClick={() => deletePost(item.id)}><Close style={{ fontSize: '12px', cursor: 'pointer' }} /></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </section>
  )
}











