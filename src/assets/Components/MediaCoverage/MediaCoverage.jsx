import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./media.css";

export default function Media() {
  const navigate = useNavigate();
  const videos = [
    {
      id: "P2XKB1z2zbs",
      title: "የኢትዮጵያን የውሃ ሀብት የሚያሳየው ዓውደ ርዕይ",
      // description: "Watch as we discuss the future of technology and our innovative solutions with the hosts of Tech Today.",
      date: "May 15, 2023"
    },
    {
      id: "4gX8WvRZ_K8",
      title: "የውሃ ሀብታችን ለብልፅግናችን አውደ ርዕይ ጉብኝት",
      // description: "Our CEO shares insights about company growth and industry trends in this exclusive interview.",
      date: "April 2, 2023"
    },
     {
      id: "_JPVTqV3_Mo",
      title: "ዜና ትግርኛ - ምሸት ሰዓት 1፡00 - 11 ሕዳር 2017 ዓ/ም | #Tigrai_Television | #ቴሌቪዥን_ትግራይ |",
      // description: "Full coverage of our latest product launch event with live reactions from attendees and experts.",
      date: " Nov 20, 2024"
    },
    {
      id: "9_Xg78Okk4k",
      title: "DW International ትግርኛ ዜና ሰዓት 06:30 ፣ 12 ሕዳር 2017 ዓ/ም\watch Live Streaming",
      // description: "Our CTO participates in a panel discussion about emerging technologies at the Global Tech Summit.",
      date: " Nov 21, 2024"
    },
    {
      id: "PLbFaNED8-A",
      title: "የማይጠጣ ውሃ የለም Etv | Ethiopia | News", 
      description: "በኢትዮጵያ ያለው የንፁህ ውሃ ተደራሽነት ብዙ ሊሰራበት የሚገባ ጉዳይ ነው። በተለይ ደግሞ በገጠር የሚኖሩ ወገኖቻችን ለዚህ ችግር በከፍተኛ ደረጃ የተጋለጡ ሲሆን፣ በውሃ ወለድ በሽታ ፈተና ውስጥ የሚገኙ ወገኖቻችንን ቤት ይቁጠረው። ይህን ችግር ለመፍታት በመንግሥት አቅም ብቻ የሚቻል አይደለም። ግለሰቦች፣ መንግሥታዊ ያልሆኑ ድርጅትች እና የግል ድርጅቶች መንግሥት ያልሸፈነውን ቦታ የመሸፈን የዜግነትም የሰብአዊነትም ኃላፊነት አለባቸው። ሃፍ ላኪና አስመጪ ድርጅት በዚህ ረገድ የድርሻውን ለመወጣት እየተንቀሳቀሰ ይገኛል። ምንም ዓይነት ኬሚካልም ሆነ ኤሌክትርክ የማይጠቀሙ የውሃ ማጣሪያዎችን ለህብረተሰቡ ለማቅረብ ከየሰራ ይገኛል። እነዚህ የውሃ ማጣሪያዎች ከወንዝ እየቀዳ ለሚጠጠጣው ማኅበረሰባችን ንፁህ ውሃ እንዲጠጡ ይረዳሉ።",
      date: "Sep 2, 2023 "
    }
  ];

  return (
    <div className="media-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </button>
      
      <div className="media-header">
        <h1>MEDIA COVERAGE</h1>
        <p className="subtitle">Featured appearances and interviews</p>
        <div className="header-accent"></div>
      </div>
      
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h2>{video.title}</h2>
              <p className="video-date">{video.date}</p>
              <p className="video-description">{video.description}</p>
              <a 
                href={`https://youtu.be/${video.id}`} 
                className="watch-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Full Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}