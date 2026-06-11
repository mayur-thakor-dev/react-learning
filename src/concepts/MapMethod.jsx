const technologies = [
    "React",
    "Node",
    "MongoDB",
    "Express"
];

export default function CourseLists() {

    // return (
    //     <>
    //         <div className="d-flex flex-wrap text-center">
    //             {
    //                 technologies.map((tech, index) => (
    //                     <div
    //                         key={index}
    //                         className="card m-2 p-3"
    //                         style={{ width: "200px" }}
    //                     >
    //                         <h4>{tech}</h4>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     </>
    // )


    technologies.map((tech, index) => {
    console.log(
        `Index: ${index}, Tech: ${tech}`
    );

    return (
        <div
            key={index}
            className="card m-2 p-2"
        >
            <h4>{tech}</h4>
        </div>
    );
})
}