import Image from "next/image";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [selelctedFile, setSelectedFile] = useState(null);

  async function handelSubmit(e) {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "post"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });
    console.log("new Post added to dos ID", docRef.id);

    const imageRef = ref(storage, `post/${docRef.id}`);

    await uploadString(imageRef, selelctedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "post", docRef.id), {
          postImage: downloadURL,
        });
      }
    );

    setSelectedFile(null);
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  function removeImage() {
    setSelectedFile(null);
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className=" flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
          alt="profile img"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-6 focus:outline-none"
            ref={inputRef}
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          {
            <button hidden type="submit" onClick={handelSubmit}>
              Submit
            </button>
          }
        </form>

        {selelctedFile && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 object-contain"
              src={selelctedFile}
              alt="files"
              width={50}
              height={50}
            />
            <p className="text-xs s text-red-500 text-center">remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-wellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling-Activity</p>
        </div>
      </div>
    </div>
  );
}
export default InputBox;
