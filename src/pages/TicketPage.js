import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import CategoryContext from '../context'

const TicketPage = ({editMode}) => {
  // const editMode = false 
  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })
  

  let {id} = useParams()
  // EDIT FETCH


  const fetchData = async () => {
   const response = await axios.get(`https://62cd63d5066bd2b69924c7ad.mockapi.io/ticket/${id}`)
   setFormData(response.data)
  }
 
  useEffect(() => {
    if(editMode) fetchData()
  }, [])


  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,[name]: value,
    }))
  }

  
  const handlerSubmit = async (e) => {
     e.preventDefault()
     if (editMode) {
      const response = await axios.put(`https://62cd63d5066bd2b69924c7ad.mockapi.io/ticket/${id}`, {
         title:formData.title,
         description:formData.description,
         progress:formData.progress,
         category:formData.category,
         priority:formData.priority,
         status:formData.status,
         owner:formData.owner,
         avatar:formData.avatar
      })
      const success = response.status === 200
      if (success) {
        navigate('/')
      }
    }

      if(!editMode) {
      const response = await axios.post('http://62cd63d5066bd2b69924c7ad.mockapi.io/ticket', {
         title:formData.title,
         description:formData.description,
         progress:formData.progress,
         category:formData.category,
         priority:formData.priority,
         status:formData.status,
         owner:formData.owner,
         avatar:formData.avatar
      })
      console.log(response.status)
      const success = response.status === 201
      if(success) {
        navigate('/')
      }
    }
    }

    const { categories, setCategories } = useContext(CategoryContext)

  // const categories = ["test1","test2","test3"]
  console.log(categories)

  

  return (
    <div className='ticket'>
        <h1>{editMode ? 'Update your Ticket' : "Create a Ticket"}</h1>
        <div className='ticket-container'>
          <form onSubmit={handlerSubmit}> 
             <section>
              <label htmlFor='title'>Title</label>
              <input 
              id='title'
              name='title'
              type='text'
              onChange={handleChange}
              required={true}
              value={formData.title}
              />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />
            <label>Category</label>
            <select 
            name='category'
            value={formData.category || categories[0]}
            onChange={handleChange}>
          {categories?.map((category, _index) => (
                <option key={_index} value={category}>{category}</option>
              ))}
            </select>
             <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />
                 <label>Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
             </div>
{/* 
            {editMode && 
            <> */}
            <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status == 'done'} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status == 'working on it'}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status == 'stuck'} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status == 'not started'}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
                {/* </> */}
              {/* //  */}
              {editMode == true ? <button type="submit"  className='submitBtn'>Edit Save</button> : <input type="submit" className='submitBtn'/>}
       
             </section>
             
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="owner"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={handleChange}
            />
            <div className="img-preview">
              {formData.avatar && (
                <img src={formData.avatar} alt="image preview" />
              )}
            </div>
          </section>
          </form>
        </div>
    </div>
  )
}

export default TicketPage