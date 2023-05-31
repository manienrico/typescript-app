import {FC,ChangeEvent,useState} from 'react';

interface Props {
    name: string;
    age: number;
    email: string;
    //getName: (name:string) => string;
}

export const Person:FC<Props> = ({name,age,email}) => {

    const [country,setCountry] = useState<string | null>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value)
    }

    return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input
       type="text" 
       placeholder='Write your country'
       onChange={handleChange}

        />
      {country}
    </div>
  );
}
