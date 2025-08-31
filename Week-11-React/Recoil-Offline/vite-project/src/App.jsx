

/*import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./atoms";


function App() {
  return <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  </div>
 
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  return (
    <>
     <button>Home</button>

     <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
     <button>Jobs ({jobsAtomCount})</button>
     <button>Messaging ({messagingAtomCount})</button>
     <button>Notification ({notificationsAtomCount})</button>
     <ButtonUpdater/>
    </>
  )
}

function ButtonUpdater(){
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return <div>
    <button onClick={()=>{
      setMessagingAtomCount(c => c + 1);
    }}>Me</button>
  </div>
}
export default App*/


















import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms";
import { useMemo } from "react";


function App() {
  return <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  </div>
 
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(()=>{
  //   return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // },[networkAtomCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]);

  return (
    <>
     <button>Home</button>

     <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
     <button>Jobs ({jobsAtomCount})</button>
     <button>Messaging ({messagingAtomCount})</button>
     <button>Notification ({notificationsAtomCount})</button>
     
     <button>Me ({totalNotificationCount})</button>
    </>
  )
}


export default App
