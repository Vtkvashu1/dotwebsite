
import React, { useState } from "react";
import "../../../styles/Gallery.css";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";
import img5 from "../../assets/image-5.jpg";
import img6 from "../../assets/image-6.jpg";
import img7 from "../../assets/image-7.jpg";
import img8 from "../../assets/image-8.jpg";
import img9 from "../../assets/image-9.jpg";
import img10 from "../../assets/image-10.jpg";
import img11 from "../../assets/image-11.jpg";
import img12 from "../../assets/image-12.jpg";
import img13 from "../../assets/image-13.jpg";
import img14 from "../../assets/image-14.jpg";
import img15 from "../../assets/image-15.jpg";
import img16 from "../../assets/image-16.jpg";
import img17 from "../../assets/image-17.jpg";
import img18 from "../../assets/image-18.jpg";
import img19 from "../../assets/image-19.jpg";
import img20 from "../../assets/image-20.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, alt: "Gallery Image 1", description: "This image captures a significant moment from our annual awards ceremony where students were recognized for their outstanding academic and extracurricular achievements." },
    { id: 2, src: img2, alt: "Gallery Image 2", description: "A glimpse into our interactive workshop where students actively engaged in team-based learning, fostering collaboration and innovative problem-solving skills." },
    { id: 3, src: img3, alt: "Gallery Image 3", description: "A powerful lecture delivered by our guest speaker, who shared valuable insights and experiences that left a lasting impact on our students, inspiring them to strive for excellence." },
    { id: 4, src: img4, alt: "Gallery Image 4", description: "Students enthusiastically participating in a hands-on science experiment, discovering new concepts and enhancing their practical understanding of theoretical knowledge." },
    { id: 5, src: img5, alt: "Gallery Image 5", description: "This photo showcases the vibrant atmosphere of our annual cultural festival, where students displayed their diverse talents in music, dance, and art, celebrating creativity and community spirit." },
    { id: 6, src: img6, alt: "Gallery Image 6", description: "Captured here is a heartwarming moment from our community outreach program, where students worked together to bring joy and learning to underprivileged children, embodying the spirit of compassion and service." },
    { id: 7, src: img7, alt: "Gallery Image 7", description: "An exhilarating sports event where students showcased their athletic skills and team spirit, fostering a sense of healthy competition and camaraderie." },
    { id: 8, src: img8, alt: "Gallery Image 8", description: "A snapshot of our innovative technology fair, where students presented their cutting-edge projects, demonstrating creativity and technical prowess." },
    { id: 9, src: img9, alt: "Gallery Image 9", description: "A serene moment captured during our nature retreat, where students bonded over outdoor activities, appreciating the beauty of the natural world." },
    { id: 10, src: img10, alt: "Gallery Image 10", description: "Students engaged in a lively debate competition, showcasing their critical thinking and public speaking skills on various thought-provoking topics." },
    { id: 11, src: img11, alt: "Gallery Image 11", description: "A memorable scene from our art exhibition, where students displayed their creative works, reflecting their unique perspectives and artistic talents." },
    { id: 12, src: img12, alt: "Gallery Image 12", description: "Our annual science fair highlighted here, where students showcased their innovative projects and experiments, fostering a spirit of inquiry and discovery." },
    { id: 13, src: img13, alt: "Gallery Image 13", description: "An engaging coding hackathon event, where students collaborated to develop software solutions, demonstrating teamwork and technical expertise." },
    { id: 14, src: img14, alt: "Gallery Image 14", description: "This image captures the excitement of our literary festival, where students participated in various events such as poetry recitation, storytelling, and book discussions." },
    { id: 15, src: img15, alt: "Gallery Image 15", description: "A snapshot from our leadership training camp, where students honed their leadership and team-building skills through various interactive activities." },
    { id: 16, src: img16, alt: "Gallery Image 16", description: "Students participating in an international cultural exchange program, embracing diversity and gaining a broader global perspective." },
    { id: 17, src: img17, alt: "Gallery Image 17", description: "Another moment from our international cultural exchange program, showcasing students’ learning experiences with diverse cultures." },
    { id: 18, src: img18, alt: "Gallery Image 18", description: "An inspiring scene from recuritment." },
    { id: 19, src: img19, alt: "Gallery Image 19", description: "An inspiring scene from recuritment " },
    { id: 20, src: img20, alt: "Gallery Image 20", description: "An inspiring scene from recuritment" }
  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Our Journey of Excellence</h2>
      <p className="gallery-subtitle">
        Take a look at the vibrant life of our institution, where every moment is a step towards excellence.
      </p>

      <div className="gallery-container">
        {images.map((image) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="modal-content"
          />
          <div className="caption">{selectedImage.description}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;


// import React, { useState } from "react";
// import "../../../styles/Gallery.css";
// import img1 from "../../assets/image-1.jpg";
// import img2 from "../../assets/image-2.jpg";
// import img3 from "../../assets/image-3.jpg";
// import img4 from "../../assets/image-4.jpg";
// import img5 from "../../assets/image-5.jpg";
// import img6 from "../../assets/image-6.jpg";
// import img7 from "../../assets/image-7.jpg";
// import img8 from "../../assets/image-8.jpg";
// import img9 from "../../assets/image-9.jpg";
// import img10 from "../../assets/image-10.jpg";
// import img11 from "../../assets/image-11.jpg";
// import img12 from "../../assets/image-12.jpg";
// import img13 from "../../assets/image-13.jpg";
// import img14 from "../../assets/image-14.jpg";
// import img15 from "../../assets/image-15.jpg";
// import img16 from "../../assets/image-16.jpg";
// import img17 from "../../assets/image-17.jpg";
// import img18 from "../../assets/image-18.jpg";
// import img19 from "../../assets/image-19.jpg";
// import img20 from "../../assets/image-20.jpg";

// const Gallery = () => {
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [lightboxImage, setLightboxImage] = useState(null);

//   const images = [
//     { 
//       id: 1, 
//       src: img1, 
//       alt: "Awards Ceremony", 
//       title: "Awards Ceremony",
//       category: "🏆 Achievement",
//       description: "Outstanding academic achievements recognized during our annual awards ceremony."
//     },
//     { 
//       id: 2, 
//       src: img2, 
//       alt: "Interactive Workshop", 
//       title: "Interactive Workshop",
//       category: "🔬 Learning",
//       description: "Team-based learning fostering collaboration and innovation."
//     },
//     { 
//       id: 3, 
//       src: img3, 
//       alt: "Guest Speaker", 
//       title: "Guest Speaker Event",
//       category: "📚 Seminar",
//       description: "Inspiring lectures from industry leaders and experts."
//     },
//     { 
//       id: 4, 
//       src: img4, 
//       alt: "Science Lab", 
//       title: "Science Experiment",
//       category: "🔬 Learning",
//       description: "Hands-on practical learning enhancing theoretical knowledge."
//     },
//     { 
//       id: 5, 
//       src: img5, 
//       alt: "Cultural Festival", 
//       title: "Cultural Festival",
//       category: "🎨 Culture",
//       description: "Celebrating diversity through music, dance, and art."
//     },
//     { 
//       id: 6, 
//       src: img6, 
//       alt: "Community Service", 
//       title: "Community Outreach",
//       category: "🤝 Service",
//       description: "Students making positive impact in the community."
//     },
//     { 
//       id: 7, 
//       src: img7, 
//       alt: "Sports Event", 
//       title: "Sports Championship",
//       category: "⚽ Sports",
//       description: "Athletic excellence and healthy competition."
//     },
//     { 
//       id: 8, 
//       src: img8, 
//       alt: "Tech Fair", 
//       title: "Technology Fair",
//       category: "💻 Innovation",
//       description: "Cutting-edge projects showcasing technical skills."
//     },
//     { 
//       id: 9, 
//       src: img9, 
//       alt: "Nature Trip", 
//       title: "Nature Retreat",
//       category: "🌲 Adventure",
//       description: "Outdoor activities connecting with nature."
//     },
//     { 
//       id: 10, 
//       src: img10, 
//       alt: "Debate", 
//       title: "Debate Competition",
//       category: "🎤 Competition",
//       description: "Critical thinking through engaging debates."
//     },
//     { 
//       id: 11, 
//       src: img11, 
//       alt: "Art Show", 
//       title: "Art Exhibition",
//       category: "🎨 Culture",
//       description: "Student creativity on full display."
//     },
//     { 
//       id: 12, 
//       src: img12, 
//       alt: "Science Fair", 
//       title: "Annual Science Fair",
//       category: "💻 Innovation",
//       description: "Scientific inquiry and discovery."
//     },
//     { 
//       id: 13, 
//       src: img13, 
//       alt: "Hackathon", 
//       title: "Coding Hackathon",
//       category: "💻 Innovation",
//       description: "Collaborative problem-solving through code."
//     },
//     { 
//       id: 14, 
//       src: img14, 
//       alt: "Literary Event", 
//       title: "Literary Festival",
//       category: "📚 Seminar",
//       description: "Celebrating literature and storytelling."
//     },
//     { 
//       id: 15, 
//       src: img15, 
//       alt: "Leadership", 
//       title: "Leadership Camp",
//       category: "🔬 Learning",
//       description: "Building tomorrow's leaders today."
//     },
//     { 
//       id: 16, 
//       src: img16, 
//       alt: "Exchange Program", 
//       title: "Cultural Exchange",
//       category: "🌍 Global",
//       description: "International learning experiences."
//     },
//     { 
//       id: 17, 
//       src: img17, 
//       alt: "Global Learning", 
//       title: "International Program",
//       category: "🌍 Global",
//       description: "Embracing diverse cultures worldwide."
//     },
//     { 
//       id: 18, 
//       src: img18, 
//       alt: "Career Fair", 
//       title: "Campus Recruitment",
//       category: "💼 Career",
//       description: "Professional opportunities for students."
//     },
//     { 
//       id: 19, 
//       src: img19, 
//       alt: "Career Dev", 
//       title: "Career Development",
//       category: "💼 Career",
//       description: "Preparing for professional success."
//     },
//     { 
//       id: 20, 
//       src: img20, 
//       alt: "Industry Connect", 
//       title: "Industry Connections",
//       category: "💼 Career",
//       description: "Bridging education and industry."
//     }
//   ];

//   const toggleFlip = (id) => {
//     setFlippedCards(prev => 
//       prev.includes(id) 
//         ? prev.filter(cardId => cardId !== id)
//         : [...prev, id]
//     );
//   };

//   const openLightbox = (image) => {
//     setLightboxImage(image);
//   };

//   return (
//     <div className="gallery-section">
//       <div className="animated-bg">
//         <div className="bubble bubble-1"></div>
//         <div className="bubble bubble-2"></div>
//         <div className="bubble bubble-3"></div>
//       </div>

//       <div className="gallery-header-wrapper">
//         <span className="header-badge">📸 Gallery</span>
//         <h1 className="gallery-main-title">Moments That Matter</h1>
//         <p className="gallery-main-subtitle">
//           Flip the cards to discover the stories behind every moment
//         </p>
//       </div>

//       <div className="bento-grid">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className={`bento-card ${flippedCards.includes(image.id) ? 'is-flipped' : ''}`}
//             onClick={() => toggleFlip(image.id)}
//           >
//             <div className="card-inner">
//               {/* Front Side */}
//               <div className="card-front">
//                 <img src={image.src} alt={image.alt} className="card-image" />
//                 <div className="card-shine"></div>
//                 <div className="card-front-overlay">
//                   <span className="flip-hint">Tap to flip</span>
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div className="card-back">
//                 <div className="card-back-content">
//                   <span className="card-category">{image.category}</span>
//                   <h3 className="card-title">{image.title}</h3>
//                   <p className="card-description">{image.description}</p>
//                   <button 
//                     className="view-full-btn"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openLightbox(image);
//                     }}
//                   >
//                     View Full Image
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {lightboxImage && (
//         <div className="lightbox" onClick={() => setLightboxImage(null)}>
//           <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
//               ✕
//             </button>
//             <img src={lightboxImage.src} alt={lightboxImage.alt} className="lightbox-image" />
//             <div className="lightbox-info">
//               <span className="lightbox-category">{lightboxImage.category}</span>
//               <h2 className="lightbox-title">{lightboxImage.title}</h2>
//               <p className="lightbox-description">{lightboxImage.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
