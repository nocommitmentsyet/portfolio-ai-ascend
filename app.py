
import streamlit as st
from PIL import Image
import base64
import time

# Set page configuration
st.set_page_config(
    page_title="PortfolioAI - Your All In One Job Toolkit",
    page_icon="✨",
    layout="wide"
)

# Custom CSS for styling
st.markdown("""
<style>
    /* General Styling */
    .stApp {
        font-family: 'Inter', sans-serif;
    }
    h1, h2, h3, h4, h5 {
        font-family: 'Poppins', sans-serif;
    }
    .main-title {
        background: linear-gradient(90deg, #8B5CF6, #1EAEDB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    .subtitle {
        font-size: 1.2rem;
        color: #4B5563;
        margin-bottom: 2rem;
    }
    .purple-button {
        background-color: #9b87f5;
        color: white;
        border-radius: 0.375rem;
        padding: 0.5rem 1rem;
        font-weight: 500;
    }
    .white-button {
        background-color: white;
        color: #9b87f5;
        border: 1px solid #9b87f5;
        border-radius: 0.375rem;
        padding: 0.5rem 1rem;
        font-weight: 500;
    }
    .feature-card {
        background-color: white;
        border-radius: 0.5rem;
        border: 1px solid #F3F4F6;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
    }
    .testimonial-card {
        background: linear-gradient(to bottom right, white, #E5DEFF);
        border-radius: 0.5rem;
        border: none;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    footer {
        padding: 2rem 0;
        background-color: #F9FAFB;
        border-top: 1px solid #E5E7EB;
        text-align: center;
    }
    /* Cover Letter Writer Styling */
    .stTextArea textarea {
        height: 150px;
    }
    .output-area {
        height: 400px;
        font-family: sans-serif;
        line-height: 1.5;
        padding: 1rem;
        border: 1px solid #E5E7EB;
        border-radius: 0.375rem;
    }
</style>
""", unsafe_allow_html=True)

# Navigation options
pages = {
    "Home": "home",
    "Cover Letter Writer": "cover_letter_writer",
    "Portfolio Builder": "portfolio_builder",
    "Resume Generator": "resume_generator",
    "Mock Interview": "mock_interview"
}

# Sidebar navigation
st.sidebar.title("PortfolioAI")
st.sidebar.markdown("---")
selected_page = st.sidebar.radio("Navigate to", list(pages.keys()))

# Function to generate a placeholder cover letter
def generate_cover_letter(job_description, resume, tone):
    # Simulating API call with delay
    with st.spinner('Generating your cover letter...'):
        time.sleep(2)
    
    # Placeholder cover letter content based on tone
    if tone == "Formal":
        return f"""Dear Hiring Manager,

I am writing to express my interest in the position advertised. With my background and experience, I believe I would be an excellent fit for this role.

Based on the job description, I understand you're looking for someone with expertise in {job_description.split(' ')[:3]}...

My experience includes {resume.split(' ')[:5]}...

Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.

Sincerely,
Your Name"""
    elif tone == "Friendly":
        return f"""Hi there,

I'm excited to apply for this role! When I saw the position posted, I knew it would be a great match for my skills and interests.

I noticed you're looking for someone who can {job_description.split(' ')[:4]}...

During my career, I've {resume.split(' ')[:6]}...

I'd love to chat more about how my background could benefit your team!

Warmly,
Your Name"""
    elif tone == "Bold":
        return f"""To whom it may concern,

I'm the candidate you've been searching for.

Your job posting mentions {job_description.split(' ')[:3]}... I don't just meet these requirements — I exceed them.

My track record speaks for itself: {resume.split(' ')[:5]}...

I'm ready to bring these results to your organization. Let's talk soon.

Confidently,
Your Name"""
    else:  # Conversational
        return f"""Hello!

I came across your job posting and thought, "Wow, this is exactly what I've been looking for!"

From what I understand, you need someone who can handle {job_description.split(' ')[:4]}...

A bit about me: {resume.split(' ')[:7]}...

I'd really enjoy talking more about this opportunity when you have time!

Cheers,
Your Name"""

