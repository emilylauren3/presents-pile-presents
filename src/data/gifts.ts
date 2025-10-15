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
  }
];
