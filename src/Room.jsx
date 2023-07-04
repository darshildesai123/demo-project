function Equiement(props){
    return(
        <>
        <div style={{textAlign: "left"}}>
            <label>Fan:</label>
            <span>{props.Fan}</span><br />
            <label>Bentch:</label>
            <span>{props.Bentch}</span><br />
            <label>Borad:</label>
            <span>{props.Borad}</span><br />
            <label>Projector:</label>
            <span>{props.Projector}</span><br />
            <label>Ac:</label>
            <span>{props.Ac}</span><br />
            <label>Watch:</label>
            <span>{props.Watch}</span><br />
            <label>Leptop:</label>
            <span>{props.Leptop}</span><br />
            <label>Student::</label>
            <span>{props.Student}</span><br />
            <label>Switch Borad</label>
            <span>{props.SwitchBorad}</span><br />
        </div>
        </>
    );
}

export default Equiement;