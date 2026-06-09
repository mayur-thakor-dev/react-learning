
export default function TechnologySel() {

    function courseSelector(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
        console.log(e.target.tagName);

        alert(`Congrtulations,You are selected ${e.target.innerText}`);
        e.target.style.backgroundColor = "green";
    }
    return (
        <>
            <button onClick={courseSelector}>React</button>
            <button onClick={courseSelector}>Node</button>
            <button onClick={courseSelector}>Javascript</button>
            <button onClick={courseSelector}>MongoDb</button>
        </>
    )
}