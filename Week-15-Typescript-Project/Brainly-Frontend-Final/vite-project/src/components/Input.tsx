
interface InputProps{
    placeholder: string, 
    reference?: any
}

export function Input({ placeholder, reference}: InputProps){
    return <div>
        <input ref={reference} placeholder={placeholder} className="px-4 py-2 border-gray-500 border rounded m-2" type="text"/>
    </div>
}