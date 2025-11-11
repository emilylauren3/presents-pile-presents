export interface Gift {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  affiliateLink: string;
  category?: string;
  guideSource: string;
}

export const gifts: Gift[] = [
  // From Top Holiday Toys
  {
    id: "furby-dj",
    title: "Furby DJ Furby Interactive Toy",
    description: "Rainbow Musical Plush Friend",
    fullDescription: "This classic is back and better than ever! The DJ Furby is a super snuggly, electronic plush friend that's ready to dance. It features music, lights, motion, and speaks both English and Furbish. At 32 inches long, this rainbow buddy is the biggest, snuggliest version yet—perfect for ages 6 and up.",
    price: 89,
    affiliateLink: "https://amzn.to/47szx7k",
    category: "Interactive Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "yoto-mini",
    title: "Yoto Mini 2024 Edition Screen-Free Audio Player",
    description: "Screen-Free Audio Adventure",
    fullDescription: "This is the ultimate travel hack for little kids! The Yoto Mini is an all-in-one, screen-free Bluetooth audio player that lets kids listen to stories, music, and podcasts using physical cards. It's durable, portable, and a lifesaver for long car rides or quiet time. It can be used as a speaker or with headphones.",
    price: 119,
    affiliateLink: "https://amzn.to/3LuTZvG",
    category: "Tech Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "xshot-blaster",
    title: "ZURU X-Shot Insanity Motorized Rage Fire Blaster",
    description: "Ultimate Dart Blaster",
    fullDescription: "If you need a big-impact gift for a bigger kid, this is it. My son has the X-Shot Insanity Rage Fire and absolutely loves it! This huge motorized blaster features auto-feeding, a tripod, a scope, and comes with 72 darts. It's great for outdoor battles, and you can grab several attachments to level up the fun.",
    price: 63.97,
    affiliateLink: "https://amzn.to/4qHYgMl",
    category: "Outdoor Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "jurassic-world-dino",
    title: "Jurassic World Interactive Toy Dinosaur & Egg",
    description: "Hatching Dino Adventure",
    fullDescription: "This is the viral gift for the dinosaur lover! This super cool Jurassic World Interactive Dino hatches from its egg and has over 100 sounds and reactions. It's a captivating and cool gift that teaches kids to 'train' their own baby dino. Perfect for boys and girls aged 5 and up.",
    price: 86.33,
    affiliateLink: "https://amzn.to/3LO5WN2",
    category: "Interactive Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "playdoh-barbie",
    title: "Play-Doh Barbie Designer Fashion Show Set",
    description: "Fashion Design Fun",
    fullDescription: "A genius mix of classic Play-Doh fun and fashion! This set lets creative kids make custom doll clothes for Barbie using modeling compound and includes 21 fashion accessories. It's a great arts and crafts toy for girls and boys aged 5 and up.",
    price: 49.99,
    affiliateLink: "https://amzn.to/4nL5tIO",
    category: "Arts & Crafts",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "playdoh-tmnt",
    title: "Play-Doh Teenage Mutant Ninja Turtles Mutation Station Playset",
    description: "TMNT Creative Play",
    fullDescription: "Cowabunga! This is a perfect stocking stuffer or small gift for the TMNT fan. The Mutation Station lets kids squeeze, mold, and shape fun Play-Doh creations with a bendy Donnie Action Figure. A super affordable arts and crafts toy for boys and girls aged 4 and up.",
    price: 24.99,
    affiliateLink: "https://amzn.to/4qMSjOl",
    category: "Arts & Crafts",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "ice-cream-truck",
    title: "Our Generation Sweet Stop Ice Cream Truck Playset",
    description: "Dream Playset Vehicle",
    fullDescription: "For the ultimate dream gift! This massive Our Generation Ice Cream Truck is a pink vehicle playset packed with tiny, detailed play food accessories for 18-inch dolls. It brings endless hours of pretend play and imaginative storytelling for kids 3+ years.",
    price: 199.99,
    affiliateLink: "https://amzn.to/3XiQ5bQ",
    category: "Pretend Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "led-copy-board",
    title: "LED Copy Board Portable Tracing Light Box",
    description: "Artist's Drawing Tool",
    fullDescription: "Elevate your child's drawing game with this sleek LED Copy Board. This super thin light box is an A4 size drawing tool that makes tracing and sketching easier and more fun. It's perfect for kids who love art, drawing, or comic book design.",
    price: 41.99,
    affiliateLink: "https://amzn.to/4nHzucA",
    category: "Arts & Crafts",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "art-tracing-projector",
    title: "Discovery Kids Art Tracing Projector Kit",
    description: "Learn to Draw Kit",
    fullDescription: "A fantastic introduction to drawing! This Discovery Kids Projector Kit makes learning to draw simple and fun. It includes 32 stencils and 12 markers, making it easy for kids to project and trace images. It's portable and an Amazon's Choice for budding artists.",
    price: 38.31,
    affiliateLink: "https://amzn.to/3Xhbt1b",
    category: "Arts & Crafts",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "magnetic-blocks",
    title: "Magnetic Blocks - 210PCS Magnetic Building Block Set",
    description: "STEM Building Fun",
    fullDescription: "Trust me, you can never have enough of these! I've bought my kids three sets and will buy more. These 210-piece Magnetic Cubes are fun for all ages (4-12+) and are fantastic STEM stacking toys. They click together easily to build incredible constructions and even include a collectible doll for extra imaginative play.",
    price: 89.98,
    affiliateLink: "https://amzn.to/47uahgZ",
    category: "Building Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "monster-high-doll",
    title: "Monster High Skulltimate Secrets Doll (Frankie Stein)",
    description: "Mystery Reveal Doll",
    fullDescription: "The Monster High craze is back, and this Skulltimate Secrets Doll is amazing. Kids get a Frankie Stein doll and 19+ glam surprises like doll clothes hidden inside a reveal closet. A fantastic gift for Monster High fans who love mystery and imaginative play.",
    price: 39.98,
    affiliateLink: "https://amzn.to/480f2Ps",
    category: "Dolls & Figures",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "harry-potter-bitzee",
    title: "Wizarding World Harry Potter Bitzee Interactive Toy",
    description: "Digital Pet Magic",
    fullDescription: "It's Tamagotchi meets Hogwarts! This Harry Potter Bitzee Interactive Toy is a digital pet kids can care for that reacts to swipes, tilts, and taps. It features 20 characters from the Wizarding World inside, making it a cool, screen-free tech toy for fans.",
    price: 53.34,
    affiliateLink: "https://amzn.to/4hPtXPY",
    category: "Tech Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "spidey-pirate-ship",
    title: "Marvel Spidey and His Amazing Friends Bubble Pirate Ship",
    description: "Water-Webs Adventure",
    fullDescription: "A fun playset perfect for the younger Marvel fan! This Spidey and His Amazing Friends Bubble Pirate Ship boat features 'Water-Webs' and comes with a 3-inch action figure. It's a great imaginative toy for kids 3+ years.",
    price: 69.51,
    affiliateLink: "https://amzn.to/47EEz0J",
    category: "Action Figures",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "lego-one-piece",
    title: "LEGO ONE PIECE Buggy The Clown's Circus Tent",
    description: "Anime Building Set",
    fullDescription: "Another great set for the anime crowd! This LEGO ONE PIECE Circus Tent is a creative and unique building toy featuring the memorable villain, Buggy the Clown. It includes 4 toy figures and is perfect for building, display, and pretend play for kids ages 8+.",
    price: 50.92,
    affiliateLink: "https://amzn.to/47Jc9kF",
    category: "Building Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "goosebumps-game",
    title: "Goosebumps The Game Board Game",
    description: "Spooky Family Game Night",
    fullDescription: "If your kids love the scary books, they'll love this! Goosebumps The Game is a fun, spooky monster board game perfect for family game night or sleepovers. It's designed for ages 8 and up and captures all the scary fun of the classic series.",
    price: 30.14,
    affiliateLink: "https://amzn.to/3WKwS2K",
    category: "Games",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "electric-wiggle-car",
    title: "FanttikRide N7 Pro Electric Wiggle Car",
    description: "2-in-1 Ride-On Fun",
    fullDescription: "This one is high on my daughter's wish list! The Electric Wiggle Car is a 2-in-1 swing car and ride-on toy with a rechargeable battery and two-speed settings. It features anti-rollover safety, flashing wheels, and Bluetooth for music. It supports riders up to 150 lbs, making it a fantastic outdoor toy for ages 3 and up.",
    price: 209.99,
    affiliateLink: "https://amzn.to/43MEXaU",
    category: "Ride-Ons",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "ride-on-tractor",
    title: "Costzon Ride on Tractor w/ Trailer (12V)",
    description: "Working Tractor Adventure",
    fullDescription: "For the kid who loves to 'work' outside! This 12V Ride on Tractor includes a working trailer, remote control for parent safety, and a 3-gear shift. It features LED lights, a safety belt, and even a USB audio input for tunes. A highly-rated, large electric vehicle toy for long-lasting fun.",
    price: 229.99,
    affiliateLink: "https://amzn.to/47MeGL5",
    category: "Ride-Ons",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "grocery-store",
    title: "Melissa & Doug Fresh Mart Grocery Store",
    description: "Wooden Supermarket Play",
    fullDescription: "We got my daughter a toy store last year, and it has brought so much laughter and fun to our whole family! This Melissa & Doug Fresh Mart is a beautiful, freestanding wooden supermarket that encourages endless role-playing and imaginative scenarios for toddlers and kids ages 3+.",
    price: 359.99,
    affiliateLink: "https://amzn.to/47M8AdO",
    category: "Pretend Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "camping-set",
    title: "SMILESSKIDDO Kids Camping Set (41 PCS)",
    description: "Indoor/Outdoor Adventure",
    fullDescription: "Bring the great outdoors inside! This 41-piece Pretend Camping Set includes a pop-up tent perfect for indoor and outdoor play. It's a fantastic, affordable toy that encourages creative play and adventure for toddlers and kids ages 3-5.",
    price: 42.49,
    affiliateLink: "https://amzn.to/4oU9DPx",
    category: "Pretend Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "magic-workshop",
    title: "Little Tikes Magic Workshop",
    description: "Imaginative Magic Play",
    fullDescription: "This is a fun, immersive toy that sparks imagination! The Little Tikes Magic Workshop is a multicolor playset that lets kids pretend to be little magicians and inventors. It offers hours of engaging play and is a great Amazon's Choice pick.",
    price: 139.97,
    affiliateLink: "https://amzn.to/3LtUWnZ",
    category: "Pretend Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "nerf-gelfire",
    title: "Nerf Pro Gelfire Dual Wield Pack",
    description: "Gel Blaster Action",
    fullDescription: "Gel blasters are a huge hit in our house, and this set is awesome because it comes with two! The Nerf Pro Gelfire Dual Wield Pack includes two blasters, two hoppers, and 5,000 Gelfire Rounds. These are great for safe, outdoor fun (Note: This is for Ages 14 & Up due to the power, so maybe one for the older crowd!).",
    price: 44.99,
    affiliateLink: "https://amzn.to/47vgNEf",
    category: "Outdoor Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "eilik-robot",
    title: "Eilik Desktop Robot Pet (Pink Version)",
    description: "Interactive Robot Companion",
    fullDescription: "The coolest desk accessory! Eilik is an adorable, highly interactive desktop robot pet that makes a perfect companion. It's great for both kids and teens and has awesome expressions and reactions. A unique and fun tech gift for home or a workspace.",
    price: 199.99,
    affiliateLink: "https://amzn.to/3LwSIUQ",
    category: "Tech Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "laser-tag-set",
    title: "Rechargeable Laser Tag Set for Kids, Teens & Adults",
    description: "Group Action Game",
    fullDescription: "Get ready for action! This Rechargeable Laser Tag Set is a huge hit, selling over 600 sets last month. It includes guns and vest sensors and provides amazing group activity for boys and girls age 8+. It's the perfect way to burn off energy outside!",
    price: 119.69,
    affiliateLink: "https://amzn.to/4qOLlIC",
    category: "Outdoor Play",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "wall-crawler-robot",
    title: "HEX BOTS Wall Crawler Gecko Robot",
    description: "Wall-Climbing RC Robot",
    fullDescription: "I've seen this one everywhere! This HEX BOTS Wall Crawler Gecko is a rechargeable remote control robot that can climb right up walls! It's super fun and a guaranteed crowd-pleaser. I might buy three to avoid sibling wars! Perfect for boys and girls ages 4 and up.",
    price: 32.69,
    affiliateLink: "https://amzn.to/4hOduLP",
    category: "Tech Toys",
    guideSource: "Top Holiday Toys"
  },
  {
    id: "nintendo-switch-2",
    title: "Nintendo Switch™ 2 + Pokémon™ Legends: Z-A Bundle",
    description: "Ultimate Gaming Bundle",
    fullDescription: "This is the holy grail gift! My son has underlined this on his list about 10 times. The Nintendo Switch 2 Bundle is the latest and greatest console and comes with the highly anticipated Pokémon Legends: Z-A. It's the #1 Best Seller for a reason—the perfect tech upgrade for the serious gamer in your life.",
    price: 699.99,
    affiliateLink: "https://amzn.to/498wPVO",
    category: "Gaming",
    guideSource: "Top Holiday Toys"
  },
  // From Cozy Pile
  {
    id: "dearfoams-slippers",
    title: "Dearfoams Womens Hannah Chenille Knit Clog Slipper",
    description: "Ultra-Soft Comfort Slippers",
    fullDescription: "These chenille knit clog slippers are the ultimate in cozy comfort. Available in 8 colors, they feature a plush, soft exterior with a supportive indoor/outdoor sole. Perfect for those who appreciate comfort without sacrificing style.",
    price: 60.75,
    affiliateLink: "https://amzn.to/48M5nNj",
    category: "Cozy Essentials",
    guideSource: "Cozy Pile"
  },
  {
    id: "heated-scarf",
    title: "Heated Scarf for Women, Rechargeable Electric Scarf",
    description: "Warmth On-the-Go",
    fullDescription: "This innovative heated scarf with 5000mAh battery provides up to 13 hours of warmth with 3 temperature levels. Available in 5 colors for both men and women. Currently has a $10 off coupon, making it an incredible value for staying warm this season.",
    price: 49,
    affiliateLink: "https://amzn.to/4oaMDMm",
    category: "Cozy Essentials",
    guideSource: "Cozy Pile"
  },
  {
    id: "bedsure-throw-blanket",
    title: "Bedsure Fluffy Throw Blankets for Couch",
    description: "Luxuriously Soft Blanket",
    fullDescription: "Available in 7 colors and 4 sizes (price range $21-$45), these fluffy throw blankets are perfect for cozying up on the couch. Ultra-soft and plush, they add instant warmth and comfort to any living space.",
    price: 33,
    affiliateLink: "https://amzn.to/4nr9WAq",
    category: "Cozy Essentials",
    guideSource: "Cozy Pile"
  },
  {
    id: "witchcraft-wayward-girls",
    title: "Witchcraft for Wayward Girls by Grady Hendrix",
    description: "Captivating Read for Cozy Nights",
    fullDescription: "I'm personally reading this novel and loving it! A perfect book to curl up with on a cozy evening. Grady Hendrix delivers another captivating story that's impossible to put down.",
    price: 25,
    affiliateLink: "https://amzn.to/3L5l9cm",
    category: "Cozy Reading",
    guideSource: "Cozy Pile"
  },
  {
    id: "house-of-cross",
    title: "The House of Cross: An Alex Cross Thriller by James Patterson",
    description: "Page-Turning Thriller",
    fullDescription: "The latest Alex Cross thriller from James Patterson. Perfect for mystery lovers who enjoy getting lost in a gripping story while wrapped in their favorite blanket.",
    price: 25.32,
    affiliateLink: "https://amzn.to/49jokag",
    category: "Cozy Reading",
    guideSource: "Cozy Pile"
  },
  {
    id: "weighted-highland-cow",
    title: "Mewaii 4 Lbs Weighted Stuffed Animals - Highland Cow Plush",
    description: "ADORABLE Comfort Companion",
    fullDescription: "This 23\" Highland Cow plush features heavy belly and limbs for a realistic, comforting hug. Super soft and fluffy, it's perfect for both kids and adults who love cuddly comfort. Features 1 sustainability element and has earned 4.6 out of 5 stars from 503 reviews.",
    price: 51.91,
    affiliateLink: "https://amzn.to/4qpc7XO",
    category: "Cozy Comfort",
    guideSource: "Cozy Pile"
  },
  {
    id: "outin-nano-espresso",
    title: "OutIn Nano Portable Electric Espresso Machine",
    description: "Coffee Anywhere",
    fullDescription: "This portable coffee maker is perfect for camping, RV, hiking, or office use. Self-heating with USB-C, it works with ground coffee and NS capsules. Available in 5 colors. On sale for $204.99 (regularly $219).",
    price: 204.99,
    affiliateLink: "https://amzn.to/3L2TeKd",
    category: "Cozy Beverages",
    guideSource: "Cozy Pile"
  },
  {
    id: "shiatsu-neck-massager",
    title: "ALLJOY Shiatsu Back and Neck Massager with Heat",
    description: "Deep Tissue Relaxation",
    fullDescription: "This electric deep tissue 3D kneading massage pillow works on shoulder, legs, foot, and body. With 4.4 stars and 4,359 reviews, it's a proven relaxation gift for women, men, mom, and dad.",
    price: 54.99,
    affiliateLink: "https://amzn.to/47uqIbV",
    category: "Cozy Wellness",
    guideSource: "Cozy Pile"
  },
  {
    id: "keenray-towel-warmer",
    title: "Keenray Bucket Style Towel Warmers, Luxury Bucket Towel Warmer",
    description: "The Ultimate in Cozy Luxury",
    fullDescription: "#1 Best Seller in Towel Warmers! The ultimate in cozy - go from a warm bath to a warm towel! This large towel warmer fits up to two 40\"x70\" oversized bathrobes, blankets, or PJ's. Features auto shut-off for safety.",
    price: 169.99,
    affiliateLink: "https://amzn.to/3L5lmMG",
    category: "Cozy Luxury",
    guideSource: "Cozy Pile"
  },
  {
    id: "wearable-heated-blanket",
    title: "Kozyus Wearable Heated Blanket",
    description: "Cozy Wearable Warmth",
    fullDescription: "This innovative wearable blanket features arm and leg pockets for ultimate comfort and mobility. Available in 8 colors. Stay warm while still being able to move around the house freely.",
    price: 67.99,
    affiliateLink: "https://amzn.to/3LbN626",
    category: "Cozy Essentials",
    guideSource: "Cozy Pile"
  },
  
  // From Luxury Pile
  {
    id: "oura-ring-4",
    title: "Oura Ring 4 - Rose Gold - Smart Ring",
    description: "The Ultimate Social Currency for the Health-Obsessed",
    fullDescription: "Forget the clunky fitness trackers; this is the ultimate social currency for the health-obsessed. The Oura Ring tracks sleep, stress, activity, and recovery with a precision and style that's totally subtle and chic. It's not just a gadget; it's a 24/7 personalized recovery coach hiding on their finger. For the person who has everything but wants the data on how good they're actually sleeping.",
    price: 349,
    affiliateLink: "https://amzn.to/3WAYtTI",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "ulike-reglow-mask",
    title: "Ulike ReGlow LED Light Therapy Mask",
    description: "Spa-Level Skincare at Home",
    fullDescription: "This is what happens when you decide to skip the pricey spa treatments and bring the entire esthetician's office home. With four light modes, this mask is the ultimate skin-care accessory. If they're obsessed with beauty trends and room aesthetics, this is the futuristic, photo-ready gift they didn't know they needed.",
    price: 89,
    affiliateLink: "https://amzn.to/4h8Igie",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "boriwat-massager",
    title: "Boriwat Back Massager Neck Shoulder Massager with Heat",
    description: "Your Personal In-Home Masseuse",
    fullDescription: "After weeks of deep-diving and heavy lifting, someone deserves a break. This Shiatsu Massage Pillow is the perfect excuse to sit down and be utterly useless for 20 minutes. It delivers deep, heated relief that turns a standard sofa into a private, in-home masseuse.",
    price: 45,
    affiliateLink: "https://amzn.to/4oBjnOP",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "facial-steamer-kit",
    title: "Facial Steamer Spa Kit with Complimentary 17 Skin Care Tools",
    description: "Professional At-Home Facial Experience",
    fullDescription: "A must-have for the dedicated at-home facialist. This kit provides a professional steam for facial detox and sinus relief, and it comes complimentary with 17 skincare tools, so you're truly stacking your Present Pile with value. It's the simplest way to get that \"I-knew-you'd-love-it\" glow.",
    price: 42,
    affiliateLink: "https://amzn.to/3IRuOm9",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "ice-n-fire-candle",
    title: "Ice N Fire - Surprise Hidden Jewelry Soy Candle (Bubble Gum scent)",
    description: "A Candle & Treasure Hunt in One",
    fullDescription: "A candle that's a gift and a treasure hunt? Yes, please. This bubble gum-scented soy candle has a mystery piece of jewelry (like a hidden necklace) inside. It's the perfect, indulgent little surprise for a relaxing night in.",
    price: 22,
    affiliateLink: "https://amzn.to/4nQfxkK",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "skin1004-toner",
    title: "SKIN1004 Madagascar Centella Poremizing Clear Toner 210ml",
    description: "K-Beauty Excellence",
    fullDescription: "You can't have a luxury pile without the ultimate K-Beauty haul. This line is for the skincare aficionado who appreciates clinical-level results with beautiful, minimalist packaging. This clear toner works to refine pores and leave skin looking airbrushed.",
    price: 18,
    affiliateLink: "https://amzn.to/48WI2sf",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "skin1004-clay-mask",
    title: "SKIN1004 Madagascar Centella Poremizing Quick Clay Stick Mask 27g",
    description: "On-the-Go Flawless Skin",
    fullDescription: "The perfect on-the-go tool for flawless skin. This quick clay stick mask is a simple, no-mess way to get that deep clean and refine pores. It's an investment in their face, making it a guaranteed hit.",
    price: 16,
    affiliateLink: "https://amzn.to/3W2e6Dv",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "skin1004-ampoule",
    title: "SKIN1004 Madagascar Centella Poremizing Fresh Ampoule 100ml",
    description: "Concentrated Hydration Boost",
    fullDescription: "The finishing touch to the ultimate skincare regimen. This fresh ampoule is the concentrated boost of hydration and clarity that makes a dramatic difference.",
    price: 20,
    affiliateLink: "https://amzn.to/4h3IyGU",
    category: "Wellness & Self-Care",
    guideSource: "Luxury Pile"
  },
  {
    id: "hexclad-fry-pan",
    title: "HexClad Hybrid Nonstick 10-Inch Fry Pan with Tempered Glass Lid",
    description: "The Pan That Ends All Debates",
    fullDescription: "This isn't just a frying pan; it's the pan that ends the debate between stainless steel and nonstick. It's a hybrid marvel that delivers performance (sears like cast iron) and convenience (cleans like nonstick). This gift says, \"I support your passion for cooking, but I also support your need for an easy clean-up.\"",
    price: 95,
    affiliateLink: "https://amzn.to/4omYzuh",
    category: "Home & Lifestyle",
    guideSource: "Luxury Pile"
  },
  {
    id: "nespresso-citiz",
    title: "Nespresso CitiZ & Milk Platinum Single Serve Coffee and Espresso Machine by De'Longhi",
    description: "Your Personal Barista",
    fullDescription: "For the person who believes a $7 latte is a lifestyle—but is ready for an upgrade. This sleek, platinum-finish machine is the ultimate coffee and espresso solution. It's the easiest way to achieve that \"Wow!\" moment before their morning meeting.",
    price: 179,
    affiliateLink: "https://amzn.to/4qp8UHZ",
    category: "Home & Lifestyle",
    guideSource: "Luxury Pile"
  },
  {
    id: "bamboo-sheets",
    title: "Bedsure 100% Rayon Derived from Bamboo Sheets Queen Size Set",
    description: "Cooling Luxury for Hot Sleepers",
    fullDescription: "If you've ever struggled to find the perfect gift for a hot sleeper, this is your secret code cracked. These cooling sheets are the luxurious, life-changing difference between a restless night and a deeply recovered one.",
    price: 48,
    affiliateLink: "https://amzn.to/42BpDNV",
    category: "Home & Lifestyle",
    guideSource: "Luxury Pile"
  },
  {
    id: "makeup-organizer",
    title: "funest Makeup Brush Holder Organizer, 360° Rotating",
    description: "Aesthetic Organization Perfection",
    fullDescription: "For the person whose desk or vanity deserves a serious aesthetic upgrade. This rotating organizer keeps every tool and accessory in its place, making those viral beauty trends (or just a regular Tuesday morning routine) feel completely effortless.",
    price: 24,
    affiliateLink: "https://amzn.to/4nQfzcm",
    category: "Home & Lifestyle",
    guideSource: "Luxury Pile"
  },
  {
    id: "peloton-bike",
    title: "Peloton Indoor Exercise Bikes, Original Peloton Bike and Bike+",
    description: "The Ultimate Fitness Investment",
    fullDescription: "The ultimate piece of high-tech gear. It's not just a bike; it's a community, a schedule, and a motivational coach all rolled into one. This is the big-ticket item that says, \"I'm buying into your passion for fitness,\" and is personally vetted to become a huge hit.",
    price: 1445,
    affiliateLink: "https://amzn.to/3IUQg9U",
    category: "Fashion & Fitness",
    guideSource: "Luxury Pile"
  },
  {
    id: "rayban-sunglasses",
    title: "Ray-Ban Women's Rb4378 Sunglasses",
    description: "Timeless Classic Accessory",
    fullDescription: "Some classics are non-negotiable. These Havana/Gradient Brown sunglasses are a sleek, timeless accessory. They're the social currency that completes any look, ensuring they're never rolling their eyes at being \"too grown-up\".",
    price: 156,
    affiliateLink: "https://amzn.to/4nNx9gY",
    category: "Fashion & Fitness",
    guideSource: "Luxury Pile"
  },
  {
    id: "kate-spade-handbag",
    title: "kate spade handbag for women Madison SMALL satchel (Toasted hazelnut)",
    description: "Chic Versatile Investment Piece",
    fullDescription: "Every luxury pile needs a chic, versatile handbag. This small satchel in a beautiful toasted hazelnut shade is the perfect size—it fits all the essentials without becoming a bottomless pit. It's an investment piece that is guaranteed to earn bragging rights.",
    price: 329,
    affiliateLink: "https://amzn.to/4q74QM1",
    category: "Fashion & Fitness",
    guideSource: "Luxury Pile"
  },
  {
    id: "bluetooth-flame-speaker",
    title: "Outdoor Bluetooth Speaker with Flame Atmosphere",
    description: "Music Meets Ambiance",
    fullDescription: "Because great music and cozy ambiance are always in style. This portable speaker combines a quality sound system with a flickering flame light, making it the perfect accessory for outdoor gatherings. It's a simple way to elevate an evening and enhance their patio aesthetics.",
    price: 47,
    affiliateLink: "https://amzn.to/48ZfgXW",
    category: "Fashion & Fitness",
    guideSource: "Luxury Pile"
  },
  
  // From Accessories for Tween Girls
  {
    id: "chi-flat-iron",
    title: "CHI Ceramic Flat Iron (\"Going Bananas\" Edition)",
    description: "Premium Style Tool",
    fullDescription: "The CHI Ceramic Flat Iron is a styling classic, renowned for its salon-quality results and ability to create a silky, frizz-free shine. This particular model, the \"Going Bananas\" edition, is a fun, unique version of their highly-rated 1-inch ceramic iron.",
    price: 115,
    affiliateLink: "https://amzn.to/3IrMwfT",
    category: "Accessories",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "hp-sprocket-printer",
    title: "HP Sprocket Portable Photo Printer (2nd Edition)",
    description: "Instant Photo Printing",
    fullDescription: "For the teen or tween whose camera roll is full of memories they want to share physically, the HP Sprocket Photo Printer is the perfect gift. This sleek, pocket-sized gadget connects to their phone via Bluetooth to instantly print 2x3\" photos—no messy ink cartridges required (it uses ZINK Zero Ink technology).",
    price: 114.99,
    affiliateLink: "https://amzn.to/3VLouPX",
    category: "Tech",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "sleep-headband",
    title: "Wireless Sleep Headband: Comfy Tunes for Teens",
    description: "Sleep & Music Headphones",
    fullDescription: "This Sleep Headband is a pre-teen dream—it's three essentials in one: a cozy headband, wireless headphones, and a microphone! It's perfect for pre-teen girls who love to listen to music, audiobooks, or ASMR while falling asleep.",
    price: 29,
    affiliateLink: "https://amzn.to/4pKNjtb",
    category: "Accessories",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "samsung-tab-a9",
    title: "Samsung Galaxy Tab A9+ (11-inch): The Entertainment Powerhouse",
    description: "Large Screen Tablet",
    fullDescription: "The Samsung Galaxy Tab A9+ is the perfect tablet for the whole family, especially for streaming, schoolwork, and gaming. Its main draw is the generous 11.0-inch display, offering more screen space than competitors for an immersive viewing experience.",
    price: 219.99,
    affiliateLink: "https://amzn.to/4gOutgt",
    category: "Tech",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "polymer-clay-kit",
    title: "Polymer Clay 50 Colors DIY Starter Kits",
    description: "Creative Crafting",
    fullDescription: "This 50-Color Polymer Clay Kit is the ultimate choice for inspiring creativity in children and beginning artists. Polymer clay is a step up from traditional modeling clay because it is oven-baked to create permanent, durable pieces like beads, charms, figures, and miniatures.",
    price: 27.50,
    affiliateLink: "https://amzn.to/4gVcSnk",
    category: "Crafts",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "friendship-bracelet-kit",
    title: "Martiount Friendship Bracelet Kit (Cyan)",
    description: "DIY Jewelry Making",
    fullDescription: "This Martiount Friendship Bracelet Kit is a massively popular arts and crafts set, evident by its strong reviews (4.3 out of 5 stars) and popularity for children's gifts. It's designed specifically for girls aged 6 to 12 and provides a comprehensive, all-in-one station for creating braided and beaded friendship jewelry.",
    price: 30,
    affiliateLink: "https://amzn.to/3KuRkSa",
    category: "Crafts",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "heishi-bracelet-kit",
    title: "Cool Maker Stack'd Heishi Studio Bracelet Kit",
    description: "Trendy Bracelet Making",
    fullDescription: "This Cool Maker Stack'd Heishi Studio is the perfect creative project for the trendy tween! Forget the boring beads—this kit features over 1200 colorful Heishi-style beads that look like tiny, flat discs, making modern, stackable bracelets.",
    price: 24,
    affiliateLink: "https://amzn.to/4gPevTt",
    category: "Crafts",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "bean-bag-chair",
    title: "Hobestluk Giant Memory Foam Bean Bag Chair",
    description: "Cozy Room Furniture",
    fullDescription: "This Hobestluk Bean Bag Chair is not your average kids' room accessory—it's an oversized piece of cozy furniture designed for maximum comfort! Perfect for a relaxed living room, bedroom, or dorm, this giant bean bag is filled with memory foam instead of traditional beads.",
    price: 134,
    affiliateLink: "https://amzn.to/4nXXf0y",
    category: "Home",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "instax-mini-12",
    title: "FUJIFILM INSTAX Mini 12 Camera Gift Set (Lilac Purple)",
    description: "Instant Camera Fun",
    fullDescription: "This INSTAX Mini 12 Gift Set is the perfect blend of trendy fun and classic photography, making it a highly requested gift for the pre-teen in your life. It instantly prints credit-card sized photos, offering a tangible way for your child to capture and trade memories with friends—a nostalgic and fun alternative to phone screens.",
    price: 129,
    affiliateLink: "https://amzn.to/3Iz53qB",
    category: "Tech",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "spa-headband-set",
    title: "Spa Headband and Wristband Set",
    description: "Self-Care Essentials",
    fullDescription: "This Spa Headband and Wristband Set is a super cute, highly functional gift that any pre-teen girl will love—and use every single day! These are perfect for keeping hair out of the way and water from running down arms while washing their face, doing their makeup, or applying their favorite skincare products.",
    price: 13.99,
    affiliateLink: "https://amzn.to/4pUapO0",
    category: "Self-Care",
    guideSource: "Accessories for Tween Girls"
  },
  {
    id: "diy-journal-kit",
    title: "Pretty Me DIY Journal Kit for Girls",
    description: "Creative Journaling",
    fullDescription: "This DIY Journal Kit is the ultimate gift for encouraging creativity and self-expression in your pre-teen! It's perfect for girls aged 8-14 who love to doodle, write, and scrapbook. For just $29, this multicolored kit comes packed with everything they need to personalize their own scrapbook diary—think cute papers, stickers, colorful pens, and other fun craft supplies.",
    price: 29,
    affiliateLink: "https://amzn.to/42kSu8X",
    category: "Crafts",
    guideSource: "Accessories for Tween Girls"
  },
  
  // From Tech Gadgets for Tween Boys
  {
    id: "eksa-headset",
    title: "EKSA 7.1 Surround Sound Headset",
    description: "Gaming Audio Excellence",
    fullDescription: "This is the perfect entry-level headset for the tween who's finally serious about gaming. The 7.1 Virtual Surround Sound turns your kid into a positional-audio ninja—they'll hear exactly where the enemy footsteps are coming from, earning instant bragging rights.",
    price: 45,
    affiliateLink: "https://amzn.to/3IsCFqa",
    category: "Gaming",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "razer-blackshark",
    title: "Razer BlackShark V2 X",
    description: "Pro Gaming Headset",
    fullDescription: "When they're ready to ditch the \"casual\" gear and get serious, this is the gift that delivers. The Razer BlackShark V2 X is the gold standard for competitive gaming—it's ultra-lightweight (just 240g!) and features custom-tuned Razer™ TriForce 50mm Drivers that separate high, mid, and low frequencies.",
    price: 59.99,
    affiliateLink: "https://amzn.to/42lLKrs",
    category: "Gaming",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "gyrocopters-hoverboard",
    title: "Gyrocopters PRIME Hoverboard",
    description: "All-Terrain LED Hoverboard",
    fullDescription: "This is the ultimate gift for a huge \"WOW\" moment. The Gyrocopters PRIME is built for fun, featuring 6.5\" All-Terrain LED Wheels that light up and handle sidewalks, grass, and gravel with ease. It cruises at speeds up to 15kmph and comes with a Built-in Bluetooth Speaker.",
    price: 199,
    affiliateLink: "https://amzn.to/4pQvnNI",
    category: "Outdoor",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "movo-vlogger-kit",
    title: "Movo iVlogger Kit",
    description: "YouTube Starter Pack",
    fullDescription: "Got a tween obsessed with YouTube, TikTok, or streaming? The Movo iVlogger Kit is the ultimate shortcut to looking and sounding professional. This is the all-in-one gift that turns their iPhone into a proper studio instantly.",
    price: 129,
    affiliateLink: "https://amzn.to/3KNMvDv",
    category: "Content Creation",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "gtracing-chair",
    title: "GTRACING Gaming Chair",
    description: "Ergonomic Gaming Throne",
    fullDescription: "If your tween is spending more time at their desk than anywhere else (shocker!), it's time to upgrade their seat from a dining room outcast to a true gaming throne. This GTRACING Gaming Chair is a top-rated comfort zone with professional-level lumbar support, an adjustable headrest, and a retractable footrest.",
    price: 219.99,
    affiliateLink: "https://amzn.to/4pON547",
    category: "Gaming",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "instax-mini-41",
    title: "Instax Mini 41 Instant Camera",
    description: "Retro Photo Fun",
    fullDescription: "Instant cameras are the ultimate way for teens and tweens to capture memories right now and give out retro, credit-card sized prints (the original social sharing!). The Instax Mini 41 is an Amazon's Choice because it nails the vintage look with zero fuss.",
    price: 125,
    affiliateLink: "https://amzn.to/4mLGapH",
    category: "Photography",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "gesture-rc-car",
    title: "Dysaim Gesture RC Stunt Car",
    description: "Hand-Controlled Stunt Car",
    fullDescription: "Forget boring remote controls—this Dysaim Stunt Car is powered by pure hand magic! This is the ultimate \"wow\" toy for the 6-12 crowd, offering two ways to drive: a traditional 2.4GHz remote, or the wildly fun Gesture Sensor control.",
    price: 39.99,
    affiliateLink: "https://amzn.to/46QM8Q5",
    category: "Toys",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "foam-ufo-drone",
    title: "Foam UFO Drone",
    description: "Safe Indoor Drone",
    fullDescription: "This Foam UFO Drone is the perfect entry point into flying for younger pilots. It features a safe, soft foam design and Auto-Hover technology, making it incredibly easy to learn and fly (and nearly impossible to crash!).",
    price: 49,
    affiliateLink: "https://amzn.to/4gPL4Rb",
    category: "Toys",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "ameta-s20-drone",
    title: "Ameta S20 Lite 4K Drone",
    description: "Professional Features Drone",
    fullDescription: "This isn't a toy—it's a serious drone packed with features, making it the ultimate gift for aspiring pilots, young or old. The Ameta S20 Lite features a 4K UHD Camera for capturing stunning videos and photos and uses a powerful Brushless Motor for stability and speed.",
    price: 199.99,
    affiliateLink: "https://amzn.to/46K4G4r",
    category: "Tech",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "ferrofluid-display",
    title: "Sovenomund Dancing Ferrofluid",
    description: "Music-Reactive Display",
    fullDescription: "Looking for a gift that's genuinely unique and mesmerizing? The Sovenomund Dancing Ferrofluid is pure desktop magic. This isn't a speaker—it's a Ferrofluid Display Lamp that brings music to life!",
    price: 149,
    affiliateLink: "https://amzn.to/3IrMncl",
    category: "Decor",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "hexbug-battlebots",
    title: "HEXBUG BattleBots Arena (Bite Force & Blacksmith)",
    description: "Robot Battle Arena",
    fullDescription: "Get ready for some high-octane fun! This HEXBUG BattleBots Arena is an awesome, hands-on toy that brings the excitement of the hit TV show right into your living room. It's perfect for both pre-teen boys and girls ages 8 and up who love remote-control action and strategic play.",
    price: 89.43,
    affiliateLink: "https://amzn.to/48GuvF1",
    category: "Toys",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  {
    id: "light-up-baseball",
    title: "Light Up Baseball (Glow-in-the-Dark)",
    description: "Night-Time Sports Fun",
    fullDescription: "Ready to keep the game going long after the sun sets? This Light Up Baseball is the perfect, unexpected sports gift for pre-teen boys and girls. It's a fantastic accessory for any young player (ages 8-14) because it glows in the dark, turning backyard or park games into an awesome night-time activity!",
    price: 24.99,
    affiliateLink: "https://amzn.to/3Ip0EGL",
    category: "Sports",
    guideSource: "Tech Gadgets for Tween Boys"
  },
  
  // Tech Gifts for Men
  {
    id: "efomao-ergonomic-office-chair",
    title: "Efomao Big Tall Ergonomic Office Chair (450LBS Capacity)",
    description: "Luxury office chair with lumbar support, retractable footrest, and 135° recline",
    fullDescription: "Okay, fine, technically this isn't a new piece of tech, but hear me out: The man can't conquer his spreadsheets or his enemies (in a video game) if his spine is slowly dissolving! This is the big daddy of chairs. Built for the big and tall (up to 450 lbs, in fact!), it's less of a seat and more of a luxury lounge experience masquerading as an office supply. It features high-back support, adjustable padded armrests (so his elbows don't get jealous), and actual lumbar support that makes you feel like you just got a hug from a cloud. The best part? The retractable footrest. When he needs a mental break from his WFH grind, he can lean back (135° recline, baby!) and pretend he's on a private jet instead of a Zoom call. It's the essential upgrade for a healthy back and a happy tech-focused life.",
    price: 399.99,
    affiliateLink: "https://amzn.to/4osINOv",
    category: "Office & Productivity",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "logitech-mx-brio-4k-webcam",
    title: "Logitech MX Brio Ultra HD 4K Collaboration, Streaming Webcam",
    description: "Premium 4K webcam with AI enhancements, Show Mode, and advanced lighting correction",
    fullDescription: "Forget trying to find the perfect lighting ring—this camera is the perfect lighting ring, and then some. The MX Brio is the new reigning king of webcams, packing Ultra HD 4K resolution at 30 FPS (or buttery-smooth 1080p at 60 FPS for streamers who love that high frame rate life). It's like giving the man in your life a mini, AI-powered production studio. It features a massive sensor and advanced AI enhancements that make him look great in everything from dim basement light to a room with a harsh sun glare (say goodbye to that witness protection silhouette). The coolest party trick? 'Show Mode' allows him to tilt the camera down to instantly show off his notes, a sketch, or his latest Lego build—perfect for collaboration without fumbling with his phone. No content creator, WFH hero, or aspiring Twitch streamer should be without this lens. (Amazon stats: A great 4.4 out of 5 stars, with 100+ recently bought!)",
    price: 299.00,
    affiliateLink: "https://amzn.to/4nfWVtj",
    category: "Office & Productivity",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "hyperx-quadcast-s-rgb-microphone",
    title: "HyperX QuadCast S RGB USB Condenser Microphone with Shock Mount",
    description: "Professional USB mic with customizable RGB lighting, four polar patterns, and tap-to-mute",
    fullDescription: "Let's be clear: this microphone doesn't just capture sound, it captures attention. If the man in your life is still using the scratchy headset mic from 2012, this is the upgrade he desperately needs. This USB condenser mic makes his voice sound rich, professional, and entirely worthy of a podcast deal. The best part? The aesthetics are absolutely elite. The Radiant RGB lighting is fully customizable, turning the mic into a centerpiece for his stream or YouTube channel. Functionally, it's packed: it features four selectable polar patterns (so whether he's doing a solo stream or a two-person interview, it handles it all), an internal pop filter to stop those pesky 'plosive' sounds, and an anti-vibration shock mount to make sure his desk slamming rage-quit doesn't get picked up on the recording. Plus, the tap-to-mute sensor on top is genius—just a light touch, and the RGB lights immediately turn off, giving him a crystal-clear, visible cue that he's safely muted. (Amazon Stats: A stellar 4.7 out of 5 stars from over 17,500 ratings, and an 'Amazon's Choice' for good reason!)",
    price: 169.08,
    affiliateLink: "https://amzn.to/3JdDy6a",
    category: "Audio & Recording",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "innoview-portable-monitor",
    title: "InnoView Portable Monitor 15.6\" 1080P",
    description: "Ultra-slim portable Full HD monitor with USB-C, built-in stand, and protective sleeve",
    fullDescription: "We all know him: the man who starts working from a café, a hotel balcony, or a train, only to immediately miss his two giant home monitors. This is the mobile office solution he's been dreaming of. This ultra-slim, 15.6\" Full HD (1080P) portable monitor is designed to slip right into a backpack—it's thin and light enough that he'll barely notice the extra weight, but he'll absolutely notice the massive boost to his screen real estate. It's the perfect travel companion for the digital nomad, allowing him to take his high-efficiency, multi-tasking workspace across the world. Whether he's crunching spreadsheets, editing video, or just gaming on his PS5 or Switch while on a trip, the single-cable USB-C connection makes it true plug-and-play. No bulky power bricks needed! Plus, it has a brilliant built-in 90° adjustable stand and comes with a protective sleeve, so it's ready for business the moment it comes out of the bag. Give him the power to work from anywhere without losing an inch of productivity. (Amazon Stats: A solid 4.4 out of 5 stars from over 5,100 ratings, and an 'Amazon's Choice' with 500+ bought in the past month.)",
    price: 109.00,
    affiliateLink: "https://amzn.to/3IPwXyR",
    category: "Office & Productivity",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "house-of-marley-headphones",
    title: "House of Marley Positive Vibration Frequency: Over-Ear Wireless Headphones",
    description: "Eco-friendly wireless headphones with 40mm drivers, 34-hour battery, and Rasta design",
    fullDescription: "I actually bought these for my man's birthday this year, and he is obsessed! He's a tech-savvy guy and a musician, so these headphones really had to deliver—and they hit all the right notes. This is the perfect blend of killer sound and unique, conscious style. With powerful 40mm Hi-Definition drivers, they push out the rich, punchy bass and crisp highs that audiophiles (and musicians!) demand, making everything from mixing tracks to zoning out to a podcast sound fantastic. What truly makes them stand out is the look: the Rasta colorway and design incorporate eco-friendly materials like FSC® certified wood and recyclable aluminum, giving them an authentic, head-turning vibe. He can forget the charger for a long time, too—they boast up to 34 hours of playtime and feature Quick Charge Technology, meaning a quick 15-minute plug-in gets him 4 hours of listening. Get him the pair he'll actually be excited to wear. (Amazon Stats: 'Amazon's Choice' for 'marley bluetooth headphones'.)",
    price: 79.98,
    affiliateLink: "https://amzn.to/3JfhCrm",
    category: "Audio & Recording",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "mackie-onyx16-mixer",
    title: "Mackie Onyx16 16-channel Analog Mixer with Multitrack USB",
    description: "Professional 16-channel mixer with Onyx preamps, British EQ, and 24-bit/96kHz USB interface",
    fullDescription: "I know this gift is a guaranteed win because I gave my partner the Mackie Onyx 12 last Christmas, and it was, hands down, the best gift I could have gotten him. He's a serious musician with a true flare for musical engineering, and this is the piece of gear that truly levels up his home studio. For the man who understands that audio quality is non-negotiable, the Mackie Onyx is where professional analog sound meets modern digital convenience. This mixer is built to perform like a classic studio console but fits perfectly in a project studio. It features the legendary, Award-Winning Onyx Mic Preamps which provide an incredible 60dB of gain for ultra-clean, professional-grade recordings—crucial for capturing the nuance of instruments and vocals. But the real magic is the Perkins 'British Style' EQ. Inspired by classic mixing desks from the '60s and '70s, this EQ gives him sweeping control over frequencies, allowing him to dial in rich, musical tones that sound warm and polished, not brittle and digital. The best part? It's a complete recording powerhouse, functioning as a high-resolution 24-Bit / 96kHz Multitrack USB Interface. He can route every one of those 16 channels directly to his computer's recording software, giving him maximum flexibility in post-production. It's rugged, it sounds incredible, and it's the centerpiece his creative world has been waiting for.",
    price: 1100.00,
    affiliateLink: "https://amzn.to/3KStTT6",
    category: "Audio & Recording",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "foldable-quadcopter-drone",
    title: "Foldable WiFi Quadcopter Drone with Camera for Adults 4K HD",
    description: "Beginner-friendly 4K drone with brushless motor, auto-hover, follow-me, and 60+ min flight time",
    fullDescription: "This one is for fun, pure and simple, and it comes without the scary commitment of a thousand-dollar price tag. If your guy has always wanted to get into the drone game but doesn't want to break the bank for a hobby, this is the perfect entry point. This foldable quadcopter punches well above its weight class. It comes packed with features you usually only see on much pricier models: a 4K HD Camera for capturing crystal-clear aerial footage and the coveted Brushless Motor for superior flight stability and a much longer lifespan. It even includes the Auto-Hover Feature and Follow Me Capability—so it can track him on a bike ride or keep a steady shot while he focuses on the fun. The best feature, hands down, is the endurance. It comes with three batteries in the kit, giving him a total of over 60 minutes of combined flight time! This means less waiting around and more flying. It folds up small, fits right in a backpack, and gives him a massive 2650 FT Extended Control Range to truly explore his world from the sky. It's the ultimate 'just for fun' gadget that feels like a serious piece of tech. (Amazon Stats: A strong 4.7 out of 5 stars from over 180 ratings.)",
    price: 98.00,
    affiliateLink: "https://amzn.to/4hoqVly",
    category: "Fun & Entertainment",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "sdfm-compressed-air-duster",
    title: "SDFM Compressed Air Duster - 180,000 RPM (Brushless Motor)",
    description: "Rechargeable electric air duster with 180K RPM motor and 3-gear adjustable airflow",
    fullDescription: "I know I said this was a list of the coolest tech, but hear me out: sometimes, the greatest tech is the one that solves a persistent, annoying problem. This air duster is so good, my partner—the man who never makes a list—actually pointed it out and added it to his own! That alone should tell you everything you need to know. This isn't your average weak battery-powered cleaner. This thing is a powerhouse designed for the man who is serious about his gear. It features a high-performance Brushless Motor that can hit a mind-blowing 180,000 RPM. It delivers a continuous, powerful blast of air far stronger (and far cheaper in the long run) than endless cans of compressed air. He can stop wasting money on disposable cans that lose pressure after a few seconds. This gadget is rechargeable, has 3-Gear Adjustable Airflow for delicate electronics or deep cleaning a dusty PC rig, and comes with attachments for everything. It's perfect for his keyboard, the inside of his desktop, his car interior, or even quickly inflating an air bed. For the guy who loves his tools and hates dust, this is an absolutely brilliant, practical upgrade. (Amazon Stats: 'Amazon's Choice' with 50+ bought in the past month.)",
    price: 58.55,
    affiliateLink: "https://amzn.to/3KSgPx4",
    category: "Tech Accessories",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "redragon-m913-gaming-mouse",
    title: "Redragon M913 Impact Elite Wireless Gaming Mouse",
    description: "16-button programmable gaming mouse with 16K DPI, wireless/wired dual mode, and 45-hour battery",
    fullDescription: "If your partner is a gamer—especially one who plays complex titles like MMOs, MOBAs, or uses a lot of keyboard shortcuts for editing—this is the hidden gem of gaming mice. This isn't just a pointing device; it's a fully programmable command center for his hand. The highlight is the array of 12 fully programmable side buttons (for a total of 16 buttons on the mouse). This lets him map all his spells, abilities, or complex macros right to his thumb, giving him a massive competitive edge without having to fumble with the keyboard. And the best part? It's Wired/Wireless Dual Mode. It operates with a lightning-fast, lag-free 2.4Ghz wireless connection, but he can plug in with the USB-C cable for an instant recharge or a wired connection if preferred. With a 45+ hour battery life and a Pro Optical Sensor with up to 16,000 DPI, this mouse offers the premium features of a much more expensive brand, but at a fantastic budget price. It's the ultimate upgrade for his gaming setup and a serious tool for serious fun. (Amazon Stats: 100+ bought in the past month.)",
    price: 44.99,
    affiliateLink: "https://amzn.to/4nSnEwZ",
    category: "Gaming",
    guideSource: "Tech Gifts for Men"
  },
  {
    id: "magcubic-projector-wifi6",
    title: "Magcubic Projector with WiFi 6 and Bluetooth 5.4",
    description: "Android 11 smart projector with 4K support, 180° rotation, auto keystone, and 130\" display",
    fullDescription: "This is the perfect grand finale for your list—a truly 'cool tech' item that delivers maximum fun for minimal cost. This smart projector turns any blank wall into a massive entertainment screen, making it a fantastic gift for the guy who loves movies, gaming, or just having friends over. What sets this mini-projector apart at this price point are the smart features: Built-in Android 11 means it's a completely self-contained streaming device. He doesn't need to connect a laptop or a streaming stick—he can download apps like Netflix, Hulu, or Disney+ directly onto the projector and start watching immediately. The 180-Degree Rotation is a game-changer. He can set the projector on his nightstand and point the image straight up onto the ceiling for a movie night in bed, or project it perfectly onto a wall without needing a tripod. Auto Keystone automatically adjusts the picture to be a perfect rectangle, even if the projector is placed at an angle, eliminating setup hassle. With WiFi 6 for fast, lag-free streaming and Bluetooth 5.4 for easily connecting headphones or a speaker, it has all the modern tech he needs. With 4K support and a picture size of up to 130 inches, this is the gift that upgrades his bedroom, backyard, or garage into a private cinema. (Amazon Stats: 700+ bought in the past month with a 4.3-star rating from over 8,000 reviews.)",
    price: 66.49,
    affiliateLink: "https://amzn.to/47blnpx",
    category: "Fun & Entertainment",
    guideSource: "Tech Gifts for Men"
  },
  // Stocking Stuffers for Her
  {
    id: "christmas-earrings-reindeer",
    title: "Christmas Earrings 14K Cute Small Animal CZ Reindeer Studs",
    description: "Festive reindeer studs with cubic zirconia",
    fullDescription: "A little festive sparkle! These adorable reindeer studs feature tiny cubic zirconia for a subtle, cute shine. The perfect piece of jewelry to celebrate the season.",
    price: 13.00,
    affiliateLink: "https://amzn.to/47PBjhw",
    category: "Beauty & Accessories",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "cozy-manor-skincare-headband",
    title: "Cozy Manor Skincare Headband and Wristband Set (Black)",
    description: "Spa-style headband and wristband set",
    fullDescription: "Upgrade her cleansing ritual! This soft, spa-style set keeps hair dry and prevents water from dripping down her arms—a super cute and practical luxury.",
    price: 9.99,
    affiliateLink: "https://amzn.to/3JVqfaP",
    category: "Beauty & Skincare",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "elf-blush-tint-cherry",
    title: "e.l.f. Sheer For It Blush Tint (Cherry Cola)",
    description: "Versatile lip and cheek tint",
    fullDescription: "A versatile beauty must-have! This long-lasting sheer tint works beautifully on both lips and cheeks, giving her a natural, effortless flush. It's a great shade for any season!",
    price: 7.96,
    affiliateLink: "https://amzn.to/4qMVhSR",
    category: "Beauty & Makeup",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "kitsch-gold-claw-clip",
    title: "Kitsch Gold Metal Claw Clips, Large Hair Clips (1 Piece)",
    description: "Elegant gold claw clip",
    fullDescription: "The ultimate hair accessory! This elegant, durable gold claw clip is a trendy way to hold hair securely while adding a chic, polished look to any outfit.",
    price: 10.99,
    affiliateLink: "https://amzn.to/4oEbM2c",
    category: "Beauty & Accessories",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "garnier-charcoal-mask",
    title: "Garnier Pure Active Charcoal Peel-off Mask Cleanser (50 mL)",
    description: "Charcoal peel-off face mask",
    fullDescription: "A little self-care treat! This charcoal peel-off mask is perfect for a relaxing night in, helping to deeply clean and clarify oily or combination skin.",
    price: 9.96,
    affiliateLink: "https://amzn.to/3Xr7CP2",
    category: "Beauty & Skincare",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "grace-stella-eye-masks",
    title: "grace & stella Under Eye Masks With Retinol (6 Pairs)",
    description: "Retinol under eye gel patches",
    fullDescription: "Help her look refreshed after the holiday hustle! These revitalizing gel patches use Retinol to help with the appearance of dark circles and wrinkles. A luxurious little indulgence.",
    price: 13.95,
    affiliateLink: "https://amzn.to/49JNoYb",
    category: "Beauty & Skincare",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "viola-house-brow-wax",
    title: "VIOLA HOUSE Brow Styling Wax, Eyebrow Soap Kit",
    description: "Long-lasting brow styling wax",
    fullDescription: "Achieve the trendy \"feathery\" brow look! This long-lasting, waterproof styling wax is a great addition to her makeup routine for sculpted, perfectly set brows that last all day.",
    price: 9.99,
    affiliateLink: "https://amzn.to/43RyCuQ",
    category: "Beauty & Makeup",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "schick-dermaplaning-tool",
    title: "Schick Hydro Silk Touch-Up Dermaplaning Tool (3ct)",
    description: "Multi-purpose dermaplaning tool",
    fullDescription: "A beauty secret weapon! This multi-purpose tool is great for gentle dermaplaning and quickly touching up facial hair. A highly-rated, essential grooming tool.",
    price: 7.47,
    affiliateLink: "https://amzn.to/3LyNUOP",
    category: "Beauty & Grooming",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "maybelline-great-lash",
    title: "Maybelline New York Great Lash Big Washable Mascara (Blackest Black)",
    description: "Classic volume mascara",
    fullDescription: "A timeless classic! This iconic mascara is a staple in makeup bags everywhere, delivering reliable volume and definition without clumping. You can't go wrong with this one.",
    price: 8.98,
    affiliateLink: "https://amzn.to/47BOST2",
    category: "Beauty & Makeup",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "maybelline-falsies-mascara",
    title: "Maybelline New York The Falsies Volum' Express Washable Mascara (Very Black)",
    description: "Dramatic volume mascara",
    fullDescription: "For dramatic volume! This formula gives a striking, full-lash look without the need for falsies, perfect for bold holiday makeup looks.",
    price: 8.98,
    affiliateLink: "https://amzn.to/485aveC",
    category: "Beauty & Makeup",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "eyelash-separator-comb",
    title: "Eyelash Separator Eyelash Comb (Naked Pink)",
    description: "Mascara comb for lash separation",
    fullDescription: "The tool she didn't know she needed! This mascara comb helps separate lashes after application, eliminating clumps for a flawless, fanned-out finish.",
    price: 7.99,
    affiliateLink: "https://amzn.to/43mUi1L",
    category: "Beauty & Tools",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "ring-light-selfie",
    title: "Ring Light for Laptop and Phone, 5\" Selfie Ring Light",
    description: "Portable selfie ring light",
    fullDescription: "Perfect for the content creator or remote worker! This ring light provides great lighting for video calls, selfies, and streams, ensuring she always looks her best on camera.",
    price: 26.99,
    affiliateLink: "https://amzn.to/43Wtrtz",
    category: "Tech Accessories",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "terrys-orange-toffee",
    title: "Terry's Orange - Milk Chocolatey Confection with Toffee Bits",
    description: "Chocolate orange with toffee",
    fullDescription: "A delicious twist on a classic! The familiar chocolate orange flavor is made even better with crunchy toffee bits mixed in. A festive indulgence she'll love.",
    price: 6.49,
    affiliateLink: "https://amzn.to/3Lu8IXT",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers for Her"
  },
  {
    id: "luxury-coffee-socks",
    title: "Luxury Coffee Socks with Coffee Cup Gift Packaging",
    description: "Cozy socks in coffee cup packaging",
    fullDescription: "The ultimate cozy duo! These fun, soft socks come charmingly packaged inside a coffee cup, making them a cute, ready-to-gift stuffer for any coffee lover.",
    price: 9.99,
    affiliateLink: "https://amzn.to/47xqXUS",
    category: "Cozy Essentials",
    guideSource: "Stocking Stuffers for Her"
  },
  // Stocking Stuffers for Him
  {
    id: "lacrosse-massage-ball",
    title: "Hard Lacrosse Ball Massage Ball Therapy (2 Pack) (Purple)",
    description: "Deep tissue massage balls",
    fullDescription: "For the athlete or the desk worker! These firm massage balls are perfect for deep tissue relief and working out knots in the back, neck, or feet. Practical pain relief in a stocking!",
    price: 10.43,
    affiliateLink: "https://amzn.to/4p3ey0z",
    category: "Fitness & Wellness",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "hand-grip-strengthener",
    title: "NIYIKOW 2 Pack Hand Grip Strengthener, Adjustable Resistance 22-132Lbs",
    description: "Adjustable hand grip trainer",
    fullDescription: "Give him a strength upgrade! This adjustable grip trainer is a great way to boost forearm strength for sports, gym training, or just keeping hands strong while watching TV.",
    price: 14.99,
    affiliateLink: "https://amzn.to/4ovN7N9",
    category: "Fitness & Wellness",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "multitool-carabiner",
    title: "Multitool Carabiner with Pocket Knife, 6-in-1 (Blue)",
    description: "EDC multitool with knife",
    fullDescription: "A cool gadget for his everyday carry (EDC)! This handy multitool clips right onto a belt loop and includes a knife, bottle opener, and screwdriver—perfect for the outdoor enthusiast or DIYer.",
    price: 16.88,
    affiliateLink: "https://amzn.to/4ovN8kb",
    category: "Tools & Gadgets",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "christmas-sudoku-book",
    title: "Christmas Sudoku: 50 Sudoku Puzzles with Coloring Interior Design",
    description: "Festive puzzle book",
    fullDescription: "A fun way to unwind! This puzzle book offers 50 Sudoku challenges with a festive coloring interior, making it the perfect low-key activity for post-Christmas dinner relaxation.",
    price: 9.75,
    affiliateLink: "https://amzn.to/4hR752B",
    category: "Games & Puzzles",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "bulliant-running-socks",
    title: "BULLIANT Men Running Socks 6Pairs-Ankle Athletic Socks",
    description: "Athletic ankle socks 6-pack",
    fullDescription: "Socks are a classic for a reason! This 6-pack of cushioned, moisture-wicking ankle socks is a practical and comfortable upgrade for his gym bag or everyday walking shoes.",
    price: 19.99,
    affiliateLink: "https://amzn.to/486gj7D",
    category: "Clothing & Accessories",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "big-turk-chocolate",
    title: "Big Turk Chocolate Bites, 180gm Pouch",
    description: "Jelly and chocolate bites",
    fullDescription: "A classic, uniquely Canadian treat! These jelly and chocolate bites are a delicious, nostalgic indulgence that is perfectly sized for stuffing in a stocking (and snacking later!).",
    price: 6.18,
    affiliateLink: "https://amzn.to/3LBVI2g",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "viking-beard-comb-set",
    title: "Viking Revolution Beard Comb & Beard Brush Set",
    description: "Boar bristle brush and wood comb",
    fullDescription: "For the man who takes pride in his beard! This handsome set includes a natural boar bristle brush and a dual-action wood comb, complete with a velvet pouch for easy travel.",
    price: 13.99,
    affiliateLink: "https://amzn.to/4oATFu5",
    category: "Grooming",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "viking-solid-cologne",
    title: "Viking Revolution - Solid Cologne for Men (4 Pack)",
    description: "Portable solid cologne set",
    fullDescription: "A modern take on fragrance! This 4-pack of solid colognes features great scents (Cedar Wood, Sandalwood) that are easy to apply, mess-free, and perfect for his travel kit.",
    price: 13.99,
    affiliateLink: "https://amzn.to/47UOuy0",
    category: "Grooming",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "drum-sticks-wood",
    title: "Drum Sticks for Drums, Natural Solid Wood (1 Pair, 5A)",
    description: "Quality wood drumsticks",
    fullDescription: "If he has a drum set (or just a desk to tap on!), a fresh pair of quality wood drumsticks is always appreciated. Great for practice, performance, or just drumming out some stress.",
    price: 9.99,
    affiliateLink: "https://amzn.to/4oCqGpN",
    category: "Music & Hobbies",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "needoh-gumdrop",
    title: "Schylling NeeDoh - Gumdrop - Soft Sensory Fidget Toy",
    description: "Squishy stress relief toy",
    fullDescription: "Yes, adults need NeeDoh too! This gumdrop-shaped squishy ball is a fun, non-distracting way to relieve stress and keep hands busy, bringing some playful comfort to his day.",
    price: 14.65,
    affiliateLink: "https://amzn.to/43YUvbF",
    category: "Fidget & Stress Relief",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "led-flashlight-gloves",
    title: "LED Flashlight Gloves, Finger Lights",
    description: "Work gloves with LED lights",
    fullDescription: "A brilliant, practical gadget! These gloves have built-in LED lights on the fingers, making them indispensable for working on cars, DIY projects, or fixing things in the dark.",
    price: 15.99,
    affiliateLink: "https://amzn.to/4qRAJsz",
    category: "Tools & Gadgets",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "furtalk-knit-beanie",
    title: "FURTALK Knit Beanie Hat (Brown)",
    description: "Cozy winter beanie",
    fullDescription: "A cozy winter staple! This soft, warm knit beanie is a timeless accessory that works for everyone and comes in a great neutral color to match any winter coat.",
    price: 13.99,
    affiliateLink: "https://amzn.to/4qQjnfs",
    category: "Clothing & Accessories",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "nivea-men-lip-balm",
    title: "NIVEA MEN Active Lip Balm, (2 X 4.8g)",
    description: "Hydrating men's lip balm",
    fullDescription: "Keep his lips protected! This 2-pack of NIVEA MEN lip balm provides 24-hour hydration with a formula designed specifically for men—a highly practical winter essential.",
    price: 4.98,
    affiliateLink: "https://amzn.to/43pQIE6",
    category: "Grooming",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "terrys-dark-orange",
    title: "Terry's Orange - Dark - Orange Flavored Dark Chocolate Confection",
    description: "Dark chocolate orange",
    fullDescription: "For the dark chocolate connoisseur! This twist on the classic chocolate orange uses rich dark chocolate, offering a deeper, more sophisticated holiday treat.",
    price: 8.99,
    affiliateLink: "https://amzn.to/4hWx6xm",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "falkor-dragon-blocks",
    title: "Falkor Luck Dragon Block Set (671PCS)",
    description: "Collectible building set",
    fullDescription: "A fun, challenging build! This detailed block set of the iconic Luck Dragon is a great collector's item and a relaxing project that's perfect for a long winter afternoon.",
    price: 17.99,
    affiliateLink: "https://amzn.to/3JD5Mrj",
    category: "Collectibles & Building",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "santas-claws-scratcher",
    title: "(2-Pack) Extendable Back Scratcher, Santa's Claws Telescopic",
    description: "Humorous back scratcher",
    fullDescription: "Funny and totally useful! Packaged in a fun \"Santa's Claws\" box, this extendable back scratcher is the perfect humorous-yet-practical filler that always gets a laugh.",
    price: 7.99,
    affiliateLink: "https://amzn.to/3Lu7QT7",
    category: "Humor & Novelty",
    guideSource: "Stocking Stuffers for Him"
  },
  {
    id: "franks-redhot-seasoning",
    title: "Frank's RedHot, Original Seasoning, 132g",
    description: "Spicy seasoning shaker",
    fullDescription: "For the one who likes it hot! This shaker of Frank's seasoning lets him put that signature spicy flavor on anything from popcorn to eggs. A fun culinary stocking addition.",
    price: 5.49,
    affiliateLink: "https://amzn.to/3Xr74bW",
    category: "Food & Kitchen",
    guideSource: "Stocking Stuffers for Him"
  },
  // Stocking Stuffers Teen/Tween Girls
  {
    id: "squishmallows-small-8",
    title: "SQUISHMALLOWS - Small Plush - 8\" - Style 3",
    description: "Super soft squishy plush",
    fullDescription: "The queen of comfort! These super soft, squishy plushies are the ultimate snuggle buddy. The 8-inch size is absolutely perfect for tucking into a stocking.",
    price: 11.90,
    affiliateLink: "https://amzn.to/3WRAuQr",
    category: "Plush & Collectibles",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "terrys-original-orange",
    title: "Terry's, Original - Orange Flavoured Milk Chocolatey Confection (157g)",
    description: "Classic chocolate orange",
    fullDescription: "A holiday tradition for a reason! Smash it, peel it, and share (or don't!). This delicious, classic chocolate orange is a fun, festive treat everyone loves.",
    price: 6.49,
    affiliateLink: "https://amzn.to/3WR1v6B",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "labubu-doll-clothes",
    title: "17cm Doll Clothes Set for Labubu – Lovely Doll Dress with Bow Headband & Mini Chain Bag",
    description: "Fashion doll outfit set",
    fullDescription: "For the collectible doll fan! This adorable, high-fashion set lets them customize and dress their favorite 17cm dolls, complete with a tiny bag and bow headband.",
    price: 13.99,
    affiliateLink: "https://amzn.to/43qrZj3",
    category: "Collectibles & Dolls",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "amos-singing-lollipop-watermelon",
    title: "Amos Music Lollipop Candy, Audio Singing Lollipop (Watermelon Flavor)",
    description: "Musical novelty lollipop",
    fullDescription: "A sweet surprise that sings! This unique lollipop is a viral sensation—it plays a tune while they enjoy the candy. A fun, novelty treat that tastes like summer!",
    price: 12.31,
    affiliateLink: "https://amzn.to/4p7iWfi",
    category: "Treats & Novelty",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "clog-shoe-charms-girl",
    title: "Wohohoho 30 50 Shoe Charms for Clog Shoe Decoration (Girl, 50 Pieces)",
    description: "Clog charms 50-piece pack",
    fullDescription: "If they own clogs, they need charms! This big pack offers 50 pieces of cute, girly-themed accessories to personalize their footwear and trade with friends.",
    price: 10.99,
    affiliateLink: "https://amzn.to/3WPbg5a",
    category: "Fashion Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "hunter-cosplay-wristband",
    title: "2Pcs Hunter Cosplay K Wristband (Two-Color Woven Bracelet)",
    description: "Fandom wristband set",
    fullDescription: "For the fandom fashionista! This bracelet set is a subtle, cool way for fans to show off their love for their favorite characters, whether they're at a concert or just at school.",
    price: 14.99,
    affiliateLink: "https://amzn.to/3XkPkPt",
    category: "Fashion Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "lego-friends-unicorn-pool",
    title: "LEGO Friends Unicorn & Flamingo Pool Party Playset",
    description: "Cute mini LEGO set",
    fullDescription: "A delightful mini-build! This brightly colored LEGO Friends set is small enough for a stocking but packed with cute animal figures and fun accessories for creative storytelling.",
    price: 9.86,
    affiliateLink: "https://amzn.to/3JXnoOF",
    category: "Building Toys",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "silicon-phone-mount",
    title: "zakora 2PCS Silicon Suction Phone Case Mount (Rose red)",
    description: "Hands-free phone mount",
    fullDescription: "The perfect hands-free gadget! These little suction mounts stick to the back of their phone and let them prop it up on mirrors or smooth surfaces for TikToks and video calls.",
    price: 7.99,
    affiliateLink: "https://amzn.to/4p7j3re",
    category: "Phone Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "stanley-bottle-carrier",
    title: "GOEWY Water Bottle Carrier Bag for Stanley 40/30 oz Tumbler",
    description: "Stanley cup carrier bag",
    fullDescription: "Give her Stanley cup an upgrade! This neoprene carrier is a must-have accessory, complete with a strap and a pocket for her phone—perfect for school or the gym.",
    price: 15.99,
    affiliateLink: "https://amzn.to/47z5fQl",
    category: "Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "stanley-straw-charms",
    title: "Stanley Cup Accessories: 4PCS Straw Cover Cap and 2PCS Butterfly Letter Charms",
    description: "Stanley cup charms",
    fullDescription: "Tiny details make a difference! These butterfly charms and straw covers add a super cute, personalized touch to her favorite tumbler and keep the straw clean.",
    price: 8.49,
    affiliateLink: "https://amzn.to/4r7L97A",
    category: "Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "eyebrow-tweezers-set",
    title: "SWEET VIEW 7pcs Eyebrow Tweezers Set",
    description: "Complete tweezer grooming set",
    fullDescription: "A practical beauty essential! This comprehensive 7-piece set ensures she has all the right tools for brow maintenance and everyday grooming—a great high-value stuffer. This set does have a dermaplaning blade, so highly recommend for the older girls in your tribe.",
    price: 9.99,
    affiliateLink: "https://amzn.to/4qOdaRr",
    category: "Beauty & Grooming",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "skincare-headband-sponge",
    title: "Skincare Headbands (Sponge Spa Headband and Wristband Set)",
    description: "Spa headband and wristband",
    fullDescription: "Level up the spa routine! This trendy sponge headband and wristband set keeps hair dry and water from dripping down her arms during face washing—a TikTok-favorite essential.",
    price: 10.99,
    affiliateLink: "https://amzn.to/3Lqlbfd",
    category: "Beauty & Skincare",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "eos-birthday-cake-balm",
    title: "EOS Super Soft Shea Lip Balm - Birthday Cake (Lip Sphere)",
    description: "Iconic sphere lip balm",
    fullDescription: "Pure nostalgia and delicious moisture! This beloved, sphere-shaped lip balm delivers 24-hour hydration with the fun, sweet flavor of birthday cake.",
    price: 4.96,
    affiliateLink: "https://amzn.to/47z5oDn",
    category: "Beauty & Lip Care",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "delectable-hand-cream-set",
    title: "Delectable by Cake Beauty Assorted Ultra Nourishing Hand Cream Set (Set of 4)",
    description: "Dessert-scented hand creams",
    fullDescription: "Perfect for dividing or gifting as one set! These luxurious, dessert-scented hand creams are ultra-nourishing and instantly feel like a high-end treat.",
    price: 16.00,
    affiliateLink: "https://amzn.to/49Lu6Sk",
    category: "Beauty & Skincare",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "magnetic-balls-fidget",
    title: "Magnetic Balls Fidget Toy Adults&Teens (8pcs Silicone Shell)",
    description: "Sensory magnetic balls",
    fullDescription: "Calm, cool, and collected. These soft, sensory magnetic balls are a discreet and satisfying way to fidget, helping reduce anxiety and improve focus during homework or downtime.",
    price: 24.99,
    affiliateLink: "https://amzn.to/4p1tpbZ",
    category: "Fidget & Stress Relief",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "crystal-nail-file-set",
    title: "Diodiva Crystal Glass Nail File Set - 3 Pack with Case",
    description: "Premium glass nail files",
    fullDescription: "The best kept secret in manicure tools! These crystal glass files are gentle, effective, and give the nail edge a smooth, perfect finish. A high-quality set that will last.",
    price: 12.20,
    affiliateLink: "https://amzn.to/49NFc9n",
    category: "Beauty & Nails",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "hershey-hot-chocolate-bomb",
    title: "Hershey's Hot Chocolate Bomb With Mini Marshmallows (36 g)",
    description: "Chocolate sphere hot cocoa",
    fullDescription: "A warm hug in a mug! Just drop this chocolate sphere into hot milk and watch it melt away to reveal mini marshmallows. Pure, cozy holiday magic.",
    price: 2.99,
    affiliateLink: "https://amzn.to/47NCJcv",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  {
    id: "grace-stella-skin-rescue",
    title: "grace & stella Award Winning Skin Rescue Covers (Hydrocolloid, 72 Count)",
    description: "Acne hydrocolloid patches",
    fullDescription: "Another skin-saving superhero! These multi-shape hydrocolloid patches are an award-winning way to handle breakouts discreetly. A practical gift that boosts confidence.",
    price: 13.95,
    affiliateLink: "https://amzn.to/3WSmLsC",
    category: "Beauty & Skincare",
    guideSource: "Stocking Stuffers Teen/Tween Girls"
  },
  // Stocking Stuffers Teen/Tween Boys
  {
    id: "silicone-magnetic-balls-green",
    title: "Silicone Magnetic Balls Fidget Toys for Adults & Teens (Green)",
    description: "Silent fidget magnets",
    fullDescription: "Say goodbye to anxious tapping! These fun, textured silicone magnets are a silent, satisfying way to keep hands busy and stress levels low—perfect for desk fidgeting or study breaks.",
    price: 16.99,
    affiliateLink: "https://amzn.to/4hT1Orb",
    category: "Fidget & Stress Relief",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "everbrite-mini-flashlights",
    title: "EverBrite 4-Pack Mini LED Aluminum Flashlight Party Favors (Colors Assorted)",
    description: "Mini LED flashlight pack",
    fullDescription: "You can never have too many flashlights! This 4-pack of sturdy, bright mini lights is a super practical stuffer—great for camping, reading under the covers, or finding lost treasures.",
    price: 21.99,
    affiliateLink: "https://amzn.to/47xpaiC",
    category: "Tools & Gadgets",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "lego-creative-food-friends",
    title: "LEGO Classic Creative Food Friends Building Toy Set - Pretend Play Food",
    description: "Food-themed LEGO set",
    fullDescription: "Even older kids love small, creative builds! This adorable food-themed set is a fun, quick project that's the perfect size for a stocking and sparks imaginative play.",
    price: 12.86,
    affiliateLink: "https://amzn.to/47Pzu4a",
    category: "Building Toys",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "pokemon-mega-evolution-pack",
    title: "Pokemon TCG: Mega Evolution Sleeved Booster Pack - 10 Cards",
    description: "Pokémon card booster pack",
    fullDescription: "The holy grail for any collector! A fresh pack of Pokémon cards offers the thrill of the chase and the chance for a rare pull. A definite win for the stocking!",
    price: 11.95,
    affiliateLink: "https://amzn.to/49MqxeF",
    category: "Collectibles & Gaming",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "card-binder-440",
    title: "Card Binder With 4-Pocket Sleeves, 440 Cards Holder (Red)",
    description: "Trading card storage binder",
    fullDescription: "Give their collection the home it deserves! This sturdy, water-resistant binder is essential for protecting and organizing all those beloved trading cards (Pokémon, sports, etc.).",
    price: 16.98,
    affiliateLink: "https://amzn.to/49vMiQ3",
    category: "Collectibles & Gaming",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "boxing-reflex-ball",
    title: "KTEBO® Boxing Reflex Ball Headband Set",
    description: "Reflex training ball set",
    fullDescription: "This is fitness and fun rolled into one! This reflex ball set is a surprisingly addictive way to boost coordination, speed, and concentration—a great active gift to burn off that holiday candy!",
    price: 17.99,
    affiliateLink: "https://amzn.to/47OxyJd",
    category: "Sports & Fitness",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "amos-singing-lollipop-cola",
    title: "Amos Music Lollipop Candy, Audio Singing Lollipop (Cola Flavor)",
    description: "Musical cola lollipop",
    fullDescription: "It's not just a sweet treat, it's a sensory experience! This unique lollipop plays music while they lick—a fun, slightly quirky candy that they'll definitely show off to their friends.",
    price: 12.31,
    affiliateLink: "https://amzn.to/4hT1Wa9",
    category: "Treats & Novelty",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "clog-shoe-charms-trendy",
    title: "Wohohoho 30 50 Shoe Charms for Clog Shoe Decoration (Trendy, 50 Pieces)",
    description: "Trendy clog charms pack",
    fullDescription: "Keep them on trend! With 50 random charms in a trendy pack, they'll have tons of options to customize their favorite foam clogs and swap with friends.",
    price: 10.99,
    affiliateLink: "https://amzn.to/3LS9cXI",
    category: "Fashion Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "dnd-metal-dice-bronze",
    title: "DND Dice Set with a Black Dice Bottle 7-Die Small Metal DND Dice Set (Ancient bronze)",
    description: "Metal RPG dice set",
    fullDescription: "For the budding adventurer! A set of beautiful, solid metal dice is a luxurious upgrade for their D&D, RPG, or board game nights. The small size makes it a perfect stocking treasure.",
    price: 10.99,
    affiliateLink: "https://amzn.to/4nRirVD",
    category: "Games & Collectibles",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "lego-minecraft-nether",
    title: "LEGO Minecraft The Nether Lava Battle Toy and Playset",
    description: "Minecraft LEGO battle set",
    fullDescription: "Bring the game to life! This mini Minecraft LEGO set is an epic battle scene packed into a stocking-friendly box, complete with Alex, a Wither Skeleton, and the cool Strider figure.",
    price: 9.76,
    affiliateLink: "https://amzn.to/4nMAJqY",
    category: "Building Toys",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "tic-tac-mints-4pack",
    title: "TIC TAC Mints; Stocking Stuffer; 116 grams; 4 Count Single Packs",
    description: "Classic breath mints",
    fullDescription: "A practical favorite! You can't go wrong with a classic treat, and this 4-pack of Tic Tacs is a great small filler that's perfect for on-the-go freshness.",
    price: 8.49,
    affiliateLink: "https://amzn.to/4nQ7l39",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "playvital-ps5-grips",
    title: "PlayVital Thumb Grip Caps for ps5/4 Controller (Fire Demons)",
    description: "Gaming controller grips",
    fullDescription: "Level up their gear! These thumb grip caps give controllers a custom look and a better grip, preventing slippage during intense gaming sessions. A must-have accessory for any console gamer.",
    price: 13.99,
    affiliateLink: "https://amzn.to/3JSfEgS",
    category: "Gaming Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "nintendo-switch-grips",
    title: "Thumb Grip Caps for Nintendo Switch (4Pcs - Multi-Color)",
    description: "Switch joystick caps",
    fullDescription: "Switch users need protection too! This 4-pack of colorful, soft silicone caps not only protects the joysticks but gives them extra grip for those marathon gaming sessions.",
    price: 8.99,
    affiliateLink: "https://amzn.to/3WPvbkC",
    category: "Gaming Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "patchrx-pimple-patches",
    title: "PatchRx Pimple Patches for Face (120 Patches)",
    description: "Hydrocolloid acne patches",
    fullDescription: "A super practical stuffer they'll actually use! These discreet hydrocolloid patches work their magic overnight, making this a thoughtful, confidence-boosting essential.",
    price: 14.99,
    affiliateLink: "https://amzn.to/3Jvqutb",
    category: "Grooming & Skincare",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "moverays-hand-grip",
    title: "MoveRays Hand Grip Strengthener (Silicone Rings)",
    description: "Grip strength rings",
    fullDescription: "For the athlete or the fidgeter! These colorful silicone rings are a great, compact way to build grip strength for sports or simply serve as a quiet, satisfying hand exerciser.",
    price: 17.99,
    affiliateLink: "https://amzn.to/3JtttlX",
    category: "Sports & Fitness",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "sneakerasers-cleaner",
    title: "SneakERASERS Instant Sole and Sneaker Cleaner (10 Pack)",
    description: "Sneaker cleaning sponges",
    fullDescription: "Keep those expensive sneakers looking fresh! These powerful little sponges instantly clean and whiten shoe soles—a genius, practical tool for the style-conscious teen.",
    price: 16.99,
    affiliateLink: "https://amzn.to/4p1EzNT",
    category: "Accessories & Care",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  {
    id: "ok-thumbs-phone-holder",
    title: "Cell Phone Stand Stocking Stuffers (OK Thumbs Lazy Phone Holder)",
    description: "Hands-free phone stand",
    fullDescription: "Two thumbs up for this gadget! This fun, adjustable phone holder is perfect for hands-free viewing, video calls, or just keeping their desk organized. A cool and affordable little helper.",
    price: 9.99,
    affiliateLink: "https://amzn.to/49dLYoS",
    category: "Phone Accessories",
    guideSource: "Stocking Stuffers Teen/Tween Boys"
  },
  // Stocking Stuffers for Kids
  {
    id: "golden-books-kpop-hunters",
    title: "Golden Books: For the Fans! (KPop Demon Hunters)",
    description: "K-Pop themed Golden Book",
    fullDescription: "Who knew Golden Books had such epic taste? This is the cutest, most colorful way for them to dive into the world of K-Pop Demon Hunters!",
    price: 9.50,
    affiliateLink: "https://amzn.to/3LvTzoW",
    category: "Books & Reading",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "golden-books-dnd",
    title: "Golden Books: A Long Rest for Little Monsters! (Dungeons & Dragons)",
    description: "D&D Golden Book",
    fullDescription: "Roll a twenty-sided die for cuteness! Introduce them to the magic of D&D with this adorable, surprisingly soothing Golden Book.",
    price: 7.99,
    affiliateLink: "https://amzn.to/4nMxhN2",
    category: "Books & Reading",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "lego-friends-guinea-pig",
    title: "LEGO Friends Guinea Pig Playground",
    description: "Mini LEGO guinea pig set",
    fullDescription: "Tiny pieces for tiny hands mean BIG fun! This mini LEGO set fits perfectly in a stocking and delivers maximum, furry-friend-themed building joy.",
    price: 9.48,
    affiliateLink: "https://amzn.to/4nRQM6J",
    category: "Building Toys",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "hot-wheels-f1-5pack",
    title: "Hot Wheels Toy Cars Formula 1 5-Pack",
    description: "Formula 1 car collection",
    fullDescription: "An instant collection! This 5-pack of sleek Formula 1 racers is the perfect way to get their engine roaring on Christmas morning. Vroom!",
    price: 8.97,
    affiliateLink: "https://amzn.to/3XnKAZs",
    category: "Toys & Vehicles",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "royale-high-locker",
    title: "Royale High Surprise Locker 2-Pack (2) Series 1 Dolls",
    description: "Surprise doll locker set",
    fullDescription: "It's two surprises in one! These fashionable mini-dolls come tucked inside their own little lockers, making for a fun, stylish unboxing moment.",
    price: 10.40,
    affiliateLink: "https://amzn.to/43mWYMX",
    category: "Dolls & Collectibles",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "disney-christmas-mickey",
    title: "Disney - Christmas Mickey Mouse Pyjama Plush",
    description: "Mickey in holiday PJs",
    fullDescription: "Dressed in his cozy holiday PJs, this cuddly Mickey is ready to be snuggled all season long! A Christmas classic, updated for the season.",
    price: 16.98,
    affiliateLink: "https://amzn.to/3Lw2JSk",
    category: "Plush & Characters",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "disney-christmas-pluto",
    title: "Disney - Christmas Pluto Plush",
    description: "Pluto in festive wear",
    fullDescription: "The happiest dog on earth is even happier in his festive winter wear! Pluto is the perfect companion for snuggling up by the fireplace.",
    price: 15.16,
    affiliateLink: "https://amzn.to/43WovF3",
    category: "Plush & Characters",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "bluey-blaster-suit-pack",
    title: "Bluey Figure 2-Pack - Surprise Blaster Suit Pack",
    description: "Bluey surprise figure set",
    fullDescription: "Wackadoo! If your house is full of Bluey fans (whose isn't?), this 2-pack is a must-have. The surprise suit adds an extra layer of fun to playtime.",
    price: 8.40,
    affiliateLink: "https://amzn.to/47A1IkP",
    category: "Toys & Figures",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "lankybox-mystery-figures",
    title: "LankyBox Mystery Figures, Multicolor, Small",
    description: "YouTube mystery figures",
    fullDescription: "A tiny mystery for the fans of the wildly popular YouTube duo! These surprise figures are small, colorful, and guaranteed to be a hit.",
    price: 7.99,
    affiliateLink: "https://amzn.to/3JMyJB9",
    category: "Collectibles & Toys",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "shoe-charms-holiday",
    title: "Shoe Charms Random Shoe Accessories Pack Halloween Christmas",
    description: "Holiday clog charms",
    fullDescription: "Because what kid doesn't love customizing their Crocs these days?! This holiday/Halloween mash-up pack offers tons of fun flair for their feet!",
    price: 8.99,
    affiliateLink: "https://amzn.to/3XkWLGm",
    category: "Fashion Accessories",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "amos-singing-lollipop-kids",
    title: "Amos Music Lollipop Candy, Audio Singing Lollipop, Fun Summer Treat",
    description: "Singing musical lollipop",
    fullDescription: "This is a sensory treat! It's a lollipop that actually plays a song. A truly unique sweet surprise they'll never see coming!",
    price: 12.31,
    affiliateLink: "https://amzn.to/4oVZZfs",
    category: "Treats & Novelty",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "terrys-snowball",
    title: "Terry's Simply Milk Snowball, 145g",
    description: "Snowball-shaped chocolate",
    fullDescription: "You can't beat a chocolate orange, and this seasonal snowball shape is just the cutest. A delicious and generous holiday chocolate treat!",
    price: 6.98,
    affiliateLink: "https://amzn.to/3X8R1Qh",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "munchkin-falls-bath-toy",
    title: "Munchkin Falls Baby and Toddler Bath Toy",
    description: "Waterfall bath toy",
    fullDescription: "Keep the fun going even when the holidays are over! This charming bath toy creates mini waterfalls and ramps for splashy fun at bath time.",
    price: 8.97,
    affiliateLink: "https://amzn.to/49RU6LM",
    category: "Bath & Play",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "lcd-writing-tablet-2pack",
    title: "cimetech 2 Pack LCD Writing Tablet for Kids",
    description: "Reusable drawing tablets",
    fullDescription: "Excellent bulk buying alert! Since you get a 2-pack, you can stuff two stockings (or keep one for the car!). These no-mess drawing pads are fantastic.",
    price: 8.80,
    affiliateLink: "https://amzn.to/43oGW5f",
    category: "Creative & Educational",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "glo-pals-cubes",
    title: "Glo Pals - Reusable Light-Up Cubes for Sensory Play 4pk - Lumi - Purple",
    description: "Light-up bath cubes",
    fullDescription: "Just drop them in the water and watch the magic! These light-up cubes transform bath time (or sensory bins) into a dazzling, glowing experience.",
    price: 19.99,
    affiliateLink: "https://amzn.to/4otl8hb",
    category: "Bath & Sensory Play",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "lip-smacker-lippy-pals",
    title: "Lip Smacker Lippy Pals 3 Pack Lip Kit- Unicorn/Panda/Kitten Foxy",
    description: "Animal-shaped lip balms",
    fullDescription: "The cutest animal friends in lip balm form! This 3-pack is perfect for splitting up or gifting as one adorable kit for the little lip balm enthusiast.",
    price: 10.57,
    affiliateLink: "https://amzn.to/3WRxa7V",
    category: "Beauty & Fun",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "mouse-straw-covers",
    title: "Mouse Head Straw Covers for Stanley Cup",
    description: "Disney-themed straw covers",
    fullDescription: "The Stanley trend meets Disney magic! These tiny straw covers keep things clean and add an absolutely charming touch to their favorite travel mug.",
    price: 6.88,
    affiliateLink: "https://amzn.to/4hR3FwN",
    category: "Accessories",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "furby-furblets-mini",
    title: "Furby Furblets Par-Tay Mini Friend",
    description: "Mini Furby toy",
    fullDescription: "The iconic Furbies are back and they've shrunk! This mini, musical Furblet is the perfect size to pop into a stocking and bring some quirky noise to the day.",
    price: 14.99,
    affiliateLink: "https://amzn.to/47LCpLh",
    category: "Interactive Toys",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "bluey-aqua-art",
    title: "Horizon Group USA Bluey Aqua Art - Reusable Water Reveal Activity Pages With Water Pen",
    description: "Reusable water coloring",
    fullDescription: "No mess, just pure coloring fun! Using only water, these pages reveal vibrant scenes, and best of all, they can be reused again and again!",
    price: 7.97,
    affiliateLink: "https://amzn.to/47OFOsV",
    category: "Creative & Educational",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "gabbys-dollhouse-cutlery",
    title: "GABBY'S Dollhouse Travel Cutlery Set",
    description: "Portable utensil set",
    fullDescription: "Eating on the go just got a lot cuter! This travel set featuring Gabby's Dollhouse characters is practical, portable, and perfect for school lunches or trips.",
    price: 7.99,
    affiliateLink: "https://amzn.to/3WOwmRm",
    category: "Practical & Fun",
    guideSource: "Stocking Stuffers for Kids"
  },
  {
    id: "mms-christmas-storybook",
    title: "M&M'S, Christmas Milk Chocolate Holiday Storybook",
    description: "Chocolate storybook packaging",
    fullDescription: "A delightful classic! This festive storybook packaging is a fun, decorative way to deliver a classic handful of colorful chocolate joy.",
    price: 3.97,
    affiliateLink: "https://amzn.to/43XDwq3",
    category: "Treats & Snacks",
    guideSource: "Stocking Stuffers for Kids"
  }
];
