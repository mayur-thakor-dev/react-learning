const employees = [
    {
        id: 1,
        name: "Mayur",
        role: "Frontend Developer"
    },
    {
        id: 2,
        name: "Rahul",
        role: "Backend Developer"
    },
    {
        id: 3,
        name: "Amit",
        role: "Full Stack Developer"
    }
];

export default function EmployeesList() {

    return (
        <div className="d-flex flex-wrap">

            {
                employees.map(( {id,name,role} ) => (

                    <div
                        key={id}
                        className="card m-2 p-3 shadow"
                        style={{ width: "250px" }}
                    >
                        <h3>{name}</h3>

                        <p>
                            Role: {role}
                        </p>

                    </div>

                ))
            }

        </div>
    );
}