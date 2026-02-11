<template>
  <div id="app">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>🚀 AI Website Builder</h1>
        <p class="subtitle">Create your custom website in minutes using AI</p>
      </div>

      <!-- Step 1: Form -->
      <div v-if="step === 'form'" class="form-section">
        <div class="form-group">
          <label>🔑 Your OpenAI API Key (Keep it secret!)</label>
          <input 
            v-model="apiKey" 
            type="password" 
            placeholder="sk-proj-..." 
            required
          />
          <small style="color: #999;">⚠️ Never share your API key publicly</small>
        </div>

        <div class="form-group">
          <label>Business/Website Name</label>
          <input v-model="formData.businessName" placeholder="e.g., My Awesome Store" />
        </div>

        <div class="form-group">
          <label>What type of website?</label>
          <input v-model="formData.businessType" placeholder="e.g., Online Store, Portfolio, Blog" />
        </div>

        <div class="form-group">
          <label>Industry</label>
          <select v-model="formData.industry">
            <option value="">Select Industry</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Tech Startup">Tech Startup</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Consulting">Consulting</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Photography">Photography</option>
          </select>
        </div>

        <div class="form-group">
          <label>Preferred Color Scheme</label>
          <select v-model="formData.colorScheme">
            <option value="">Select Color Scheme</option>
            <option value="Blue & White">Blue & White</option>
            <option value="Dark Mode">Dark Mode</option>
            <option value="Green & Nature">Green & Nature</option>
            <option value="Purple & Gold">Purple & Gold</option>
            <option value="Red & Black">Red & Black</option>
            <option value="Pastel Colors">Pastel Colors</option>
          </select>
        </div>

        <div class="form-group">
          <label>Design Style</label>
          <select v-model="formData.style">
            <option value="">Select Style</option>
            <option value="Modern">Modern</option>
            <option value="Minimal">Minimal</option>
            <option value="Bold">Bold</option>
            <option value="Elegant">Elegant</option>
            <option value="Playful">Playful</option>
            <option value="Professional">Professional</option>
          </select>
        </div>

        <div class="form-group">
          <label>Sections to Include</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" value="Hero" v-model="formData.sections" /> Hero Section
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="About" v-model="formData.sections" /> About Us
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Services" v-model="formData.sections" /> Services
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Gallery" v-model="formData.sections" /> Gallery
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Testimonials" v-model="formData.sections" /> Testimonials
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="Contact" v-model="formData.sections" /> Contact
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>Additional Requirements (optional)</label>
          <textarea 
            v-model="formData.additional" 
            rows="3" 
            placeholder="Any specific features or content you want?"
          ></textarea>
        </div>

        <button @click="generateWebsite" class="btn-primary" :disabled="loading">
          <span v-if="!loading">✨ Generate My Website</span>
          <span v-else>⏳ Generating...</span>
        </button>
      </div>

      <!-- Step 2: Loading -->
      <div v-if="loading" class="loading-section">
        <div class="loader"></div>
        <h2>Creating your website...</h2>
        <p>AI is designing your perfect website. This may take 10-20 seconds.</p>
      </div>

      <!-- Step 3: Preview -->
      <div v-if="step === 'preview'" class="preview-section">
        <div class="preview-header">
          <h2>🎉 Your Website is Ready!</h2>
          <div class="button-group">
            <button @click="step = 'form'" class="btn-secondary">← Edit</button>
            <button @click="downloadWebsite" class="btn-primary">💾 Download HTML</button>
          </div>
        </div>
        
        <div class="preview-frame">
          <iframe :srcdoc="generatedHTML" frameborder="0"></iframe>
        </div>

        <div class="code-section">
          <h3>Generated Code:</h3>
          <pre><code>{{ generatedHTML }}</code></pre>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIWebsiteBuilder',
  data() {
    return {
      step: 'form',
      loading: false,
      apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
      formData: {
        businessName: '',
        businessType: '',
        industry: '',
        colorScheme: '',
        style: '',
        sections: [],
        additional: ''
      },
      generatedHTML: '',
      errorMessage: ''
    };
  },
  methods: {
    async generateWebsite() {
      // Validation
      if (!this.apiKey) {
        this.errorMessage = '⚠️ Please enter your OpenAI API key';
        setTimeout(() => this.errorMessage = '', 3000);
        return;
      }
      if (!this.formData.businessName || !this.formData.businessType) {
        this.errorMessage = '⚠️ Please fill in at least business name and type';
        setTimeout(() => this.errorMessage = '', 3000);
        return;
      }

      this.loading = true;
      this.errorMessage = '';

      // Create prompt for OpenAI
      const prompt = `Create a complete, professional, responsive HTML website with inline CSS for:

Business Name: ${this.formData.businessName}
Type: ${this.formData.businessType}
Industry: ${this.formData.industry}
Color Scheme: ${this.formData.colorScheme}
Style: ${this.formData.style}
Sections: ${this.formData.sections.join(', ')}
Additional: ${this.formData.additional}

Requirements:
- Complete HTML with embedded CSS (no external files)
- Modern, responsive design
- Beautiful gradients and animations
- Professional typography
- Include placeholder content relevant to the business
- Add smooth scroll effects
- Mobile-friendly
- Use the specified color scheme
- Make it visually stunning

Return ONLY the HTML code, nothing else.`;

      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4',
            messages: [
              {
                role: 'system',
                content: 'You are an expert web designer and developer. Create beautiful, modern, responsive websites with clean code.'
              },
              {
                role: 'user',
                content: prompt
              }
            ],
            temperature: 0.7,
            max_tokens: 4000
          })
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error?.message || 'Failed to generate website');
        }

        const data = await response.json();
        let html = data.choices[0].message.content;

        // Clean up the response (remove markdown code blocks if present)
        html = html.replace(/```html\n?/g, '').replace(/```\n?/g, '').trim();

        this.generatedHTML = html;
        this.step = 'preview';
      } catch (error) {
        console.error('Error:', error);
        this.errorMessage = `❌ Error: ${error.message}`;
      } finally {
        this.loading = false;
      }
    },

    downloadWebsite() {
      const blob = new Blob([this.generatedHTML], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.formData.businessName.replace(/\s+/g, '-').toLowerCase()}-website.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #667eea;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 1.1em;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
}

.checkbox-label input {
  width: auto;
  margin-right: 8px;
}

.btn-primary {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  padding: 10px 20px;
  background: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

.loading-section {
  text-align: center;
  padding: 60px 20px;
}

.loader {
  width: 60px;
  height: 60px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.preview-section {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.preview-frame {
  width: 100%;
  height: 600px;
  border: 3px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
}

.preview-frame iframe {
  width: 100%;
  height: 100%;
}

.code-section {
  margin-top: 30px;
}

.code-section h3 {
  margin-bottom: 10px;
  color: #333;
}

.code-section pre {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  max-height: 400px;
  overflow-y: auto;
}

.code-section code {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #333;
}

.error-message {
  margin-top: 20px;
  padding: 15px;
  background: #fee;
  color: #c33;
  border-radius: 8px;
  border-left: 4px solid #c33;
}

small {
  display: block;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  .preview-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .button-group {
    width: 100%;
  }
  
  .btn-secondary, .btn-primary {
    flex: 1;
  }
}
</style>