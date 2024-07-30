import React, { useState } from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);

  const getCardStyle = (isHovered) => ({
    width: '100%',
    margin: '1rem auto',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    transform: isHovered ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.4)' : '0 6px 12px rgba(0,0,0,0.2)',
    perspective: '1000px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
    background: isHovered ? 'linear-gradient(145deg, #444444, #111111)' : 'linear-gradient(145deg, #333333, #000000)',
    color: '#fff',
  });

  const getReflectionStyle = () => ({
    content: '""',
    position: 'absolute',
    bottom: '-100%',
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
    transform: 'scaleY(-1)',
    zIndex: -1,
  });

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleTouchStart = (index) => {
    setHoveredCard(index);
  };

  const handleTouchEnd = () => {
    setHoveredCard(null);
  };

  const teamMembers = [
    { name: 'Divyanshu', image: 'https://raw.githubusercontent.com/divyanshu0212/htmlbasic/main/Divyanshu.png', 
      github: 'https://github.com/Divyanshu-RS', email: 'mailto:divyanshuranjan.9999@gmail.com', linkedin: 'https://www.linkedin.com/in/divyanshu-ranjan-singh/',  title: 'Software Developer | Product Developer' 
    },
    { name: 'Aastha', image: 'https://raw.githubusercontent.com/divyanshu0212/htmlbasic/main/Aastha.png',
      github: 'https://github.com/aastha64', email: 'mailto:aasthatayal2002@gmail.com', linkedin: 'https://www.linkedin.com/in/aastha5464/', title: 'Software Developer | Front-End Developer '
    },
    { name: 'Merdul ' , image: 'https://raw.githubusercontent.com/divyanshu0212/htmlbasic/main/Mridul.png',
      github: 'https://github.com/Merdulsh2003', email: 'mailto:merdulsharma2003@gmail.com', linkedin: 'https://www.linkedin.com/in/merdul-sharma-962324292/',  title: 'Software Engineer | Data Analyst'
    },
    { name: 'Deepika', image: 'https://raw.githubusercontent.com/divyanshu0212/htmlbasic/main/Deepika.png', 
      github: 'https://github.com/Deepika5656tomar', email: 'mailto:tomardeepika2610@gmail.com', linkedin: 'https://www.linkedin.com/in/deepika-tomar-0ba3a8257/', title: 'UX Engineer | Technical Content Writer' 
    },
    { name: 'Aman', image: 'https://raw.githubusercontent.com/divyanshu0212/htmlbasic/main/Aman.png',
      github: 'https://github.com/Amanrathore004', email: 'mailto:amanaryaratansingh@gmail.com', linkedin: 'https://www.linkedin.com/in/aman-rathore-492537269/', title: 'ML Engineer | Data Analyst'
    },
    { name: 'Love', image: 'https://raw.githubusercontent.com/divyanshu0212/htmlbasic/main/Love.png', 
      github: 'https://github.com/myselflove', email: 'kloverohit7892@gmail.com', linkedin: 'https://www.linkedin.com/in/love-kumar666/', title: 'Software Engineer | Ui-Ux Designer'
    },
  ];

    return (
    <>
      <Navigation />
      <div
        className='container mt-3'
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, #434343 100%)',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={{ ...getCardStyle(false), transform: 'none', boxShadow: 'none' }}>
              <Card.Body>
                {/* New card added here */}
                <Card
                  style={getCardStyle(hoveredCard === 2)}
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onTouchStart={() => handleTouchStart(2)}
                  onTouchEnd={() => setHoveredCard(null)}
                >
                  <Card.Body>
                    <h5 className='text-center'><strong>Who We Are?</strong></h5><br />
                    <p>
                      Hope Wave No Poverty is a movement led by a group of enthusiastic people who think that working together can make a big difference, not merely an organization. With the unifying objective of ending poverty, our varied team brings together experts from a range of disciplines, including social work, economics, healthcare, and education.
                    </p>
                  </Card.Body>
                  <div style={getReflectionStyle()}></div>
                </Card>

                {/* Existing "Mind's behind" section */}
                <h4 className='text-center'><strong>Mind's behind Hope Wave No Poverty</strong></h4><br />
                <div className="row">
                  {teamMembers.map((member, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                      <Card
                        className="mt-3"
                        style={getCardStyle(hoveredTeamMember === index)}
                        onMouseEnter={() => setHoveredTeamMember(index)}
                        onMouseLeave={() => setHoveredTeamMember(null)}
                        onTouchStart={() => setHoveredTeamMember(index)}
                        onTouchEnd={() => setHoveredTeamMember(null)}
                      >
                        <Card.Img
                          variant="top"
                          src={member.image}
                          style={{
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            height: '500px',
                            objectFit: 'cover',
                            filter: hoveredTeamMember === index ? 'none' : 'grayscale(100%)',
                            transition: 'filter 0.3s ease-in-out'
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{member.name}</Card.Title>
                          {/* Conditionally render the title if it exists */}
                          {member.title && (
                            <p style={{ color: '#fff', fontSize: '0.9rem', margin: '0.5rem 0' }}>
                              {member.title}
                            </p>
                          )}
                          <Button
                            variant="outline-light"
                            className="m-1"
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faLinkedin} />
                          </Button> 
                          
                           <Button
                            variant="outline-light"
                            className="m-1"
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                          </Button>
                          
                           <Button
                            variant="outline-light"
                            className="m-1"
                            href={member.email}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faEnvelope} />
                          </Button>
                        </Card.Body>
                        <div style={getReflectionStyle()}></div>
                      </Card>
                    </div>
                  ))}
                </div>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

{/* About us */}

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card
              style={getCardStyle(hoveredCard === 0)}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(0)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Body>
                <h3 className='text-center'><strong>About Us</strong></h3><br />
                <p>
                  The mission of <b>Hope Wave No Poverty</b> is to end poverty and provide possibilities for people who are in need. We feel that everyone should have access to the needs of life and have the opportunity to create a better future. Our purpose is based on compassion and empowerment. as an enthusiastic group dedicated to building an environment in which poverty is a thing of the past. Our goal is to provide opportunities for a future free from the bonds of poverty because we firmly believe that every person should have access to the needs of life.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card
              style={getCardStyle(hoveredCard === 1)}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(1)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Body>
                <h5 className='text-center'><strong>Our Vision</strong></h5><br />
                <p>
                  Think about a society in which poverty has faded into the past and has been replaced with prosperous neighborhoods, capable people, and equal opportunity. We envision a world where every individual is empowered to reach their full potential, regardless of their background or circumstance. Our vision is a world where economic equality and human dignity are fundamental principles, and every person has the opportunity to lead a fulfilling and prosperous life.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card
              style={getCardStyle(hoveredCard === 3)}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(3)}
              onTouchEnd={() => setHoveredCard(null)}
            >
              <Card.Body>
                <h5 className='text-center'><strong>Our Approach</strong></h5><br />
                <p>
                  We think it takes a multifaceted strategy to combat poverty. Our work covers a wide range of initiatives, including employment training, healthcare access, education, and more. We want to give individuals the resources they need to create better lives for themselves and their communities through our collaborative initiatives and innovative solutions.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 4)} onMouseEnter={() => setHoveredCard(4)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(4)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Transparency and Accountability</strong></h5><br />
                <p>
                  In all that we do, Hope Wave No Poverty is dedicated to openness and responsibility. We think that all of our stakeholders—donors, partners, and the communities we work with—have a right to understand the impact of their contributions. To maintain openness in our business practices, we frequently offer financial reports, impact assessments, and project updates.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 5)} onMouseEnter={() => setHoveredCard(5)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(5)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Collaboration and Partnerships</strong></h5><br />
                <p>
                  We recognize that the battle against poverty is a team effort. In order to maximize our effect, Hope Wave No Poverty actively pursues collaborations with corporations, government agencies, and other like-minded groups. Together, we can make better use of our resources and abilities to solve the structural issues surrounding poverty.
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12'>
            <Card style={getCardStyle(hoveredCard === 6)} onMouseEnter={() => setHoveredCard(6)} onMouseLeave={() => setHoveredCard(null)} onTouchStart={() => handleTouchStart(6)} onTouchEnd={() => setHoveredCard(null)}>
              <Card.Body>
                <h5 className='text-center'><strong>Get Involved</strong></h5><br />
                <p>
                  We cordially encourage you to join us in this admirable endeavor as we work together to eradicate poverty from the globe. There are several ways for you to support our cause as a person, business, or charitable organization. Look through our "Get Involved" section to find ways to volunteer, donate, and form relationships.
                  <a href='/Login' target="_blank" rel="noopener noreferrer"> Get Involved</a>
                </p>
              </Card.Body>
              <div style={getReflectionStyle()}></div>
            </Card>
          </div>
        </div>

        <div className="row my-4">
          <div className='col-lg-12 d-flex justify-content-center align-items-center'>
           <a href="/Registration" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary">Join us now</Button>{' '}</a>
          </div>
        </div>
      </div>
    </>
  );
}
