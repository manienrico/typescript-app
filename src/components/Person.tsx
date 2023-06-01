import {FC,ChangeEvent,useState} from 'react';

export enum HairColor {      //define a set of options
  Blonde = "Your hair is blonde",
  Brown = "Cool hair color",
  Pink = "Wow, that's cool"
}

interface Props {     //define an object
    name: string;
    age: number;
    email: string;
    //getName: (name:string) => string;
    hairColor?: HairColor;
}

type NameType = "Pedro" | "Jack"



export const Person:FC<Props> = ({name,age,email,hairColor}) => {

    const [country,setCountry] = useState<string | null>("")

    const nameForType:NameType = "Jack"

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
        <br/>
      {country}
      <p>{hairColor}</p>
    </div>
  );
}