# Function to download text as a file
def get_download_link(text, filename, link_text):
    b64 = base64.b64encode(text.encode()).decode()
    href = f'<a href="data:file/txt;base64,{b64}" download="{filename}">{link_text}</a>'
    return href

# Home page content
def show_home():
    # Hero section
    col1, col2, col3 = st.columns([1, 6, 1])
    with col2:
        st.markdown('<h1 class="main-title">Your All In One Job Toolkit</h1>', unsafe_allow_html=True)
        st.markdown('<p class="subtitle">Automated portfolios, résumés, and interview prep to make your job search less stressful and more successful.</p>', unsafe_allow_html=True)
        
        col_btn1, col_btn2, col_space = st.columns([1.5, 1.5, 3])
        with col_btn1:
            st.button("Get Started", type="primary", use_container_width=True)
        with col_btn2:
            st.button("Learn More", type="secondary", use_container_width=True)
        
        st.markdown("✨ No more staring at blank pages. Let us do the heavy lifting.")
    
    # Features section
    st.markdown("---")
    st.markdown('<h2 style="text-align: center; margin-top: 2rem;">All-in-One Job Search Assistant</h2>', unsafe_allow_html=True)
    st.markdown('<p style="text-align: center; margin-bottom: 2rem;">Everything you need to stand out in the job market, powered by AI.</p>', unsafe_allow_html=True)
    
    # Feature cards in a grid
    features = [
        {"title": "AI Portfolio Builder", "description": "Convert your resume or LinkedIn profile into a stunning portfolio website in minutes.", "icon": "✨"},
        {"title": "ATS-Friendly Resume", "description": "Generate or optimize resumes that pass through Applicant Tracking Systems with ease.", "icon": "📄"},
        {"title": "Cover Letter Writer", "description": "Create personalized cover letters for each job application with one click.", "icon": "✉️"},
        {"title": "Mock Interview Coach", "description": "Practice with AI-powered interview simulations and get real-time feedback.", "icon": "🎯"},
        {"title": "Career Coaching", "description": "Receive personalized advice to bridge skill gaps and boost your employability.", "icon": "🚀"},
        {"title": "Smart Job Alerts", "description": "Get notified about relevant job opportunities matching your skills and preferences.", "icon": "🔔"}
    ]
    
    cols = st.columns(3)
    for i, feature in enumerate(features):
        with cols[i % 3]:
            st.markdown(f"""
            <div class="feature-card">
                <div style="font-size: 2rem; margin-bottom: 1rem;">{feature["icon"]}</div>
                <h3>{feature["title"]}</h3>
                <p>{feature["description"]}</p>
            </div>
            """, unsafe_allow_html=True)
            st.write("")  # Add some space between rows
    
    # Testimonials section
    st.markdown("---")
    st.markdown('<h2 style="text-align: center; margin-top: 2rem;">Success Stories</h2>', unsafe_allow_html=True)
    st.markdown('<p style="text-align: center; margin-bottom: 2rem;">See how PortfolioAI has helped job seekers like you land their dream roles.</p>', unsafe_allow_html=True)
    
    testimonials = [
        {"quote": "The portfolio builder saved me hours of work and helped me land interviews at three companies within a week!", "name": "Alex Chen", "position": "UX Designer"},
        {"quote": "As a bootcamp graduate, I was struggling to showcase my projects professionally. PortfolioAI solved that problem instantly.", "name": "Maria Rodriguez", "position": "Junior Developer"},
        {"quote": "The interview coaching feature gave me confidence I never had before. I felt so prepared for my job interviews.", "name": "James Wilson", "position": "Data Analyst"}
    ]
    
    cols = st.columns(3)
    for i, testimonial in enumerate(testimonials):
        with cols[i]:
            st.markdown(f"""
            <div class="testimonial-card">
                <div style="margin-bottom: 1rem; color: #9b87f5;">❝</div>
                <p style="flex-grow: 1;">{testimonial["quote"]}</p>
                <div style="margin-top: 1.5rem;">
                    <div style="font-weight: 500;">{testimonial["name"]}</div>
                    <div style="font-size: 0.875rem; color: #6B7280;">{testimonial["position"]}</div>
                </div>
            </div>
            """, unsafe_allow_html=True)
    
    # Call to action section
    st.markdown("---")
    col1, col2, col3 = st.columns([1, 6, 1])
    with col2:
        st.markdown('<h2 style="text-align: center; margin-top: 2rem;">Ready to Transform Your Job Search?</h2>', unsafe_allow_html=True)
        st.markdown('<p style="text-align: center; margin-bottom: 2rem;">Join thousands of job seekers who are landing interviews faster with less stress.</p>', unsafe_allow_html=True)
        
        col_btn1, col_btn2, col_space = st.columns([1.5, 1.5, 3])
        with col_btn1:
            st.button("Get Started for Free", type="primary", use_container_width=True)
        with col_btn2:
            st.button("Schedule Demo", type="secondary", use_container_width=True)
            
        st.markdown('<p style="text-align: center; font-size: 0.875rem; color: #6B7280; margin-top: 1rem;">No credit card required. Start building your professional presence today.</p>', unsafe_allow_html=True)

