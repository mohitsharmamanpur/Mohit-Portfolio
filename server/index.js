const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyABUqgYzp7ekmlyKErgG5hu_-H0JIAPB1A');

// Portfolio context for Gemini
const portfolioContext = `
You are an AI assistant for Mohit Sharma's portfolio website. Here's detailed information about Mohit:

PERSONAL INFO:
- Name: Mohit Sharma
- Role: Aspiring Software Developer, DevOps Enthusiast, Cloud Enthusiast
- Education: B.Tech in Information Technology at SKIT, Jaipur
- Email: msharmampr@gmail.com
- Phone: 9694591869
- Goal: To work in top product-based companies like FAANG

SKILLS & TECHNOLOGIES:
- Programming Languages: Python, JavaScript, C++, HTML, CSS
- Frameworks & Libraries: React, Node.js, Express.js, Flutter
- DevOps & Cloud: Docker, Kubernetes, Jenkins, AWS, CI/CD Pipelines
- Machine Learning: Python ML libraries, AI/ML projects
- Databases: MongoDB, MySQL, DBMS
- Tools: Git, VS Code, Jupyter Notebooks

MAJOR ACHIEVEMENTS:
- Founder & CEO of Neuroaura (2024) - AI-powered emotional intelligence startup
- Published Research Paper (2024) - AI emotion detection risks in International Journal of Recent Research and Review (IJRRR)
- Winner of Hackverse Hackathon (2024) - Developed ML solution for IPC section suggestion system
- Participant in Hackcrux at LNMIIT Jaipur (2024)
- NPTEL Certifications in Data Structures & Algorithms (C++) and DBMS (2023)
- AWS Cloud with AI Workshop (2023)
- Coordinator of BGMI Event at Annual Fest Pravah, SKIT Jaipur (2023)
- Volunteer at ICI Fest, SKIT Jaipur (2023)

MAJOR PROJECTS:
1. BGMI Info Site - Gaming information platform
2. Alumni Association Platform - Connect alumni with current students
3. IPC Section ML System - Machine learning system for legal section suggestions
4. CI/CD Pipeline - DevOps automation project
5. Personal Portfolio - This current website
6. Weather Dashboard - Real-time weather application

MINI PROJECTS (12 total):
- Web scraping automation
- Email automation systems
- SMS sending applications
- Instagram posting automation
- WhatsApp messaging bots
- Various Python and JavaScript automation tasks

EXPERIENCE:
- Internships and project work with various technologies
- Real-world application development
- Team collaboration and leadership experience

When answering questions:
1. If asked about Mohit's portfolio, provide specific details from above
2. For general questions, use your knowledge but relate back to Mohit's expertise when relevant
3. Be helpful, professional, and engaging
4. If asked about contacting Mohit, provide the email and phone number above
5. Encourage visitors to explore different sections of the portfolio
`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get the generative model with proper configuration
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });

    // Create the prompt with context
    const prompt = `${portfolioContext}

User question: ${message}

Please provide a helpful response. If the question is about Mohit Sharma's portfolio, use the specific information provided above. For general questions, provide accurate information while relating it to Mohit's skills and experience when appropriate.`;

    console.log('Sending request to Gemini API...');
    
    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('Gemini API response received successfully');

    res.json({ 
      response: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      fallback: "I'm sorry, I'm having trouble connecting right now. Please try asking about Mohit's skills, projects, or experience, and I'll do my best to help!"
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Gemini chatbot API is running' });
});

app.listen(port, () => {
  console.log(`🤖 Gemini Chatbot API running on http://localhost:${port}`);
  console.log(`📡 Health check: http://localhost:${port}/api/health`);
});
