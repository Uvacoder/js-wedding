export default function Header({ title }) {
  return (
    <div className="flex items-center justify-between w-full px-3 py-4">
      <a href="/"><h1 className="text-2xl">{title}</h1></a>

      <div>
        <a href="/our-story">Our Story</a>
        <a href="/schedule">Schedule</a>
        <a href="/travel">Travel</a>
        <a href="/registry">Registry</a>
        <a href="/faqs">FAQs</a>
        <a href="/rsvp">RSVP</a>
      </div>
    </div>
  )
}
