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
        </main>
    );
}

export default MainContent;