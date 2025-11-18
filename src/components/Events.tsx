import  { useState } from 'react'

const Events = () => {
    const [name, setName] = useState<string>("")
    const [attendees, setAttendee] = useState<string[]>([])
    const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //prevent form reload
        console.log("Submitting..")
        if(name) {
            
            setAttendee([...attendees, name])
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        console.log('Input change: ${e.target.value}');
    }
  return (
    <div>
        <h2>Event registration</h2>
        <form onSubmit={handleRegistration}>
            <input 
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder='Enter your name'
            />
            <button type="submit">Register</button>
        </form>

        <h3>Attendees</h3>
        <ul>
            {
                attendees.map((attendees, index) => (
                    <li key={index}>{attendees}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Events