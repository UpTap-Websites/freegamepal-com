import ListItem from "./ListItem";

export default function List({ items, className, type = `icon` }) {
  return (
    <ul className={className ? `game-list ` + className : `game-list`}>
      {items.map((i) => (
        <ListItem key={i.slug} item={i} type={type} />
      ))}
    </ul>
  );
}
