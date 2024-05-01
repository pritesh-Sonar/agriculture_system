const mongoose  =  require("mongoose");
const hbs = require("hbs");
const mongodb = require("mongodb");
const express = require("express"); 
const app = express();
const Detail =require("./modules/Detail")
const Product = require("./modules/products")
const Contact = require("./modules/contact")
const Updates = require("./modules/updates")
const routes = require("./routes/route");
const bodyParser = require("body-parser");
app.use('/static',express.static("public"))
app.use('',routes)

//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

// const mongoURI = 'mongodb://localhost:27017/13';


const mongoURI = 'mongodb+srv://pritesh:India%4011@cluster0.eivujlf.mongodb.net/Agreculture_Management_System';

mongoose.connect(mongoURI)

// Optional: Get the default connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
 
//   Updates.create([{
//   "Quote":"If Agriculture goes Wrong,Nothing else will have a Chance to go right, By.M.S.Swaminathan",
//  "Descrip1":"Our website provides the best quality products.Popular brands product are available Cheapest rate in the market",
//  "Descrip2":"The delivery of products are fast and secure. Get your product on time Delivers with heart.",
//  "Descrip3":"In the service of Indian farmers from 5 Years Building trust in Indian farmer "
//   }])

// Detail.create([{
//   "audio":"https://static.vikaspedia.in/mediastorage/audio/speech_389_en.mp3",
//   "Climate":"Cultivation of cabbage is done mainly on sandy to heavy soils rich in organic matter. Early crops prefer light soil while late crops thrive better on heavier soils due to retention of moisture. On heavy soils, plants grow more slowly and the keeping quality is improved. A pH range of 6.0-6.5 is considered as optimum for growing cabbage. Plants growing in saline soils are prone to diseases",
//   "Description1":"Damping off of Cabbage occurs in two stages, i.e. the pre-emergence and the post-emergence phase. In the pre-emergence the phase the seedlings are killed just before they reach the soil surface. The young radical and the plumule are killed and there is complete rotting of the seedlings. The post-emergence phase is characterized by the infection of the young, juvenile tissues of the collar at the ground level. The infected tissues become soft and water soaked. The seedlings topple over or  collapse.",
//   "Image1":"https://th.bing.com/th/id/OIP.J7-WRVnTQocosvSxugrGzQHaFj?rs=1&pid=ImgDetMain",
//   "Name1":"Damping Off",
//   "video1":"https://youtu.be/9415NG5M_bo?si=Si8jTDSLul_qs4FW",
//   "Description2":"Stunting and yellowing of plants Leaves become yellowish and wilt on hot days. Club like swelling of root and root lets Club root is particularly prevalent on soils with a pH below 7, whereas it has been observed that the disease is often less serious on heavy soils and on soils containing little organic matter",
//   "Image2":"https://th.bing.com/th?id=OIP.1Mnoz8AHbXhdsbeLUwxTEQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
//   "Name2":"Club root of crucifers",
//   "video2":"https://youtu.be/1CBOidkPn8g?si=yJ4tAyUAL0Mpmykv",
//   "Description3":"Spots are small, dark coloured They enlarge, soon become circular & 1mm. in diameter Under humid conditions groups of conidiophores will be formed in the spot Spots develop concentric rings Finally the spots coalesce leading to blighting of leaves. The fungus is seed borne and cause shriveling of seeds and poor germination Linear spots also appear on petioles, stems, pods & seeds",
//   "Image3":"https://th.bing.com/th?id=OIP.DIx9ah_D-AFAwSbWLT78agHaE4&w=307&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
//   "Name3":"Alternaria leaf spot",
//   "video3":"https://youtu.be/E4F1F_16ctU?si=SxZL1KGtVto4yIkr",
//   "Description4":"First appear as chlorotic or yellow (angular) areas near the leaf margins Yellow area extends to veins and midrib forming characteristic ‘v’ shaped chlorotic spots which later turn black Veins and veinlets turn brown and finally black Vascular blackening extend beyond affected veins to midrib, petiole and stem In advanced stages, infection may reach the roots system and blackening of vascular bundles occurs. Bacterial ooze can also be seen on affected parts If the infection is early, the plants wilt and die If the infection is late plants succumb to soft rot and die.",
//   "Image4":"https://th.bing.com/th?id=OIP.Ip8NtSVIUajR-9bEHtdougHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
//   "Name4":"Black rot",
//   "video4":"https://youtu.be/E4F1F_16ctU?si=SxZL1KGtVto4yIkr",
//   "Description":"Leaves are low in calories (27 per cent), fat (0.1 per cent) and carbohydrates (4.6 per cent).  It is good sources of protein (1.3 per cent) which contains all essential amino acids, particularly sulphur containing amino acids. Cabbage is an excellent source of minerals such as calcium (39 mg), iron (0.8 mg), magnesium (10 mg), sodium (14.1 mg), potassium (114 mg) and phosphorus (44 mg).  It has substantial amounts of β carotene provitamin A), ascorbic acid, riboflavin, niacin and thiamine.  Ascorbic acid content varies from 30-65 mg per 100 g fresh weight. Flavour in cabbage leaves is due to the glycoside sinigrin.  Cabbage contains goitrogens which cause enlargement of thyroid glands. The major cabbage producing states are Uttar Pradesh, Odisha, Bihar, Assam, West Bengal, Maharashtra and Karnataka.",
//   "Image":"https://th.bing.com/th?id=OIP.tk7a-a8Sy9xxx6YbejIYagHaHd&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
//   "Name":"Cabbage",
//   "Soil":"In India, cabbage is grown in large areas having a cool and moist climate. A temperature range of 15o-21o C is considered as optimum for growth and head formation of the crop. The intensity of flowering depends upon the age of the plants and the period for which they are exposed to low temperatures."   
// }])


});


app.listen(process.env.PORT| 5556,() =>{
   console.log(`server is running`);
});
