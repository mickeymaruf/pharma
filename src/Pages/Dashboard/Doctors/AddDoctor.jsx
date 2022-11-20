import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import FieldError from '../../../components/FieldError';
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate();
    const [getImage, setGetImage] = useState("");
    const [imageErr, setiImageErr] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setGetImage(acceptedFiles[0]);
        setiImageErr(null);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: () => fetch('http://localhost:5000/appointmentSpecialty')
            .then(res => res.json())
    });
    const onSubmit = data => {
        if (!getImage) {
            setiImageErr("Image is required");
            return;
        }

        const formData = new FormData();
        const image = formData.append('image', getImage);
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                data.image = imgData.data.display_url
                // send doctor data to server
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: 'Bearer ' + localStorage.getItem('accessToken')
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        toast.success(data.name + ' is added successfully');
                        navigate('/dashboard/manage-doctors');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });

        // data.image = getImage;
    }
    return (
        <section className='p-5 md:px-16 md:py-10'>
            <h3 className='text-3xl mb-3'>All Users</h3>
            <div className="card w-full max-w-lg shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h3 className='text-2xl text-center mb-3'>Register</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Name</span>
                        </label>
                        <input type="text" {...register('name', { required: "Enter your name" })} placeholder="name" className="input input-bordered border-[#1152783b]" />
                        {
                            errors.name && <FieldError message={errors.name?.message} />
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Email</span>
                        </label>
                        <input type="text" {...register('email', {
                            required: "Email is required",
                            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Please provide a valid email!" }
                        })} placeholder="email" className="input input-bordered border-[#1152783b]" />
                        {
                            errors.email && <FieldError message={errors.email?.message} />
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Specialty</span>
                        </label>
                        <select {...register('specialty', { required: "Select a specialty" })} className="select select-bordered border-[#1152783b]">
                            <option disabled selected></option>
                            {
                                isLoading ||
                                specialties.map(specialty => <option key={specialty._id}>
                                    {specialty.name}
                                </option>)
                            }
                        </select>
                        {
                            errors.specialty && <FieldError message={errors.specialty?.message} />
                        }
                    </div>
                    <div className='p-10 text-center border-[3px] mt-3 border-dashed border-[#1152783b]' {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>{getImage ? getImage?.name : "Drag 'n' drop some files here, or click to select files"}</p>
                        }
                    </div>
                    {
                        imageErr && <FieldError message={"Image is required"} />
                    }
                    <div className="form-control mt-2">
                        <button className="btn-secondary py-[14px] text-white">Add A Doctor</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;