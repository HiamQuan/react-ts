import { Product } from "../types/products";


type ShowInfoProps = {
    person: Product;
};

 export const ShowInfo = (props: ShowInfoProps) => {
     
    return(
        <div>
            <br/>
            <br/>
            <div> Hi am {props.person.name}. {props.person.age} Tuoi</div>
        </div>
    );
};

export const ShowInfoChange = (person: Product) => {
    person.name = " React ";
    person.age = 26;
};