# Cover Letter Writer page
def show_cover_letter_writer():
    st.markdown('<h1 class="main-title">Cover Letter Writer</h1>', unsafe_allow_html=True)
    st.markdown('<p class="subtitle">Generate a tailored cover letter that matches the job description in seconds.</p>', unsafe_allow_html=True)
    
    # Input form
    with st.container():
        st.subheader("Generate Your Cover Letter")
        st.write("Paste your job description and resume below to get started.")
        
        job_description = st.text_area("Job Description", placeholder="Paste job description here...", help="The more details you provide, the more tailored your cover letter will be.")
        resume = st.text_area("Your Resume", placeholder="Paste your resume or LinkedIn text here...", help="Include relevant experience and skills for the best results.")
        
        tone = st.selectbox(
            "Select Tone",
            ["Select a tone...", "Formal", "Friendly", "Bold", "Conversational"],
            help="Choose how you want your cover letter to sound."
        )
        
        # Generate button
        generate_button = st.button(
            "Generate Cover Letter",
            type="primary",
            disabled=(not job_description or not resume or tone == "Select a tone..."),
            use_container_width=True
        )
    
    # Cover letter output
    if generate_button and job_description and resume and tone != "Select a tone...":
        cover_letter = generate_cover_letter(job_description, resume, tone)
        
        st.subheader("Your Cover Letter")
        st.write("Edit your cover letter below before downloading.")
        
        edited_cover_letter = st.text_area("", value=cover_letter, height=400, label_visibility="collapsed")
        
        st.markdown(
            get_download_link(edited_cover_letter, "cover_letter.txt", "Download Cover Letter"),
            unsafe_allow_html=True
        )
        st.caption("In a full implementation, this would download a .docx file")

# Placeholder pages
def show_portfolio_builder():
    st.markdown('<h1 class="main-title">Portfolio Builder</h1>', unsafe_allow_html=True)
    st.info("This feature is coming soon. Check back later!")

def show_resume_generator():
    st.markdown('<h1 class="main-title">Resume Generator</h1>', unsafe_allow_html=True)
    st.info("This feature is coming soon. Check back later!")

def show_mock_interview():
    st.markdown('<h1 class="main-title">Mock Interview Coach</h1>', unsafe_allow_html=True)
    st.info("This feature is coming soon. Check back later!")

# Display the selected page
if pages[selected_page] == "home":
    show_home()
elif pages[selected_page] == "cover_letter_writer":
    show_cover_letter_writer()
elif pages[selected_page] == "portfolio_builder":
    show_portfolio_builder()
elif pages[selected_page] == "resume_generator":
    show_resume_generator()
elif pages[selected_page] == "mock_interview":
    show_mock_interview()

# Footer
st.markdown("---")
st.markdown("""
<footer>
    <div>© 2025 PortfolioAI. All rights reserved.</div>
</footer>
""", unsafe_allow_html=True)
