import { FaMusic, FaDatabase, FaLock, FaGithub, FaChartLine, FaFlag, FaFilePdf, FaBrain, FaMicrochip, FaWifi, FaVideo, FaEnvelope, FaMagic, FaPalette, FaCube, FaHammer, FaRobot } from "react-icons/fa";

const AppDevTasks = [
    {
      taskNumber: "01",
      icon: FaMusic,
      title: "Basic Song Player UI",
      description:
        "Build a simple music player app that can load a fixed set of songs, play/pause them, and allow users to mark songs as favorites. Focus on clean UI and basic functionality.",
      difficulty: "beginner",
      time: "4-6 hours",
      technologies: [
        "React Native", "Expo"
      ],
      requirements: [
        "Load 5-7 songs from local assets",
        "Display song title & artist in a list",
        "Include button to add/remove favorites",
        "Implement play/pause functionality",
        "Add a Favorites tab in bottom navigation",
        "Favorite list should update dynamically"
      ]
    },
    {
      taskNumber: "02",
      icon: FaMusic,
      title: "Music Player with Queue & Lyrics",
      description:
        "Enhance the music player by adding a Now Playing screen, song queue handling, and integration with a lyrics API to fetch and display lyrics.",
      difficulty: "intermediate",
      time: "6-8 hours",
      technologies: [
        "React Native", "Expo"
      ],
      requirements: [
        "Now Playing Screen with album poster, song and artist name",
        "Progress bar with seek functionality",
        "Play/pause and next/previous buttons",
        "Lyrics button to display fetched lyrics",
        "Queue feature: auto-play next song after current ends"
      ]
    },
    {
      taskNumber: "03",
      icon: FaDatabase,
      title: "Smart Music Player with Database & Synced Lyrics",
      description:
        "Build a full-featured smart music player app with song uploads, persistent storage using database, playlists management, and synced lyrics highlighting.",
      difficulty: "advanced",
      time: "10-15 hours",
      technologies: [
        "React Native", "SQLite", "Expo", "File System", "Background Tasks"
      ],
      requirements: [
        "Database Integration (SQLite/Drift) for favorites, playlists, uploaded songs",
        "Upload Song Feature: select audio files from device storage",
        "Display uploaded songs in songs section",
        "Create/edit/delete playlists functionality",
        "Add/remove songs to playlists (including uploaded ones)",
        "Playable playlists with queue management",
        "Synced Lyrics Highlighting: highlight current lyrics in sync with song"
      ]
    }
  ];

const WebDevTasks = [
    {
      taskNumber: "01",
      icon: FaGithub,  
      title: "Public Repository README Generator",
      description:
        "Develop a system to generate a complete, professional README.md for any public GitHub repository using only the repository link.\nLeverage GitHub API for metadata and Google Gemini API for filling in missing content such as descriptive summaries and features.",
      difficulty: "intermediate",
      time: "5-7 hours",
      technologies: [
        "Node.js", "Express.js", "GitHub API", "Google Gemini API"
      ],
      requirements: [
        "Fetch repository data via GitHub API",
        "Use Gemini API to auto-generate sections: Description, Features, Usage",
        "Generated README must have: Project Title, Description, Features, Installation Guide, Tech Stack, Project Structure, License Information",
        "Template-based, professional Markdown output",
        "Return errors for invalid/incomplete repo data"
      ],
      bugsToAvoid: [
        "Incomplete Data → Do not skip mandatory sections",
        "Formatting Issues → Ensure clean Markdown",
        "Invalid Repo Links → Return meaningful error messages"
      ],
      resources: [
        { name: "GitHub API Docs", url: "https://docs.github.com/en/rest?apiVersion=2022-11-28" },
        { name: "Google Gemini API", url: "https://ai.google.dev/gemini-api/docs" }
      ]
    },
    {
      taskNumber: "02",
      icon: FaLock,
      title: "Private Repository README Generator (with Authentication)",
      description:
        "Upgrade the system to support private GitHub repositories.\nImplement OAuth-based authentication to securely retrieve private repo data and generate AI-powered, comprehensive README files for them, just like with public repos.",
      difficulty: "advanced",
      time: "7-10 hours",
      technologies: [
        "Node.js", "Express.js", "GitHub API (OAuth)", "Google Gemini API"
      ],
      requirements: [
        "Implement GitHub OAuth for users",
        "Support fetching private repo metadata via authenticated API",
        "Google Gemini API for content gaps",
        "Show clear error/state for invalid/expired tokens"
      ],
      bugsToAvoid: [
        "Token Leaks → Ensure OAuth tokens/PATs are never logged",
        "Auth Failures → Gracefully show expired/invalid auth",
        "Incomplete README → All mandatory sections required, even for private repos",
        "Never log or display user's GitHub tokens (PATs or OAuth access tokens) anywhere in your UI or logs."
      ],
      resources: [
        { name: "GitHub API Docs", url: "https://docs.github.com/en/rest?apiVersion=2022-11-28" },
        { name: "GitHub OAuth Apps", url: "https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps" },
        { name: "Google Gemini API", url: "https://ai.google.dev/gemini-api/docs" }
      ]
    }
  ];

