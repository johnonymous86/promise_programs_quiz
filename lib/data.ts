export type ProgramKey = "wytheBland" | "twinCounty" | "smythPromise";
export type PersonalityKey = "A" | "B" | "C" | "D" | "E";

export interface Agency {
  name: string;
  location: string;
  contact: string;
  email: string;
  desc: string;
}

export interface MajorAgency extends Agency {}

export interface ProgramData {
  name: string;
  shortName: string;
  subtitle: string;
  url: string;
  majorAgencies: MajorAgency[];
  matches: Record<PersonalityKey, Agency[]>;
}

export interface Question {
  text: string;
  options: { letter: PersonalityKey; text: string }[];
}

export interface PersonalityDetail {
  title: string;
  desc: string;
  icon: string;
}

export const scholarshipData: Record<ProgramKey, ProgramData> = {
  wytheBland: {
    name: "Wythe-Bland Foundation Scholarship",
    shortName: "Wythe-Bland",
    subtitle: "Foundation Scholarship",
    url: "https://www.wcc.vccs.edu/wythe-bland-foundation-scholarship-program-participating-agencies-volunteer-service",
    majorAgencies: [
      {
        name: "Bland County Public Schools",
        location: "Bland, VA",
        contact: "(276) 688-3311",
        email: "lradford@bland.k12.va.us",
        desc: "Teacher assistance, classroom reading, and supporting student enrichment events.",
      },
      {
        name: "Bland Headstart Center (Mt. CAP)",
        location: "Ceres, VA",
        contact: "(276) 688-4495",
        email: "blandheadstart@hotmail.com",
        desc: "Assisting teachers with early education classroom programs and minor chores (Education majors preferred).",
      },
      {
        name: "Mountain Community Action Program, Inc.",
        location: "Marion/Smyth County",
        contact: "(276) 783-3622",
        email: "whalsey@mtcap.org",
        desc: "Assist teaching staff in classrooms with reading and childhood development programs.",
      },
      {
        name: "Brock Hughes Medical Center",
        location: "Wytheville, VA",
        contact: "(276) 223-0558",
        email: "slinkous@bhfreeclinic.org",
        desc: "Filing, answering phones, or triage and direct patient care (RN and medical majors only).",
      },
      {
        name: "Bland County Medical Clinic",
        location: "Bastian, VA",
        contact: "(276) 688-0445",
        email: "sgreever@blandclinic.net",
        desc: "Front office clerical work or clinical triage assistance (Medical tracks only).",
      },
    ],
    matches: {
      A: [
        {
          name: "Copper Crest Riding Therapy Program",
          location: "Wytheville, VA",
          desc: "Grooming horses and assisting special needs riders in a calm farm setting.",
          contact: "276-228-5817",
          email: "pam@coppercrestfarm.com",
        },
        {
          name: "Wythe County Dog Shelter",
          location: "Wytheville, VA",
          desc: "Dog caretaking, cleaning, walking, and assisting with shelter adoption events.",
          contact: "276-228-6003",
          email: "shelter@wytheco.org",
        },
        {
          name: "Wythe County Humane Society",
          location: "Wytheville, VA",
          desc: "Walk and exercise dogs, assist with adoption days, and general cleaning.",
          contact: "276-228-4884",
          email: "petsnperil@yahoo.com",
        },
        {
          name: "Virginia Department of Game & Inland Fisheries",
          location: "Max Meadows, VA",
          desc: "Basic fish culture, trout feeding, and physical stocking of local public waters.",
          contact: "276-637-3312",
          email: "butch.bates@dgif.virginia.gov",
        },
      ],
      B: [
        {
          name: "AAUW - American Association of University Women",
          location: "Wytheville, VA",
          desc: "Updating and maintaining the branch website, handling files, and organizing records.",
          contact: "276-620-4547",
          email: "aauw.wythe@gmail.com",
        },
        {
          name: "Bland County Public Library",
          location: "Bland, VA",
          desc: "Prepping children's library activities, organizing bookshelves, and archiving materials.",
          contact: "276-688-3737",
          email: "cameronb@sbrl.org",
        },
        {
          name: "County of Bland",
          location: "Bland, VA",
          desc: "Clerical duties including filing, copying, answering phones, and greeting the public.",
          contact: "276-688-4622",
          email: "smay@bland.org",
        },
        {
          name: "Joint Industrial Development Authority (JIDA)",
          location: "Wytheville, VA",
          desc: "General office duties including copying, organizing files, and shredding papers.",
          contact: "276-223-3370",
          email: "davidmanley@wytheida.org",
        },
      ],
      C: [
        {
          name: "Bland County Volunteer Rescue Squad",
          location: "Bland, VA",
          desc: "Cleaning and washing emergency ambulances to maintain fleet readiness.",
          contact: "276-688-4708",
          email: "kitts532@yahoo.com",
        },
        {
          name: "Ceres Alumni Association, LLC",
          location: "Ceres, VA",
          desc: "Assisting with facility upkeep, janitorial work, and grounds maintenance.",
          contact: "276-682-4381",
          email: "ceresalumni@yahoo.com",
        },
        {
          name: "Ceres Volunteer Fire Department",
          location: "Ceres, VA",
          desc: "Cleaning the fire station, washing fire trucks, and attending community safety training.",
          contact: "276-682-4407",
          email: "cvfd@email.com",
        },
        {
          name: "Department of Conservation & Rec (New River Trail State Park)",
          location: "Max Meadows, VA",
          desc: "General park maintenance, trail upkeep, and assisting park visitors.",
          contact: "276-699-6778",
          email: "nrtsp@dcr.virginia.gov",
        },
      ],
      D: [
        {
          name: "Agape Food Pantry",
          location: "Wytheville, VA",
          desc: "Stocking pantry shelves, pushing food carts, and filling food boxes for local families.",
          contact: "276-228-6889",
          email: "wythecountyagape@gmail.com",
        },
        {
          name: "Bland Ministry Center and Dental Clinic",
          location: "Bland, VA",
          desc: "Warehouse sorting, folding clothes, dental clinic office work, and yard work.",
          contact: "276-688-4701",
          email: "alafferty@blandministrycenter.org",
        },
        {
          name: "HOPE - Helping Overcome Poverties Existence, Inc.",
          location: "Wytheville, VA",
          desc: "Office clerical help, assisting with the community food kitchen, and packing HOPE packs.",
          contact: "276-228-6280",
          email: "akegley@wythehope.org",
        },
        {
          name: "Kissito Healthcare - Bland County",
          location: "Bastian, VA",
          desc: "Spending quality social time with nursing home residents, reading, and playing games.",
          contact: "276-688-4141",
          email: "katlyn.davidson@kissito.org",
        },
      ],
      E: [
        {
          name: "Bland County Fair",
          location: "Bland, VA",
          desc: "Setting up fairgrounds, cleaning, managing trash disposal, and office operations during events.",
          contact: "276-239-0007",
          email: "diharman@hotmail.com",
        },
        {
          name: "Boy Scouts of America",
          location: "Rural Retreat, VA",
          desc: "Assisting scoutmasters in teaching boy scouts wilderness skills and merits.",
          contact: "276-686-5162",
          email: "nascargo18@yahoo.com",
        },
        {
          name: "Downtown Wytheville, Inc.",
          location: "Wytheville, VA",
          desc: "Office operations, graphic design, and assisting with downtown community events.",
          contact: "276-620-8937",
          email: "info@downtownwytheville.org",
        },
        {
          name: "Millwald Theatre",
          location: "Wytheville, VA",
          desc: "Promoting on the street team, assisting with theater events, and helping daily operations.",
          contact: "276-200-7193",
          email: "dbales@themillwald.org",
        },
      ],
    },
  },
  twinCounty: {
    name: "Twin County Community Foundation Scholarship",
    shortName: "Twin County",
    subtitle: "Community Foundation Scholarship",
    url: "https://www.wcc.vccs.edu/twin-county-community-foundation-scholarship-approved-volunteer-agencies",
    majorAgencies: [
      {
        name: "Joy Ranch",
        location: "Woodlawn, VA",
        contact: "(276) 236-5578",
        email: "volunteercoordinator@joyranch.org",
        desc: "Tutoring children, helping with outdoor programming, and recreational events (Education majors preferred).",
      },
      {
        name: "Twin County Regional Healthcare",
        location: "Galax, VA",
        contact: "(276) 236-1652",
        email: "Julie.rippey@lpnt.net",
        desc: "Perfect clinical and support experience for Nursing/Health majors.",
      },
    ],
    matches: {
      A: [
        {
          name: "Blue Ridge Discovery Center",
          location: "Troutdale, VA",
          desc: "Landscaping, planting native species, and outdoor trail maintenance.",
          contact: "276-388-3155",
          email: "landscape@blueridgediscoverycenter.org",
        },
        {
          name: "Virginia Department of Forestry",
          location: "Galax, VA",
          desc: "Trimming trees along trails, chestnut orchard care, and office clean up.",
          contact: "276-236-2322",
          email: "chad.austin@dof.virginia.gov",
        },
        {
          name: "Grayson Landcare",
          location: "Independence, VA",
          desc: "Assisting with local agricultural conservation programs, office work, and advertising.",
          contact: "276-768-0597",
          email: "director@graysonlandcare.org",
        },
        {
          name: "Matthew's Living Farm Museum",
          location: "Galax, VA",
          desc: "Farming chores, historic agricultural demos, and facility maintenance.",
          contact: "276-773-3080",
          email: "matthewsfarm@gmail.com",
        },
      ],
      B: [
        {
          name: "Twin County Community Foundation",
          location: "Galax, VA",
          desc: "Assisting with foundation operations, clerical work, and community marketing.",
          contact: "276-601-8011",
          email: "tccfexecutivedirector@gmail.com",
        },
        {
          name: "Grayson County Tourism",
          location: "Independence, VA",
          desc: "Answering visitor inquiries, stocking tourist brochures, and gift shop cashier duties.",
          contact: "276-773-8002",
          email: "tcornett@graysoncountyva.gov",
        },
        {
          name: "Rooftop of Virginia",
          location: "Galax, VA",
          desc: "Helping with clerical, filing, and basic janitorial office tasks.",
          contact: "276-236-7131",
          email: "tgillespie@rtov.org",
        },
      ],
      C: [
        {
          name: "Goodwill Grange #959",
          location: "Grant, VA",
          desc: "Delivering heavy food boxes, outdoor painting, and landscaping tasks.",
          contact: "276-221-1716",
          email: "grangehall959@gmail.com",
        },
        {
          name: "Virginia Department of Forestry",
          location: "Galax, VA",
          desc: "Trimming trail corridors and outdoor forestry labor.",
          contact: "276-236-2322",
          email: "chad.austin@dof.virginia.gov",
        },
        {
          name: "Matthew's Living Farm Museum",
          location: "Galax, VA",
          desc: "Physical maintenance of historic farm buildings, fences, and grounds keeping.",
          contact: "276-773-3080",
          email: "matthewsfarm@gmail.com",
        },
      ],
      D: [
        {
          name: "Elisha's House Warming Shelter",
          location: "Galax, VA",
          desc: "Helping shelter guests settle in for the night and supervising overnight stays.",
          contact: "276-733-9238",
          email: "amlowe9238@gmail.com",
        },
        {
          name: "Willing Partners, Inc.",
          location: "Galax, VA",
          desc: "Stacking shelves in the food bank, helping customers, and sorting thrift shop donations.",
          contact: "276-238-5500",
          email: "willingpartners@comcast.net",
        },
        {
          name: "Food Independence",
          location: "Independence, VA",
          desc: "Packing boxes and helping coordinate local food pantry deliveries.",
          contact: "276-768-0597",
          email: "director@graysonlandcare.org",
        },
        {
          name: "Twin County Regional Healthcare",
          location: "Galax, VA",
          desc: "Hospital volunteer services, leading tours, and teaching healthy eating on a budget.",
          contact: "276-236-1652",
          email: "Julie.rippey@lpnt.net",
        },
      ],
      E: [
        {
          name: "Carroll County Agricultural Fair",
          location: "Hillsville, VA",
          desc: "Placing armbands on fairgoers and assisting with fair operations.",
          contact: "276-733-3080",
          email: "fair@carrollcountyva.gov",
        },
        {
          name: "Chestnut Creek School of the Arts",
          location: "Galax, VA",
          desc: "Assisting instructors with art classes, galleries, and cultural events.",
          contact: "276-236-3500",
          email: "cpollins@chestnutcreekarts.org",
        },
        {
          name: "Joy Ranch",
          location: "Woodlawn, VA",
          desc: "Tutoring children and helping with ranch activities. Background check required.",
          contact: "276-236-5578",
          email: "volunteercoordinator@joyranch.org",
        },
      ],
    },
  },
  smythPromise: {
    name: "Smyth County Promise Scholarship",
    shortName: "Smyth County",
    subtitle: "Promise Scholarship",
    url: "https://www.wcc.vccs.edu/smyth-county-promise-scholarship-approved-volunteer-agencies",
    majorAgencies: [
      {
        name: "Smyth County School System",
        location: "Smyth County",
        contact: "(276) 206-0627",
        email: "jasonkilbourne@scsb.org",
        desc: "Tutoring and administrative assistance across Smyth County Public Schools (Education majors preferred).",
      },
      {
        name: "Mel Leaman Free Clinic",
        location: "Marion, VA",
        contact: "(276) 781-2090",
        email: "director@melleamanfreeclinic.org",
        desc: "Patient clinical intake, records support, and administrative check-in (Healthcare majors preferred).",
      },
    ],
    matches: {
      A: [
        {
          name: "Smyth Animal Rescue",
          location: "Marion, VA",
          desc: "Caring for rescue dogs and cats, feeding, exercising, and maintaining shelter spaces.",
          contact: "276-780-6620",
          email: "smythanimalrescue@gmail.com",
        },
        {
          name: "Hungry Mother State Park",
          location: "Marion, VA",
          desc: "Outdoors trail maintenance, landscaping, trash removal, and invasive species control.",
          contact: "276-781-7415",
          email: "erin.persinger@dcr.virginia.gov",
        },
        {
          name: "Blue Ridge Discovery Center",
          location: "Konnarock, VA",
          desc: "Nature preserve stewardship, habitat conservation, and environmental programs.",
          contact: "276-388-3155",
          email: "lisa@blueridgediscoverycenter.org",
        },
        {
          name: "Gracie Leeann Demit Memorial",
          location: "Marion, VA",
          desc: "Outdoor work, planting and maintaining sunflower gardens, and help with fundraisers.",
          contact: "276-695-9108",
          email: "brandydimit@gmail.com",
        },
      ],
      B: [
        {
          name: "Smyth County Public Libraries",
          location: "Marion/Chilhowie/Saltville",
          desc: "Book organization, shelf sorting, and preparing resources for library events.",
          contact: "276-783-2323",
          email: "rosel@scplva.net",
        },
        {
          name: "Smyth County Community Foundation",
          location: "Marion, VA",
          desc: "Clerical support, office organization, filing, and social media updates.",
          contact: "276-378-8091",
          email: "lhelton@smythccf.org",
        },
        {
          name: "Smyth County Chamber of Commerce & Tourism Center",
          location: "Chilhowie, VA",
          desc: "Greeting visitors, staffing the tourism desk, and database updates.",
          contact: "276-783-3161",
          email: "sgillespie@smythchamber.org",
        },
      ],
      C: [
        {
          name: "Octagon House Foundation",
          location: "Marion, VA",
          desc: "Hands-on historic preservation, brickwork, landscaping, and grounds keeping.",
          contact: "276-685-2926",
          email: "derekorr@smythoctagonhouse.org",
        },
        {
          name: "Settlers Museum of Southwest Virginia",
          location: "Atkins, VA",
          desc: "Preparing historic cabins for events, cleaning, and groundskeeping.",
          contact: "724-992-5031",
          email: "mark_archibald_3131@comcast.net",
        },
        {
          name: "Smyth County Recreation Department",
          location: "Smyth County",
          desc: "Assisting with youth baseball and sports events, cleaning up fields, and logistics.",
          contact: "276-378-6104",
          email: "jsmarr@smythcounty.org",
        },
      ],
      D: [
        {
          name: "Loaves and Fishes Food Pantry",
          location: "Chilhowie, VA",
          desc: "Interacting with clients, checking them in, distributing food boxes.",
          contact: "276-791-0428",
          email: "loavesfisheschilhowie@gmail.com",
        },
        {
          name: "FUMC Food Pantry",
          location: "Marion, VA",
          desc: "Distributing supplemental nutrition packages to local families in need.",
          contact: "276-783-5194",
          email: "allenjohnsey@email.com",
        },
        {
          name: "First Church of God",
          location: "Atkins, VA",
          desc: "Sorting food items and stocking shelves for community distributions.",
          contact: "276-591-8669",
          email: "churchatkins@email.com",
        },
        {
          name: "Helping Hands Thrift Store",
          location: "Marion, VA",
          desc: "Sorting thrift clothing donations, organizing merchandise, and helping local shoppers.",
          contact: "276-685-7967",
          email: "baxterhands@email.com",
        },
      ],
      E: [
        {
          name: "Museum of the Middle Appalachians",
          location: "Saltville, VA",
          desc: "Setting up active demonstrations, assisting with exhibits, and organizing special events.",
          contact: "276-496-3633",
          email: "museumofthemiddleappalachians@gmail.com",
        },
        {
          name: "The Henderson School of Arts",
          location: "Marion, VA",
          desc: "Assisting with community arts events, setting up workshops, and recitals.",
          contact: "276-206-0627",
          email: "cpoole@marionva.org",
        },
        {
          name: "Rich Valley Fair",
          location: "Rich Valley, VA",
          desc: "Fair event logistics, community advertising, and ticket booth duties.",
          contact: "276-783-3346",
          email: "richvalleyfair@gmail.com",
        },
        {
          name: "Mt. Pleasant Preservation Society & Museum",
          location: "Marion, VA",
          desc: "Upkeep of historical exhibits and acting as a guide during public heritage days.",
          contact: "276-780-3950",
          email: "preservation@email.com",
        },
      ],
    },
  },
};

