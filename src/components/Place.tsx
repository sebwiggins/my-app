interface PlaceProps {
  title: string;
  placeName: string;
  country: string;
//   image: URL;
//   googleLocation: URL;
  text: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <section>
      <h2>{props.title}</h2>
      <h3>
        <p>
          {props.placeName}, {props.country} 
          {/* ({props.googleLocation}) */}
        </p>
      </h3>
      <p>{props.text}</p>
    </section>
  );
}

export default Place;
