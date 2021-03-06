import { Injectable } from '@angular/core';
import { IProducts } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

allProducts = [];

  products:IProducts[]=[
    { 
     "id":1,
      "category":"family",
      "productImage":"./assets/images/family care series/daily-bamboo.png",
      "productName":"Bamboo Charcoal Soap",
      "productDescriptionOne":"Contains bamboo carbon", 
      "productDescriptionTwo":"Absorbs micro dirt from skin", 
      "productDescriptionThree":"Removes excess skin oil", 
      "productDescriptionFour":"Exfoliates", 
      "productDescriptionFive":"Moisturizes",
      "productDescriptionSix":"Clears acne,scars,black heads",
      "productDescriptionSeven":" "               
    },
    { 
      "id":2,
      "category":"health",
      "productImage":"./assets/images/health care series/picup.jpg",
      "productName":"Alkaline Pi Cup",
      "productDescriptionOne":"Revives damaged cells in the body", 
      "productDescriptionTwo":"Ability to change acidic to alkaline", 
      "productDescriptionThree":"Increases energy and digestion", 
      "productDescriptionFour":"Reduces blood cholestral", 
      "productDescriptionFive":"Enables minerals to reach the cells",
      "productDescriptionSix":"Energizes, suitable for athletes",      
      "productDescriptionSeven":"Water taken from the cup is Zinc rich"         
    },
    { 
      "id":3,
      "category":"family",
      "productImage":"./assets/images/family care series/sanitary napkin.png",
      "productName":"Sanitary Napkin",
      "productDescriptionOne":"Preserves health", 
      "productDescriptionTwo":"Anti-bacterial", 
      "productDescriptionThree":"Anti-inflammatory", 
      "productDescriptionFour":"Eliminates oduor", 
      "productDescriptionFive":"Promotes metabolism",
      "productDescriptionSix":"Improves endocrine funtions",      
      "productDescriptionSeven":"Enhances immunity"         
    },
    { 
      "id":4,
      "category":"health",
      "productImage":"./assets/images/health care series/calcium.jpg",
      "productName":"Calcium Tablets",
      "productDescriptionOne":"Contains magnessium, zinc and Iron.", 
      "productDescriptionTwo":"Helps build strong bones and teeth", 
      "productDescriptionThree":"It helps prevent oesteoporosis and other bone issues", 
      "productDescriptionFour":"Reduces the risk of cancer", 
      "productDescriptionFive":"Assists in development of sex organs",
      "productDescriptionSix":"Aids in formation of haemoglobin",  
      "productDescriptionSeven":"Helps to maintain alkaline PH level"               
    
    },
    { 
      "id":5,
      "category":"health",
      "productImage":"./assets/images/health care series/green tea.png",
      "productName":"Green Tea",
      "productDescriptionOne":"It helps remove bilirubin, checks its production and increases supply of oxgyen in the blood", 
      "productDescriptionTwo":"It facilitates and soothes digestive and respiretory system", 
      "productDescriptionThree":"Increases production of urine and inhibits infection in kidney and urine systems", 
      "productDescriptionFour":"It is a very good dietary option containing detoxifier and anti-carcinogenic", 
      "productDescriptionFive":"It provides relaxing & tranquilizing effect",
      "productDescriptionSix":"A good appetizer, regulates metabolism and improves blood circulation",      
      "productDescriptionSeven":"Great for liver, stomach and a fantastic detoxifier "         
    },
    {
      "id":6,
      "category":"health",
      "productImage":"./assets/images/health care series/arthro.jpg",
      "productName":"ArthroSup Reviver",
      "productDescriptionOne":"Maintains healthy and strong joints", 
      "productDescriptionTwo":"Improves joint mobility and joint function", 
      "productDescriptionThree":"Help prevent osteoarthritis", 
      "productDescriptionFour":"Strenghthes the immune system", 
      "productDescriptionFive":"Helps generate cartilage exhibit, anti-inflammatory effects and it's a derivative of cellular glucose metabolism",
      "productDescriptionSix":"Help prevent osteoarthritis", 
      "productDescriptionSeven":"Strenghthes the immune system"  
    },
    { 
      "id":7,
      "category":"personal",
      "productImage":"./assets/images/personal care/roll on.jpg",
      "productName":"Roll On",
      "productDescriptionOne":"Non sticky, anti-stain and quick drying", 
      "productDescriptionTwo":"Removes bad oduor, keeping you fresh all day", 
      "productDescriptionThree":"Suitable for all skin types", 
      "productDescriptionFour":"Easy to use, rolling ball design", 
      "productDescriptionFive":"Prevents itching under the armpits",
      "productDescriptionSix":" ", 
      "productDescriptionSeven":" "

                    
    },
    { 
      "id":8,
      "category":"family",
      "productImage":"./assets/images/family care series/Anti mosquito.jpg",
      "productName":"Mosquito Repellent",
      "productDescriptionOne":"Be free from mosquitos bites for up to 8 hours", 
      "productDescriptionTwo":"Spray to the external parts of the body", 
      "productDescriptionThree":"It's not harmful to skin", 
      "productDescriptionFour":"It does not cause oxidation", 
      "productDescriptionFive":"It disturbs the function of special receptors in mosquito antenae",
      "productDescriptionSix":"Deet, as its acrive ingredient does not cause skin irritation",      
      "productDescriptionSeven":"It is eliminated through urine incase it penetrates the body"         
    },
    { 
      "id":9,
      "category":"family",
      "productImage":"./assets/images/family care series/Hand Cream Set.jpg",
      "productName":"Hand Cream",
      "productDescriptionOne":"Its reach in proteins, vitamin A and various types of moisturizing ingredients", 
      "productDescriptionTwo":"Softens the palm", 
      "productDescriptionThree":"Ability to treat alergic reaction caused by chemicals or contents of local soaps", 
      "productDescriptionFour":"Lovely fragrance", 
      "productDescriptionFive":"During Ebola crisis was fast selling as it can prevents bacteria",  
      "productDescriptionSix":"Easy absortption of minerals",
      "productDescriptionSeven":" "
    },
    {   
      "id":10,
      "category":"health",
      "productImage":"./assets/images/health care series/mengyuan.jpg",
      "productName":"Mengquian",
      "productDescriptionOne":"spacilly made for women to improve their hormoone imbalance and fertility problems", 
      "productDescriptionTwo":"helps tighten loosened stomach skin in women that have given birth", 
      "productDescriptionThree":"reduces pimples and promotes healthy complexion", 
      "productDescriptionFour":"its useful in improving hai quality", 
      "productDescriptionFive":"detoxifies the system,leans and clears the skiin and makes you look younger",
      "productDescriptionSix":"it can take car of hormonal changes caused by lver diseases or the use of oral contraceptives",      
      "productDescriptionSeven":"it reduces stress from the mind,adjust the nervous system,regulates metabolism and improves eyesight"      
    },
    { 
      "id":11,
      "category":"family",
      "productImage":"./assets/images/family care series/Sheep Placenta SOD.jpg",
      "productName":"SOD Cream",
      "productDescriptionOne":"Perfect for sensitive skin", 
      "productDescriptionTwo":"Eliminates scars and stretvh marks with repetitive use", 
      "productDescriptionThree":"Acts as building block of the biological cell", 
      "productDescriptionFour":"Contains glycerin which is suitable for atopic dematitis treatment", 
      "productDescriptionFive":"Suitable for infant diaper rash",
      "productDescriptionSix":" ", 
      "productDescriptionSeven":" "       
    },
    { 
      "id":12,
      "category":"family",
      "productImage":"./assets/images/family care series/mf.jpg",
      "productName":"Mouth Freshener",
      "productDescriptionOne":"Rich in white teea and pepper mint oil essence", 
      "productDescriptionTwo":"Maintains fresh breath", 
      "productDescriptionThree":"Protects oral breath", 
      "productDescriptionFour":"aka Small but mighty", 
      "productDescriptionFive":"Treats sore throat and cough",
      "productDescriptionSix":"Relieves asthmatic symptoms",      
      "productDescriptionSeven":"Stimulates digestion and increases appetite"         
    },
    { 
      "id":13,
      "category":"family",
      "productImage":"./assets/images/family care series/Anti Dandruff Shampoo.jpg",
      "productName":"Anti Dandruff Shampoo",
      "productDescriptionOne":"Rich in white tea (hair anti-oxidant) and mint", 
      "productDescriptionTwo":"For all types of hair", 
      "productDescriptionThree":"Contain ZPT anti-dandruff  ingredient", 
      "productDescriptionFour":"Fights stubborn dandruff", 
      "productDescriptionFive":"Deep cleansing and moisturizing",
      "productDescriptionSix":"Leaves the hair shiny",
      "productDescriptionSeven":" "              
    },
    { 
      "id":14,
      "category":"family",
      "productImage":"./assets/images/family care series/panty liners.png",
      "productName":"SuperbKlean Panty Liners",
      "productDescriptionOne":"Treats infections", 
      "productDescriptionTwo":"Preventsand treats Candida", 
      "productDescriptionThree":"Eliminates odour", 
      "productDescriptionFour":"Prevents and treats itching", 
      "productDescriptionFive":"Relieves period pains",
      "productDescriptionSix":"Anti-inflammatory",      
      "productDescriptionSeven":"Prevents prostate enlargement"
    },
    {
      "id":15,
      "category":"home",
      "productImage":"./assets/images/home care/energy pot2.JPG",
      "productName":"Classy Energy Pot",
      "productDescriptionOne":"Preserves food nutrients and energy brought  into the pot", 
      "productDescriptionTwo":"Original flavour of the food is reatained", 
      "productDescriptionThree":"Vegetables kept in the pot remain fresh and healthy after days", 
      "productDescriptionFour":"Vegetables cooked in the pot remain green", 
      "productDescriptionFive":"Fish shrimps cooked in the pot remain green",
      "productDescriptionSix":"Naturally non-sticky",      
      "productDescriptionSeven":"Saves gas/energy"
    },
    { 
      "id":16,
      "category":"family",
      "productImage":"./assets/images/family care series/wtoothpaste.jpg",
      "productName":"White Tea Multi-effect Toothpaste",
      "productDescriptionOne":"Prevents tooth decay", 
      "productDescriptionTwo":"Deep cleaning", 
      "productDescriptionThree":"Natural disinfectant", 
      "productDescriptionFour":"Reinforces the gum", 
      "productDescriptionFive":"Relieves toothache",
      "productDescriptionSix":"Reduces sensitivity",
      "productDescriptionSeven":"Whitening"           
    },
    { 
      "id":17,
      "category":"health",
      "productImage":"./assets/images/health care series/pink.png",
      "productName":"NutriV Rich pink",
      "productDescriptionOne":"Suitable meal replacement", 
      "productDescriptionTwo":"Perfect multivitamin smoothie", 
      "productDescriptionThree":"Boosts immune system", 
      "productDescriptionFour":"Increases appetite", 
      "productDescriptionFive":"Ant-aging",
      "productDescriptionSix":"Anti-cancer",      
      "productDescriptionSeven":"100% natural, no additives"        
    },
    { 
      "id":18,
      "category":"health",
      "productImage":"./assets/images/health care series/berry oil.jpg",
      "productName":"Berry Oil",
      "productDescriptionOne":"Rich in Vitamin A, C and E", 
      "productDescriptionTwo":"Rich in Omega oils, Omega 3,6,7 & 9", 
      "productDescriptionThree":"Good for the eyes", 
      "productDescriptionFour":"Treats ulcers", 
      "productDescriptionFive":"Relieves stomachache",
      "productDescriptionSix":"Reduces blood cholesterol",      
      "productDescriptionSeven":"Elimnates acidity"         
    },
    { 
      "id":19,
      "category":"health",
      "productImage":"./assets/images/health care series/brown tea.png",
      "productName":"Brown Tea",
      "productDescriptionOne":"Eliminates liver fat", 
      "productDescriptionTwo":"Improves blood circulation", 
      "productDescriptionThree":"Aids tummy reduction", 
      "productDescriptionFour":"It's a detoxifier", 
      "productDescriptionFive":"It's used for weight management",
      "productDescriptionSix":"Calms overstrined nerves. Aid in peaceful sleep",      
      "productDescriptionSeven":"It's Decaffeinated"         
    },
    { 
      "id":20,
      "category":"health",
      "productImage":"./assets/images/health care series/health nutriV pink.png",
      "productName":"Pink Tea",
      "productDescriptionOne":"Used for weight loss; Increases metabolism", 
      "productDescriptionTwo":"Good for diabetic patients", 
      "productDescriptionThree":"Reduces chances of heart diseases", 
      "productDescriptionFour":"Good for slimming", 
      "productDescriptionFive":"Reduces blood cholesterol",
      "productDescriptionSix":"Improves brain function",      
      "productDescriptionSeven":"Used ti treat constipation and also to remove heat from the liver"         
    },{
      "id":21,
      "category":"family",
      "productImage":"./assets/images/family care series/body-wash.png",
      "productName":"fruit oil moisturizing baby cream",
      "productDescriptionOne":"rich in corn gem oil:promotes absorption of nutrients into the skin", 
      "productDescriptionTwo":"glows and evens skin tone", 
      "productDescriptionThree":"great for oily skin", 
      "productDescriptionFour":"repairs damages on skin", 
      "productDescriptionFive":"moisturizes skin",
      "productDescriptionSix":"",      
      "productDescriptionSeven":""
    
    },
    { 
      "id":22,
      "category":"family",
      "productImage":"./assets/images/family care series/antiperspirant-dew.png",
      "productName":"Antiperspirant-Dew",
      "productDescriptionOne":"best deodoriser", 
      "productDescriptionTwo":"anti-stain", 
      "productDescriptionThree":"rolling ball design", 
      "productDescriptionFour":"does not block sweat pores", 
      "productDescriptionFive":"allows your  underarm breath",
      "productDescriptionSix":"cooling and refreshing",      
      "productDescriptionSeven":""         
    },
    { 
      "id":23,
      "category":"family",
      "productImage":"./assets/images/family care series/Cleansing Shampoo.jpg",
      "productName":"Cleansing and Treatment Shampoo",
      "productDescriptionOne":"effective in treating dndruff,does not cut hair but grows it", 
      "productDescriptionTwo":"protets and nourishes the hair withnatural herbal nutrients", 
      "productDescriptionThree":"contains vitamin C and antioxidants,which can help prevent cell damage", 
      "productDescriptionFour":"helps to wash ou wax and colouuring from the hair", 
      "productDescriptionFive":"it conttains antifungal agent,sodium benzoat",
      "productDescriptionSix":"it makes hardwater soft as the shaampoo makes its way through the water cycle,it sometimes picks up metals such as calcium,thse ions can make water hard which is a problem because hard water will not make your hair clean",      
      "productDescriptionSeven":"it supplies sheen and coating to hair straandss by easily being absorbed by proteins"
            
    },
    { 
      "id":24,
      "category":"health",
      "productImage":"./assets/images/health care series/calcium.jpg",
      "productName":"Calcium Tablets",
      "productDescriptionOne":"Chewable with milky flavour", 
      "productDescriptionTwo":"for children and adults", 
      "productDescriptionThree":"for teeth and bone formation", 
      "productDescriptionFour":"for increased digestion", 
      "productDescriptionFive":"speed up metabolism",
      "productDescriptionSix":"170mg Calcium, 3.12 Iron,2.8mg Zinc",      
      "productDescriptionSeven":"assists in devlopment of sex organs"
    },
    { 
      "id":25,
      "category":"health",
      "productImage":"./assets/images/health care series/wine.jpg",
      "productName":"Vintage wine(health liquor)",
      "productDescriptionOne":"burns tummy fat", 
      "productDescriptionTwo":"increases libido/restores sexual performance in men and women", 
      "productDescriptionThree":"helps you sleep well", 
      "productDescriptionFour":"relieves pain including menstrual", 
      "productDescriptionFive":"for detox",
      "productDescriptionSix":"500ml, 38% Alcohol",      
      "productDescriptionSeven":"also contains safflower,papaya,cortex acanthopanacis"      
    },
    {
      "id":26,
      "category":"family",
      "productImage":"./assets/images/family care series/hand-cream.png",
      "productName":"brightening hand cream",
      "productDescriptionOne":"it is rich in moiturizing ingredients which can penerate into deeper skiin level  repairing ryness and dehydratedd skin", 
      "productDescriptionTwo":"softens the palms", 
      "productDescriptionThree":"lovely fragrance", 
      "productDescriptionFour":"ability to treat allergic reactions aused by chemical contents of local soap", 
      "productDescriptionFive":"during ebola crisis it was fast sellin as it can",
      "productDescriptionSix":"mild fragrance",      
      "productDescriptionSeven":"easy absorption of vitamins"
    },
    { 
      "id":27,
      "category":"family",
      "productImage":"./assets/images/family care series/herbal body wash.jpg",
      "productName":"Herbal Body Wash",
      "productDescriptionOne":"it has natural antiperspirant properties and contain vitamin B ccomplex", 
      "productDescriptionTwo":"it has anti-bacterial properties", 
      "productDescriptionThree":"it is not potentially toxic or harmful to the body", 
      "productDescriptionFour":"has the abilty to enhance the appearance and feel of the skin improving body suppleness", 
      "productDescriptionFive":"it enhances the efficacy of active sun screen ingrredints to UV rays and promotes healing process",
      "productDescriptionSix":"protects the skin barriers lipid balance and reduces trans-epidermal water loss",      
      "productDescriptionSeven":""
    },
    { 
      "id":28,
      "category":"family",
      "productImage":"./assets/images/family care series/Mouth Wash.jpg",
      "productName":"mouth freshner",
      "productDescriptionOne":"eradicates moth odour and bad breath", 
      "productDescriptionTwo":"great for asthma patients", 
      "productDescriptionThree":"helps in treatment of cough in children", 
      "productDescriptionFour":"stimulates bodys cold receptors stimulating a cooling sensation when it is inhaled", 
      "productDescriptionFive":"can aid to treat sore throat or nasaal congestion",
      "productDescriptionSix":"has anioxidant and anti-carcinogenic properties of green tea",      
      "productDescriptionSeven":"can be uused with warm water to reliieve cold symptoms through the release of vapor"       
    },
    { 
      "id":29,
      "category":"personal",
      "productImage":"./assets/images/personal care/sod cream.png",
      "productName":"SOD cream",
      "productDescriptionOne":"makess skin suple", 
      "productDescriptionTwo":"makes skin smooth", 
      "productDescriptionThree":"protects the skn from the sun", 
      "productDescriptionFour":"makes you ook younger an tender", 
      "productDescriptionFive":"does not bleach or tone",
      "productDescriptionSix":"for all skin types,body streth marks and skin irritation",      
      "productDescriptionSeven":"no side effects"     
    },
    { 
      "id":30,
      "category":"family",
      "productImage":"./assets/images/family care series/baby-corn.png",
      "productName":"baby corn pricky heat powder",
      "productDescriptionOne":"formulated with mild plant itch", 
      "productDescriptionTwo":"rich in corn gem oil:promotes absorption of nutrients into the skin", 
      "productDescriptionThree":"eliminates sweat odour", 
      "productDescriptionFour":"cool and refreshing", 
      "productDescriptionFive":"formulated with mild plant starch",
      "productDescriptionSix":"you should  get it now",      
      "productDescriptionSeven":""      
    },
    { 
      "id":31,
      "category":"family",
      "productImage":"./assets/images/family care series/white-tea-soap.jpg",
      "productName":"white tea anti-dandruff shampoo",
      "productDescriptionOne":"rich in white tea(hairanti-oxidant) and mint", 
      "productDescriptionTwo":"for all hair types", 
      "productDescriptionThree":"contains ZPT anti-dandruff ingredient", 
      "productDescriptionFour":"fights stbborn dndruf", 
      "productDescriptionFive":"deep cleansing and moisturizing",
      "productDescriptionSix":"Leaves the hair shiny",
      "productDescriptionSeven":""
    },
    { 
      "id":32,
      "category":"health",
      "productImage":"./assets/images/health care series/libao.jpg",
      "productName":"Libao",
      "productDescriptionOne":"it is formulatedd for men to improve sperm count", 
      "productDescriptionTwo":"helps prevent sperm ageing in men", 
      "productDescriptionThree":"increases sex performance", 
      "productDescriptionFour":"ideal for men with quick tiring body", 
      "productDescriptionFive":"eliminates fatigue",
      "productDescriptionSix":"impov sleep",      
      "productDescriptionSeven":"Strenghens the immune system and the activities of sperm"        
    },
    { 
      "id":33,
      "category":"health",
      "productImage":"./assets/images/health care series/classy style shoe.png",
      "productName":"classy style shoe",
      "productDescriptionOne":"first human power bank:energizes", 
      "productDescriptionTwo":"rechanges,reboots and revitalizes", 
      "productDescriptionThree":"corrects posture and spine", 
      "productDescriptionFour":"arouses self healing and repair", 
      "productDescriptionFive":"cervical care",
      "productDescriptionSix":"may treat cervical/lumbar spondylosis",      
      "productDescriptionSeven":"improves sleep/foot massage"               
    },
    { 
      "id":34,
      "category":"health",
      "productImage":"./assets/images/health care series/cordyceps coffee.jpg",
      "productName":"Cordyceps Coffee",
      "productDescriptionOne":"Decaffained", 
      "productDescriptionTwo":"contains Cordyceps militaris", 
      "productDescriptionThree":"contains palm kernel oil", 
      "productDescriptionFour":"energizes more than caffeine", 
      "productDescriptionFive":"rich in Amino acids",
      "productDescriptionSix":"Wonderful aroma",      
      "productDescriptionSeven":"3 in 1 Sachet for easy preparation and 20 sachet per pack"
    },
    {
      "id":35,
      "category":"health",
      "productImage":"./assets/images/health care series/cordyceps millitaries.jpg",
      "productName":"Cordyceps Militaris capsules",
      "productDescriptionOne":"a.k.a THE RENEWER", 
      "productDescriptionTwo":"Revitalises weak cells and organs", 
      "productDescriptionThree":"Best immune booster", 
      "productDescriptionFour":"improves physical performance", 
      "productDescriptionFive":"everyone needs it",
      "productDescriptionSix":"asthenia after svere ilness",      
      "productDescriptionSeven":"serves against kidney and lung problems" 
    },
    { 
      "id":36,
      "category":"",
      "productImage":"./assets/images/health care series/nutriv rich.jpg",
      "productName":"NutriVRich Blue",
      "productDescriptionOne":"smoothie made with over 40 fruits and vegtables", 
      "productDescriptionTwo":"for ulcers patients,it contains nutritious mals with rich fibres", 
      "productDescriptionThree":"for an individual with low immunity or weak constitutions", 
      "productDescriptionFour":"for low blood pressure and hypertensive patients", 
      "productDescriptionFive":"it contains brown rice,which is rich in selenium and important trrace minerals known to drastically reduce our chances of developing certain forms of cancer,as well as heart disase,inflammatory condition and rheumaoid arthritis",
      "productDescriptionSix":"rich in anti-axidants",      
      "productDescriptionSeven":"no presevative of any kind"            
    }
  ]

getProducts(){
return this.allProducts = this.products.slice(0)
} 
getProduct(id:number){
 return this.products.slice(0).find(product => product.id === id)
}

  constructor() { }
}
