const posts = [
  {
    id: 1,
    image:
      "https://www.ncl.com/it/it/sites/default/files/1000x667-must-try-drinks-caribbean-cruise-ncl.jpg",
    content: "Bella Vita",
    likes: 50,
    comments: 15,
    lastCommenter: "Nicki Sabestian",
    timeAgo: "30 min",
    author: {
      name: "Michele Quadraro",
      photo:
        "https://impreza55.us-themes.com/wp-content/uploads/2022/07/person-3-731x1024.jpg",
    },
  },
  {
    id: 2,
    image:
      "https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg",
    content: "THERE IS A WORLD ELSEWHERE",
    likes: "4.8k",
    comments: 342,
    lastCommenter: "Nazmul Chowdhury",
    timeAgo: "1h",
    author: {
      name: "Power of Positivity",
      photo: "https://m.media-amazon.com/images/I/410Hbw4iJsL.jpg",
    },
  },
  {
    id: 3,
    image: "https://aulab.it/storage/557/conversions/web-dev-cover.jpg",
    content:
      "🚀 L’informatica è un settore dove ci sono tantissime opportunità di lavoro. Inizia a muovere i primi passi in questo ambito seguendo il corso gratuito online di programmadazero.it. Imparerai a creare il tuo primo sito web partendo da zero e potrai seguire il corso dove e quando vuoi tu!",
    likes: 150,
    comments: 25,
    lastCommenter: "John Smith, Nicki Minaj",
    timeAgo: "Sponsored",
    author: {
      name: "Programmare da zero",
      photo: "https://aulab.it/img/logo-aulab-horizontal.webp",
    },
  },
  {
    id: 4,
    image: "https://www.deshigreetings.com/photos/4893_1.jpg",
    content: "কাঁচা মরিচের বিকল্প কোনো রেসিপি কি আসবে? অপেক্ষায় থাকলাম",
    likes: 5,
    comments: 4,
    lastCommenter: "Md Rakib",
    timeAgo: "4h",
    author: {
      name: "Yasir Arafat",
      photo:
        "https://scontent.fcta1-1.fna.fbcdn.net/v/t1.6435-9/185774007_4093963694002836_5820744868442911179_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LHHsHZOqYHEAX8ZO_I3&_nc_ht=scontent.fcta1-1.fna&oh=00_AfAC8OoaYFbC6CFiqLBl6f4F31f-NXIC6kiVYzk8J8bJKg&oe=64C6D0DA",
    },
  },
  {
    id: 5,
    image:
      "https://scontent.fcta1-1.fna.fbcdn.net/v/t39.30808-6/323273827_1184719418834504_7660881721132315105_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=E1VPrNFDxe0AX-Hxw7s&_nc_ht=scontent.fcta1-1.fna&oh=00_AfAX9r0ZYjqrc6lIH9zxj_09zjx8i_DOvQ66atSV6mmkOw&oe=64AD0253",
    content: "Go forth and set the world on fire #graduation",
    likes: 70,
    comments: 25,
    lastCommenter: "Nivan Chowdhury",
    timeAgo: "8h",
    author: {
      name: "Sakib Hoq",
      photo:
        "https://scontent.fcta1-1.fna.fbcdn.net/v/t39.30808-6/233463012_340557171075590_1362138839473903680_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RwuAk4RzDGoAX9OVRjO&_nc_ht=scontent.fcta1-1.fna&oh=00_AfAbhw_nEb_rIK_SA03U0CDy4jiqFupH7mVU0x1iac8A4A&oe=64AE2868",
    },
  },
  {
    id: 6,
    image:
      "https://www.islamicity.org/global/images/photo/IC-Articles/handskabaIC__800x450.JPG",
    content: "",
    likes: "1.3k",
    comments: 18,
    lastCommenter: "Sumiya Chumki",
    timeAgo: "10h",
    author: {
      name: "Islam for life.",
      photo:
        "https://static.vecteezy.com/ti/vettori-gratis/p3/2276046-islamico-fede-simbolo-isolato-islam-religioso-segno-vettoriale.jpg",
    },
  },
  {
    id: 7,
    image:
      "https://i.etsystatic.com/22606386/r/il/83831f/4164890427/il_570xN.4164890427_ib5l.jpg",
    content: "Taking order 🤍🤍",
    likes: 20,
    comments: 2,
    lastCommenter: "Sarah Jaker",
    timeAgo: "12h",
    author: {
      name: "Muslin House",
      photo:
        "https://img2.ogaanindia.com/pub/media/catalog/product/cache/8e2c2a9d4851ee802ebff3c1680adbd5/c/m/cmll121.jpg",
    },
  },
  {
    id: 8,
    image:
      "https://www.proshantika.com/wp-content/uploads/2020/12/DDE977E0-6722-4131-9AB1-5EA143DF94AD.jpeg",
    content: "সপরিবারে ঈদের  দাওয়াতে যাওয়ার আগে আমরা!",
    likes: "3.7k",
    comments: 95,
    lastCommenter: "Jhankar Mahbob",
    timeAgo: "1 day",
    author: {
      name: "Chamok Hasan - চমক হাসান",
      photo:
        "https://scontent.fcta1-1.fna.fbcdn.net/v/t1.6435-9/121786426_197589018403400_4646229530315687393_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=boo6yY0GlNEAX-6MqTc&_nc_ht=scontent.fcta1-1.fna&oh=00_AfCRmBszYMdyGoUXKUrluFicDOsNoXp_rp90yZfg-pCmRg&oe=64C76B23",
    },
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/1389438413/it/vettoriale/felice-eid-ul-fitr-mubarak-illustrazione-di-sfondo-con-immagini-di-moschee-luna-antenne.jpg?s=612x612&w=0&k=20&c=kGA11X_WSIuSeiHMWme_KTtAWiYl7Hxay4-fSNktcmI=",
    content: `Siete Invitati all'anniversario e compleanno  dei POVERI festeggiamo anche EID RIUNIONE
    Da cuore della NERA 💚♥️💙💛💜`,
    likes: 40,
    comments: 25,
    lastCommenter: "Shahin Ahmed and Shamima Polin",
    timeAgo: "26 jun",
    author: {
      name: "Nure Alam Siddique",
      photo:
        "https://scontent.fcta1-1.fna.fbcdn.net/v/t1.18169-9/402877_210394975713806_2083624032_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=InVS_j3qhnAAX8WmYQW&_nc_ht=scontent.fcta1-1.fna&oh=00_AfDU97mywNpR7BSKxgqQBn5_yy_OCSNBEDFYf1YwnC7M_A&oe=64C75E06",
    },
  },
  {
    id: 10,
    image:
      "https://wallpapers.com/images/featured/baby-boy-0lk59nhizkpnfyjc.jpg",
    content: `Happy birthday our little bundle of joy! ♥️ Ehaan Mia `,
    likes: 60,
    comments: 19,
    lastCommenter: "Naznin Sultana and anni haq",
    timeAgo: "31 dec 2022",
    author: {
      name: "Easrat HaQue",
      photo:
        "https://w0.peakpx.com/wallpaper/330/348/HD-wallpaper-blue-eye-cute-alone-anime-girl.jpg",
    },
  },
];
