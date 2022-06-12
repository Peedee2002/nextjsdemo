const Dropdown = ({ list }) => {
    return (
        <>
        {list.map((component) => {
            return <p> {component} </p>;
        })}
        </>
    );
}

export default Dropdown;