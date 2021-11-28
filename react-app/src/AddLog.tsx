export const AddLog: React.FC = () => {
    
    const addLog = () => {
    console.log("add log")
} 

    return (
    <button onClick={addLog}> Add Log</button>
)
}