const MLTasks = [
    {
      taskNumber: "01",
      icon: FaChartLine,
      title: "Planetary Classifier",
      description:
        "Build a classifier on a planetary dataset.",
      difficulty: "basic",
      time: "4-6 hours",
      technologies: [
        "Python", "Scikit-learn", "Pandas", "TF-IDF", "Classification"
      ],
      datasetInfo: "The Dataset should be split 80/20 and all the major metrics should be evaluated on it.",
      steps: [
        "Load and preprocess the dataset",
        "Extract features from text (e.g., TF-IDF)",
        "Train classifiers: Use the best Classification Model",
        "Report Accuracy, Precision, Recall, F1 Score for each model"

      ]
    },
    {
      taskNumber: "02",
      icon: FaBrain,
      title: "Sentiment Analysis on Reviews",
      description:
        "Build a sentiment classifier to predict whether a review is positive or negative.",
      difficulty: "advanced",
      time: "6-10 hours",
      technologies: [
        "Python", "TensorFlow/PyTorch", "LSTM", "Transformers", "DistilBERT"
      ],
      datasetInfo: "IMDb Reviews (25k labeled) or Amazon Reviews Polarity Dataset",
      steps: [
        "Preprocess text: cleaning, tokenization",
        "Baseline: TF-IDF + Logistic Regression",
        "Advanced: Train LSTM model OR fine-tune transformer (DistilBERT)",
        "Evaluate using Accuracy and F1 Score, compare approaches",
        "Amazon Reviews Polarity Dataset (raw format, not kaggle notebooks)"
      ],
      resources: [
        { name: "IMDb Dataset", url: "https://ai.stanford.edu/~amaas/data/sentiment/" }
      ]
    },
    {
      taskNumber: "03",
      icon: FaFilePdf,
      title: "PDF QA Assistant",
      description:
        "Build a tool where users upload a PDF and the assistant answers questions about it.",
      difficulty: "genai",
      time: "8-12 hours",
      technologies: [
        "LangChain", "ChromaDB", "FAISS", "OpenAI API", "HuggingFace", "Streamlit"
      ],
      datasetInfo: "User-uploaded PDF documents for question answering",
      steps: [
        "Extract and chunk text from uploaded PDF",
        "Create embeddings and store in vector database (ChromaDB/FAISS)",
        "Implement RetrievalQA chain with LLM",
        "Build user interface for PDF upload and Q&A interaction"
      ],
      resources: [
        { name: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
        { name: "ChromaDB Getting Started", url: "https://docs.trychroma.com/getting-started" },
        { name: "FAISS Vector Search", url: "https://faiss.ai/" },
        { name: "Streamlit for UI", url: "https://docs.streamlit.io/" }
      ]
    }
  ];

// Updated MechatronicsTasks with both IoT and CAD tasks
const MechatronicsTasks = [
    // IoT Tasks
    {
      taskNumber: "0",
      icon: FaMicrochip,
      title: "IoT Task - 1 : Potentiometer & OLED Display",
      description:
        "Interface a linear potentiometer with an ESP32 and display the real-time analog values on a 128x64 OLED screen.",
      difficulty: "Easy",
      category: "IoT",
      technologies: ["ESP32", "Potentiometer", "OLED 128x64", "I2C", "ADC", "Wokwi"],
      requirements: [
        "ESP32 board",
        "Linear potentiometer (connected via ADC pin)",
        "128x64 OLED display (I2C communication)"
      ],
      steps: [
        "Read the analog voltage from the potentiometer using ESP32 ADC pins.",
        "Initialize the OLED display over I2C.",
        "Continuously display the potentiometer reading on the OLED."
      ],
      outcomes: [
        "Understand analog-to-digital conversion (ADC) on ESP32.",
        "Learn I2C communication protocol for interfacing displays.",
        "Learn basic input/output operations on ESP32."
      ],
      demo: "https://youtu.be/1ndcutD5m-k",
      submission: [
        "Submit 2 separate links to your Wokwi projects"
      ]
    },
    {
      taskNumber: "1",
      icon: FaWifi,
      title: "IoT Task - 2 (Intermediate): IoT API Integration with ESP32",
      description:
        "Use ESP32 to communicate with a web API via HTTP GET and POST requests, take user input from hardware (potentiometer, buttons), and provide feedback using OLED and LEDs.",
      difficulty: "Intermediate",
      category: "IoT",
      technologies: ["ESP32", "Wi-Fi", "REST API", "HTTPS", "JSON", "OLED", "LEDs", "Push Buttons"],
      requirements: [
        "ESP32 board with Wi-Fi connectivity",
        "128x64 OLED display",
        "Linear potentiometer",
        "2 LEDs (Green, Red)",
        "3 Push Buttons",
        "One for GET request",
        "One for POST request",
        "One for field toggle (switch between username & password input)"
      ],
      steps: [
        "Wi-Fi Setup: Connect ESP32 to Wi-Fi network.",
        "GET Request: On pressing the GET button, send a GET request to: https://task2025.swymbnsl.com/api/get-key",
        "Receive a response containing a username and password.",
        "Display them on the OLED screen.",
        "User Input for POST Request: Use the potentiometer as input.",
        "A field toggle button switches between entering the username and password.",
        "Display the currently selected field on the OLED.",
        "POST Request: On pressing the POST button, send a POST request with the username and password to: https://task2025.swymbnsl.com/api/post-key",
        "Check the response status.",
        "If successful → Turn Green LED ON.",
        "If failed → Turn Red LED ON."
      ],
      hints: [
        "The username is a random integer from 1–50.",
        "The password is a random integer from 51–100.",
        "Is your https request failing? You might need to dig deeper into sending https requests with ESP32"
      ],
      outcomes: [
        "Learn to connect ESP32 to the Internet via Wi-Fi.",
        "Understand REST API communication (GET & POST) over HTTPS.",
        "Learn JSON parsing and handling API responses.",
        "Implement user input handling via potentiometer & push buttons.",
        "Learn input debouncing via push button."
      ],
      demo: "https://youtu.be/nYvKVWP04KU",
      submission: [
        "Submit 2 separate links to your Wokwi projects"
      ]
    },
    {
      taskNumber: "A",
      icon: FaCube,
      title: "CAD Task - 1 : Blender & Creative 3D Design",
      description:
        "Recreate one of our college canteens (Amul, Tadka Café, Silver Spoon, or Food Masti) inside Blender, but with a creative twist. Don't just make it realistic, give it a theme: spooky Halloween vibes, futuristic cyberpunk style, fantasy world, or apocalyptic ruin.",
      difficulty: "Creative",
      category: "CAD",
      technologies: ["Blender", "3D Modeling", "Animation", "Physics Simulation", "Creative Software"],
      requirements: [
        "Choose any canteen: Amul, Tadka Café, Silver Spoon, or Food Masti",
        "Apply a creative theme (Halloween, cyberpunk, fantasy, apocalyptic, etc.)",
        "Go beyond simple modeling: add Blender physics, cinematic flythrough, animated characters",
        "Simulate smoke/fire or other effects that bring your canteen to life",
        "Add extra props, characters, effects, or story elements"
      ],
      submission: [
        "Submit your Blender file (.blend) along with all textures, models or HDRIs in a single zip or rar folder",
        "Include at least 5 rendered images and a short clip showcasing your work",
        "Name your folder as YourName_TaskA",
        "Share Google Drive/OneDrive/Dropbox link with open access"
      ]
    },
    {
      taskNumber: "B1",
      icon: FaHammer,
      title: "CAD Task - 2.1 : NEMA 17 Motor Mount",
      description:
        "Design a secure housing or mounting bracket for a NEMA 17 stepper motor. The goal is to check how well you can handle CAD basics, accuracy, and practical design thinking.",
      difficulty: "Beginner",
      category: "CAD",
      technologies: ["CAD", "Onshape", "Fusion 360", "SolidWorks", "GRABCAD"],
      requirements: [
        "Design a mounting bracket/plate that securely holds the NEMA 17 stepper motor",
        "Add proper holes for bolts and nuts (use real dimensions for M3 screws)",
        "Make sure the bracket can be fixed onto a flat chassis plate by adding base holes"
      ],
      resources: [
        { name: "NEMA 17 Reference", url: "https://reprap.org/wiki/NEMA_17_Stepper_motor" }
      ],
      submission: [
        "The CAD model of the motor housing (in .step, .stl, or native format of your CAD software)",
        "At least one clean render/image showing the housing clearly from different angles"
      ]
    },
    {
      taskNumber: "B2",
      icon: FaRobot,
      title: "CAD Task - 2.2 : Complete 8kg Battlebot Design",
      description:
        "Use the motor housing from Level 1B and integrate it into a complete 8 kg battlebot design. The main body should be designed so it can realistically be manufactured with CNC machining.",
      difficulty: "Advanced",
      category: "CAD",
      technologies: ["CAD", "Onshape", "Fusion 360", "SolidWorks", "GRABCAD", "CNC Design"],
      requirements: [
        "Chassis Design: Build a solid CNC-cut baseplate and side panels",
        "Mount the NEMA 17 motor using the housing from Level 1B",
        "(Optional) Add protective armor around sensitive components",
        "Drive System: Use 2–4 drive motors with appropriate mounts",
        "Secure wheels (of your choice) and ensure proper ground clearance",
        "Component Integration: Just dedicate compartments/spaces for electronics",
        "Weight Check: Ensure the total design is under the 8 kg category limit"
      ],
      submission: [
        "Export your complete battlebot design in .step, .stl, or your CAD software's native format",
        "Include at least 3–5 images of the bot from different perspectives (front, side, top, isometric, etc.)",
        "Place all files in a folder named YourName_TaskB_Level2B"
      ]
    }
  ];

const CreativeOutreachTasks = [
    {
      taskNumber: "01",
      icon: FaVideo,
      title: "Video Editing Challenge",
      description:
        "Create a 60–90 second professional vertical reel that introduces BYTE, the technical society of MAIT. The aim is to present BYTE as an innovative and impactful student community suitable for branding, sponsorship pitches, and outreach.",
      difficulty: "creative",
      technologies: [
        "Video Editing", "Adobe Premiere", "Final Cut Pro", "DaVinci Resolve", "Storytelling"
      ],
      guidelines: [
        "Duration: 60–90 seconds",
        "Format: Vertical (9:16), Instagram Reel",
        "Content Style: Use both images (posters, team photos, logos) and videos (event clips, workshops, coding contests) creatively",
        "You can refer to BYTE's Instagram page and use stock images/videos as well",
        "Storytelling Flow: Intro (introduction of BYTE + vision) → Highlights (achievements, events, impact) → Conclusion (future vision + call for branding/sponsorship)",
        "Editing Style: Clean, professional, and engaging with smooth transitions, animated text, and infographics"
      ],
      deliverable: "A final MP4 video has to be submitted via the given Google Form",
      evaluation: [
        "Storytelling & flow",
        "Creativity & editing quality",
        "Professionalism & clarity",
        "Adherence to format & time"
      ]
    },
    {
      taskNumber: "02A",
      icon: FaPalette,
      title: "Task 1: Hackathon Win Poster",
      description:
        "Design a poster announcing our society/team's victory in a hackathon. The poster should convey celebration, pride, and professionalism while also being visually appealing for social media.",
      difficulty: "creative",
      technologies: [
        "Graphic Design", "Adobe Photoshop", "Illustrator", "Figma", "Canva Pro"
      ],
      requirements: [
        "Size: A4 (vertical, 1080x1350 px for social media compatibility)",
        "Format: PNG/JPG",
        "Naming: YourName_Task1.png",
        "You can refer to Byte's Instagram page for references"
      ],
      evaluation: [
        "Creativity & Originality",
        "Visual Appeal & Aesthetics",
        "Clarity of Communication",
        "Relevance to Theme",
        "Professionalism"
      ],
      resources: [
        { name: "BYTE Instagram Reference", url: "https://www.instagram.com/byte__official/" }
      ]
    },
    {
      taskNumber: "02B",
      icon: FaMagic,
      title: "Task 2: Brand Advertisement Poster",
      description:
        "Design an advertisement poster for a fictional or real brand of your choice. Showcase your creativity in branding and visual storytelling. The poster should be eye-catching, minimal yet impactful, and capable of grabbing audience attention instantly.",
      difficulty: "creative",
      technologies: [
        "Graphic Design", "Brand Identity", "Typography", "Visual Communication"
      ],
      requirements: [
        "Size: A4 (vertical, 1080x1350 px for social media compatibility)",
        "Format: PNG/JPG",
        "Naming: YourName_Task2.png",
        "Style: Eye-catching, minimal yet impactful",
        "Goal: Instant audience attention and engagement"
      ],
      evaluation: [
        "Creativity & Originality",
        "Visual Appeal & Aesthetics",
        "Clarity of Communication",
        "Relevance to Theme",
        "Professionalism"
      ]
    },
    {
      taskNumber: "03",
      icon: FaEnvelope,
      title: "Social Media PR Recruitment Task—Case Study: Sponsorship Mail Writing",
      description:
        "We want to test the candidate's communication, professionalism, and problem-solving skills. They should be able to identify flaws in an unprofessional sponsorship request and rewrite it in a clear, concise, and persuasive way.",
      difficulty: "intermediate",
      technologies: [
        "Professional Writing", "Communication", "PR Strategy", "Email Marketing"
      ],
      caseStudy: `Subject: plz sponsor our event

Body:
Hello Sir/Madam,
We are organizing an event in our college. We need money for it so can you please sponsor us.
We will put your logo on our poster and insta handle. Please reply fast as event is very soon.
Thank you.`,
      tasks: [
        "Identify what is wrong with the above mail",
        "Rewrite the sponsorship request mail in a proper format"
      ],
      evaluation: [
        "Professionalism in writing",
        "Ability to understand sponsor's perspective (mutual benefit)",
        "Clarity, conciseness & persuasiveness",
        "Creativity in presenting the event"
      ],
      submissionMethod: "This will be shared via Google Form with Section 1: Wrong sponsorship mail (displayed as case study) and Section 2: Questions asking to list 3–5 things wrong and rewrite the mail properly"
    }
  ];


const CyberSecurityTasks = [
    {
      taskNumber: "1",
      icon: FaFlag,
      title: "Task 1",
      description: "Can you get the flag from this? Believe me it's easy",
      challenge: "TllCWHtueWJ4X3hhaXhzYV9qdHBsaXRoX3FleGRzaGg5OX0",
      flagFormat: "BYTE{}",
    },
    {
      taskNumber: "2",
      icon: FaFlag,
      title: "Task 2",
      description: "This one is a little bit different, but one who knows can do it. The flag's in the image.",
      flagFormat: "BYTE{}",
      imageUrl: "https://drive.google.com/file/d/1ELLQDWkqsSL-PM_xQcids8axmntXUiOL/view?usp=sharing"
    }
];


export {AppDevTasks, WebDevTasks, MLTasks, MechatronicsTasks, CreativeOutreachTasks, CyberSecurityTasks}
