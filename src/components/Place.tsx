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
         <img src='https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fwww.walesonline.co.uk%2Flifestyle%2Fwelsh-homes%2Fcheapest-places-buy-home-cardiff-19006526&psig=AOvVaw1CHO4kYeUUHasq4bkpIOjl&ust=1624093300257000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCODC8pjpoPECFQAAAAAdAAAAABAD' alt= "Cardiff city centre" />
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

