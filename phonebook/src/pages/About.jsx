import './About.css'

const About = () => {
  return (
    <div className="about">
      <h1>📖 About React Phonebook</h1>
      <p className="tagline">Crafted with love by the genius minds at PixelPals Inc. 🧠❤️</p>

      <div className="mission">
        <h3>🚀 Our Mission</h3>
        <p>
          To create the galaxy’s smartest phonebook that does more than store numbers — it connects hearts,
          sets reminders, and possibly makes coffee in future updates ☕.
        </p>
      </div>

      <div className="team">
        <h3>🧑‍💻 Meet the (Fictional) Team</h3>
        <ul>
          <li><strong>Alice Quantum</strong> – Lead Developer & AI Whisperer 🤖</li>
          <li><strong>Bob Syntax</strong> – UX Overlord & Dark Mode Advocate 🌙</li>
          <li><strong>Clara Byte</strong> – Contact Curator & Birthday Reminder Queen 🎉</li>
          <li><strong>Dave Render</strong> – Performance Guru & Emoji Strategist 📈</li>
        </ul>
      </div>

      <div className="future">
        <h3>🔮 Coming Soon</h3>
        <ul>
          <li>🧠 AI-based contact suggestions</li>
          <li>📱 Voice-activated calling (just yell their name)</li>
          <li>🎁 Gift reminders for birthdays</li>
          <li>🌐 Cloud sync with your imaginary spaceship</li>
        </ul>
      </div>
    </div>
  )
}

export default About
