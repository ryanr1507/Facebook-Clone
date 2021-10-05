import { useSession } from "next-auth/client";
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/solid";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/outline";
import { useRef } from "react";
import { db } from "../firebase";

function InputBox() {
    const [session] = useSession();

    // Use reference instead of state to fill the text
    const inputRef = useRef(null);


    const sendPost = (e) => {
        // Use this function to stop the page from refreshing when the button is clicked
        e.preventDefault();

        // If the input field is empty then return
        if (!inputRef.current.value) return;

        // Add message to post
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })


        // Clear inputRef value
        inputRef.current.value = "";

    };
    
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium items-center">
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />


                <form className="flex flex-1">
                    <input 
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                        type="text" 
                        ref={inputRef}
                        placeholder={`What's on your mind, ${session.user.name}?`}  
                    />
                    <button className="hidden" type="submit" onClick={sendPost}>Submit</button>
                </form>
            </div>

            <div className="flex justify-evenlty p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>

        </div>
    )
}

export default InputBox
