const Subtitle = (props) => {
  return (
    <h3 className="text-center uppercase text-xl font-bold text-green-zephyr md:text-2xl">
      {props.children}
    </h3>
  );
};

export default Subtitle;
