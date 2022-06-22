import { db, auth, storage } from '../../service/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Nuevo() {
    const [user, loading, error] = useAuthState(auth);
    const [title, setTitle] = useState('')
    const [fecha, setFecha] = useState('')
    const [genero, setGenero] = useState('')
    const [director, setDirector] = useState('')


    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)


    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload')
        // async magic goes here...
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const sotrageRef = ref(storage, `files/${imageAsFile.name}`)
        const uploadTask = uploadBytesResumable(sotrageRef, imageAsFile);
        uploadTask.on('state_changed',
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot)
            }, (err) => {
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    alert("archivo subido ", downloadURL)
                    console.log("File available at", downloadURL);
                    setImageAsUrl(downloadURL);
                    console.log("url: ", imageAsUrl);


                });
            })
    }
    /* function to add new file to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'files'), {
                user: user?.email,
                title: title,
                genero: genero,
                fecha: fecha,
                director: director,
                imageUrl: imageAsUrl,
                created: Timestamp.now()
            })
            alert("Guardado correctamente")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="container3" style={{ marginTop: "7em" }}>
            <h9 class="text-center ">Agregar Pelicula</h9>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                    placeholder="Titulo" onChange={(e) => setTitle(e.target.value.toUpperCase())}
                    value={title} />
                    </div>
                    <label for="exampleFormControlTextarea1" class="form-label">Año de estreno</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                       placeholder="Estreno"  onChange={(e) => setFecha(e.target.value)}
                     value={fecha}
                 
                 ></textarea> 
                    <div>
                    <label for="exampleFormControlTextarea1" class="form-label">Director</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                       placeholder="Director" onChange={(e) => setDirector(e.target.value)}
                     value={director}
                 
                 ></textarea> 
                   
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Genero</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                     placeholder="Genero"  onChange={(e) => setGenero(e.target.value)}
                    value={genero}
                
                ></textarea> 
                
                
            </div>
   
            <div>
                <label for="formFileLg" class="form-label">Archivo</label>
                <input onChange={handleImageAsFile} class="form-control form-control-lg" id="formFileLg" type="file" />
            </div>
            <div class="row">
                <div class="col1">
                    <button onClick={handleFireBaseUpload} type="button" class="btn btn-basic">Subir Pelicula</button>
                </div>
                <div class="col2">
                    <button onClick={handleSubmit} type="button" class="btn btn-basic">Guardar Cambios</button>
                </div>
            </div>
        </div>
    )
}
