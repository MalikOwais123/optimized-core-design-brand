const UseForm = (props) => {
  const { useFinish, children } = props;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nodesArr = [...e.target.elements];
    const valuesObj = nodesArr.reduce((acc, node) => {
        if (node.name) {
            acc[node.name] = node.value;
        }
        return acc;
    }, {});
    useFinish(valuesObj);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}>
        {children}
      </form>
    </div>
  );
};

export default UseForm;
