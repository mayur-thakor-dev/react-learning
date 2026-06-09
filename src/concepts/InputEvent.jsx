

function handleInputChange(e) {
    console.log(`${e.target.name}:`, e.target.value);
}

export default function InputEvent() {
    return (
        <>
       <input
    type="text"
    name="Search"
    placeholder="Search..."
    onChange={handleInputChange}
/>

<br />
<br />
<input
    type="email"
    name="Email"
    placeholder="Email"
    onChange={handleInputChange}
/>

<br />
<br />
<input
    type="password"
    name="Password"
    placeholder="Password"
    onChange={handleInputChange}
/>
        </>
    );
}