<template>
  <div class="chatbot" :class="{ open: isOpen }">
    <!-- Toggle Button -->
    <button class="chatbot-toggle" @click="isOpen = !isOpen" :title="isOpen ? 'Close AI' : 'Open AI Assistant'">
      <span class="toggle-icon">{{ isOpen ? '✕' : '🤖' }}</span>
      <span class="toggle-label" v-if="!isOpen">AI Assistant</span>
    </button>

    <!-- Panel -->
    <div class="chatbot-panel" v-show="isOpen">
      <div class="chatbot-header">
        <div class="header-icon">🤖</div>
        <div>
          <div class="header-title">AI ASSISTANT</div>
          <div class="header-sub">Ask about Prejith's portfolio</div>
        </div>
      </div>

      <div class="chatbot-messages" ref="messagesEl">
        <div v-for="(msg, i) in messages" :key="i"
             class="message" :class="msg.role">
          <div class="msg-bubble">{{ msg.text }}</div>
        </div>
      </div>

      <div class="chatbot-input">
        <input
          v-model="inputText"
          @keydown.enter="send"
          placeholder="Ask me anything..."
          :disabled="thinking"
        />
        <button @click="send" :disabled="thinking">
          {{ thinking ? '...' : '➤' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps({ resume: { type: Object, required: true } });

const isOpen = ref(false);
const inputText = ref('');
const thinking = ref(false);
const messagesEl = ref(null);
const messages = ref([
  { role: 'bot', text: `Hi! I'm AIDEN — your AI guide to ${props.resume.name}'s portfolio. Ask me about skills, projects, experience, or contact info!` }
]);

function send() {
  const q = inputText.value.trim();
  if (!q) return;
  messages.value.push({ role: 'user', text: q });
  inputText.value = '';
  thinking.value = true;
  setTimeout(() => {
    messages.value.push({ role: 'bot', text: answer(q) });
    thinking.value = false;
    nextTick(() => {
      if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
    });
  }, 600);
}

function answer(q) {
  const ql = q.toLowerCase();
  const r = props.resume;

  if (ql.match(/name|who|call/)) return `${r.name} is a ${r.title} with ${r.summary}`;
  if (ql.match(/contact|email|phone|reach/)) return `📧 ${r.contact.email}\n📞 ${r.contact.phone}\n🔗 ${r.contact.linkedin}`;
  if (ql.match(/skill|tech|stack|know|use/)) return `🛠 Top skills: ${r.skills.slice(0, 5).map(s => `${s.name} (${s.level}%)`).join(', ')} and more.`;
  if (ql.match(/project/)) return `💡 Notable projects: ${r.projects.map(p => p.name).join(', ')}. Walk to the PROJECTS zone for details!`;
  if (ql.match(/experience|work|job|company/)) return r.experience.map(e => `🏢 ${e.title} @ ${e.company} (${e.period})`).join('\n');
  if (ql.match(/education|degree|college|university|study/)) return r.education.map(e => `🎓 ${e.degree} — ${e.institution} (${e.period})`).join('\n');
  if (ql.match(/flutter|dart/)) return `Flutter is ${r.name}'s primary skill at 95%! They've built ${r.projects.length}+ apps using Flutter and Dart.`;
  if (ql.match(/ai|openai|machine|ml/)) return `${r.name} has integrated OpenAI API into products like OhYes AI, and has machine learning skills at 70%.`;
  if (ql.match(/navigate|move|walk|wasd|control/)) return `🎮 Click the 3D world first, then use WASD to move and mouse to look around. Walk into glowing zones to see portfolio sections!`;
  if (ql.match(/hello|hi|hey/)) return `Hello! Great to meet you! Ask me anything about ${r.name}'s work. 🚀`;
  if (ql.match(/best|strong|top/)) return `${r.name}'s strongest skills are Flutter (95%), Dart (90%), and BLoC architecture. 4+ years of mobile excellence!`;
  return `I can answer questions about ${r.name}'s skills, projects, experience, education, and contact info. Try asking about any of those! 🤖`;
}
</script>

<style scoped>
.chatbot {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 500;
  font-family: 'Courier New', monospace;
}

.chatbot-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #001a33, #003366);
  border: 1px solid #00ccff;
  color: #00ccff;
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(0, 204, 255, 0.3);
  transition: all 0.3s;
}
.chatbot-toggle:hover {
  box-shadow: 0 0 30px rgba(0, 204, 255, 0.6);
  transform: translateY(-2px);
}
.toggle-icon { font-size: 1.1rem; }

.chatbot-panel {
  position: absolute;
  bottom: 4rem;
  right: 0;
  width: 340px;
  background: rgba(0, 10, 25, 0.97);
  border: 1px solid #00ccff;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(0, 204, 255, 0.25), inset 0 0 40px rgba(0, 10, 25, 0.8);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.chatbot-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(0, 204, 255, 0.08);
  border-bottom: 1px solid rgba(0, 204, 255, 0.3);
}
.header-icon { font-size: 1.8rem; }
.header-title { color: #00ccff; font-weight: bold; font-size: 0.85rem; letter-spacing: 2px; }
.header-sub { color: #5599bb; font-size: 0.72rem; margin-top: 2px; }

.chatbot-messages {
  height: 280px;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.chatbot-messages::-webkit-scrollbar { width: 4px; }
.chatbot-messages::-webkit-scrollbar-track { background: #000a1a; }
.chatbot-messages::-webkit-scrollbar-thumb { background: #00ccff44; border-radius: 4px; }

.message { display: flex; }
.message.bot { justify-content: flex-start; }
.message.user { justify-content: flex-end; }

.msg-bubble {
  max-width: 85%;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  font-size: 0.8rem;
  line-height: 1.5;
  white-space: pre-wrap;
}
.bot .msg-bubble {
  background: rgba(0, 204, 255, 0.08);
  border: 1px solid rgba(0, 204, 255, 0.2);
  color: #aaddee;
}
.user .msg-bubble {
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  color: #00ff88;
}

.chatbot-input {
  display: flex;
  border-top: 1px solid rgba(0, 204, 255, 0.2);
}
.chatbot-input input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #00ccff;
  padding: 0.8rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
}
.chatbot-input input::placeholder { color: #334455; }
.chatbot-input button {
  background: rgba(0, 204, 255, 0.1);
  border: none;
  border-left: 1px solid rgba(0, 204, 255, 0.2);
  color: #00ccff;
  padding: 0 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.chatbot-input button:hover { background: rgba(0, 204, 255, 0.2); }
.chatbot-input button:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
