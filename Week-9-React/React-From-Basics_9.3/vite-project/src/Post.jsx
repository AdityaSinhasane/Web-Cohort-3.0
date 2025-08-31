export function PostComponent({name, subtitle, time, image, description}) {
  return (
    <div style={{ width: 200, backgroundColor: 'white', borderRadius: 10, borderColor:'lightgray', borderStyle: 'solid', borderWidth: 1, padding: 10, margin: 10}}>
      <div style={{display:"flex"}}>
        <img src={image} style={{width:30, height:30, borderRadius:20}} alt="Post" />
        <div style={{fontSize:10, marginLeft:10}}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && <div style={{display:"flex"}}>
            <div>{time}</div>
            <img src={"https://t3.ftcdn.net/jpg/15/10/70/26/240_F_1510702621_ztDmh9BpGcjE4DiHtvJRhxKslNfYBJtG.jpg"} style={{width:12, height:12, marginLeft:3}} alt="Post" />
          </div>}
        </div>
      </div>
      <div style={{fontSize:12}}>
       {description}
      </div>
    </div>
  )
};