export default function ListNavigation({ items }) {
  // let renderedItems = [];
  // items.forEach((item) => {
  //     renderedItems.push(<li key={item.label}>{item.label}</li>)
  // })

  const renderedItems = items.map((item) => (
    <li
      key={item.label}
      className="inline-block ml-[46px] text-[14px] font-bold "
    >
      {item.label}
    </li>
  ));

  return (
    <ul className="list-none m-0 p-0 justify-items-end">{renderedItems}</ul>
  );
}
