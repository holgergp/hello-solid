import {createEffect, createSignal} from "solid-js";

interface HelloProps {
    text: string
}

export const Hello = (props: HelloProps) =>{
    const [text, setText] = createSignal(props.text)
    createEffect(() => console.log(`${text()}`));
    console.log("Rendering");
    return (<p onClick={()=> setText("Youtube")}>{text()}</p>)
}
