import './Home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Finally, a contact app that just works! Simple and efficient.',
    author: 'Alex R.'
  },
  {
    quote: 'This phonebook helped me stay organized for my freelancing clients.',
    author: 'Priya M.'
  },
  {
    quote: 'Way better than digging through my phone contacts.',
    author: 'Jamie T.'
  },
  {
    quote: 'Clean UI, fast performance, and I love the birthday reminders!',
    author: 'Samantha L.'
  }
]

const Home = () => {
  return (
    <div className="home">
      <h1>📱 React Phonebook</h1>
      <p className="tagline">Smarter. Faster. More Connected.</p>

      <div className="features-section">
  <h2 className="features-title">🚀 Powerful Features</h2>
  <div className="features">
    <div className="feature">
      <h3>👥 Manage Contacts</h3>
      <p>Add, update, and delete contact info with just a few clicks.</p>
    </div>
    <div className="feature">
      <h3>✏️ Update Existing</h3>
      <p>Edit saved contacts easily when numbers change or typos occur.</p>
    </div>
    <div className="feature">
      <h3>🔍 Smart Filtering</h3>
      <p>Instantly search your contact list in real time.</p>
    </div>
    <div className="feature">
      <h3>💾 Auto Save</h3>
      <p>Your contacts are safely stored in localStorage automatically.</p>
    </div>
    <div className="feature">
      <h3>🚀 Lightning Fast</h3>
      <p>Built with React for speed, simplicity, and reliability.</p>
    </div>
    <div className="feature">
  <h3>🧠 Smart Suggestions</h3>
  <p>Our system learns your frequent contacts and suggests updates or favorites automatically.</p>
</div>

  </div>
</div>


      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link to="/contacts" className="cta-button">
          📖 View My Contacts
        </Link>
      </motion.div>

      <motion.div
        className="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>💬 What Our Users Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div
              className="testimonial-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="quote">"{t.quote}"</p>
              <p className="author">– {t.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="why-choose-us">
        <h2>✨ Why Choose React Phonebook?</h2>
        <div className="reasons">
          <div className="reason">
            <span>⚡</span>
            <p>Instant updates without page reloads.</p>
          </div>
          <div className="reason">
            <span>🔒</span>
            <p>Private and secure — nothing is shared online.</p>
          </div>
          <div className="reason">
            <span>🖥️</span>
            <p>Responsive UI works beautifully on all devices.</p>
          </div>
          <div className="reason">
            <span>🎯</span>
            <p>Focused on just what you need — no clutter.</p>
          </div>
          <div className="reason">
            <span>📝</span>
            <p>Update contacts easily without duplicates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
