import Place from "./Place";

function MainContent(): JSX.Element {
    return(
        <main>
            <Place 
            title={"No place like home"}
            placeName={"Cardiff"}
            country={"Wales"}
            text={"The capital city of Wales, has a castle in the centre of the city"}
            googleLocation={"https://www.google.com/maps/place/Cardiff/@51.5254472,-3.2294204,11.2z/data=!4m5!3m4!1s0x486e02d434ec53f5:0x143406db6586670e!8m2!3d51.481581!4d-3.17909"}
            image={""}
            />
            <Place 
            title={"The islands"}
            placeName={"Lhaviyani Atoll"}
            country={"Maldives"}
            text={"The clearest water you'll ever see"}
            googleLocation={"https://www.google.com/maps/place/Cardiff/@51.5254472,-3.2294204,11.2z/data=!4m5!3m4!1s0x486e02d434ec53f5:0x143406db6586670e!8m2!3d51.481581!4d-3.17909"}
            image={""}
            />
             <Place 
            title={"The Big Five"}
            placeName={"Kruger National Park"}
            country={"South Africa"}
            text={"Never thought i'd get bored of seeing elephants, but I did"}
            googleLocation={"https://www.google.com/maps/place/Cardiff/@51.5254472,-3.2294204,11.2z/data=!4m5!3m4!1s0x486e02d434ec53f5:0x143406db6586670e!8m2!3d51.481581!4d-3.17909"}
            image={""}
            />
              <Place 
            title={"Fresh Powder"}
            placeName={"Val D'isere"}
            country={"France"}
            text={"Amazing scenery, skiing conditions and food"}
            googleLocation={"https://www.google.com/maps/place/Cardiff/@51.5254472,-3.2294204,11.2z/data=!4m5!3m4!1s0x486e02d434ec53f5:0x143406db6586670e!8m2!3d51.481581!4d-3.17909"}
            image={""}
            />
        </main>
    );
}

export default MainContent;