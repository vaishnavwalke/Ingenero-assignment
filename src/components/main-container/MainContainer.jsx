import './MainContainer.css'
const MainContainer = ({selectedId})=>{
    return <div className='dashboard'>
    <div className='selected-id' >Electrolyzer Id : {selectedId}</div>
    <div>
        <PartsList/>
        <DisassemblyF
    </div>
    </div>
}

export default MainContainer;