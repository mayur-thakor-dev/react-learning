
function Event({ title, mentor }) {

    function EnrollCourse() {
        alert(`Enrolled in ${title} course, mentored by ${mentor}`)
    }
    return (
        <>

            <h1>Event concepts in React</h1>
            <h2>Title: {title}</h2>
            <h2>mentor: {mentor}</h2>
            <button onClick={EnrollCourse}>
                Enroll Now
            </button>
        </>
    )
}

export default Event;