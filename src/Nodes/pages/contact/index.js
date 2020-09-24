import React, {useState} from "react";
import classNames from "classnames"
import "../../../assets/styles/pages/contact.scss"

export default function () {
    /**/
    const [disable,setDisable] = useState(true)
    const [name,setName] = useState('')
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    const [nameIsInvalid,setNameIsInvalid] = useState(true)
    const [emailIsInvalid,setEmailIsInvalid] = useState(true)
    const [phoneIsInvalid,setPhoneIsInvalid] = useState(true)

    const [nameIsTouched,setNameIsTouched] = useState(false)
    const [emailIsTouched,setEmailIsTouched] = useState(false)
    const [phoneIsTouched,setPhoneIsTouched] = useState(false)


    const changeNameHandler = (e) =>{
        setName(e.target.value)
        setNameIsTouched(true)
        if(e.target.value.trim().length > 3 && e.target.value.length < 50){
            setNameIsInvalid(false)
            setDisable(false)
            
        }else{
            setNameIsInvalid(true)
            setDisable(true)

        }
    }
    const changeEmailHandler = (e) =>{
        setEmail(e.target.value)
        setEmailIsTouched(true)
        if(e.target.value.trim().match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")){
            setEmailIsInvalid(false)
            setDisable(false)
        }else {
            setEmailIsInvalid(true)
            setDisable(true)

        }
    }
    const changePhoneHandler = (e) =>{
        setPhone(e.target.value)
        setPhoneIsTouched(true)
        if(e.target.value.match("^((\\+374))[- ]?[1-9]{2}[- ]?[0-9]{3}[- ]?[0-9]{3}$")){
            setPhoneIsInvalid(false)
            setDisable(false)
        }else {
            setPhoneIsInvalid(true)
            setDisable(true)
        }
    }

    return (
        <>
            <div className="page-contact">
                <div className="container-contact">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <div className="form-contact">
                <div className="form-container">
                    <form action="">
                        <input
                            className={classNames({"error":nameIsInvalid && nameIsTouched})}
                            onChange={changeNameHandler}
                            type="text"
                            placeholder="Your name*"
                            value={name}
                            required
                        />
                        <input
                            className={classNames({"error":emailIsInvalid && emailIsTouched})}
                            onChange={changeEmailHandler}
                            type="email"
                            placeholder="Email address*"
                            value={email}
                            required
                        />
                        <input
                            className={classNames({"error":phoneIsInvalid && phoneIsTouched})}
                            onChange={changePhoneHandler}
                            type="tel"
                            placeholder="Phone*"
                            value={phone}
                            required
                        />
                        <textarea placeholder="Your message"/>
                        <div className="submit">
                            <input
                                type="submit"
                                value="send message"
                                disabled={nameIsInvalid || emailIsInvalid || phoneIsInvalid}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}