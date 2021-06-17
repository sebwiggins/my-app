import Place from "./Place";

function MainContent(): JSX.Element {
    return(
        <main>
            <Place 
            title={"No place like home"}
            placeName={"Cardiff"}
            country={"Wales"}
            text={"The capital city of Wales, has a castle in the centre of the city"}
            />
            <Place 
            title={"The islands"}
            placeName={"Lhaviyani Atoll"}
            country={"Maldives"}
            text={"The clearest water you'll ever see"}
            />
             <Place 
            title={"The Big Five"}
            placeName={"Kruger National Park"}
            country={"South Africa"}
            text={"Never thought i'd get bored of seeing elephants, but I did"}
            />
              <Place 
            title={"Fresh Powder"}
            placeName={"Val D'isere"}
            country={"France"}
            text={"Amazing scenery, skiing conditions and food"}
            />
        </main>
    );
}

export default MainContent;