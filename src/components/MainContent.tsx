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
            image={"https://i2-prod.walesonline.co.uk/incoming/article19006885.ece/ALTERNATES/s810/0_Wales-Daily-Life-2020.jpg"}
            />
            <Place 
            title={"The islands"}
            placeName={"Lhaviyani Atoll"}
            country={"Maldives"}
            text={"The clearest water you'll ever see"}
            googleLocation={"https://www.google.com/maps/place/Maldives/@3.0768066,71.3594587,7z/data=!4m5!3m4!1s0x24b599bfaafb7bbd:0x414509e181956289!8m2!3d3.202778!4d73.22068"}
            image={"https://cdnprs.wisconsin.dev/wp-content/uploads/2021/05/mercuremaldiveskoodooresortmaldivesexterior.jpeg"}
            />
             <Place 
            title={"The Big Five"}
            placeName={"Kruger National Park"}
            country={"South Africa"}
            text={"Never thought i'd get bored of seeing elephants, but I did"}
            googleLocation={"https://www.google.com/maps/place/Kruger+National+Park/@-23.9672562,31.4109364,11.1z/data=!4m5!3m4!1s0x1ec34896c535a0a1:0x9a504ed31f67787b!8m2!3d-23.9883848!4d31.5547402"}
            image={"https://cdn.kimkim.com/files/a/content_articles/featured_photos/22d8dd5c4ae3a3626e0cf30b0cc97e48bc14c72d/big-5b902d4507219d542102a964d62a091b.jpg"}
            />
              <Place 
            title={"Fresh Powder"}
            placeName={"Val D'isere"}
            country={"France"}
            text={"Amazing scenery, skiing conditions and food"}
            googleLocation={"https://www.google.com/maps/place/73150+Val-d'Isère,+France/@45.4504322,6.9817436,14.09z/data=!4m5!3m4!1s0x47890909fd5ffb93:0x408ab2ae4baa830!8m2!3d45.448034!4d6.980226"}
            image={"https://www.telegraph.co.uk/content/dam/Travel/ski/Resorts/valdisere-lead-xlarge.jpg"}
            />
        </main>
    );
}

export default MainContent;