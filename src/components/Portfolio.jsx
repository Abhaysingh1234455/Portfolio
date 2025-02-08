import './Portfolio.css'

const portfolioItems = [
  {
    id: 1,
    title: "Music Streaming Site",
    image: "https://uizard.io/static/70c3be21d781a37f2f00ec93fecb74a2/0cfa7/c087d6cc06e9aed564f7952ccb34c2c52add4f2d-1440x835.webp",
    category: "Web Design",
    github: "https://github.com/Abhaysingh1234455/Music-Streaming-site"
  },
  {
    id: 2,
    title: "Movie Recommendation Login",
    image: "https://cdn.houstonpublicmedia.org/wp-content/uploads/2023/06/26134528/Netflix-login-screen-capture-1000x496.jpg",
    category: "UI/UX Design",
    github:"https://github.com/Abhaysingh1234455/Movie-Recommendation-Login"
  },
  {
    id: 3,
    title: "Social Blog Post",
    image: "https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/13691038-5aa8-4672-9b95-348c0733cabc/2020/03/09/c4b8e41a-01f7-4690-98f5-69b6ad79386c/4693892a-fae0-4b7c-8b47-45c27212152e.png",
    category: "Web App",
    github:"https://github.com/Abhaysingh1234455/Blog-Site"
  },
  {
    id: 4,
    title: "Sales Analysis",
    image: "https://other-levels.com/cdn/shop/products/Dynamic_Sales_Analysis_Dashboard_and_action_plans_roadmap_status_excel_dashboards_template.png?v=1732556524",
    category: "Web Design",
    github:"https://github.com/Abhaysingh1234455/Sales-Analysis"
  },
  {
    id: 5,
    title: "Student Budget Tracker",
    image: "https://cdn.dribbble.com/userupload/10433083/file/original-8fe5f24518ec36ab2dc4ae3e41eb6f27.png?resize=2048x1432&vertical=center",
    category: "Web Design",
    github:""
  },
  {
    id: 6,
    title: "Portfolio",
    image: "/Screenshot 2025-02-05 at 2.18.13 PM.png",
    category: "Web Design",
    github:""
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio container" id="portfolio">
      <h2 className="section-title">
        My latest <span className="gradient-text">work</span>
      </h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
              <a href={item.github} target="_blank" rel="noopener noreferrer">
              <img src={item.image || "/placeholder.svg"} alt={item.title} />
              <div className="portfolio-item-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}