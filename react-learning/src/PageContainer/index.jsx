import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
function PageContainer(){
    return(
        <div className="flex">
        <LeftSide/>
        <RightSide/>
        </div>
    )
    }
    export default PageContainer