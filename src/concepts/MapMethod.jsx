const courses = [
    {
        id: 101,
        title: "React"
    },
    {
        id: 102,
        title: "Node"
    },
    {
        id: 103,
        title: "MongoDB"
    }
];


export default function CourseLists() {
    console.log(courses);

    return (
        <>
            <div className="d-flex flex-wrap text-center">
                {
                    courses.map((course) => (
                        <div
                            key={course.id}
                            className="card m-2 p-3"
                            style={{ width: "200px" }}
                        >
                            <h4>{course.title}</h4>
                        </div>
                    ))
                }
            </div>
        </>
    )

}