export const questions: Question[] = [
  {
    text: "You have a free Saturday morning. How are you most likely to spend it?",
    options: [
      { letter: "A", text: "Working with animals or being outdoors." },
      { letter: "B", text: "Organizing files or updating my personal calendar." },
      { letter: "C", text: "Building a project or doing physical work." },
      { letter: "D", text: "Grabbing coffee with a friend or checking on family." },
      { letter: "E", text: "Helping run a local theater show or a festival." },
    ],
  },
  {
    text: "Which skill do you feel most confident using?",
    options: [
      { letter: "A", text: "Patience and staying calm in quiet spaces." },
      { letter: "B", text: "Attention to detail — I catch errors others miss." },
      { letter: "C", text: "Physical stamina and using tools or equipment." },
      { letter: "D", text: "Communication — listening to people and helping them." },
      { letter: "E", text: "Adaptability — I like fast-paced environments." },
    ],
  },
  {
    text: "What is your 'superpower' in a group project?",
    options: [
      { letter: "B", text: "The Researcher: I keep us organized and find data." },
      { letter: "D", text: "The Heart: I make sure everyone is included." },
      { letter: "E", text: "The Hype-Person: I spread the word and keep energy high." },
      { letter: "A", text: "The Guardian: I look out for those who need care." },
      { letter: "C", text: "The Builder: I physically put the project together." },
    ],
  },
  {
    text: "What work environment makes you most productive?",
    options: [
      { letter: "C", text: "Outdoors or in a shop where I can move around." },
      { letter: "B", text: "A quiet library where I can focus on a task." },
      { letter: "A", text: "A nurturing space working with living creatures." },
      { letter: "E", text: "A vibrant public space like a theater or market." },
      { letter: "D", text: "A community center helping people directly." },
    ],
  },
  {
    text: "What would be the most rewarding 'thank you'?",
    options: [
      { letter: "A", text: "Seeing a rescued animal finally feel safe." },
      { letter: "C", text: "Looking back at a finished physical project." },
      { letter: "B", text: "Knowing a complex system is now running smoothly." },
      { letter: "E", text: "Seeing a crowd enjoying a successful local event." },
      { letter: "D", text: "Having someone tell me I made their day better." },
    ],
  },
];

export const personalityDetails: Record<
  PersonalityKey,
  PersonalityDetail
> = {
  A: {
    title: "Animal Advocate",
    desc: "You have a natural gift for empathy. You thrive in environments that require steady care and a quiet, focused presence.",
    icon: "🐾",
  },
  B: {
    title: "Efficiency Expert",
    desc: "You are the backbone of any office. Your attention to detail and ability to organize makes you indispensable.",
    icon: "📋",
  },
  C: {
    title: "Hands-On Hero",
    desc: "You prefer action over talk. You find satisfaction in seeing the physical results of your hard work.",
    icon: "🔨",
  },
  D: {
    title: "Community Catalyst",
    desc: "You are a bridge-builder who loves direct connection. You shine when helping people face-to-face.",
    icon: "🤝",
  },
  E: {
    title: "Event Enthusiast",
    desc: "You thrive on energy. You are perfect for the magic of live events, promotion, and public entertainment.",
    icon: "🎉",
  },
};
