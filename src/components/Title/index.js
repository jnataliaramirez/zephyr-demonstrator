const Title = (props) => {
  return (
    <h1 className="text-center uppercase text-3xl font-bold text-green-zephyr lg:text-4xl">
      {props.children}
    </h1>
  );
};

export default Title;
