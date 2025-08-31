export function random(len: number){
    let options = "asdfkjuritolgnv12345986mjd70";
    let length = options.length;

    let ans = "";
    for(let i=0;i<len;i++)
    {
        ans+=options[Math.floor((Math.random() * length))]; // 0 -> 28
    }

    return ans;

}