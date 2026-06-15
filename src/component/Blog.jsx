import "../assets/Style/Blog.css"





const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Cozy Fireplaces to Take the Chill",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Which Sofa Style is Best for You?",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Bring a Little Joy to Your Days With These 14 Items",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk.",
  },
];
const bl = [
  {
    id: 1,
    image:
      "https://miniture-demo.myshopify.com/cdn/shop/articles/blog-05_d45ac423-63fe-4576-ace7-509091b25cb4.jpg?v=1777045230&width=720",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Space-saving chairs",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
  },
  {
    id: 2,
    image:
      "https://miniture-demo.myshopify.com/cdn/shop/articles/blog-14_6b78163b-6e46-4058-a3d6-2d4c35ef8940.jpg?v=1777045796&width=720",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Furniture for a Sunny Breakfast",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
  },
  {
    id: 3,
    image:
      "https://miniture-demo.myshopify.com/cdn/shop/articles/blog-06_507a105f-68b1-4330-b531-a1c41481ac0d.jpg?v=1777045293&width=720",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Storage for almost everything",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
  },
];
const blue = [
  {
    id: 1,
    image:
      "https://miniture-demo.myshopify.com/cdn/shop/articles/blog-12_a943c8a3-694f-488d-b028-63350a6d2b5d.jpg?v=1777045670&width=720",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Performance Upholstery Fabrics",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
  },
  {
    id: 2,
    image:
      "https://miniture-demo.myshopify.com/cdn/shop/articles/blog-04_ff5dd906-dbdf-43a9-9927-b90875d4d826.jpg?v=1777045168&width=720",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "Tables and desks for an easier life",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk.",
  },
  {
    id: 3,
    image:
      "",
    date: "October 24, 2023",
    comments: "0 comments",
    title: "6 Tips to Spice Up a Neutral Color",
    description:
      "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
  },
];


function Blog() {
  return (

    <div className="blog-page">
      <h2 className="blog_head">Furniture</h2>
      <div>
        <div className="blog_buttons">
          <button className="active">All</button>
          <button>clean</button>
          <button>creative</button>
          <button>design</button>
          <button>furniture</button>
          <button>post</button>
        </div>
              
      </div>
    <section className="blog-section">
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />

            <div className="blog-meta">
              <span>{blog.date}</span>
              <span>|</span>
              <span>{blog.comments}</span>
            </div>

            <h2>{blog.title}</h2>

            <p>{blog.description}</p>

            <button className="read-btn">
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="blog-section">
      <div className="blog-container">
        {bl.map((bl) => (
          <div className="blog-card" key={bl.id}>
            <img
              src={bl.image}
              alt={bl.title}
              className="blog-image"
            />

            <div className="blog-meta">
              <span>{bl.date}</span>
              <span>|</span>
              <span>{bl.comments}</span>
            </div>

            <h2>{bl.title}</h2>

            <p>{bl.description}</p>

            <button className="read-btn">
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="blog-section">
      <div className="blog-container">
        {blogs.map((blue) => (
          <div className="blog-card" key={blue.id}>
            <img
              src={blue.image}
              alt={blue.title}
              className="blog-image"
            />

            <div className="blog-meta">
              <span>{blue.date}</span>
              <span>|</span>
              <span>{blue.comments}</span>
            </div>

            <h2>{blue.title}</h2>

            <p>{blue.description}</p>

            <button className="read-btn">
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
  


         
    </div>
  );
}
export default Blog