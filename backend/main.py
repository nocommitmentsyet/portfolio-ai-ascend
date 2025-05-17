from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os
import tempfile
from docx import Document

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Cover Letter Generator API",
    description="AI-powered cover letter generation using Groq API",
    version="1.0.0",
)

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Initialize Groq client
try:
    client = Groq(api_key=os.getenv("GROQ_API_KEY"))
except Exception as e:
    print(f"Error initializing Groq client: {e}")
    raise


# Define request model
class CoverLetterRequest(BaseModel):
    resume_summary: str
    job_description: str
    tone: str


@app.post("/generate-cover-letter")
async def generate_cover_letter(request: CoverLetterRequest):
    try:
        # Construct the prompt for the AI
        prompt = f"""Generate a professional cover letter based on the following information:

Resume Summary:
{request.resume_summary}

Job Description:
{request.job_description}

Tone: {request.tone}

Please write a compelling cover letter that highlights relevant experience and skills while maintaining the specified tone."""

        # Make API call to Groq
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are a professional cover letter writer.",
                },
                {"role": "user", "content": prompt},
            ],
            temperature=0.7,
            max_tokens=1000,
        )

        # Get the generated cover letter content
        cover_letter_content = completion.choices[0].message.content

        # Print the response for debugging
        print("Groq API Response:", cover_letter_content)

        # Create a new Document
        document = Document()
        document.add_paragraph(cover_letter_content)

        # Create a temporary file to save the document
        with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as tmp_file:
            document.save(tmp_file.name)
            temp_file_path = tmp_file.name

        # Return the file as a downloadable attachment
        return FileResponse(
            path=temp_file_path,
            filename="cover_letter.docx",
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        )

    except Exception as e:
        print(f"Error generating cover letter: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}
