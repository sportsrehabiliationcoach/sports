import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to deal with postures?',
    heading: "Maintaining good postures",
    content: 'Posture is a highly individual and dynamic aspect of human physiology. It is more about how your body adapts and interacts with different situations than a fixed correct or incorrect state. Posture can be simply defined as the way in which we hold our bodies while standing, sitting, or lying down.Postures do matter a lot in body structure be it about height of a body or some pain in back of neck. ',
    disease: 'Postures',
    info: 'Maintaining good posture for everyone',
    paragraph: 'Posture is a highly individual and dynamic aspect of human physiology. It is more about how your body adapts and interacts with different situations than a fixed correct or incorrect state. Posture can be simply defined as the way in which we hold our bodies while standing, sitting, or lying down.Postures do matter a lot in body structure be it about height of a body or some pain in back of neck. ',
    image: 'https://th.bing.com/th/id/OIP.SZF5MTRRzO_Hj7FHm6YKVQHaFh?rs=1&pid=ImgDetMain',
    benefits: [


      'Reduced Back and Neck Pain: Good posture helps alleviate stress on the spine, reducing the risk of chronic back and neck pain',
      'Improved Respiratory Function: An upright posture allows your lungs to expand fully, enhancing your breathing capacity.',
      'Enhanced Circulation and Digestion: Proper alignment of the body promotes better blood flow and aids in digestion.',
      'Fewer Headaches: Correct posture can reduce muscle tension in the neck, which often leads to fewer tension headaches.',
      'Increased Energy Levels: Good posture reduces fatigue by allowing muscles to work more efficiently.',
      'Boosted Confidence and Mood: Standing or sitting up straight can improve your self-esteem and overall mood.',
      'Better Cognitive Function: Proper posture can enhance brain function by improving blood flow and oxygen supply to the brain.',
      'Prevention of Joint and Muscle Strain: Maintaining good posture helps prevent unnecessary strain on muscles and joints, reducing the risk of injuries.',

    ],
    background: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    exercise: [
      {
        url: "https://th.bing.com/th/id/R.9a2bddf7f896495e597b0801875adc33?rik=MDKUYsfsNS8k9Q&riu=http%3a%2f%2fwww.wikihow.com%2fimages%2f3%2f36%2fPerform-Shoulder-Stretches-Step-6.jpg&ehk=vrb8cndKA2F6UF6pF%2be7MAuk5fS1dwRcFDsutB8FoI4%3d&risl=&pid=ImgRaw&r=0",
        sentence: "Shoulder stretch",
        items: [
          "Improve posture alignment.",
          "Reduces tension and pain.",
          "Increases mobility.",
          "Reduce neck and shoulder pain."
        ]
      },
      {
        url: "https://th.bing.com/th/id/R.e8c7efcc6f3011b4a02f292bff41e325?rik=RtQ8NC6BzLohkg&riu=http%3a%2f%2fwww.divinitymagazine.com%2fwp-content%2fuploads%2f2017%2f09%2fchilds-pose.jpg&ehk=iFMqRMNGO%2bplbjrDKF%2fDFOKsZ5d%2fPP%2bAJuzQLs07Fgw%3d&risl=&pid=ImgRaw&r=0",
        sentence: 'Child\'s pose',
        items: [
          "Stretches the body.",
          "Stretches the spine and helps in height increase in children.",
          "Relaxes the back muscles.",
          "Increases blood supply to head and neck."
        ]
      },
      {
        url: "https://yogapractice.com/wp-content/uploads/2019/07/Cobra-Pose-Benefits-800x534.jpg",
        sentence: 'Half cobra pose',
        items: [
          "Opens shoulders and chest.",
          "Increases spinal flexibility.",
          "Stimulates the digestive and pelvic organs.",
          "Relieves back pain, slipped disc, and sciatica."
        ]
      }

    ]
  }
  , {
    id: 2,
    title: 'Geriatric physiotherapy',
    heading: 'Physiotherapy at home',
    content: 'Senior citizens are at risk for developing mobility issues that can make it difficult to get around and do the things they love. Geriatric physiotherapy is a physical therapy that deals with the issues concerning older people. It addresses issues like arthritis, falls, parkinson’s disease and muscle weakness, aiding elderly mobility and enhancing independence and quality of life for seniors. Right movement and exercises are known to help maintain health, reduce frailty and prevent common ageing problems.',
    disease: 'Geriatric Physiotherapy',
    info: 'From parkinson\'s to arthritis, geriatric care for senior citizens and elderly',
    paragraph: "Senior citizens are at risk for developing mobility issues that can make it difficult to get around and do the things they love. Geriatric physiotherapy is a physical therapy that deals with the issues concerning older people. It addresses issues like arthritis, falls, parkinson’s disease and muscle weakness, aiding elderly mobility and enhancing independence and quality of life for seniors. Right movement and exercises are known to help maintain health, reduce frailty and prevent common ageing problems.",
    image: "https://cdn-djmgl.nitrocdn.com/WKDrbFhGmXUqrdsfVwgWscBHIyiXYRMC/assets/images/optimized/rev-e31e453/reliva.in/wp-content/uploads/2023/12/co-geriatric-care.webp",
    benefits: [
      'Improved Mobility',
      'Pain Management especially with chronic pain',
      'Fall Prevention',
      'Enhanced Independence to perform daily activities without assistance',
      'Muscle Strength to combat weakness due to aging',
      'Improved Respiratory Function',
      'Supports recovery after surgery, injury, or stroke',
      'Better Quality of Life in older people'
    ],
    background: "https://cdn-djmgl.nitrocdn.com/WKDrbFhGmXUqrdsfVwgWscBHIyiXYRMC/assets/images/optimized/rev-e31e453/reliva.in/wp-content/uploads/2023/12/pc-geriatric-bg-1024x683.webp",
    exercise: [
      {
        url: "https://irp-cdn.multiscreensite.com/8b9b330b/dms3rep/multi/CompleteCare_BalanceExercises.png",
        sentence: "Balancing exercises for elderly people",
        items: [
          "Improve balance and coordination.",
          "Enhance stability while standing and walking.",
          "Reduce the risk of falls and injuries.",
          "Promote overall physical wellness."
        ]
      },
      {
        url: "https://images.squarespace-cdn.com/content/v1/5d9f65d12a10d4166969add0/1602830525911-NORXNE67RCUX9SKT3H0E/stretching+exercises+for+seniors+7",
        sentence: 'Stretching exercise for elderly people',
        items: [
          "Increase flexibility and range of motion.",
          "Reduce muscle stiffness and discomfort.",
          "Enhance circulation and joint health.",
          "Support daily functional movements and activities."
        ]
      },
      {
        url: "https://eldergym.com/wp-content/uploads/2018/11/breathing.jpg",
        sentence: 'Breathing exercise for elderly people',
        items: [
          "Increase flexibility and range of motion.",
          "Reduce muscle stiffness and discomfort.",
          "Enhance circulation and joint health.",
          "Support daily functional movements and activities."
        ]
      }

    ]
  },
  {
    id: 3,
    title: 'Fitness and aerobics',
    heading: 'Injury Prevention and Recovery with Sports rehabilitations',
    content: ' Sports physiotherapy for treating sports injury and addressing performance and training issues of sportspersons and athletes. Whether you are a 18 year old professional tennis player or a 45 year old taking up marathon running, our sports physiotherapist can help you achieve your goals with fewer injuries and faster recovery.',
    disease: 'Fitness and aerobics',
    info: 'Sports rehabilitation program ',
    paragraph: " Sports physiotherapy for treating sports injury and addressing performance and training issues of sportspersons and athletes. Whether you are a 18 year old professional tennis player or a 45 year old taking up marathon running, our rehabilitaion tips  can help you achieve your goals with fewer injuries and faster recovery.",
    image: "https://workoutmag.net/wp-content/uploads/2020/09/1-1.png",
    benefits: [
      'Restore function',
      'Decreased pain',
      'Increase strength and flexibility',
      'Injury prevention and education',
      'optimize performance',
      'Helps lose weight by expanding calories',
      'Reduces risk of diabetes',
      'Prolongs life and makes you be healthy and fit.'
    ],
    background: "https://plus.unsplash.com/premium_photo-1661284821625-9400498df354?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://th.bing.com/th/id/OIP.EucmrqbtOUlJt6OLW7IMfQAAAA?rs=1&pid=ImgDetMain",
        sentence: "Zumba exercises ",
        items: [
          "Weight loss: Zumba can help you lose weight.",
          'Improved cardiovascular fitness: Regular Zumba classes improve cardiovascular fitness and may improve strength and flexibility.',
          'Reduced risk of heart disease: Zumba can lower the risk of heart disease and reduce blood pressure and bad cholesterol.',
          'Tones your entire body: Zumba targets different muscle groups for total body toning.',

        ]
      },
      {
        url: "https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62973946c534f0111d696d17_Benefits%20of%20Brisk%20Walking.jpg",
        sentence: 'Brisk walking',
        items: [
          "Helps in weight loss.",
          "Improves heart health.",
          "Reduces chronic diseases.",
          "Prevents cancer.",
          "Lowers blood pressure",

        ]
      },
      {
        url: "https://www.clistudios.com/wp-content/uploads/2021/08/jaquel-knight-hip-hop-1024x683.jpeg",
        sentence: 'Dancing',
        items: [
          "It is fun and effective especially with your favorite music.",
          "A good recreational activity which keeps you flexible and helps maintaining physical fitness.",
          "Aiding in weight loss or maintainance.",
          "Cognitively benefiting (memory, orientation, and concentration)."
        ]
      }

    ]
  },
  {
    id: 4,
    title: 'Dealing with better diet',
    heading: 'Nourish to Flourish: Unlock Your Peak Performance with Better Nutrition!',
    content: ' Protein is crucial for muscle repair and growth, especially after an injury. Ensuring an adequate intake of protein can significantly enhance the recovery process by providing the necessary building blocks for tissue repair. Incorporate lean meats, fish, dairy products, beans, lentils, and nuts into your diet to meet your protein needs. Aim for a balanced intake of protein throughout the day to support continuous muscle recovery and prevent muscle loss.',
    disease: 'Dealing with better diet',
    info: 'Apple a day keeps a doctor away',
    paragraph: 'Protein is crucial for muscle repair and growth, especially after an injury. Ensuring an adequate intake of protein can significantly enhance the recovery process by providing the necessary building blocks for tissue repair. Incorporate lean meats, fish, dairy products, beans, lentils, and nuts into your diet to meet your protein needs. Aim for a balanced intake of protein throughout the day to support continuous muscle recovery and prevent muscle loss.',
    image: "https://th.bing.com/th/id/OIP.uf0HWC9hSJLvWadEZ2GNgAHaEW?rs=1&pid=ImgDetMain",
    benefits: [
      'Protein is essential for repairing and rebuilding muscle tissue. ',
      'Foods rich in omega-3 fatty acids, such as salmon, flaxseeds, and walnuts, can help reduce inflammation.',
      'Proper hydration is vital for overall health and recovery. Water helps transport nutrients to cells and remove waste products',
      'Vitamins and minerals play a significant role in recovery. Vitamin C (found in citrus fruits and bell peppers) aids in collagen formation, while zinc (found in meat, shellfish, and legumes) supports immune function and wound healing',
      'Zinc has many vital roles in our bodies including keeping our immune system functioning well and aiding in injury and wound repair.',
      'Eating foods which are high in calcium can be particularly useful for fractures and other bone injuries. ',
      'Iron helps our bodies to produce blood cells and a protein called collagen.',
      'Both magnesium and potassium help to keep our nerves and muscles are working properly.'
    ],
    background: "https://images.unsplash.com/photo-1610415946035-bad6fc9f5b8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://th.bing.com/th/id/OIP.vElTKJu5I5TjJMsoXeLJ9QHaE4?rs=1&pid=ImgDetMain",
        sentence: "Protein-rich foods ",
        items: [
          "Crucial for building and repairing muscles especially after exercises.",
          'Reduces calorie intake.',
          'Supports bone health and prevents osteoporosis.',
          'Proper protein intake reduces the risk of injuries.',

        ]
      },
      {
        url: "https://th.bing.com/th/id/OIP.BvzDKBBPQ6gMaDRk6iOk8wHaFj?rs=1&pid=ImgDetMain",
        sentence: 'Vitamin rich foods',
        items: [
          "Crucial for strong immune system  .",
          "Helps convert carbohydrates, fats and protein into energy which is essential for athletic performance.",
          "Vitamin c and E helps reduce oxidative stress and inflammation after intensive workouts.",
          "Vitamin D and K reduce risk of bone fractures.",

        ]
      },
      {
        url: "https://th.bing.com/th/id/OIP.Tun4W0dErTbuDC0aGYp41QHaE8?rs=1&pid=ImgDetMain",
        sentence: 'Proper hydration',
        items: [
          "Proper hydration helps maintain blood volume, ensuring efficient circulation and transport of nutrients and oxygen to muscles.",
          "Staying hydrated helps regulate body temperature, reducing the risk of heat-related illnesses during strenuous activities",
          "Hydration is vital for proper muscle function, including the heart muscles. It helps prevent cramps and maintain flexibility and speed",
          "Adequate hydration aids in recovery by helping to flush out toxins and reduce muscle soreness."
        ]
      }

    ]
  },
  {
    id: 5,
    title: 'Mental health and healing',
    heading: 'Strong Mind, Strong Recovery: The Key Role of Mental Health in Sports Rehabilitation!',
    content: ' Protein is crucial for muscle repair and growth, especially after an injury. Ensuring an adequate intake of protein can significantly enhance the recovery process by providing the necessary building blocks for tissue repair. Incorporate lean meats, fish, dairy products, beans, lentils, and nuts into your diet to meet your protein needs. Aim for a balanced intake of protein throughout the day to support continuous muscle recovery and prevent muscle loss.',
    disease: 'Sports on Mental health',
    info: 'Embracing Mental Health in Sports Rehabilitation',
    paragraph: 'Athletes often experience a range of emotions after an injury, including frustration, anger, anxiety, and depression.Understanding these emotional responses is crucial for effective rehabilitation.Positive mental health can enhance physical healing. Stress and negative emotions can negatively impact the body\'s ability to recover.Psychological support can help athletes maintain a positive outlook, which can boost their immune system and promote faster healing.',
    image: "https://www.theclintoncourier.net/wp-content/uploads/2021/06/pexels-andrea-piacquadio-3755440.jpg",
    benefits: [
      'Reduces stress. ',
      'Improves mood.',
      'Combats depression and anxiety',
      'Enhances self eesteem.',
      'Promotes social interaction.',
      'Improves sleep. ',
      'Doing physical activity can also distract you from negative thought patterns.',

    ],
    background: "https://images.unsplash.com/photo-1488228469209-c141f8bcd723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://th.bing.com/th/id/OIP.S2OEuz-oE9T7bmIgRlkWmQHaE8?rs=1&pid=ImgDetMain",
        sentence: "Role in maintaining good mental health ",
        items: [
          "Physical activity can immediately reduce symptoms of anxiety in adults and older adults.",
          'Stimulates the production of endorphins, the body’s natural mood lifters.',
          'Improved sleep, in turn, has a positive impact on mental health, reducing symptoms of anxiety and depression.',

        ]
      },
      {
        url: "https://images.freeimages.com/clg/istock/previews/9269/92691339-mental-health-sign-vector-human-brain-as-concept.jpg",
        sentence: 'Brain activity and neurotransmitters',
        items: [
          "Physical activity increases the production of neurotransmitters such as serotonin, dopamine, and norepinephrine.",
          "This neurochemical boost is one of the reasons why exercise is often recommended as part of the treatment for depression.",



        ]
      },
      {
        url: "https://th.bing.com/th/id/OIP.VYJatDRpeVtCnCr-vin77QHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
        sentence: 'Mindfulness and meditation',
        items: [
          "Mindfulness and meditation practices involve focusing on the present moment, which can help reduce stress and improve mental clarity.",
          "Regular practice of mindfulness meditation has been shown to decrease symptoms of depression and anxiety by promoting a state of calm and balance.",

        ]
      }

    ]
  },
  {
    id: 5,
    title: 'Mental health and healing',
    heading: 'Strong Mind, Strong Recovery: The Key Role of Mental Health in Sports Rehabilitation!',
    content: ' Protein is crucial for muscle repair and growth, especially after an injury. Ensuring an adequate intake of protein can significantly enhance the recovery process by providing the necessary building blocks for tissue repair. Incorporate lean meats, fish, dairy products, beans, lentils, and nuts into your diet to meet your protein needs. Aim for a balanced intake of protein throughout the day to support continuous muscle recovery and prevent muscle loss.',
    disease: 'Sports on Mental health',
    info: 'Embracing Mental Health in Sports Rehabilitation',
    paragraph: 'Athletes often experience a range of emotions after an injury, including frustration, anger, anxiety, and depression.Understanding these emotional responses is crucial for effective rehabilitation.Positive mental health can enhance physical healing. Stress and negative emotions can negatively impact the body\'s ability to recover.Psychological support can help athletes maintain a positive outlook, which can boost their immune system and promote faster healing.',
    image: "https://www.theclintoncourier.net/wp-content/uploads/2021/06/pexels-andrea-piacquadio-3755440.jpg",
    benefits: [
      'Reduces stress. ',
      'Improves mood.',
      'Combats depression and anxiety',
      'Enhances self eesteem.',
      'Promotes social interaction.',
      'Improves sleep. ',
      'Doing physical activity can also distract you from negative thought patterns.',

    ],
    background: "https://images.unsplash.com/photo-1488228469209-c141f8bcd723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://th.bing.com/th/id/OIP.S2OEuz-oE9T7bmIgRlkWmQHaE8?rs=1&pid=ImgDetMain",
        sentence: "Role in maintaining good mental health ",
        items: [
          "Physical activity can immediately reduce symptoms of anxiety in adults and older adults.",
          'Stimulates the production of endorphins, the body’s natural mood lifters.',
          'Improved sleep, in turn, has a positive impact on mental health, reducing symptoms of anxiety and depression.',

        ]
      },
      {
        url: "https://images.freeimages.com/clg/istock/previews/9269/92691339-mental-health-sign-vector-human-brain-as-concept.jpg",
        sentence: 'Brain activity and neurotransmitters',
        items: [
          "Physical activity increases the production of neurotransmitters such as serotonin, dopamine, and norepinephrine.",
          "This neurochemical boost is one of the reasons why exercise is often recommended as part of the treatment for depression.",



        ]
      },
      {
        url: "https://th.bing.com/th/id/OIP.VYJatDRpeVtCnCr-vin77QHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
        sentence: 'Mindfulness and meditation',
        items: [
          "Mindfulness and meditation practices involve focusing on the present moment, which can help reduce stress and improve mental clarity.",
          "Regular practice of mindfulness meditation has been shown to decrease symptoms of depression and anxiety by promoting a state of calm and balance.",

        ]
      }

    ]
  },
  {
    id: 5,
    title: 'Mental health and healing',
    heading: 'Strong Mind, Strong Recovery: The Key Role of Mental Health in Sports Rehabilitation!',
    content: ' Protein is crucial for muscle repair and growth, especially after an injury. Ensuring an adequate intake of protein can significantly enhance the recovery process by providing the necessary building blocks for tissue repair. Incorporate lean meats, fish, dairy products, beans, lentils, and nuts into your diet to meet your protein needs. Aim for a balanced intake of protein throughout the day to support continuous muscle recovery and prevent muscle loss.',
    disease: 'Sports on Mental health',
    info: 'Embracing Mental Health in Sports Rehabilitation',
    paragraph: 'Athletes often experience a range of emotions after an injury, including frustration, anger, anxiety, and depression.Understanding these emotional responses is crucial for effective rehabilitation.Positive mental health can enhance physical healing. Stress and negative emotions can negatively impact the body\'s ability to recover.Psychological support can help athletes maintain a positive outlook, which can boost their immune system and promote faster healing.',
    image: "https://www.theclintoncourier.net/wp-content/uploads/2021/06/pexels-andrea-piacquadio-3755440.jpg",
    benefits: [
      'Reduces stress. ',
      'Improves mood.',
      'Combats depression and anxiety',
      'Enhances self eesteem.',
      'Promotes social interaction.',
      'Improves sleep. ',
      'Doing physical activity can also distract you from negative thought patterns.',

    ],
    background: "https://images.unsplash.com/photo-1488228469209-c141f8bcd723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://th.bing.com/th/id/OIP.S2OEuz-oE9T7bmIgRlkWmQHaE8?rs=1&pid=ImgDetMain",
        sentence: "Role in maintaining good mental health ",
        items: [
          "Physical activity can immediately reduce symptoms of anxiety in adults and older adults.",
          'Stimulates the production of endorphins, the body’s natural mood lifters.',
          'Improved sleep, in turn, has a positive impact on mental health, reducing symptoms of anxiety and depression.',

        ]
      },
      {
        url: "https://images.freeimages.com/clg/istock/previews/9269/92691339-mental-health-sign-vector-human-brain-as-concept.jpg",
        sentence: 'Brain activity and neurotransmitters',
        items: [
          "Physical activity increases the production of neurotransmitters such as serotonin, dopamine, and norepinephrine.",
          "This neurochemical boost is one of the reasons why exercise is often recommended as part of the treatment for depression.",



        ]
      },
      {
        url: "https://th.bing.com/th/id/OIP.VYJatDRpeVtCnCr-vin77QHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
        sentence: 'Mindfulness and meditation',
        items: [
          "Mindfulness and meditation practices involve focusing on the present moment, which can help reduce stress and improve mental clarity.",
          "Regular practice of mindfulness meditation has been shown to decrease symptoms of depression and anxiety by promoting a state of calm and balance.",

        ]
      }

    ]
  },
  {
    id: 6,
    title: 'sleep',
    heading: 'Sleep is the golden chain that ties health and our bodies together.',
    content: 'When it comes to sports injury recovery, we often focus on physical therapy, nutrition, and rest. However, one crucial element that is sometimes overlooked is sleep. Quality sleep is essential for overall health, and it plays a vital role in the recovery process.During sleep, the body goes into repair mode. Growth hormone is released, which stimulates tissue repair and muscle growth. This is crucial for athletes recovering from injuries, as it helps rebuild damaged tissues and speeds up the healing process.',
    disease: 'Better sleep',
    info: 'The more you sleep the better you train.',
    paragraph: 'When it comes to sports injury recovery, we often focus on physical therapy, nutrition, and rest. However, one crucial element that is sometimes overlooked is sleep. Quality sleep is essential for overall health, and it plays a vital role in the recovery process.During sleep, the body goes into repair mode. Growth hormone is released, which stimulates tissue repair and muscle growth. This is crucial for athletes recovering from injuries, as it helps rebuild damaged tissues and speeds up the healing process.',
    image: "https://www.sleepfoundation.org/wp-content/uploads/2021/06/Athletic-Performance-and-Sleep.jpg",
    benefits: [
      'Adequate sleep boosts speed, accuracy, and reaction time. ',
      'Improves mood.',
      'Sleep allows the body to repair muscles and tissues, reducing the risk of injury.',
      'Quality sleep improves mood and cognitive function, essential for decision-making and learning new skills.',
      'Athletes with sufficient sleep have better endurance and stamina.',


    ],
    background: "https://plus.unsplash.com/premium_photo-1702531819085-4815383bd175?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://i.pinimg.com/736x/e9/32/0e/e9320ee11efb1c3f3371a6c855d4a8c9--sleep-quotes-healthy-habits.jpg",
        sentence: "Muscle repair during sleep ",
        items: [
          "During deep sleep, the body releases human growth hormone (HGH), which is essential for muscle repair and growth",
          'Sleep promotes protein synthesis, which helps repair and build muscle tissues.',
          'Blood flow to muscles increases during sleep, delivering essential nutrients and oxygen needed for repair.',

        ]
      },
      {
        url: "https://d.newsweek.com/en/full/1973042/waking.jpg?w=790&f=4bf55571e5be109c7b2862784f851cfd",
        sentence: 'Wake up refreshed!',
        items: [
          "A well-rested body and mind can perform complex motor skills more effectively..",
          "A well-rested athlete is more aware of their body and surroundings, helping to avoid potential hazards.",
          "Proper rest allows the body to strengthen muscles and joints, making them less susceptible to injuries."



        ]
      },
      {
        url: "https://www.thenaturalbeddingcompany.com/wp-content/uploads/2018/02/SLEEP-CYCLE-600x600.jpg",
        sentence: '4 stages of sleep',
        items: [
          "Stage 1: The transition from wakefulness to sleep. A light sleep phase that prepares the body for deeper stages.",
          "Stage 2: A deeper sleep phase where the body begins to relax, and brain activity slows.",
          'Deep sleep crucial for physical recovery and muscle repair, essential for athletic performance.',
          'REM Sleep: A critical phase for cognitive function, memory consolidation, and emotional regulation',

        ]
      }

    ],

  },
  {
    id: 7,
    title: 'sleep',
    heading: 'Immersive simulations aid in engaging and effective recovery exercises.',
    content: 'When it comes to sports injury recovery, we often focus on physical therapy, nutrition, and rest. However, one crucial element that is sometimes overlooked is sleep. Quality sleep is essential for overall health, and it plays a vital role in the recovery process.During sleep, the body goes into repair mode. Growth hormone is released, which stimulates tissue repair and muscle growth. This is crucial for athletes recovering from injuries, as it helps rebuild damaged tissues and speeds up the healing process.',
    disease: 'Future of rehabilitation ',
    info: 'Explore the cutting-edge trends transforming sports rehabilitation and enhancing recovery like never before.',
    paragraph: 'Sports rehabilitation is evolving rapidly with advancements in technology and innovative approaches to injury recovery. This dynamic field is being transformed by cutting-edge trends and technologies that promise to revolutionize how athletes recover and perform. From virtual reality to wearable tech, these innovations are not only enhancing the effectiveness of rehabilitation but also making it more personalized and accessible.',
    image: "https://www.sleepfoundation.org/wp-content/uploads/2021/06/Athletic-Performance-and-Sleep.jpg",
    benefits: [
      'Real-time data tracking for personalized recovery plans.',
      'Immersive therapy for enhanced rehabilitation exercises.',
      'Remote therapy sessions for accessible, convenient care.',
      'Predictive analytics for injury prevention and recovery optimization.',
      'Custom orthotics and prosthetics for tailored support and treatment.',
      'Advanced treatments for faster tissue repair and recovery.'


    ],
    background: "https://plus.unsplash.com/premium_photo-1664475839122-a3795a3bf288?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://th.bing.com/th/id/OIP.ikEWKpCAZm2xFu48FoYV3wHaEK?rs=1&pid=ImgDetMain",
        sentence: "Virtual Reality",
        items: [
          "Virtual reality technology immerses athletes in simulated environments where they can perform rehabilitation exercises and activities.",
          'VR systems use interactive scenarios to mimic real-world movements and challenges, providing a dynamic and engaging way to recover..',
          'Allows athletes to practice movements in a safe, controlled virtual environment, reducing the risk of re-injury.',

        ]
      },
      {
        url: "https://i.pinimg.com/originals/db/ad/0c/dbad0cebdd4b98a78a1be311058e95cc.jpg",
        sentence: 'Wearable technology for athletes.',
        items: [
          "Provides detailed data on biomechanics, helping to pinpoint issues and track recovery progress.",
          "Enables the creation of customized rehabilitation programs based on real-time data.",
          "Early detection of potential issues can prevent injuries before they occur.",
          "Offers more precise measurements and integration with other health-monitoring systems to provide a comprehensive view of an athlete’s recovery."



        ]
      },
      {
        url: "https://www.phyworld.in/wp-content/uploads/2021/04/virtual-rehab-1024x641.jpeg",
        sentence: 'Tele rehabilittaion',
        items: [
          "Tele-rehabilitation leverages digital communication tools to provide remote therapy and consultation..",
          "Athletes can connect with rehabilitation professionals through video calls, mobile apps, and online platforms..",
          'Offers flexible scheduling and the ability to integrate rehab into daily routines.',
          'Allows for regular check-ins and adjustments to rehab plans based on ongoing progress.',
        ]
      }
    ],
  },
  {
    id: 8,
    title: 'DIY home tools and exercises',
    heading: 'Create your own rehabilitation tools at home offers several benefits.',
    content: 'Creating rehab tools at home can be quite fun in preparing them, you can get more exposure to such devices, you can even save money. Creating these diys and using at home for exercises can be more beneficial as you can create them as per your wish and accoeding to your desired sizes and shapes.',
    disease: 'DIY rehab tips ',
    info: 'convenient, and customized for your recovery journey.',
    paragraph: 'Creating rehab tools at home can be quite fun in preparing them, you can get more exposure to such devices, you can even save money. Creating these diys and using at home for exercises can be more beneficial as you can create them as per your wish and accoeding to your desired sizes and shapes.',
    image: "https://blog.cincinnatichildrens.org/wp-content/uploads/2020/04/20160523_SportsMed_rk301-scaled.jpeg",
    benefits: [
      'Cost-effective.',
      'Perform rehab exercises in the comfort of your own home, fitting them into your schedule without the need to visit a gym or clinic..',
      'Tailor your rehabilitation routine to your specific needs and preferences.',
      'Gain a sense of control over your rehabilitation process by actively participating in your own recovery efforts.',
      'Encourage regular practice and adherence to your rehab routine, which can lead to better and faster recovery outcomes.',



    ],
    background: "https://images.unsplash.com/photo-1592199279376-d48388291e22?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    exercise: [
      {
        url: "https://admin.performancehealth.com/media/wysiwyg/blog/articles/product_lab_shoot_20160714_157_1.jpg",
        sentence: "Resistance band",
        items: [
          "Latex Tubing or Exercise Bands: Available at fitness stores or online.",
          'Scissors: For cutting the tubing to desired lengths.',
          'Handles (Optional): You can use old bicycle grips, plastic tubing, or repurpose handles from old gym equipment.',
          'Clamps or Tape: To secure the ends of the bands if handles are not used.',

        ]
      },
      {
        url: "https://treadmilloffers.com.au/wp-content/uploads/2021/02/6006bc95e93e1.jpg",
        sentence: 'DIY Balance board.',
        items: [
          "Plywood Board: A piece of plywood, ideally around 1/2 inch thick and 18x12 inches in size.",
          'PVC Pipe or a Ball: A sturdy PVC pipe or a large, inflated ball for the board to rest on.',
          'Rubber Mat or Grip Tape: To provide traction on the board surface.',
          'Saw (for cutting): If you need to adjust the size of the board or pipe.',
        ]
        
        
      },
      {
        url: "https://i.ytimg.com/vi/Rsfj-fceNWQ/maxresdefault.jpg",
        sentence: 'Home-made ankle weights',
        items: [
          "Fabric or Old Socks: For creating the weight pockets.",
          'Sand, Rice, or Beans: To fill the pockets with weight.',
          'Velcro Straps or Adjustable Belts: To secure the ankle weights.',
          'Sewing Kit or Strong Adhesive: For closing the weight pockets.',
          'Scissors: To cut the fabric or socks.',
        ]
      }
    ],
  },


];
const STYLE = {
  color: 'darkblue',
  textAlign: 'center',
  margin: '20px',
}

