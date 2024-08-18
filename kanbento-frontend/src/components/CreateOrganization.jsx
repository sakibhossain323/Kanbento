import React, { useEffect, useState } from 'react'
import { createOrganizationService } from '../services/OrganizationService'
import { useAuthContext } from './AuthContex'
import { getUserByUsername } from '../services/KanbentoUserService';

const CreateOrganization = () => {


    const { user, setUser } = useAuthContext();
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [email,setEmail] = useState('')
    const [ownerId,setOwnerId] = useState('')

    
        useEffect(() => {
            const fetchOwnerId = async () => {
                try{
                    console.log('User => ' + user)
                    const response = await getUserByUsername(user)
                    const ownerId = response.data.id
                    setOwnerId(ownerId)
                }catch(err){
                    console.log(err)
                }
            }
            fetchOwnerId()
        }, [user])
    


    function saveOrganization(e) {
        e.preventDefault()
        let organization = {name, description, location, email, ownerId}
        console.log('Organization => ' + JSON.stringify(organization))


        createOrganizationService(organization).then(res => {
            console.log('Response => ' + JSON.stringify(res.data))
            alert('Organization created successfully')
        })
    }

  return (
    <div className='conatiner'>
        <br></br> <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Create Organization</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Organization Name:</label>
                            <input
                                type='text' 
                                placeholder='Enter Organization Name' 
                                name='organizationName' className='form-control'
                                value={name} onChange={(e) => setName(e.target.value)} 
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Description:</label>
                            <input
                                type='text' 
                                placeholder='Enter Description' 
                                name='description' className='form-control'
                                value={description} onChange={(e) => setDescription(e.target.value)} 
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Location:</label>
                            <input
                                type='text' 
                                placeholder='Enter Location' 
                                name='location' className='form-control'
                                value={location} onChange={(e) => setLocation(e.target.value)} 
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='email' 
                                placeholder='Enter Email' 
                                name='email' className='form-control'
                                value={email} onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    
                        <button className='btn btn-success' onClick={(e) => saveOrganization(e)}>Create</button>
                        
                    </form>

                </div>

            </div>

        </div>

    </div>
  )
}

export default CreateOrganization