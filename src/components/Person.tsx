import {FC} from 'react';

interface Props {
    name: string;
    age: number;
    email: string;
    //getName: (name:string) => string;
}

export const Person:FC<Props> = ({name,age,email}) => {

    //const [country,setCountry] = useState("")


    return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>
  );
}