function DetailBlog() {

  const [buttonColor, setButtonColor] = useState('green');
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);


  const handleClick = () => {
    setButtonColor('red');
    setTimeout(() => {
      navigate('/exercises');
    }, 300);
  }

  const { id } = useParams();
  console.log(`Blog ID from useParams: ${id}`);

  const blogPost = blogPosts.find(post => post.id === parseInt(id));
  console.log(`Blog Post: ${JSON.stringify(blogPost)}`);

  if (!blogPost) {
    return <p>Blog post not found</p>;
  }
  const firstHalf = blogPost.benefits.slice(0, 4);
  const secondHalf = blogPost.benefits.slice(4);

  const divStyle = {
    background: `url(${blogPost.background})`,
    backgroundPosition: '0px, 40%',
    marginTop: "0",
    opacity: '0.8',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    backgroundSize: 'cover',
    height: '250px',
    flexWrap: 'no-wrap',
    alignContent: 'center',

  }
  const flexContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0',
    margin: '0',
    marginLeft: '50px',
  };

  const flexItem = {
    flex: '1',
    padding: '10px',
    color: 'green'
  };

  const buttonStyle = {
    color: 'white',
    backgroundColor: isHovered ? 'darkGreen' : 'green',
    height: '50px',
    width: '100px',
    border: '1px solid green',
    borderRadius: '50px ',
    fontSize: '15px',
    fontWeight: 'medium',
    marginBottom: "65px",
    cursor: 'pointer',
    transition: 'background-color 0.3s',


  }






  return (
    <div style={{ margin: '0', padding: '0', backgroundColor: 'white' }}>
      <h1 style={STYLE}>hi</h1>
      <div style={divStyle}>
        <h1 style={{ color: 'darkBlack', fontSize: '45px', fontWeight: 'bold' }}>{blogPost.disease}</h1>
        <h3 style={{
          color: 'black', fontSize: '25px', border: '2px solid #000',
          padding: '3px',
          display: 'inline-block',
          backgroundColor: 'white',
          borderRadius: '5px',
        }}>{blogPost.info}</h3>

      </div>
      <div style={{ paddingTop: '3px', flex: '1', backgroundColor: 'white', display: 'flex', marginBottom: '0px' }}>
        <div >
          <h2 style={{ textAlign: 'left', paddingLeft: '20px' }}>{blogPost.heading}</h2>
          <p style={{ marginLeft: '20px' }}>{blogPost.paragraph}</p>
          <p style={{
            marginLeft: '50px', color: 'white', fontSize: '20px', padding: '3px',
            display: 'inline-block',
            backgroundColor: 'orange',
            borderRadius: '5px',
          }}>Some of the important benefits of {blogPost.disease} are :</p>
          <div style={flexContainer}>
            <ul style={flexItem}>
              {firstHalf.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <ul style={flexItem}>
              {secondHalf.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>

        </div>
        <div>
          <img src={blogPost.image} alt='{blogPost.disease}' style={{ height: '250px', marginTop: '85px' }}></img>

        </div>
      </div>
      <div style={{ paddingTop: '0' }}>
        <div style={{ backgroundColor: 'white', paddingLeft: '25px' }}><h3>Tips that you may find useful💡:</h3>
          <div style={{ padding: '20px', display: 'flex', gap: '105px' }}>
            {blogPost.exercise.map((item, index) => (
              <div style={{ display: 'flex', flexDirection: 'column', height: '500px', borderRadius: '50px' }}>
                <div style={{ borderRadius: '50px', height: '300px', width: '400px', marginTop: '0px' }}><img key={index} src={item.url} alt={`Exercise ${index + 1}`} style={{ borderRadius: '50px', height: '300px', width: '400px', marginTop: '0px' }} /></div>
                <div>
                  <h4>{item.sentence}</h4>
                  <ul>
                    {item.items.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '55px' }}>
        <button onClick={handleClick} style={buttonStyle} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>Back</button>
      </div>


    </div>
  );
}

export default DetailBlog;
