interface PropType{
    placeholder?: string,
    size: "big" | "small",
    onChange?: (e: any)=> void
}

export function TextInput({placeholder, size, onChange}: PropType) {
    return <input onChange={onChange} style={
        {
            padding: size ==="big"? "20px" : "10px", 
            margin: size === "big"? "20px": "10px",
            borderColor:"black", 
            borderWidth:1, 
            borderRadius:"4px"
        }
    } 
    type="text" 
    placeholder={placeholder} />

}