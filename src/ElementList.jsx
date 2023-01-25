import { useSelector } from "react-redux";

function ElementList() {
    const elementList = useSelector(store => store.elementList);

    return(
        <div>
            <p>Element List aka TV Channel</p>
            <ul>
                {elementList.map((element, index) => (
                    <li key={index}>
                        {element}
                    </li>
                ))}
            </ul>
        </div>


    )
}


export default ElementList;