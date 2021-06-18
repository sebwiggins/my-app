interface PlaceProps {
  title: string;
  placeName: string;
  country: string;
  image: string;
  googleLocation: string;
  text: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <section>
         <img src={props.image} alt= "Cardiff City Centre" />
      <h2>{props.title}</h2>
      <h3>
        <p>
          {props.placeName}, {props.country}{" "}
            (<a href={props.googleLocation}>map link</a>)
        </p>
      </h3>
      <p>{props.text}</p>
    </section>
  );
}

export default Place;

