# 📚 *PrepEase*

PrepEase is an *AI-powered exam preparation platform* that helps students efficiently organize and understand their university study materials. It automatically extracts questions from uploaded notes or papers, classifies them by topic, and generates accurate answers -- all in one place.

---

## 💡 *Solution Overview*

Many students struggle to find topic-wise questions and reliable previous-year papers before university exams, spending hours browsing random sources.  
*PrepEase* addresses this by leveraging *Natural Language Processing (NLP)* and *AI models* to extract, organize, and answer questions directly from uploaded documents.

With PrepEase, students can:
- 📄 Upload handwritten or digital notes and papers.
- 🤖 Automatically extract and categorize questions by topic.
- 🧠 Receive AI-generated, context-aware answers.
- 📚 Access a library of previous-year papers and notes for self-study.

---

## 🚀 *Features*

### 1. 🗂️ Document Upload & Text Extraction
- Upload notes or question papers in *PDF, PNG, or JPG* formats.
- Uses *Tesseract OCR* for accurate text extraction.
- Cleans and preprocesses text before analysis.

### 2. 🤖 Question Detection & Topic Classification
- *BERT* identifies questions from extracted text.
- *Sentence-BERT* classifies questions topic-wise (e.g., Algorithms, DBMS, OS).
- Displays structured question sets for focused revision.

### 3. 🧩 AI-Powered Answer Generation
- Uses *RAG (Retrieval-Augmented Generation)* to generate context-based answers.
- Combines information retrieval and generation for high accuracy.

### 4. 📘 Notes & Previous Year Paper Repository
- Centralized collection of user-uploaded materials.
- Search and filter by *subject, **topic, or **exam year*.

### 5. 📊 Personalized Dashboard
- View uploaded files, extracted topics, and study recommendations.
- Track revision progress and maintain organized notes.

---

## 🛠️ *Tech Stack*

| Layer        | Technology                                        |
| ------------- | ------------------------------------------------ |
| 🌐 Frontend   | React.js, TailwindCSS                            |
| 🖥 Backend    | Java, Springboot                                  |
| 🧠 AI Models  | Tesseract OCR, BERT, Sentence-BERT, RAG          |
| 🗄 Database   | PostgreSQL & MongoDB                              |
| 🔐 Auth       | JWT Authentication                               |
| ☁️ Hosting    | Frontend: Vercel  <br> Backend: Render           |

---

⚠️ This is a personal project and is not open for external contributions at the moment.
