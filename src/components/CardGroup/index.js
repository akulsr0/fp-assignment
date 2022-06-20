import HC1Card from "./HC1Card";
import HC3Card from "./HC3Card";
import HC5Card from "./HC5Card";
import HC6Card from "./HC6Card";
import HC9Card from "./HC9Card";

function CardGroup(props) {
  const { data } = props;

  switch (data["design_type"]) {
    case "HC1":
      return <HC1Card data={data} />;
    case "HC3":
      return <HC3Card data={data} />;
    case "HC5":
      return <HC5Card data={data} />;
    case "HC6":
      return <HC6Card data={data} />;
    case "HC9":
      return <HC9Card data={data} />;
    default:
      return null;
  }
}

export default CardGroup;
